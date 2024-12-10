import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';
import { AppointmentService } from './appointments.service';
import { Appointment } from './appointments.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent  extends UnsubscribeOnDestroyAdapter
{


  displayedColumns = [

    'name',
    'email',
    'gender',
    'date',
    'time',




    'actions',
  ];
  exampleDatabase?: AppointmentService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<Appointment>(true, []);
  index?: number;
  id?: number;
  appointment?: Appointment | null;
  sortType = 'multi';
  loadis = false
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public appointmentService: AppointmentService,
    private snackBar: MatSnackBar,
    private router : Router
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('filter', { static: true }) filter?: ElementRef;

  ngOnInit() {
    this.loadData();
  }
  refresh() {
    this.loadData();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource?.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index = this.dataSource?.renderedData.findIndex((d) => d === item);
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      if (index !== undefined) {
        if (this.exampleDatabase) {
          this.exampleDatabase.dataChange.value.splice(index, 1);
        }
        this.refreshTable();
        this.selection = new SelectionModel<Appointment>(true, []);
      }
    });
    this.showNotification(
      'snackbar-danger',
      totalSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  accept(id:any){
    this.loadis = true
    console.log(id);
    this.appointmentService.accept(id).subscribe(res=>{
      this.loadData()
      this.loadis = false
    }, err=>{
      this.loadis = false

    })

  }


  show(data:any){
    console.log(data);
    const url = "doctor/history/"+data.patient.userKy
    this.router.navigateByUrl(url)

  }

  consultation(data:any){
    const url = "doctor/consultation/"+data.patient.userKy
    this.router.navigateByUrl(url)
  }

  consultationDisplay(data:any){
    console.log(data)
    const url = "doctor/consultationDisplay/"+data.patient.userKy
    this.router.navigateByUrl(url)
  }
  careplanDisplay(data:any){
    console.log(data)
    const url = "doctor/careplanDisplay/"+data.patient.userKy
    this.router.navigateByUrl(url)
  }



  private refreshTable() {
    this.paginator?._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    this.exampleDatabase = new AppointmentService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter?.nativeElement, 'keyup').subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter?.nativeElement.value;
    });
  }

  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        Name: x.name,
        Email: x.email,
        Gender: x.gender,
        Date: formatDate(new Date(x.date), 'yyyy-MM-dd', 'en') || '',
        Time: x.time,
        Mobile: x.mobile,
        Doctor: x.doctor,
        Injury: x.injury,
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
export class ExampleDataSource extends DataSource<Appointment> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: any[] = [];
  renderedData: Appointment[] = [];
  constructor(
    public exampleDatabase: AppointmentService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Appointment[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    const idUser = localStorage.getItem('id')
    this.exampleDatabase.getAppointmentsId(idUser);
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((appointment: any) => {
            const searchStr = (
              appointment.name +
              appointment.email +
              appointment.gender +
              appointment.date +
              appointment.doctor +
              appointment.injury +
              appointment.mobile
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
  /** Returns a sorted copy of the database data. */
  sortData(data: Appointment[]): Appointment[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'email':
          [propertyA, propertyB] = [a.email, b.email];
          break;
        // case 'date': [propertyA, propertyB] = [a.date, b.date]; break;
        case 'time':
          [propertyA, propertyB] = [a.time, b.time];
          break;
        case 'mobile':
          [propertyA, propertyB] = [a.mobile, b.mobile];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}

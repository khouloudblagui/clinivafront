import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentService } from '@core/service/appointment.service';
import { TableExportUtil } from '@shared/tableExportUtil';
import { Appointment } from '@core/appointment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'email',
    'gender',
    'date',
    'time',
    'mobile',
    'injury',
    'doctor',
    'patient',
    'status',
    'actions',
  ];
  dataSource: Appointment[] = [];
  originalDataSource: Appointment[] = [];
  filterValue = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter') filterInput!: ElementRef;

  constructor(
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  // Charger tous les rendez-vous
  loadAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (data: Appointment[]) => {
        this.originalDataSource = data;
        this.dataSource = [...this.originalDataSource];
      },
      (error: any) => {
        this.snackBar.open('Failed to load appointments', 'Dismiss', {
          duration: 2000,
        });
      }
    );
  }

  // Filtrer les rendez-vous
  filterAppointments(): void {
    if (this.filterValue.trim()) {
      this.dataSource = this.originalDataSource.filter((appointment) =>
        Object.values(appointment)
          .join(' ')
          .toLowerCase()
          .includes(this.filterValue.toLowerCase())
      );
    } else {
      this.dataSource = [...this.originalDataSource];
    }
  }

  // Exporter les données en Excel
  exportToExcel(): void {
    const exportData = this.dataSource.map((appointment) => ({
      Id: appointment.id,
      Name: appointment.name,
      Email: appointment.email,
      Gender: appointment.gender,
      Date: appointment.date,
      Time: appointment.time,
      Mobile: appointment.mobile,
      Injury: appointment.injury,
      Doctor: appointment.doctor,
      Patient: appointment.patient,
      Status: appointment.status,
    }));
    TableExportUtil.exportToExcel(exportData, 'appointments');
  }

  // Éditer un rendez-vous
  openEditDialog(appointment: Appointment): void {
    this.snackBar.open('Edit functionality is not available at the moment.', 'Dismiss', {
      duration: 2000,
    });
  }


    

  // Supprimer un rendez-vous
  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(
      () => {
        this.snackBar.open('Appointment deleted', 'Dismiss', { duration: 2000 });
        this.loadAppointments();
      },
      (error: any) => {
        this.snackBar.open('Failed to delete appointment', 'Dismiss', {
          duration: 2000,
        });
      }
    );
  }
}

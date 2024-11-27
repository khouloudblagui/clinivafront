import { Component, OnInit } from '@angular/core';

import {  FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CarePlanService } from './careplan.service';
import { ActivatedRoute } from '@angular/router';
import { CarePlan } from './careplan.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-careplan',
  templateUrl: './careplan.component.html',
  styleUrls: ['./careplan.component.scss'],

})
export class CareplanComponent implements OnInit {
  carePlanForm: FormGroup;
  userKy = 0;

  constructor(
    private fb: FormBuilder,
    private careService: CarePlanService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.carePlanForm = this.fb.group({
      phyAss: ['', Validators.required],
      psyAss: ['', Validators.required],
      painAss: ['', Validators.required],
      vital: ['', Validators.required],
      obq1: ['', Validators.required],
      medAdd: ['', Validators.required],
      medProc: ['', Validators.required],
      techCare: ['', Validators.required],
      obq2: ['', Validators.required],
      specGol: ['', Validators.required],
      shortGol: ['', Validators.required],
      longGol: ['', Validators.required],
      obq3: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userKyParam = params.get('id');
      this.userKy = userKyParam ? +userKyParam : 0;

    });
  }



  onCancel() {
    this.carePlanForm.reset();
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


}

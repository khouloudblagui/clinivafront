import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CarePlanService } from 'app/doctor/careplan/careplan.service';
import { CarePlan } from 'app/doctor/careplan/careplan.model';
@Component({
  selector: 'app-careplan-patient',
  templateUrl: './careplan-patient.component.html',
  styleUrls: ['./careplan-patient.component.scss'],
})
export class CareplanPatientComponent {
  carePlanForm: FormGroup;
  userKy = 0;
  careplan: any;
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
      obq3: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userKyParam = params.get('id');
      this.userKy = userKyParam ? +userKyParam : 0;
      this.careService.getCareplansByUserKy(this.userKy).subscribe((res) => {
        console.log(res);
        this.careplan = res;
        this.careplan = this.careplan[0];
        const mockApiResponse = {
          care_ky: null,
          phyAss: this.careplan.phyAss,
          psyAss: this.careplan.psyAss,
          painAss: this.careplan.painAss,
          vital: this.careplan.vital,
          obq1: this.careplan.obq1,
          medAdd: this.careplan.medAdd,
          medProc: this.careplan.medProc,
          techCare: this.careplan.techCare,
          obq2: this.careplan.obq2,
          specGol: this.careplan.specGol,
          shortGol: this.careplan.shortGol,
          longGol: this.careplan.longGol,
          obq3: this.careplan.obq3,
          userKy: this.userKy,
        };

        // Mise à jour partielle du formulaire
        this.carePlanForm.patchValue(mockApiResponse);
      });
    });
  }

  onSubmit() {
    if (this.carePlanForm.valid) {
      const formData = this.carePlanForm.value;
      const carePlan: CarePlan = {
        care_ky: null,
        phyAss: formData.phyAss,
        psyAss: formData.psyAss,
        painAss: formData.painAss,
        vital: formData.vital,
        obq1: formData.obq1,
        medAdd: formData.medAdd,
        medProc: formData.medProc,
        techCare: formData.techCare,
        obq2: formData.obq2,
        specGol: formData.specGol,
        shortGol: formData.shortGol,
        longGol: formData.longGol,
        obq3: formData.obq3,
        userKy: this.userKy,
      };

      this.careService.addCarePlan(carePlan).subscribe(
        (response) => {
          console.log('CarePlan saved successfully', response);
          this.showNotification(
            'snackbar-success',
            'Care Plan added successfully ',
            'top',
            'center'
          );
          this.carePlanForm.reset();
        },
        (error) => {
          this.showNotification(
            'snackbar-error',
            'Error adding careplan ',
            'top',
            'center'
          );
          console.error('Error saving CarePlan', error);
          this.carePlanForm.reset();
        }
      );
    } else {
      this.showNotification(
        'snackbar-warning',
        'Please fill all required fields',
        'top',
        'center'
      );
    }
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

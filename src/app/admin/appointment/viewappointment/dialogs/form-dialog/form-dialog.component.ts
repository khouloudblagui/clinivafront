import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Appointment } from '../../appointment.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';
import { DoctorService } from '@core/service/doctor.service';

export interface DialogData {
  id: number;
  action: string;
  appointment: Appointment;
}

@Component({
  selector: 'app-form-dialog:not(c)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  doctorId:any
  appointment: Appointment;
  doctors:any
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public appointmentService: AppointmentService,
    private fb: UntypedFormBuilder,
    private doctorSerive : DoctorService
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      console.log(data.appointment.date);
      this.dialogTitle = data.appointment.name;
      this.appointment = data.appointment;
    } else {
      this.dialogTitle = 'New Appointment';
      const blank = {} as Appointment;
      this.appointment = new Appointment(blank);
    }


    this.doctorSerive.getAllRealDoctor().subscribe(res=>{
      this.doctors = res
      console.log(res);

    })
  }

  submit() {

    console.log(this.data)
    console.log(this.doctorId)
    this.appointmentService.affectdoctor(this.data.appointment.id , this.doctorId).subscribe(res=>{
      this.dialogRef.close()
    })


  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

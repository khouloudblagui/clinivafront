
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '@core/service/appointment.service';
import { PatientService } from '@core/service/patient.service';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent {
  bookingForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  isDisabled = true;
  id = localStorage.getItem('id')
  patientConnect : any
  constructor(private fb: UntypedFormBuilder ,
    private patientService: PatientService,
    private appointmentService : AppointmentService,
    private router : Router
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],

      gender: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: [''],
      injury: [''],
      dob: ['', [Validators.required]],
      // doctor: ['', [Validators.required]],
      note: [''],
      patientId:[ 0]

    });

    this.patientService.getPatientByUserKy(this.id).subscribe(res=>{
      console.log(res);
      this.patientConnect = res
    })
  }
  onSubmit() {
    this.bookingForm.value.patientId = this.patientConnect.id
    console.log('Form Value', this.bookingForm.value);
    this.appointmentService.createAppointment(this.bookingForm.value).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/patient/appointments/upcoming')
    })
  }

  get f() {
    return this.bookingForm.controls;
  }
}

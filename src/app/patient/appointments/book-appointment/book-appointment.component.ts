
import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '@core/service/appointment.service';
import { PatientService } from '@core/service/patient.service';
import Swal from 'sweetalert2';
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
      date: ['', [Validators.required, this.appointmentDateValidator]],
      time: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: [''],
      injury: [''],
      dob: ['', [Validators.required, this.dateOfBirthValidator]],
      // doctor: ['', [Validators.required]],
      note: [''],
      patientId:[ 0]

    });

    this.patientService.getPatientByUserKy(this.id).subscribe(res=>{
      console.log(res);
      this.patientConnect = res
    })
  }
  // Validation pour empêcher une date de rendez-vous passée
  appointmentDateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore les heures, minutes et secondes
    return selectedDate < today ? { pastDate: true } : null;
  }


  // Validation personnalisée pour empêcher les dates futures
  dateOfBirthValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore les heures, minutes, et secondes
    return selectedDate > today ? { futureDate: true } : null;
  }
  // onSubmit() {
  //   this.bookingForm.value.patientId = this.patientConnect.id
  //   console.log('Form Value', this.bookingForm.value);
  //   this.appointmentService.createAppointment(this.bookingForm.value).subscribe(res=>{
  //     console.log(res)
  //     this.router.navigateByUrl('/patient/history')
  //   })
  // }
  // onSubmit() {
  //   this.bookingForm.value.patientId = this.patientConnect.id;
  //   console.log('Form Value', this.bookingForm.value);

  //   this.appointmentService.createAppointment(this.bookingForm.value).subscribe(res => {
  //     console.log(res);

  //     // Afficher le popup SweetAlert
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Veuillez vérifier le formulaire suivant avant de continuer.',
  //       showConfirmButton: false,
  //       timer: 3000
  //     });

  //     // Redirection après le popup
  //     setTimeout(() => {
  //       this.router.navigateByUrl('/patient/history');
  //     }, 3000); // Attendez la durée du timer avant la redirection
  //   });
  // }
  onSubmit() {
    this.bookingForm.value.patientId = this.patientConnect.id;
    console.log('Form Value', this.bookingForm.value);

    this.appointmentService.createAppointment(this.bookingForm.value).subscribe(res => {
      console.log(res);

      // Afficher le popup SweetAlert au milieu avec une icône d'avertissement
      Swal.fire({
        icon: 'warning', // Icône importante
        title: 'Formulaire important',
        text: 'Veuillez vérifier le formulaire avant de continuer.',
        showConfirmButton: false, // Désactiver le bouton de confirmation
        timer: 3000, // Temps d'affichage (en millisecondes)
        timerProgressBar: true, // Ajouter une barre de progression pour le timer
      }).then(() => {
        // Redirection après la fermeture automatique
        this.router.navigateByUrl('/patient/history');
      });
    });
  }





  get f() {
    return this.bookingForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { HistoryService } from '../services/history.service';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { UserHistory } from './user-history.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyForm: UntypedFormGroup;
  patientId!: number;
  userHistory:UserHistory = {} as UserHistory;
  id = localStorage.getItem("id")
  //router: any;
  constructor(
    private fb: UntypedFormBuilder,
    private historyService: HistoryService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.historyForm = this.fb.group({
      q1: ['', Validators.required],
      q2: [''],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: [''],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      medDetails: [''],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      allDetails: [''],
      q12: ['', Validators.required],
      surDetails: [''],
      q13: ['', Validators.required],
      q14: ['', Validators.required],
      q15: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.patientId = currentUser.id;
    this.getExistHistory()
  }

  getExistHistory(){
    this.historyService.getHistoryByPatientId(this.id).subscribe(res=>{
      this.userHistory = res
      console.log(res);
      if(this.userHistory){
        this.historyForm.patchValue({
          q1: this.userHistory.q1,
          q2: this.userHistory.q2,
          q3: this.userHistory.q3,
          q4: this.userHistory.q4,
          q5: this.userHistory.q5,
          q6: this.userHistory.q6,
          q7: this.userHistory.q7,
          medDetails: this.userHistory.med_details, // Correspondance avec le nom utilisé dans l'objet
          q8: this.userHistory.q8,
          q9: this.userHistory.q9,
          q10: this.userHistory.q10,
          q11: this.userHistory.q11,
          allDetails: this.userHistory.all_details, // Correspondance avec le nom utilisé dans l'objet
          q12: this.userHistory.q12,
          surDetails: this.userHistory.sur_details, // Correspondance avec le nom utilisé dans l'objet
          q13: this.userHistory.q13,
          q14: this.userHistory.q14,
          q15: this.userHistory.q15,
        });

      }
    })
  }

  // onSubmit(): void {

  //   if (this.historyForm.valid) {
  //     const formData = this.historyForm.value;

  //     const newHistory: UserHistory = {
  //       his_ky: 0,
  //       patient: this.patientId,
  //       q1: formData.q1,
  //       q2: formData.q2,
  //       q3: formData.q3,
  //       q4: formData.q4,
  //       q5: formData.q5,
  //       q6: formData.q6,
  //       q7: formData.q7,
  //       med_details: formData.med_details,
  //       q8: formData.q8,
  //       q9: formData.q9,
  //       q10: formData.q10,
  //       q11: formData.q11,
  //       all_details: formData.all_details,
  //       q12: formData.q12,
  //       sur_details: formData.sur_details,
  //       q13: formData.q13,
  //       q14: formData.q14,
  //       q15: formData.q15,
  //       patientId : this.id
  //     };

  //     console.log('Sending history data:', newHistory); // Debugging
  //     this.historyService.addHistory(newHistory).subscribe({
  //       next: (response) => {
  //         console.log('History added successfully:', response);
  //         this.showNotification(
  //           'snackbar-success',
  //           'History added successfully.',
  //           'top',
  //           'center'
  //         );
  //       },
  //       error: (error) => {
  //         console.error('Error adding history:', error);
  //         this.showNotification(
  //           'snackbar-error',
  //           'Failed to add history.',
  //           'top',
  //           'center'
  //         );
  //       },
  //     });
  //   } else {
  //     this.showNotification(
  //       'snackbar-warning',
  //       'Please fill all required fields',
  //       'top',
  //       'center'
  //     );
  //   }
  // }

  // private showNotification(
  //   type: string,
  //   message: string,
  //   p0: string,
  //   p1: string
  // ) {
  //   this.snackBar.open(message, 'Close', { duration: 3000 });
  // }
  onSubmit(): void {
    if (this.historyForm.valid) {
      const formData = this.historyForm.value;

      const newHistory: UserHistory = {
        his_ky: 0,
        patient: this.patientId,
        q1: formData.q1,
        q2: formData.q2,
        q3: formData.q3,
        q4: formData.q4,
        q5: formData.q5,
        q6: formData.q6,
        q7: formData.q7,
        med_details: formData.med_details,
        q8: formData.q8,
        q9: formData.q9,
        q10: formData.q10,
        q11: formData.q11,
        all_details: formData.all_details,
        q12: formData.q12,
        sur_details: formData.sur_details,
        q13: formData.q13,
        q14: formData.q14,
        q15: formData.q15,
        patientId: this.id,
      };

      console.log('Sending history data:', newHistory); // Debugging

      this.historyService.addHistory(newHistory).subscribe({
        next: (response) => {
          console.log('History added successfully:', response);

          // Afficher une notification de succès
          this.showNotification(
            'snackbar-success',
            'History added successfully.',
            'top',
            'center'
          );

          // Afficher le SweetAlert avec une redirection
          Swal.fire({
            icon: 'success',
            title: 'Données sauvegardées avec succès !',
            showConfirmButton: false,
            timer: 3000, // Temps d'affichage (2 secondes)
            timerProgressBar: true,
          }).then(() => {
            // Redirection vers /patient/appointments/upcoming après 2 secondes
            this.router.navigateByUrl('/patient/appointments/upcoming')
          });
        },
        error: (error) => {
          console.error('Error adding history:', error);

          // Affiche une notification d'erreur
          this.showNotification(
            'snackbar-error',
            'Failed to add history.',
            'top',
            'center'
          );
        },
      });
    } else {
      // Afficher un message d'avertissement si le formulaire est invalide
      this.showNotification(
        'snackbar-warning',
        'Please fill all required fields',
        'top',
        'center'
      );
    }
  }

  private showNotification(type: string, message: string, p0: string, p1: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }

  /**
   * Réinitialise le formulaire
   */
  onCancel(): void {
    this.historyForm.reset();
  }
}


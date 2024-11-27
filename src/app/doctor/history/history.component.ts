import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { UserHistory } from './user-history.model';
import { HistoryService } from 'app/patient/services/history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyForm: UntypedFormGroup;
  patientId!: number;
  userHistory:UserHistory = {} as UserHistory;
  id = this.route.snapshot.params['id']
  constructor(
    private fb: UntypedFormBuilder,
    private historyService: HistoryService,
    private snackBar: MatSnackBar,
    private route : ActivatedRoute
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
        patientId : this.id
      };

      console.log('Sending history data:', newHistory); // Debugging
      this.historyService.addHistory(newHistory).subscribe({
        next: (response) => {
          console.log('History added successfully:', response);
          this.showNotification(
            'snackbar-success',
            'History added successfully.',
            'top',
            'center'
          );
        },
        error: (error) => {
          console.error('Error adding history:', error);
          this.showNotification(
            'snackbar-error',
            'Failed to add history.',
            'top',
            'center'
          );
        },
      });
    } else {
      this.showNotification(
        'snackbar-warning',
        'Please fill all required fields',
        'top',
        'center'
      );
    }
  }

  private showNotification(
    type: string,
    message: string,
    p0: string,
    p1: string
  ) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
  /**
   * Réinitialise le formulaire
   */
  onCancel(): void {
    this.historyForm.reset();
  }
}

/*historyForm: UntypedFormGroup;
  patientId!: number | null; // Peut être null si l'utilisateur est non authentifié

  constructor(
    private fb: UntypedFormBuilder,
    private historyService: HistoryService,
    private snackBar: MatSnackBar
  ) {
    // Initialisation du formulaire avec validation
    this.historyForm = this.fb.group({
      q1: ['', [Validators.required]],
      q2: [''], // Facultatif
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]],
      q5: [''], // Facultatif
      q6: ['', [Validators.required]],
      q7: ['', [Validators.required]],
      med_details: [''], // Facultatif
      q8: ['', [Validators.required]],
      q9: ['', [Validators.required]],
      q10: ['', [Validators.required]],
      q11: ['', [Validators.required]],
      all_details: [''], // Facultatif
      q12: ['', [Validators.required]],
      sur_details: [''], // Facultatif
      q13: ['', [Validators.required]],
      q14: ['', [Validators.required]],
      q15: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getPatientIdFromLocalStorage();
  }

  /**
   * Récupère l'ID du patient depuis localStorage

  private getPatientIdFromLocalStorage(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (currentUser && currentUser.user_ky) {
      this.patientId = currentUser.user_ky;
      console.log('Patient ID retrieved:', this.patientId);
    } else {
      this.patientId = null;
      console.error('Error: Missing patient ID in currentUser object.');
      this.showNotification('snackbar-error', 'User not logged in or invalid session.', 'top', 'center');
    }
  }

  /**
   * Soumet le formulaire après validation

  onSubmit(): void {
    if (!this.patientId) {
      this.showNotification('snackbar-error', 'Patient ID is missing. Cannot submit history.', 'top', 'center');
      return;
    }

    if (this.historyForm.valid) {
      this.checkHistoryExists();
    } else {
      this.showNotification('snackbar-warning', 'Please fill all required fields.', 'top', 'center');
    }
  }

  /**
   * Vérifie si un historique existe pour le patient

  private checkHistoryExists(): void {
    this.historyService.historyExistsForUser(this.patientId!).subscribe(
      exists => {
        if (exists) {
          this.showNotification('snackbar-error', 'You cannot add a new history. You already have one.', 'top', 'center');
        } else {
          this.addHistory();
        }
      },
      error => {
        console.error('Error checking history existence:', error);
        this.showNotification('snackbar-error', 'An error occurred while checking history existence.', 'top', 'center');
      }
    );
  }

  /**
   * Ajoute un nouvel historique

  private addHistory(): void {
    const formData = this.historyForm.value;
    const newHistory: UserHistory = {
      his_ky: null,
      q1: formData.q1,
      q2: formData.q2 || null,
      q3: formData.q3,
      q4: formData.q4,
      q5: formData.q5 || null,
      q6: formData.q6,
      q7: formData.q7,
      med_details: formData.med_details || null,
      q8: formData.q8,
      q9: formData.q9,
      q10: formData.q10,
      q11: formData.q11,
      all_details: formData.all_details || null,
      q12: formData.q12,
      sur_details: formData.sur_details || null,
      q13: formData.q13,
      q14: formData.q14,
      q15: formData.q15,
      patientId: this.patientId!
    };

    this.historyService.addHistory(newHistory).subscribe(
      response => {
        console.log('History added successfully:', response);
        this.showNotification('snackbar-success', 'History added successfully.', 'top', 'center');
        this.historyForm.reset();
      },
      error => {
        console.error('Error adding history:', error);
        this.showNotification('snackbar-error', 'Failed to add history.', 'top', 'center');
      }
    );
  }

  /**
   * Affiche une notification avec MatSnackBar

  private showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ): void {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  /**
   * Réinitialise le formulaire

  onCancel(): void {
    this.historyForm.reset();
  }
}


















  /*
  historyForm: UntypedFormGroup;
  patientId!: number;

  constructor(
    private fb: UntypedFormBuilder,
    private hisservice: HistoryService,
    private snackBar: MatSnackBar
  ) {
    this.historyForm = this.fb.group({
      q1: ['', [Validators.required]],
      q2: [''], // Facultatif
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]],
      q5: [''], // Facultatif
      q6: ['', [Validators.required]],
      q7: ['', [Validators.required]],
      med_details: [''], // Facultatif
      q8: ['', [Validators.required]],
      q9: ['', [Validators.required]],
      q10: ['', [Validators.required]],
      q11: ['', [Validators.required]],
      all_details: [''], // Facultatif
      q12: ['', [Validators.required]],
      sur_details: [''], // Facultatif
      q13: ['', [Validators.required]],
      q14: ['', [Validators.required]],
      q15: ['', [Validators.required]],
     /* patientId: ['', [Validators.required]] // Obligatoire
    });
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.patientId = currentUser.user_ky;
    console.log('le userKy est:',this.patientId)
  }

  onSubmit(): void {
    if (this.historyForm.valid) {
      this.hisservice.historyExistsForUser(this.patientId).subscribe(
        exists => {
          if (exists) {
            this.showNotification('snackbar-error', 'You cannot add a new history. You already have one.', 'top', 'center');
          } else {
            this.addHistory();
          }
        },
        error => {
          console.error('Error checking history existence:', error);
        }
      );
    } else {
      this.showNotification('snackbar-warning', 'Please fill all required fields', 'top', 'center');
  }}

  addHistory(): void {
    const formData = this.historyForm.value;
    const newHis: UserHistory = {
      his_ky: null,
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
      patientId: this.patientId
    };


    console.log('New History Object:', newHis);
    this.hisservice.addHistory(newHis).subscribe(
      response => {
        console.log('History added successfully:', response);
        this.showNotification('snackbar-success', 'History added successfully.', 'top', 'center');
        this.historyForm.reset();
      },
      error => {
        console.error('Error adding history:', error);
        this.showNotification('snackbar-error', 'Failed to add history.', 'top', 'center');
      }
    );
  }


  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ): void {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  onCancel(): void {
    this.historyForm.reset();
  }
}*/

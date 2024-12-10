import { surgicalProcedureService } from './../../admin/Surgical procedure/allsurgicalprocedure/surgicalProcedure.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from './consultation.service';
import { MedicationResponse } from 'app/admin/medication/MedicationResponse';
import { Vaccination } from 'app/admin/vaccination/model/vaccination';
import { BioAnalysis } from 'app/admin/bioanalysis/model/bioanalysis';
import { MedicationService } from 'app/admin/medication/allstaff/medication.service';
import { BioanalysisService } from 'app/admin/bioanalysis/service/bioanalysis.service';
import { VaccinationService } from 'app/admin/vaccination/services/vaccination.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Consultation } from './consultation.model';
import { surgicalprocedure } from 'app/admin/Surgical procedure/allsurgicalprocedure/surgicalprocedure.model';
import { PatientService } from '@core/service/patient.service';



@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],

})
export class ConsultationComponent implements OnInit {
  userKy = 0;
  consultationForm: FormGroup;
  medicationOptions: MedicationResponse[] = [];
  vaccinationOptions: Vaccination[] = [];
  analysisOptions: BioAnalysis[] = [];
  surgicalProcedureOptions: surgicalprocedure[] = [];


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private medicationService: MedicationService,
    private analysisService: BioanalysisService,
    private vaccinationService: VaccinationService,
    private snackBar: MatSnackBar,
    private surgicalProcedureService : surgicalProcedureService

  ) {
    this.consultationForm = this.fb.group({
      doctorName: ['',Validators.required],
      descCon: ['',Validators.required],
      medications: [[]],
      vaccinations: [[]],
      analyses: [[]],
      descPre: [''],
      surgicalProcedures: [[]],
      descSur: [''],
      comment: ['']
    });
  }
  name : any = ""
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userKyParam = params.get('id');
      this.userKy = userKyParam ? +userKyParam : 0;
    });

    this.fetchMedications();
    this.fetchVaccinations();
    this.fetchAnalyses();
    this.fetchSurgicalProcedures();
  }

  fetchMedications() {
    this.medicationService.getAllMedications().subscribe(res => {
      this.medicationOptions = res;
    });
  }

  fetchVaccinations() {
    this.vaccinationService.getVaccination().subscribe(res => {
      this.vaccinationOptions = res;
    });
  }

  fetchAnalyses() {
    this.analysisService.getAllBioanalysis().subscribe(res => {
      this.analysisOptions = res;
    });
  }

  fetchSurgicalProcedures() {
    this.surgicalProcedureService.getAllsurgicalprocedure().subscribe((res:any) => {
      console.log("surgicalProcedureService" , res);

      this.surgicalProcedureOptions = res;
    });
  }



  onSubmit(): void {
      const formValues = this.consultationForm.value;
      console.log(formValues);
      const consultation: Consultation = {
        con_ky: null,
        doctorName: formValues.doctorName,
        descCon: formValues.descCon,
        medication: formValues.medications.map((item: { medicationName: any; }) => item.medicationName).join(' '),
        vaccination: formValues.vaccinations.map((vac: { vaccineLabel: any }) => vac.vaccineLabel).join(' '),
        analyses: formValues.analyses.map((item: { biologicalAnalysisName: any }) => item.biologicalAnalysisName).join(' '),
        descPre: formValues.descPre,
        surgical: formValues.surgicalProcedures.map((item: { cptCode: any }) => item.cptCode).join(' '),
        descSur: formValues.descSur,
        comment: formValues.comment,
        userKy: this.userKy,

      };

       console.log("bbbbbbbbbbbbbbbbbbbbbbbbb", consultation);

      this.consultationService.addConsultation(consultation).subscribe(response => {
        console.log('Consultation saved successfully', response);
        this.showNotification('snackbar-success', 'Consultation added successfully ', 'top', 'center');
        this.consultationForm.reset();
      }, error => {
        alert('Error saving consultation')
        this.showNotification('snackbar-error', 'Error adding consultation', 'top', 'center');
        this.consultationForm.reset();
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbb", this.consultationService);


      });
    }

    onCancel(): void {
      this.consultationForm.reset();
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

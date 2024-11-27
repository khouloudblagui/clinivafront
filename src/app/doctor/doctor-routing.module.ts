import { ConsultationDisplayComponent } from './consultationDisplay/consultationDisplay.component';
import { Page404Component } from './../authentication/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { HistoryComponent } from './history/history.component';
import { CareplanComponent } from './careplan/careplan.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'consultation/:id',
    component: ConsultationComponent,
  },
  {
    path: 'consultationDisplay/:id',
    component: ConsultationDisplayComponent,
  },
  {
    path: 'careplanDisplay/:id',
    component: CareplanComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'history/:id',
    component: HistoryComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}

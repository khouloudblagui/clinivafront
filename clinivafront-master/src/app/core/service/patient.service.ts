import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '@core/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8087/api/v1/doctors/patients'; // Base URL of your API

  constructor(private http: HttpClient) {}

  // Get all patients
  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  // Create a new patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}`, patient);
  }

  // Get a patient by userKy
  getPatientByUserKy(userKy: any): Observable<Patient | null> {
    return this.http.get<Patient | null>(`${this.apiUrl}/${userKy}`);
  }

  // Update a patient
  updatePatient(patientId: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patientId}`, patient);
  }

  // Delete a patient
  deletePatient(patientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${patientId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '@core/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = `http://localhost:8087/api/doctor/appointments`;

  constructor(private http: HttpClient) {}

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/`);
  }

  getAllAppointmentsDashboard() {
    return this.http.get(`${this.apiUrl}/last-six-months`);
  }
  getStatusCountDashboard() {
    return this.http.get(`${this.apiUrl}/status-count`);
  }


  getHistoryDashboard() {
    return this.http.get(`http://localhost:8087/api/doctor/histories/stats`);
  }
  // Get an appointment by ID
  getAppointmentById(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${appointmentId}`);
  }

  // Create a new appointment
  createAppointment(
    appointmentDTO: Partial<Appointment>
  ): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}/`, appointmentDTO);
  }

  // Update an existing appointment
  updateAppointment(
    appointmentId: number,
    updatedAppointment: Partial<Appointment>
  ): Observable<Appointment> {
    return this.http.put<Appointment>(
      `${this.apiUrl}/${appointmentId}`,
      updatedAppointment
    );
  }

  // Delete an appointment
  deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${appointmentId}`);
  }

  cancelAppointment(appointmentId: number): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/cancel/${appointmentId}`);
  }

  // Get appointments by doctor ID
  getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/doctor/${doctorId}`);
  }

  // Get appointments by patient ID
  getAppointmentsByPatient(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/patient/${patientId}`);
  }

  // Get appointments by status
  getAppointmentsByStatus(status: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/status/${status}`);
  }
}

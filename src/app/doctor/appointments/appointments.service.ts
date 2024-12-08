import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Appointment } from '@core/appointment';
@Injectable()
export class AppointmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'http://localhost:8087/api/doctor/appointments/';
  isTblLoading = true;
  dataChange: BehaviorSubject<Appointment[]> = new BehaviorSubject<
    Appointment[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData!: Appointment;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Appointment[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllAppointments(): void {
    this.subs.sink = this.httpClient
      .get<Appointment[]>(this.API_URL)
      .subscribe({
        next: (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + ' ' + error.message);
        },
      });
  }

  getAppointmentsId(id:unknown) {
    this.subs.sink = this.httpClient
      .get<Appointment[]>(`${this.API_URL}doctor-userKy/${id}`)
      .subscribe({
        next: (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + ' ' + error.message);
        },
      });
  }
  getAppointmentsForDoctor(doctorId: number): void {
    this.isTblLoading = true; // Marquer que le tableau est en cours de chargement

    this.subs.sink = this.httpClient.get<Appointment[]>(`${this.API_URL}${doctorId}`).subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data); // Mettre à jour les rendez-vous dans le tableau
      },
      error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      },
    });
  }
  addAppointment(appointment: Appointment): void {
    this.dialogData = appointment;

    // this.httpClient.post(this.API_URL, appointment)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = appointment;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateAppointment(appointment: Appointment): void {
    this.dialogData = appointment;

    // this.httpClient.put(this.API_URL + appointment.id, appointment)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = appointment;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteAppointment(id: number): void {
    console.log(id);

    this.httpClient.delete(this.API_URL + id)
        .subscribe({
          next: (data) => {
            console.log(id);
          },
          error: (error: HttpErrorResponse) => {
             // error code here
          },
        });
  }
  affectdoctor(id: number , idDoc : any) {
    console.log(id);

    return this.httpClient.get(`${this.API_URL}affectdoctor/${id}/${idDoc}`)

  }
  accept(id: number ) {
    console.log(id);

    return this.httpClient.get(`${this.API_URL}accept/${id}`)

  }
}

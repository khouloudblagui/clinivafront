import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation } from './consultation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  isTblLoading = true;
  private apiServerUrl = 'http://localhost:8087/consultation';
  constructor(private http:HttpClient) { }

  addConsultation(model:Consultation): Observable<Consultation>{
    return this.http.post<Consultation>(this.apiServerUrl+"/add-consultation",model);
  }

  getAllConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.apiServerUrl+"/all-consultation");
  }

  getConsultationsByUserKy(userKy: number): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiServerUrl}/user-consultation/${userKy}`);
  }
}

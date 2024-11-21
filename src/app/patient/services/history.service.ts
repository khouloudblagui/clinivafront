import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserHistory } from '../history/user-history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiUrl = 'http://localhost:8087/api/doctor/histories';

  constructor(private http: HttpClient) {}

  addHistory(history: UserHistory): Observable<UserHistory> {
    return this.http.post<UserHistory>(`${this.apiUrl}/`, history);
  }

  getHistoryByPatientId(patientId: number): Observable<UserHistory> {
    return this.http.get<UserHistory>(`${this.apiUrl}/${patientId}`);
  }

  getAllHistories(): Observable<UserHistory[]> {
    return this.http.get<UserHistory[]>(`${this.apiUrl}/`);
  }

  deleteHistory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}











/*export class HistoryService {

  isTblLoading = true;
  private apiServerUrl = 'http://localhost:8087/history';
  constructor(private http:HttpClient) { }


  addHistory(model: UserHistory): Observable<UserHistory> {
    return this.http.post<UserHistory>(`${this.apiServerUrl}/add-history`, model);
  }

  // Vérifie si un historique existe pour un utilisateur donné
  historyExistsForUser(userKy: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiServerUrl}/check-history/${userKy}`);
  }

  // Récupère tous les historiques
  getAllHis(): Observable<UserHistory[]> {
    return this.http.get<UserHistory[]>(`${this.apiServerUrl}/all-history`);
  }

  // Récupère l'historique par l'identifiant utilisateur
  getHistoryByUserky(userKy: number): Observable<UserHistory> {
    return this.http.get<UserHistory>(`${this.apiServerUrl}/user-history/${userKy}`);
  }
}*/

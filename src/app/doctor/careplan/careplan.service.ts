import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarePlan } from './careplan.model';

@Injectable({
  providedIn: 'root'
})
export class CarePlanService {
  isTblLoading = true;
  private apiServerUrl = 'http://localhost:8087/careplan';
  constructor(private http:HttpClient) { }


  addCarePlan(model: CarePlan): Observable<any>{
    return this.http.post(this.apiServerUrl+"/add-careplan",model);
  }
  getCareplansByUserKy(userKy: number): Observable<CarePlan[]> {
    return this.http.get<CarePlan[]>(`${this.apiServerUrl}/user-careplan/${userKy}`);
  }

}

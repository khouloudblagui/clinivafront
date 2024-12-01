import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private ApiUrl = 'http://localhost:8087/api/dialogflow'; // URL du backend

  constructor(private http: HttpClient) {}

  // Envoyer un message au backend
  sendMessage(userMessage: string): Observable<any> {
    const requestBody = { message: userMessage };
    return this.http.post<any>(this.ApiUrl, requestBody);
  }
}

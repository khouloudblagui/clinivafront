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
  sendMessage(userMessage: string, intentName: string): Observable<any> {
    const parameters: { [key: string]: any } = {}; // Déclaration explicite de l'objet indexable

    // Ajouter des paramètres dynamiques en fonction de l'intention
    if (intentName === 'RecommanderMedecinIntent') {
      parameters['symptome'] = [userMessage];
    } else if (intentName === 'InfoMedicamentIntent') {
      parameters['medicament'] = userMessage;
    } else if (intentName === 'IdentifierAllergieIntent') {
      parameters['allergie'] = userMessage;
    } else if (intentName === 'PlanifierRendezVousIntent') {
      // Supposons que l'utilisateur mentionne une spécialité et une date
      // Extraction d'une date et spécialité (vous pouvez affiner selon vos besoins)
      const dateTimeMatch = userMessage.match(/(\d{1,2}\/\d{1,2}\/\d{4})/); // Exemple : "10/12/2024"
      const specialiteMatch = userMessage.match(/(médecin|pédiatre|dentiste|cardiologue)/i); // Exemple de spécialité

      parameters['date-time'] = dateTimeMatch ? dateTimeMatch[0] : 'Non précisé';
      parameters['specialite'] = specialiteMatch ? specialiteMatch[0] : 'Non précisé';
    } else if (intentName === 'InfoVaccinIntent') {
      parameters['vaccin'] = userMessage; // Utilisation de l'intention InfoVaccinIntent
    } else if (intentName === 'ConseilsSanteIntent') {
      parameters['conseils'] = userMessage; // Pour fournir des conseils de santé
    }

    const requestBody = {
      queryResult: {
        intent: {
          displayName: intentName,
        },
        parameters: parameters, // Utilisation des paramètres dynamiques
      },
    };

    // Envoie de la requête HTTP POST au backend
    return this.http.post<any>(this.ApiUrl, requestBody);
  }
}

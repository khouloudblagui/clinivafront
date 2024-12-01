import { Component } from '@angular/core';
import { ChatbotService } from 'app/services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  isOpen = false; // État du widget (ouvert/fermé)
  messages: { sender: string, content: string }[] = []; // Messages échangés
  userInput = ''; // Message de l'utilisateur

  constructor(private chatbotService: ChatbotService) {}

  // Ouvrir/fermer le widget
  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  // Envoyer un message
  sendMessage(): void {
    if (this.userInput.trim()) {
      // Ajouter le message de l'utilisateur
      this.messages.push({ sender: 'user', content: this.userInput });

      // Envoyer au backend via le service
      this.chatbotService.sendMessage(this.userInput).subscribe(
        (response) => {
          const botResponse = response.fulfillmentMessages[0].text.text[0]; // Réponse du bot
          this.messages.push({ sender: 'bot', content: botResponse });
        },
        (error) => {
          this.messages.push({ sender: 'bot', content: 'Erreur : Impossible de se connecter au serveur.' });
          console.error(error);
        }
      );

      // Réinitialiser l'entrée utilisateur
      this.userInput = '';
    }
  }
}



export interface Appointment {
  id: number;
  name: string;           // Utilisation du champ 'name' dans le code
  email: string;          // Email du patient (présent dans vos données)
  gender: string;         // Sexe du patient (présent dans vos données)
  date: string;           // Date du rendez-vous (au format ISO 8601)
  status?: string;        // Statut du rendez-vous (optionnel, comme 'CONFIRMED', 'PENDING', etc.)
}





















// export interface Appointment {
//   id: number;
//   title: string;
//   startDate: string; // Format ISO 8601
//   endDate: string;   // Format ISO 8601
//   details?: string;  // Informations supplémentaires sur le rendez-vous
// }
// export class Appointment {
//   id: number;
//   name: string;
//   email: string;
//   gender: string;
//   date: string;
//   time: string;
//   mobile: string;
//   injury: string;
//   doctor: number;
//   patient: number;
//   appointmentDate: string;
//   status: string;

//   constructor(appointment: Appointment) {
//     this.id = appointment.id;
//     this.name = appointment.name;
//     this.email = appointment.email;
//     this.gender = appointment.gender;
//     this.date = appointment.date;
//     this.time = appointment.time;
//     this.mobile = appointment.mobile;
//     this.injury = appointment.injury;
//     this.doctor = appointment.doctor;
//     this.patient = appointment.patient;
//     this.appointmentDate = appointment.appointmentDate;
//     this.status = appointment.status;
//   }
// }


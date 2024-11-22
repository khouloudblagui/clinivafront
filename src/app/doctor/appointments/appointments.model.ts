export class Appointment {
  id: number;
  name: string;
  email: string;
  gender: string;
  date: string;
  time: string;
  mobile: string;
  injury: string;
  doctor: number;
  patient: number;
  appointmentDate: string;
  status: string;

  constructor(appointment: Appointment) {
    this.id = appointment.id;
    this.name = appointment.name;
    this.email = appointment.email;
    this.gender = appointment.gender;
    this.date = appointment.date;
    this.time = appointment.time;
    this.mobile = appointment.mobile;
    this.injury = appointment.injury;
    this.doctor = appointment.doctor;
    this.patient = appointment.patient;
    this.appointmentDate = appointment.appointmentDate;
    this.status = appointment.status;
  }
}

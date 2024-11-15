export interface Appointment {
  id?: number;
  name: string;
  email?: string;
  gender?: string;
  date: string;
  time?: string;
  mobile?: string;
  injury?: string;
  doctorId: number;
  patientId: number;
  appointmentDate: string;
  status: string;
}

import { Consultation } from "../consultation/consultation.model";

export interface MedicalRecord {
  record_ky: any;
  History: History;
  Consultations:Consultation[];
  user_ky: number;

}

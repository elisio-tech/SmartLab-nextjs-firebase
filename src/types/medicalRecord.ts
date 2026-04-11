import { Timestamp } from "firebase/firestore";

export type MedicalRecord = {
  patientId: string;
  patientName: string;
  notes: string;
  createdAt: Timestamp;
};

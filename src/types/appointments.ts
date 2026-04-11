export type Appointment = {
  id?: string;
  patientId: string;
  doctorId: string;
  date: Date;
  status: "pending" | "done" | "canceled";
};

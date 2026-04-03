import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { MedicalRecord } from "../types/medicalRecord";

const recordRef = collection(db, "records");

export async function getRecords(): Promise<MedicalRecord[]> {
  const snapshot = await getDocs(recordRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<MedicalRecord, "id">),
  }));
}

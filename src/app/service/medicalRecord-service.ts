import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
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




export async function deleteRecord(recordID: string) {
  const docRef = doc(db, "records", recordID);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Registros nao encontrados");
  }

  await deleteDoc(docRef);
}

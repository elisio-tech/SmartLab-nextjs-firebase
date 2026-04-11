import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Patient } from "../types/patient";

const pacientsRef = collection(db, "patients");

export async function getPatients(): Promise<Patient[]> {
  const snapshot = await getDocs(pacientsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Patient, "id">),
  }));
}

export async function createPatient(data: Omit<Patient, "id" | "createdAt">) {
  const docRef = await addDoc(pacientsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function updatePatient(id: string, data: Partial<Patient>) {
  const docRef = doc(db, "patients", id);
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
}

export async function deletePatient(id: string) {
  const docRef = doc(db, "patients", id);
  await deleteDoc(docRef);
}

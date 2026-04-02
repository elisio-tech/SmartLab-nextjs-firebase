import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase"; 
import { Patient } from "../types/patient";

const pacientsRef = collection(db, "smartlab-db")

export async function getPatients(): Promise<Patient[]> {
    const snapshot = await getDocs(pacientsRef);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Patient, "id">)
    }));
}

export async function createPatient(
  data: Omit<Patient, "id" | "createdAt">
) {
  const docRef = await addDoc(pacientsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}


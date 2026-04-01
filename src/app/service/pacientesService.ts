import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase"; 
import { Patient } from "../types/patient";

const pacientsRef = collection(db, "patients")

export async function getPatients() {
    const snapshot = await getDocs(pacientsRef);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
}

export async function createPatient(
  data: Omit<Patient, "id" | "createdAt">
) {
  const docRef = await addDoc(pacientsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });

  return { id: docRef.id, ...data };
}


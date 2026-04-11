import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { User } from "../types/user";
import { Appointment } from "../types/appointments";

const userRef = collection(db, "appointments");

export async function getAppointments(): Promise<Appointment[]> {
  const snapshot = await getDocs(userRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Appointment, "id">),
  }));
}

export async function createAppointment(
  data: Omit<Appointment, "id" | "createdAt">,
) {
  const docRef = await addDoc(userRef, {
    ...data,
    updateAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getAppointmentByID(
  uid: string,
): Promise<Appointment | null> {
  const docRef = doc(db, "appointments", uid);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Nenhum agendamento encontrado");
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Appointment, "id">),
  };
}

export async function updateAppointment(id: string, data: Partial<User>) {
  const docRef = doc(db, "appointment", id);
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
}

export async function deleteAppointment(id: string): Promise<void> {
  const docRef = doc(db, "appointment", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Nenhum agendamento encontrado!");
  }

  await deleteDoc(docRef);
}

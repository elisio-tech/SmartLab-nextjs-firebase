import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { User } from "../types/user";
const userRef = collection(db, "users");

export async function getUsers(): Promise<User[]> {
  const snapshot = await getDocs(userRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<User, "id">),
  }));
}

export async function createUser(
  uid: string,
  data: Omit<User, "id" | "createdAt">,
) {
  const docRef = doc(db, "users", uid);

  await setDoc(docRef, {
    ...data,
    createdAt: serverTimestamp(),
  });

  return uid;
}

export async function getUserByID(uid: string): Promise<User | null> {
  const docRef = doc(db, "users", uid);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Usuario nao existe!");
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<User, "id">),
  };
}

export async function updateUser(id: string, data: Partial<User>) {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
}

export async function deleteUser(id: string): Promise<void> {
  const docRef = doc(db, "users", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Usario nao existe!");
  }

  await deleteDoc(docRef);
}

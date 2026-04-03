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
import { db } from "../lib/firebase";
import { User } from "../types/user";

const userRef = collection(db, "users");

export async function getUsers(): Promise<User[]> {
  const snapshot = await getDocs(userRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<User, "id">),
  }));
}

export async function createUser(data: Omit<User, "id" | "createdAt">) {
  const docRef = await addDoc(userRef, {
    ...data,
    updateAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getUserByID(uid: string): Promise<User | null> {
  const docRef = doc(db, "users", uid);
  const snapshot = await getDoc(docRef);
  
  if (!snapshot.exists()) {
    return null;
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

export async function deleteUser(id: string) {
  const docRef = doc(db, "users", id);
  await deleteDoc(docRef);
}

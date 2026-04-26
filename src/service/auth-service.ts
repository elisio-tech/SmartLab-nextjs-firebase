import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createUser } from "./user-service";

export async function register(name: string, email: string, password: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(cred.user, {
    displayName: name,
  });

  await createUser(cred.user.uid, {
    name,
    email,
    role: "ADMIN",
    isActive: true,
  });

  return cred.user;
}

export async function login(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
  return await signOut(auth);
}

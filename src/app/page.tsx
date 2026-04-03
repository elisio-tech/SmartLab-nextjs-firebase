"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useDeletePatient,
  useGetPatients,
  useUpdatePatient,
} from "./hooks/usePatients";
import { useCreateUser, useGetUsers, useUpdateUser } from "./hooks/useUser";

export default function Page() {
  const { user, loading } = useAuth();
  //const { patients, reload } = useGetPatients();
  // const { remove } = useDeletePatient(reload);
  //const { update } = useUpdatePatient(reload);
  const { users, reload } = useGetUsers();
  const { update } = useUpdateUser(reload);
  const { create } = useCreateUser(reload);
  const

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  const handleEdit = async (id: string) => {
    await 
  };

  return (
    <div>
      <p>Dashboard</p>
      {users.length}
      <div>
        {users.map((usr) => (
          <div key={usr.id}>
            <p>{usr.name}</p>
            <span>{usr.age}</span>
            <h2>{usr.phone}</h2>
            <button onClick={() => handleEdit(usr.id!)}>Salvar usario</button>
          </div>
        ))}
      </div>
    </div>
  );
}

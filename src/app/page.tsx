"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useCreatePatient,
  useDeletePatient,
  useGetPatients,
  useUpdatePatient,
} from "./hooks/usePatients";
import {
  useCreateUser,
  useDeleteUser,
  useGetUsers,
  useUpdateUser,
} from "./hooks/useUser";
import { create } from "domain";

export default function Page() {
  const { user, loading } = useAuth();
  const { patients, reload } = useGetPatients();
  const { create } = useCreatePatient(reload);
  //const { update } = useUpdatePatient(reload);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  const handleEdit = async () => {
    await create({
      name: "Maria Jose",
      age: 35,
      phone: "+33 943892712",
      status: "pending",
    }).finally(() => {
      alert("Criado com sucesso");
    });
  };

  return (
    <div>
      <p>Dashboard</p>
      {patients.length}
      <div>
        {patients.map((usr) => (
          <div key={usr.id}>
            <p>{usr.name}</p>
            <span>{usr.age}</span>
            <h2>{usr.phone}</h2>
          </div>
        ))}
        <button onClick={() => handleEdit()}>Apagar</button>
      </div>
    </div>
  );
}

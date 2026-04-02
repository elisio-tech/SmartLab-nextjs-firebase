"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useDeletePatient,
  useGetPatients,
  useUpdatePatient,
} from "./hooks/usePatients";

export default function Page() {
  const { user, loading } = useAuth();
  const { patients, reload } = useGetPatients();
  // const { remove } = useDeletePatient(reload);
  const { update } = useUpdatePatient(reload);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  async function handleEdit(id: string) {
    await update(id, {
      name: "Nome Atualizado",
      age: 35,
    });
  }

  return (
    <div>
      <p>Dashboard</p>

      <div>
        {patients.map((patient) => (
          <div key={patient.id}>
            <p>{patient.name}</p>
            <span>{patient.age}</span>
            <h2>{patient.phone}</h2>
            <button onClick={() => handleEdit(patient.id!)}>Atualizar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

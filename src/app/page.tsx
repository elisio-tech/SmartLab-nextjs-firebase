"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDeletePatient, useGetPatients } from "./hooks/usePatients";

export default function Page() {
  const { user, loading } = useAuth();
  const { patients, reload } = useGetPatients();
  const { remove } = useDeletePatient(reload);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  const handleDelete = async (id: string) => {
    await remove(id);
    alert("removido com sucesso!");
  };

  return (
    <div>
      <p>Dashboard</p>

      <div>
        {patients.map((patient) => (
          <div key={patient.id}>
            <p>{patient.name}</p>
            <span>{patient.age}</span>
            <h2>{patient.phone}</h2>
            <button onClick={() => handleDelete(patient.id!)}>Apagar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

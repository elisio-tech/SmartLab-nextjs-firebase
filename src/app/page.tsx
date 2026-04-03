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
  useGetUserByID,
  useGetUsers,
  useUpdateUser,
} from "./hooks/useUser";
import { create } from "domain";
import { useCreateRecords, useGetRecords } from "./hooks/useMedicalRecords";
import { getUserByID } from "./service/user-service";

export default function Page() {
  const { user, loading } = useAuth();
  const { records, reload } = useGetRecords();
  const { create } = useCreateRecords(reload);
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
      patientId: "bM10VDjxP0qeRpB9qeEP",
      notes: "Paracetamol para dor de cabeca",
    }).finally(() => {
      alert("Criado com sucesso");
    });
  };

  return (
    <div>
      <p>Dashboard</p>
      {records.length}
      <div>
        {records.map((usr, i) => (
          <div key={i}>
            <p>{usr.notes}</p>
          </div>
        ))}
        <button onClick={() => handleEdit()}>Apagar</button>
      </div>
    </div>
  );
}

"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useCreateAppointment,
  useGetAppointments,
} from "./hooks/useAppointments";

export default function Page() {
  const { user, loading } = useAuth();
  const { appointments, reload } = useGetAppointments();
  const { create } = useCreateAppointment(reload);

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
      doctorId: "PbZObKfTUhZpEXopG3kU",
      status: "pending",
      date: new Date(),
    }).finally(() => {
      alert("Criado com sucesso");
    });
  };

  return (
    <div>
      <p>Dashboard</p>
      {appointments.length}
      <div>
        {appointments.map((usr, i) => (
          <div key={i}>
            <p>{usr.status}</p>
          </div>
        ))}
        <button onClick={() => handleEdit()}>Apagar</button>
      </div>
    </div>
  );
}

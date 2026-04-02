"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePatients } from "./hooks/usePatients";

export default function Page() {
  const { user, loading } = useAuth();
  const { patients } = usePatients();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  return (
    <div>
      <p>Dashboard</p>

      <div>
        {patients.map((patient) => (
          <div key={patient.id}>
            <p>{patient.name}</p>
            <span>{patient.age}</span>
            <h2>{patient.phone}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

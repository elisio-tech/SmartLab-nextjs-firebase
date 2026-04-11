"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecords } from "@/hooks/useRecords";
import { logOut } from "./service/auth-service";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { records } = useRecords();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="grid place-items-center h-screen w-full">
        <div className="flex justify-center items-center gap-4">
          <p>Carregando</p>
        </div>
      </div>
    );
  }

  const handle = async () => {
    await logOut();
  };

  return (
    <div>
      <button onClick={() => handle()}>Sair</button>
      <h3></h3>
      <div>
        {records.map((record, i) => (
          <div key={i}>
            <h3>{record.patientName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AppSidebar from "./components/Sidebar";
import { MedicalRecordService } from "./service/records/recordService";
import { useRecords } from "./hooks/useRecords";

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
          <Spinner />
          <p>Carregando</p>
        </div>
      </div>
    );
  }

  return (
    <div>
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

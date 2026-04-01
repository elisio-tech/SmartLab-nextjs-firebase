"use client";
import { useAuth } from "@/app/lib/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <>Carregando...</>;

  return <div>Dashboard app</div>;
}

"use client";
import AuthLayout from "../loyalt";
import LoginForm from "@/app/components/auth/login-form";

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

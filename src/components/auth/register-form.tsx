"use client";
import { register } from "@/service/auth-service";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState(""); // 👈 novo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password); // 👈 passa name
      router.push("/dashboard");
    } catch (error) {
      console.log("erro ao criar conta", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}

"use client";
import Input from "@/app/components/form/input/InputField";
import Label from "@/app/components/form/Label";
import Button from "@/app/components/ui/button/Button";
import { login } from "@/app/service/auth-service";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginShema } from "@/app/lib/validations/login";

type errorType = {
  email?: string;
  password?: string;
  auth?: string;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<errorType | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const resulted = loginShema.safeParse({ email, password });
    if (!resulted.success) {
      const fieldErrors = resulted.error.flatten().fieldErrors;

      setError({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });

      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      console.error("Erro ao fazer login", err);
      setError({ auth: "Credenciais inválidas." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Login
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Entrar com email e palavra-passe!
            </p>
          </div>
          <div>
            <form onSubmit={handleLogin}>
              <div className="space-y-6">
                <div>
                  {error?.auth && (
                    <p className="text-sm text-red-500 mb-4">{error.auth}</p>
                  )}
                  <Label>
                    Email <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    placeholder="info@gmail.com"
                    error={!!error?.email}
                    onChange={(e) => setEmail(e.target.value)}
                    hint={error?.email}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      error={!!error?.password}
                      hint={error?.password}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/reset-password"
                    className="text-sm text-zinc-400 hover:text-zinc-600 dark:text-brand-400 text-right"
                  >
                    Esqueceu a palavra-passe?
                  </Link>
                </div>
                <div>
                  <Button
                    className="w-full bg-zinc-900 hover:bg-zinc-700"
                    size="sm"
                    disabled={loading}
                  >
                    {loading ? "Carregando..." : "Login"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

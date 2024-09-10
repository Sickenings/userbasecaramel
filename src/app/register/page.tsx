"use client";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Registrado exitosamente, por favor espere...");
      router.push("/courses"); // Redirigir a la página de inicio de sesión
    } else {
      const errorData = await res.json();
      alert(errorData.message || "Error al registrarse, por favor intente de nuevo.");
    }
  });

  console.log(errors);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF5EE] to-[#FFEFD5] font-sans antialiased">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-center">Registrarse</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Crea una cuenta para acceder a tus cursos
        </p>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Usuario
            </label>
            <Input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "El nombre de usuario es requerido",
                },
              })}
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
              })}
              placeholder="m@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Contraseña
            </label>
            <Input
              type="password"
              placeholder="********"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
            />
          </div>

          <Button className="w-full" variant="default" type="submit">
            Registrarse
          </Button>
          <Button className="w-full" variant="outline">
            Registrarse con Google
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-blue-500" prefetch={false}>
            Iniciar sesión
          </Link>
        </p>
        <p className="mt-4 text-sm text-center text-muted-foreground">
          {" "}
          <Link href="/" className="text-blue-500" prefetch={false}>
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
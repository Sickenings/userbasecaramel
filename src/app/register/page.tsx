"use client"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { username, email, password });
      alert(response.data.message); // Alerta de éxito
    } catch (error) {
      // Especificar el tipo del error
      if (axios.isAxiosError(error)) {
        // Si el error es un error de Axios, acceder a la respuesta
        alert(error.response?.data?.message || 'Error desconocido'); // Alerta de error
      } else {
        alert('Error desconocido'); // Manejo de otros tipos de errores
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF5EE] to-[#FFEFD5]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-center">Registrarse</h1>
        <p className="mb-6 text-center text-muted-foreground">Crea una cuenta para acceder a tus cursos</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Usuario
            </label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Ingresa tu nombre"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña
              </label>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
  )
}
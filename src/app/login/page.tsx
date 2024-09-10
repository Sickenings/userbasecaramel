"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"
import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      alert('Login exitoso, token: ' + response.data.token);
    } catch (error) {
      // Manejo de error con tipo específico
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || 'Error desconocido');
      } else {
        alert('Error desconocido');
      }
    }
  };

  return ( 
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-[#FFF5EE] to-[#FFEFD5] font-sans antialiased">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="absolute inset-0 z-0">
          <Carousel className="h-full w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Baking image"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Cake image"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Pastry image"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 bg-white px-8 py-12 rounded-2xl">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Bienvenido</h1>
            <p className="text-muted-foreground">Inicia sesión para ver tus cursos</p>
          </div>
          <form className="space-y-4 w-full max-w-[300px]" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                required 
                className="rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  ¿Olvido su contraseña?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                className="rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full rounded-md">
              Sign In
            </Button>
            <Button variant="outline" className="w-full rounded-md">
              Iniciar con Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            ¿No posee una cuenta?{" "}
            <Link href="/register" className="underline" prefetch={false}>
              Registrarse
            </Link>
            <p className="mt-4 text-sm text-center text-muted-foreground">
          {" "}
          <Link href="/" className="text-blue-500" prefetch={false}>
            Volver al inicio
          </Link>
        </p>
            </div>
          </div>
        </div>
      </div>
  )
}
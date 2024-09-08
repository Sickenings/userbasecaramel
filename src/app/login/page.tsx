import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"
import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"

// Asegúrate de que el componente Login esté exportado correctamente
export default function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-[#FFF5EE] to-[#FFEFD5]">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="absolute inset-0 z-0">
          <Carousel className="h-full w-full">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Baking image"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Cake image"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
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
            <p className="text-muted-foreground">Inicia sesion para ver tus cursos</p>
          </div>
          <div className="space-y-4 w-full max-w-[300px]">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="rounded-md" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  ¿Olvido su contraseña?
                </Link>
              </div>
              <Input id="password" type="password" required className="rounded-md" />
            </div>
            <Button type="submit" className="w-full rounded-md">
              Sign In
            </Button>
            <Button variant="outline" className="w-full rounded-md">
              Iniciar con Google
            </Button>
          </div>
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

// Exporta el componente como exportación por defecto

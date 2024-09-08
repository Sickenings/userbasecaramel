import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet"


export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <header className="bg-primary text-primary-foreground py-4 px-6">
  <div className="container mx-auto flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2" prefetch={false}> 
      <span className="text-lg font-semibold">Caramel</span>
    </Link>
    <nav className="hidden ml-10 md:flex justify-center items-center gap-4">
      <Link href="/courses" className="hover:underline" prefetch={false}>
        Courses
      </Link>
      <Link href="#" className="hover:underline" prefetch={false}>
        Pricing
      </Link>
      <Link href="/about" className="hover:underline" prefetch={false}>
        About
      </Link>
    </nav>
    <div className="hidden md:flex items-center gap-2">
      <Link href="/login">
        <Button variant="outline" className="text-black">
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button variant="secondary" className="text-black">
          Register
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">Jorge Bozo</div>
              <div className="text-sm text-muted-foreground">john@example.com</div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Sign out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs">
          <div className="flex flex-col gap-6 p-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <span className="text-lg font-semibold">Caramel</span>
            </Link>
            <nav className="grid gap-2">
              <Link href="#" className="hover:underline flex items-center gap-2" prefetch={false}>
                Courses
              </Link>
              <Link href="#" className="hover:underline flex items-center gap-2" prefetch={false}>
                Pricing
              </Link>
              <Link href="#" className="hover:underline flex items-center gap-2" prefetch={false}>
                About
              </Link>
              <Link href="#" className="hover:underline flex items-center gap-2" prefetch={false}>
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="text-black">
                Login
              </Button>
              <Button variant="secondary" className="text-black">
                Register
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>
      <main className="flex-1 pt-20">
        <section className="bg-muted py-12 md:py-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Bienvenidos caramel preview</h1>
          <p className="text-muted-foreground text-lg text-center max-w-md">
            Somos una repostería artesanal que se dedica a la elaboración de deliciosos pasteles, galletas y otros
            postres hechos con los mejores ingredientes. Disfruta de nuestras especialidades y déjate tentar por
            nuestros dulces.
          </p>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nuestro Personal</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Juana Pérez",
                  description: "Maestra repostera con más de 10 años de experiencia.",
                  image: "/placeholder.svg",
                  alt: "Pastel de chocolate",
                },
                {
                  name: "Carlos Gómez",
                  description: "Experto en decoración de pasteles y postres.",
                  image: "/placeholder.svg",
                  alt: "Galletas de avena",
                },
                {
                  name: "María Rodríguez",
                  description: "Encargada de la atención al cliente y ventas.",
                  image: "/placeholder.svg",
                  alt: "Tartaletas de limón",
                },
              ].map((member, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={member.image}
                    width={400}
                    height={300}
                    alt={member.alt}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Reseñas de Nuestros Clientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Juan Díaz",
                  role: "Cliente",
                  review: "Los pasteles de Repostería Dulce Tentación son simplemente deliciosos. Siempre quedo satisfecho con la calidad y el sabor de sus productos.",
                  avatar: "/placeholder-user.jpg",
                  initials: "JD",
                },
                {
                  name: "María Sánchez",
                  role: "Cliente",
                  review: "Siempre que necesito un postre especial para una ocasión, Repostería Dulce Tentación es mi primera opción. Sus tartaletas de limón son simplemente exquisitas.",
                  avatar: "/placeholder-user.jpg",
                  initials: "MS",
                },
                {
                  name: "Luis Espinoza",
                  role: "Cliente",
                  review: "Desde que descubrí Repostería Dulce Tentación, no puedo dejar de visitar su tienda. Sus galletas de avena son simplemente adictivas.",
                  avatar: "/placeholder-user.jpg",
                  initials: "LE",
                },
              ].map((client, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm p-4">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src={client.avatar} alt="Avatar" />
                      <AvatarFallback>{client.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">{client.name}</h4>
                      <p className="text-muted-foreground text-sm">{client.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{client.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Repostería Dulce Tentación</p>
          <nav className="flex gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Política de privacidad
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
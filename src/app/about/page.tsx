
import Link from "next/link"
import { Card, CardContent } from "@/app/components/ui/card"
import { Star } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet"

const employees = [
  { name: "Ana García", role: "CEO", image: "https://i.ibb.co/7Q1RrVK/asdadadad-removebg-preview.png" },
  { name: "Diego Mujica", role: "Apoyo Moral", image: "https://media.discordapp.net/attachments/939415107769888788/1282834005799993434/lego-brown-monkey-with-yellow-hands-74499-99402-178585.png?ex=66e0cbc4&is=66df7a44&hm=e821abb8e3442bf23751c91782d79bab6a9611f781fe4e8994c9953f44b366fe&=&format=webp&quality=lossless&width=473&height=473" },
  { name: "Juan Rosales", role: "Apoyo moral", image: "https://media.discordapp.net/attachments/985229190007783464/1282834515051417706/latest.png?ex=66e0cc3e&is=66df7abe&hm=78a9ba4b1b2693d0a2c413fbf5dbf7d86e07f02516552d60a8b3fc2f7b188a6a&=&format=webp&quality=lossless" },
  { name: "Jorge Bozo", role: "Desarrollador", image: "https://i.ibb.co/rf0pYcG/TEST.jpg" },
]

const reviews = [
  { name: "Laura Sánchez", rating: 5, comment: "Excelente servicio y atención al cliente." },
  { name: "Pedro Gómez", rating: 4, comment: "Muy buenos productos, pero la entrega tardó un poco." },
  { name: "Sofia Ruiz", rating: 5, comment: "Superó mis expectativas. Totalmente recomendado." },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
  <header className="bg-primary text-primary-foreground py-4 px-6">
  <div className="container mx-auto flex items-center justify-between antialiased">
    <Link href="/" className="flex items-center gap-2 size-8"> 
      <img src='https://i.ibb.co/643tvhB/Goofy-penguin-copia.webp' alt='Icon'/>
    </Link>
    <nav className="hidden md:flex ml-[200px] gap-4">
      <Link href="/courses" className="hover:underline">
        Courses
        </Link>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
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
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">Jorge Bozo</div>
              <div className="text-sm text-muted-foreground">john@example.com</div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2">
              <div className="h-4 w-4" />
              <span>Sign out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <nav className="flex md:hidden justify-center items-center gap-4">
      <Link href="/courses" className="hover:underline">
        Courses
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </nav>
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs">
          <div className="flex flex-col gap-6 p-6">
            <Link href="#" className="flex items-center gap-2">
              <span className="text-lg font-semibold">Caramel</span>
            </Link>
            <nav className="grid gap-2">
              <Link href="/courses" className="hover:underline flex items-center gap-2">
                Courses
              </Link>
              <Link href="/about" className="hover:underline flex items-center gap-2">
                About
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
        <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section with "Sobre Nosotros" */}
        <section className="mb-16 pt-4">
          <div className="flex flex-col md:flex-row items-center gap-8 text-pretty">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-8xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF6B6B] to-[#FFA500] bg-clip-text text-transparent">Sobre Caramel</h1>
              <p className="text-xl text-muted-foreground">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente quo suscipit, assumenda aut, veniam reiciendis minus necessitatibus minima obcaecati laudantium deserunt fugiat earum ex accusantium, dolore dolores repellendus est.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-64 h-64 relative">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="50" cy="50" r="45" fill="#FFB6C1" />
                    <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="#FF69B4" />
                    <circle cx="50" cy="50" r="20" fill="#FFC0CB" />
                    <circle cx="50" cy="50" r="15" fill="#FFB6C1" />
                    <circle cx="45" cy="45" r="5" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Section */}
        <section className="mb-16 pt-4">
          <h2 className="text-5xl font-extrabold mb-8 text-center text-[#5C3D2E]">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {employees.map((employee, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-lg">{employee.name}</h3>
                  <p className="text-muted-foreground">{employee.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="pt-4">
          <h2 className="text-5xl font-extrabold mb-8 text-center text-[#5C3D2E]">Reseñas de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-2">{review.comment}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-2 py-6 md:py-0 font-mono antialiased">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-lg leading-loose text-muted-foreground md:text-left">
              Creado por Jorge Bozo como demo técnica para propuesta
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
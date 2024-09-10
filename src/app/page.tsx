"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { ChevronLeft, ChevronRight} from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"



const images = [
  'https://i.ibb.co/gMjYVhp/bgg.webp',
  'https://i.ibb.co/xKZmdxG/bg.webp',
  'https://i.ibb.co/pRk1TQk/Soft-Brown-Simple-Watercolor-Linkedin-Banner.png',
]

const courses = [
  { id: 1, title: "Introduccion a al reposteria", description: "Aprende los fundamentos de la reposteria", image: "https://i.ibb.co/8j1hcQk/torta3.jpg" },
  { id: 2, title: "Decoracion en la reposteria", description: "Técnicas modernas de diseño en la resposteria", image: "https://i.ibb.co/8j1hcQk/torta3.jpg" },
  { id: 3, title: "Fundamentos de la reposteria", description: "fundamentos avanzados de la reposteria", image: "https://i.ibb.co/9NgYM7X/torta4.jpg" },
  { id: 5, title: "Reposteria avanzada", description: "Domina los conceptos avanzados de la reposteria profesional         ", image: "https://i.ibb.co/k2LVThj/torta.jpg" },
]

const employees = [
  { name: "Ana García", role: "CEO", image: "https://i.ibb.co/7Q1RrVK/asdadadad-removebg-preview.png" },
  { name: "Diego Mujica", role: "Apoyo Moral", image: "https://media.discordapp.net/attachments/939415107769888788/1282834005799993434/lego-brown-monkey-with-yellow-hands-74499-99402-178585.png?ex=66e0cbc4&is=66df7a44&hm=e821abb8e3442bf23751c91782d79bab6a9611f781fe4e8994c9953f44b366fe&=&format=webp&quality=lossless&width=473&height=473" },
  { name: "Juan Rosales", role: "Apoyo moral", image: "https://media.discordapp.net/attachments/985229190007783464/1282834515051417706/latest.png?ex=66e0cc3e&is=66df7abe&hm=78a9ba4b1b2693d0a2c413fbf5dbf7d86e07f02516552d60a8b3fc2f7b188a6a&=&format=webp&quality=lossless" },
  { name: "Jorge Bozo", role: "Desarrollador", image: "https://i.ibb.co/rf0pYcG/TEST.jpg" },
]

const faqs = [
  {
    question: "¿Cómo puedo inscribirme en un curso?",
    answer: "Para inscribirte en un curso, simplemente navega a la página del curso que te interesa y haz clic en el botón 'Inscribirse'. Si aún no tienes una cuenta, se te pedirá que crees una antes de completar la inscripción."
  },
  {
    question: "¿Los cursos tienen una fecha de inicio específica?",
    answer: "La mayoría de nuestros cursos son de ritmo libre, lo que significa que puedes comenzar en cualquier momento. Sin embargo, algunos cursos en vivo pueden tener fechas de inicio específicas. Siempre verifica los detalles del curso para obtener información precisa."
  },
  {
    question: "¿Cuánto tiempo tengo para completar un curso?",
    answer: "Una vez que te inscribes en un curso, tienes acceso ilimitado a su contenido. Puedes avanzar a tu propio ritmo y revisar el material tantas veces como desees."
  },
  {
    question: "¿Ofrecen certificados al completar un curso?",
    answer: "Sí, ofrecemos certificados de finalización para todos nuestros cursos. Una vez que hayas completado todos los módulos y tareas requeridas, podrás descargar tu certificado directamente desde tu panel de estudiante."
  },
]


export default function CoursesPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [ ] = useState("")
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }

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
      <main className="flex-1">
        <section className="relative h-[570px] flex items-center justify-center overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-12xl md:text-8xl font-extrabold text-white text-center tracking-tighter sm:text-6xl bg-gradient-to-r from-[#FF6B6B] to-[#FFA500] bg-clip-text text-transparent">
  CARAMEL
      </h1>
      </section>
        <section className="container mx-auto py-12">
          <h2 className="text-5xl mb-8 font-extrabold tracking-tighter sm:text-5xl text-[#5C3D2E] text-center">Cursos Destacados</h2>
          <div className="relative max-w-5xl mx-auto">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll(-300)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {courses.map((course) => (
                <Card key={course.id} className="flex-shrink-0 w-[250px] transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Ver Curso</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll(300)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        <section className="py-16 bg-[ebe3e3]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl mb-5 font-extrabold tracking-tighter sm:text-5xl text-[#5C3D2E] text-center">Acerca de Mí</h2>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
              <div className="md:w-1/3 mb-6 md:mb-0">
              <img src="https://i.ibb.co/Fh02nvC/test.png" alt="Profile" className="rounded-full w-48 h-48 object-cover mx-auto" />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem impedit eius, veniam accusantium obcaecati labore totam nemo et, voluptates id ea fugit facilis dignissimos. Eius facere deleniti nihil quo.
                </p>
                <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta soluta neque voluptates beatae excepturi, corporis debitis fuga adipisci error optio officia magni voluptatem similique provident natus repellat suscipit earum!                </p>
                <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit iure ea perspiciatis mollitia ratione voluptatem. Laboriosam rerum sapiente, molestiae debitis obcaecati perferendis cumque possimus sed dolor fugit voluptas est.                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16 pt-4">
          <h2 className="text-3xl mb-8 font-extrabold tracking-tighter sm:text-5xl text-[#5C3D2E] text-center">Nuestro Equipo</h2>
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
        <section className="md:py-24 lg:py-32 bg-[#FFF8F0]">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl mb-8 font-extrabold tracking-tighter sm:text-5xl text-[#5C3D2E]">Bake Your Way to Success</h2>
            <p className="max-w-[700px] text-[#8C7B72] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock your baking potential with our comprehensive courses. Choose the plan that fits your needs and
              start your journey to becoming a master baker.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-[#FFFBF7] shadow-md">
            <CardHeader className="border-b p-6">
              <CardTitle className="text-2xl font-bold text-[#5C3D2E]">Beginner Baker</CardTitle>
              <CardDescription className="text-[#8C7B72]">Kickstart your baking journey</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl font-bold text-[#5C3D2E]">$49</div>
              <ul className="space-y-2 text-[#8C7B72]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Fundamentals of Baking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  10 Baking Recipes
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Baking Techniques Tutorials
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Access to Baking Community
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-end">
              <Button className="w-full max-w-[200px]">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#FFFBF7] shadow-md">
            <CardHeader className="border-b p-6">
              <CardTitle className="text-2xl font-bold text-[#5C3D2E]">Home Baker</CardTitle>
              <CardDescription className="text-[#8C7B72]">Take your baking to the next level</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl font-bold text-[#5C3D2E]">$99</div>
              <ul className="space-y-2 text-[#8C7B72]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Beginner Baker Course
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  20 Advanced Baking Recipes
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Baking Masterclasses
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Personalized Baking Feedback
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Access to Baking Community
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-end">
              <Button className="w-full max-w-[200px]">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#FFFBF7] shadow-md">
            <CardHeader className="border-b p-6">
              <CardTitle className="text-2xl font-bold text-[#5C3D2E]">Professional Baker</CardTitle>
              <CardDescription className="text-[#8C7B72]">Become a baking expert</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl font-bold text-[#5C3D2E]">$199</div>
              <ul className="space-y-2 text-[#8C7B72]">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Beginner and Home Baker Courses
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  30 Professional Baking Recipes
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Advanced Baking Masterclasses
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Personalized Baking Feedback and Mentorship
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 fill-[#E2B887]" />
                  Access to Baking Community and Events
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-end">
              <Button className="w-full max-w-[200px]">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl tracking-tighter sm:text-5xl text-[#5C3D2E] font-extrabold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-2">
                  <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-2 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="border-t-2 py-6 md:py-0 bg-white shadow-xl font-mono">
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
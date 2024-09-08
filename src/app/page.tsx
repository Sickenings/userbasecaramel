"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react'

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

const workshops = [
  { id: 1, title: "Taller de TORTAS" },
  { id: 2, title: "Taller de PANES" },
  { id: 3, title: "Taller de DONAS" },
  { id: 4, title: "Taller de PONQUESITOS" },
]

export default function CoursesPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedWorkshop, setSelectedWorkshop] = useState("")
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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
            <img  className='flex ml-2 size-8 rounded-full' src="https://i.ibb.co/rf0pYcG/TEST.jpg" alt="TEST"></img>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Button>
                <Link href="/courses">Cursos</Link>
                </Button>
              <Link href="/about">Acerca de</Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Input placeholder="Buscar cursos..." className="hidden" />
            </div>
            <nav className="flex  justify-center items-center mr-3">
              <Button variant="ghost" asChild className="mr-2">
                <Link href="/login">Iniciar sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
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
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
           CARAMEL PREVIEW
          </h1>
        </section>
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Más Información</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Selecciona un Taller</h3>
                <Select onValueChange={setSelectedWorkshop}>
                  <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Elige un taller" />
                  </SelectTrigger>
                  <SelectContent>
                    {workshops.map((workshop) => (
                      <SelectItem key={workshop.id} value={workshop.id.toString()}>
                        {workshop.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full mb-4" disabled={!selectedWorkshop}>
                  Inscribirse al Taller Seleccionado
                </Button>
                <div className="text-center">
                  <p className="mb-2">¿Buscas más opciones?</p>
                  <Button variant="outline">Ver Todos los Talleres Disponibles</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Cursos Destacados</h2>
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
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Acerca de Mí</h2>
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
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
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
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Creado por Jorge Bozo como demo técnica para propuesta
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="font-bold">
        Repostery
      </Link>
      <nav className="flex flex-col space-y-3">
        <Link href="/courses">Cursos</Link>
        <Link href="/about">Acerca de</Link>
        <Link href="/login">Iniciar sesión</Link>
        <Link href="/register">Registrarse</Link>
      </nav>
    </div>
  )
}
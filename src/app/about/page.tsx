import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 left-0 z-10 w-full bg-transparent text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
          <Button variant="ghost" className="mr-4">
            <HomeIcon className="w-5 h-5 text-black" />
          </Button>
        </Link>
        <div className="flex gap-4">
          <Button  className="bg-white text-black">
           <Link href="/login">
            Login
            </Link>
          </Button>
          <Button  className="bg-black text-white">
            <Link href="/register">
            Register
            </Link>
            
          </Button>
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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export default About;
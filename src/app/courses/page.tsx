import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion"
import { Label } from "@/app/components/ui/label"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"
import Image from "next/image"

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Caramel preview</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Explore our wide range of courses and find the perfect one for you.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10">
            <div className="flex flex-col gap-4 items-start">
              <Accordion type="single" collapsible>
                <AccordionItem value="category">
                  <AccordionTrigger className="text-base font-semibold">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="category-design" /> Design
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="category-development" /> Development
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="category-marketing" /> Marketing
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="category-business" /> Business
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="level">
                  <AccordionTrigger className="text-base font-semibold">Level</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="level-beginner" /> Beginner
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="level-intermediate" /> Intermediate
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="level-advanced" /> Advanced
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="relative flex-1">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full rounded-lg bg-background pl-8 shadow-xl"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Mastering Figma: Design Essentials</h3>
                  <p className="text-sm leading-none text-muted-foreground">Design</p>
                  <Badge variant="secondary" className="mt-2">
                    Beginner
                  </Badge>
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">React.js Fundamentals</h3>
                  <p className="text-sm leading-none text-muted-foreground">Development</p>
                  <Badge variant="secondary" className="mt-2">
                    Intermediate
                  </Badge>
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Digital Marketing Strategies</h3>
                  <p className="text-sm leading-none text-muted-foreground">Marketing</p>
                  <Badge variant="secondary" className="mt-2">
                    Advanced
                  </Badge>
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Entrepreneurship Essentials</h3>
                  <p className="text-sm leading-none text-muted-foreground">Business</p>
                  <Badge variant="secondary" className="mt-2">
                    Beginner
                  </Badge>
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Mastering Photoshop for Designers</h3>
                  <p className="text-sm leading-none text-muted-foreground">Design</p>
                  <Badge variant="secondary" className="mt-2">
                    Intermediate
                  </Badge>
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View course</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Course image"
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity shadow-xl"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Becoming a Data Analyst</h3>
                  <p className="text-sm leading-none text-muted-foreground">Business</p>
                  <Badge variant="secondary" className="mt-2">
                    Advanced
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; 2024 Caramel. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-xs hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

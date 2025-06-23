import Link from "next/link"
import { CalendarRange, CheckCircle, Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Zimmermädchen</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/book">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional Cleaning Services for Your Room
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide top-quality cleaning services tailored to your needs. Book online in minutes and enjoy a
                spotless home.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book">
                  <Button size="lg" className="px-8">
                    Book a Cleaning
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl overflow-hidden bg-white p-8 flex items-center justify-center">
              <img
                src="/images/zimmermaedchen-logo.jpg"
                alt="Zimmermädchen cleaning service logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of professional cleaning services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-8 md:pt-12">
            {/* Regular Cleaning */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Bedroom</h3>
              <p className="text-center text-gray-500">
                Our standard cleaning service covers all the basics for a clean and tidy room.
              </p>
              <p className="text-2xl font-bold">Ab CHF 50</p>
              <Link href="/book?service=regular" className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>

            {/* Deep Cleaning */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-blue-50">
              <div className="p-2 bg-blue-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Bathroom</h3>
              <p className="text-center text-gray-500">
                A thorough cleaning service that reaches every corner and surface of your bathroom.
              </p>
              <p className="text-2xl font-bold">Ab CHF 75</p>
              <Link href="/book?service=deep" className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>

            {/* Move In/Out Cleaning */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Bedroom & Bathroom</h3>
              <p className="text-center text-gray-500">
                Specialized cleaning for two small rooms. Special offer and welcome gift!
              </p>
              <p className="text-2xl font-bold">Ab CHF 100</p>
              <Link href="/book?service=move" className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book your cleaning service in three simple steps
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-8 md:pt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <CalendarRange className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">1. Book Online</h3>
              <p className="text-center text-gray-500">
                Select your service, date, and time through our easy online booking system.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">2. We Clean</h3>
              <p className="text-center text-gray-500">
                Our professional cleaners arrive on time and perform the service to your specifications.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">3. Enjoy</h3>
              <p className="text-center text-gray-500">
                Relax in your clean room and provide feedback on your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-8 md:pt-12">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-500">
                "The cleaning team was professional, thorough, and friendly. My room has never looked better!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-100 h-10 w-10"></div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Regular customer since 2022</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-500">
                "I've tried several cleaning services, and Zimmermädchen is by far the best. Consistent quality every
                time."
              </p>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-100 h-10 w-10"></div>
                <div>
                  <p className="text-sm font-medium">Michael Rodriguez</p>
                  <p className="text-xs text-gray-500">Regular customer since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for a Home?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book your cleaning service today and enjoy a spotless home tomorrow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/book">
                <Button size="lg" className="px-8">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Zimmermädchen</span>
            </Link>
            <p className="text-sm text-gray-500">Professional cleaning services for your room.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/about" className="text-sm hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/services" className="text-sm hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <p className="text-xs text-gray-500">© 2025 Zimmermädchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

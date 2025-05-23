import Image from "next/image"
import { MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GoogleMap } from "@/components/google-map"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-800">Plaza Obelisco</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#caracteristicas" className="text-blue-800 hover:text-blue-600 transition-colors">
              Características
            </a>
            <a href="#galeria" className="text-blue-800 hover:text-blue-600 transition-colors">
              Galería
            </a>
            <a href="#ubicacion" className="text-blue-800 hover:text-blue-600 transition-colors">
              Ubicación
            </a>
            <a href="#contacto" className="text-blue-800 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Contactar</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70 z-10" />
          <Image
            src="/images/hero-exterior.jpg"
            alt="Plaza Obelisco - Vista exterior del edificio"
            width={1200}
            height={600}
            className="w-full h-[70vh] object-cover"
            priority
          />
          <div className="container absolute inset-0 flex flex-col justify-center z-20 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Local 15 - Oficina Ejecutiva en Plaza Obelisco
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              85 m² de espacio premium con mezzanine en el corazón de Santa Ana, Costa Rica
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-800 hover:bg-blue-50" size="lg">
                Alquilar - $1,500/mes
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 border border-white" size="lg">
                Comprar - $160,000
              </Button>
            </div>
          </div>
        </section>

        {/* Características Section */}
        <section id="caracteristicas" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Características Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-blue-100 shadow-md">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-50 w-12 h-12 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Ubicación Estratégica</h3>
                  <p className="text-gray-600">
                    Situada en el centro comercial Plaza Obelisco, en una de las zonas más exclusivas y de mayor
                    crecimiento de Santa Ana.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-md">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-50 w-12 h-12 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Acabados de Lujo</h3>
                  <p className="text-gray-600">
                    Diseño moderno con acabados de primera calidad, amplios ventanales y excelente iluminación natural.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-md">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-50 w-12 h-12 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Seguridad 24/7</h3>
                  <p className="text-gray-600">
                    Sistema de seguridad de última generación con vigilancia las 24 horas y control de acceso.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Detalles del Local 15</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Área total: 85 m²</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Primera planta: 60 m²</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Mezzanine: 25 m²</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">2 baños con mármol</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Cocineta equipada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">2 oficinas independientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Escalera de mármol</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Pisos de porcelanato</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">A/C central + independiente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Central telefónica (6 líneas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Cableado estructurado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 w-10 h-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Control de acceso y alarma</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Galería</h2>

            <Tabs defaultValue="interior" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="interior">Interior</TabsTrigger>
                <TabsTrigger value="exterior">Exterior</TabsTrigger>
                <TabsTrigger value="amenidades">Amenidades</TabsTrigger>
              </TabsList>
              <TabsContent value="interior" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Image
                    src="/images/area-entrada.jpg"
                    alt="Área de entrada con diseño moderno"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/area-trabajo-principal.jpg"
                    alt="Área de trabajo principal con ventanales"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/escalera-oficinas.jpg"
                    alt="Escalera de mármol y oficinas independientes"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/sala-reuniones.jpg"
                    alt="Sala de reuniones con mesa de vidrio"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/area-trabajo-mezzanine.jpg"
                    alt="Área de trabajo en mezzanine"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/cocineta.jpg"
                    alt="Cocineta equipada con muebles modernos"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                </div>
              </TabsContent>
              <TabsContent value="exterior" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Image
                    src="/images/hero-exterior.jpg"
                    alt="Vista exterior de Plaza Obelisco"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                </div>
              </TabsContent>
              <TabsContent value="amenidades" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Image
                    src="/images/bano-piso1.jpg"
                    alt="Baño primer piso con acabados de mármol"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/bano-piso2.jpg"
                    alt="Baño segundo piso con acabados de mármol"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                  <Image
                    src="/images/sala-conferencias-mezzanine.jpg"
                    alt="Sala de conferencias en mezzanine"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-64 w-full"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Ver todas las fotos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="ubicacion" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Ubicación</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Plaza Obelisco, Santa Ana</h3>
                <p className="text-gray-600 mb-6">
                  Ubicada en una de las zonas más exclusivas y de mayor crecimiento empresarial de Costa Rica, Plaza
                  Obelisco ofrece una ubicación estratégica con fácil acceso a las principales vías de comunicación.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Dirección</h4>
                      <p className="text-gray-600">Plaza Obelisco, Santa Ana, San José, Costa Rica</p>
                      <p className="text-gray-600 mt-1">Código Plus: WQQW+GMH</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Cercanía</h4>
                      <p className="text-gray-600">A 5 minutos de Escazú y 20 minutos de San José centro</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Accesibilidad</h4>
                      <p className="text-gray-600">Fácil acceso desde la Ruta 27 y la Autopista Próspero Fernández</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
                <GoogleMap location="WQQW+GMH" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 bg-blue-800 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Contáctenos</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Correo Electrónico</h4>
                      <a
                        href="mailto:earroyo@indagarx.com"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        earroyo@indagarx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Teléfono</h4>
                      <a href="tel:+50688341870" className="text-blue-200 hover:text-white transition-colors">
                        +506 8834-1870
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Dirección</h4>
                      <p className="text-blue-200">Plaza Obelisco, Santa Ana, San José, Costa Rica</p>
                      <p className="text-blue-200">Código Plus: WQQW+GMH</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-xl mb-4">Información de Precios</h4>
                  <p className="text-blue-200 mb-2">Alquiler: $1,500/mes (mantenimiento incluido)</p>
                  <p className="text-blue-200 mb-4">Venta: $160,000</p>
                  <h4 className="font-medium text-xl mb-4">Horario de Atención</h4>
                  <p className="text-blue-200 mb-2">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p className="text-blue-200">Sábados: 9:00 AM - 12:00 PM</p>
                </div>
              </div>

              <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Envíenos un Mensaje</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Su nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Correo Electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Su correo electrónico"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Su número de teléfono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      Interés
                    </label>
                    <select
                      id="interest"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="rent">Alquiler</option>
                      <option value="buy">Compra</option>
                      <option value="info">Información General</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Su mensaje"
                      required
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MapPin className="h-6 w-6 text-blue-300" />
              <span className="text-xl font-bold">Plaza Obelisco</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-blue-300">© {new Date().getFullYear()} Todos los derechos reservados</p>
              <div className="mt-2">
                <a href="mailto:earroyo@indagarx.com" className="text-blue-200 hover:text-white transition-colors">
                  earroyo@indagarx.com
                </a>
                {" • "}
                <a href="tel:+50688341870" className="text-blue-200 hover:text-white transition-colors">
                  +506 8834-1870
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

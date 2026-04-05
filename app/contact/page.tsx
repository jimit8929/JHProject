import { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | J & H Projects Pvt. Ltd.",
  description: "Get in touch with J & H Projects Pvt. Ltd. for your engineering and construction needs. Visit our office in Ahmedabad or call us.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      "B-16, Mangal Estate,",
      "near Lions School Cross Road,",
      "Phase-II, GIDC, Naroda,",
      "Ahmedabad - 382330, Gujarat",
    ],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: [
      "+91 8156003759",
    ],
    links: true,
  },
  {
    icon: Mail,
    title: "Email Address",
    details: [
      "mahendrajp1971@gmail.com",
    ],
    links: true,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Saturday",
      "9:00 AM - 6:00 PM",
      "Sunday: Closed",
    ],
  },
]

const contactPersons = [
  {
    name: "Mr. Mahendrakumar Jethabhai Patel",
    position: "Director",
    phone: "+91 8156003759",
    email: "mahendrajp1971@gmail.com",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Contact Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                Get In Touch With Us
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Have questions about our services or want to discuss a project? We&apos;re here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <Card key={item.title} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, index) => (
                        item.links ? (
                          item.title === "Phone Numbers" ? (
                            <a
                              key={index}
                              href={`tel:${detail.replace(/\s/g, '')}`}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <a
                              key={index}
                              href={`mailto:${detail}`}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          )
                        ) : (
                          <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                        )
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map & Contact Persons */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Location</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8563399999997!2d72.6533!3d23.0700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzEyLjAiTiA3MsKwMzknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="J & H Projects Office Location"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Located in the heart of GIDC Naroda, Ahmedabad - easily accessible from major highways.
                </p>
              </div>
              
              {/* Contact Persons */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Persons</h2>
                <div className="space-y-4">
                  {contactPersons.map((person) => (
                    <Card key={person.name} className="border-border bg-background">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-primary font-semibold text-lg">
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{person.name}</h3>
                            <p className="text-sm text-primary mb-2">{person.position}</p>
                            <div className="space-y-1">
                              <a 
                                href={`tel:${person.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Phone className="h-3 w-3" />
                                {person.phone}
                              </a>
                              <a 
                                href={`mailto:${person.email}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Mail className="h-3 w-3" />
                                {person.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-2">Need a Quick Response?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fill out our enquiry form and we&apos;ll get back to you within 24 hours.
                  </p>
                  <Button asChild>
                    <Link href="/enquiry">
                      Submit Enquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today and let&apos;s discuss how we can help bring your engineering vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+918156003759">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="mailto:mahendrajp1971@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

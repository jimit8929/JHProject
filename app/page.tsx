import Link from "next/link"
import { ArrowRight, Building2, Wrench, Zap, Users, CheckCircle2, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Wrench,
    title: "Fabrication Works",
    description: "High-quality metal fabrication for industrial and commercial applications with precision engineering.",
  },
  {
    icon: Zap,
    title: "Power Control Systems",
    description: "Advanced power control solutions ensuring efficient energy management for your operations.",
  },
  {
    icon: Building2,
    title: "Industrial Construction",
    description: "End-to-end construction services for industrial facilities with focus on quality and safety.",
  },
]

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "200+", label: "Team Members" },
]

const strengths = [
  {
    icon: CheckCircle2,
    title: "Quality Commitment",
    description: "We maintain the highest standards in every project, ensuring client satisfaction.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols protect our team and your investment.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring decades of combined experience.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-foreground text-background overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Engineering Excellence Since 1999</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                All Value Creator, Better Value Creator
              </h1>
              <p className="text-lg text-background/80 mb-8 leading-relaxed max-w-2xl">
                J & H Projects Pvt. Ltd. delivers multi-discipline engineering solutions with a commitment to quality, safety, and innovation. From fabrication to power control systems, we build excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in multi-discipline engineering projects, delivering comprehensive solutions tailored to your industrial needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">About Us</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                  Building Excellence Since 1999
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  J & H Projects Pvt. Ltd. was born from the merger of two established companies - Jayambe Fabrication and Hardik Power Control - combining decades of expertise in engineering and construction.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Since our founding, we have completed over 100 installations and built lasting relationships with industry leaders. Our commitment to quality, safety, and innovation drives everything we do.
                </p>
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((item) => (
                  <div key={item.title} className="bg-background p-5 rounded-lg border border-border">
                    <item.icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your engineering and construction needs. Our team is ready to deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/enquiry">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

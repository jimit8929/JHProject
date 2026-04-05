import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Wrench, Zap, Building2, Cog, HardHat, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | J & H Projects Pvt. Ltd.",
  description: "Explore our comprehensive engineering services including fabrication works, power control systems, industrial construction, and more.",
}

const services = [
  {
    icon: Wrench,
    title: "Fabrication Works",
    description: "High-quality metal fabrication for industrial and commercial applications. We specialize in structural steel fabrication, custom metalwork, and precision engineering.",
    features: [
      "Structural Steel Fabrication",
      "Custom Metal Components",
      "Precision Cutting & Welding",
      "Surface Treatment & Finishing",
      "Quality Testing & Inspection",
    ],
  },
  {
    icon: Zap,
    title: "Power Control Systems",
    description: "Advanced power control and distribution solutions for industrial facilities. Our systems ensure efficient energy management and optimal performance.",
    features: [
      "Control Panel Manufacturing",
      "Power Distribution Units",
      "Automation Systems",
      "PLC Programming",
      "Energy Management Solutions",
    ],
  },
  {
    icon: Building2,
    title: "Industrial Construction",
    description: "Complete industrial construction services from foundation to finishing. We handle complex projects with precision and adherence to safety standards.",
    features: [
      "Factory Buildings",
      "Warehouse Construction",
      "Industrial Sheds",
      "Foundation Works",
      "Civil & Structural Works",
    ],
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "Comprehensive mechanical engineering solutions including equipment installation, piping systems, and maintenance services.",
    features: [
      "Equipment Installation",
      "Piping Systems",
      "HVAC Systems",
      "Mechanical Maintenance",
      "Process Engineering",
    ],
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "End-to-end project management services ensuring timely delivery, cost control, and quality assurance for all engineering projects.",
    features: [
      "Planning & Scheduling",
      "Resource Management",
      "Quality Control",
      "Cost Management",
      "Risk Assessment",
    ],
  },
  {
    icon: Settings,
    title: "Maintenance Services",
    description: "Regular and preventive maintenance services to keep your industrial equipment running at peak efficiency.",
    features: [
      "Preventive Maintenance",
      "Breakdown Repairs",
      "Equipment Overhaul",
      "Annual Maintenance Contracts",
      "Emergency Support",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with understanding your requirements and project scope through detailed discussions.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team creates comprehensive project plans including timelines, resources, and cost estimates.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Skilled professionals execute the project with precision, following safety and quality standards.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final inspection, testing, and handover with complete documentation and support.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Our Services</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                Comprehensive Engineering Solutions
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                From fabrication to power control, we offer end-to-end engineering services tailored to meet your industrial requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow border-border h-full">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to delivering excellence in every project we undertake.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-background p-6 rounded-lg border border-border h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Industries We Serve</p>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
                  Trusted Across Industries
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expertise spans multiple industries, delivering customized solutions that meet specific sector requirements and regulations.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    "Manufacturing",
                    "Pharmaceuticals",
                    "Chemicals",
                    "Food Processing",
                    "Textiles",
                    "Power Generation",
                    "Oil & Gas",
                    "Infrastructure",
                  ].map((industry) => (
                    <li key={industry} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-8 lg:p-10">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">25+ Years Experience</p>
                      <p className="text-sm text-muted-foreground">Decades of expertise in engineering excellence</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Skilled Team</p>
                      <p className="text-sm text-muted-foreground">200+ trained professionals at your service</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Quality Certified</p>
                      <p className="text-sm text-muted-foreground">ISO certified processes and materials</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Timely Delivery</p>
                      <p className="text-sm text-muted-foreground">Committed to meeting project deadlines</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Need Our Services?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project requirements. Our team will provide a detailed proposal tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/enquiry">
                  Request a Quote
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

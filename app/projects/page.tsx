import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Projects | J & H Projects Pvt. Ltd.",
  description: "Explore our portfolio of completed engineering and construction projects across various industries.",
}

const projects = [
  {
    title: "Pharmaceutical Plant Construction",
    client: "Leading Pharma Company",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    category: "Industrial Construction",
    description: "Complete construction of a state-of-the-art pharmaceutical manufacturing facility including clean rooms, utilities, and process areas.",
  },
  {
    title: "Power Control System Installation",
    client: "Chemical Industries",
    location: "Vadodara, Gujarat",
    year: "2023",
    category: "Power Control",
    description: "Design and installation of advanced power control and distribution systems for a large chemical processing plant.",
  },
  {
    title: "Steel Fabrication Project",
    client: "Manufacturing Unit",
    location: "Rajkot, Gujarat",
    year: "2022",
    category: "Fabrication",
    description: "Structural steel fabrication and erection for a new manufacturing facility spanning 50,000 sq. ft.",
  },
  {
    title: "Industrial Shed Construction",
    client: "Textile Mill",
    location: "Surat, Gujarat",
    year: "2022",
    category: "Industrial Construction",
    description: "Construction of pre-engineered industrial shed with complete infrastructure including power and utilities.",
  },
  {
    title: "Control Panel Manufacturing",
    client: "Food Processing Company",
    location: "Gandhinagar, Gujarat",
    year: "2021",
    category: "Power Control",
    description: "Custom control panel design and manufacturing for automated food processing lines.",
  },
  {
    title: "Warehouse Facility",
    client: "Logistics Company",
    location: "Ahmedabad, Gujarat",
    year: "2021",
    category: "Industrial Construction",
    description: "Large-scale warehouse construction with modern material handling infrastructure.",
  },
  {
    title: "Piping System Installation",
    client: "Oil & Gas Sector",
    location: "Jamnagar, Gujarat",
    year: "2020",
    category: "Mechanical",
    description: "Complete piping system design and installation for industrial process applications.",
  },
  {
    title: "Factory Renovation",
    client: "FMCG Company",
    location: "Anand, Gujarat",
    year: "2020",
    category: "Industrial Construction",
    description: "Complete renovation and modernization of existing manufacturing facility.",
  },
]

const categories = ["All", "Industrial Construction", "Power Control", "Fabrication", "Mechanical"]

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "Industries Served" },
  { value: "50+", label: "Repeat Clients" },
  { value: "25+", label: "Years Experience" },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Our Projects</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                Building Excellence Across Industries
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Explore our portfolio of successfully completed projects that demonstrate our commitment to quality and innovation.
              </p>
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

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={category} 
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="group hover:shadow-lg transition-shadow border-border overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Building2 className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.client}</span>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our success is measured by the satisfaction of our clients and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "J & H Projects delivered our pharmaceutical facility on time and to the highest standards. Their attention to detail is exceptional.",
                  author: "Project Manager",
                  company: "Pharma Company",
                },
                {
                  quote: "The power control systems installed by J & H have significantly improved our operational efficiency. Highly recommended.",
                  author: "Plant Head",
                  company: "Chemical Industries",
                },
                {
                  quote: "Professional team, quality work, and excellent project management. We&apos;ve partnered with them on multiple projects.",
                  author: "Director",
                  company: "Manufacturing Unit",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Have a Project in Mind?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with our engineering expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/enquiry">
                  Start Your Project
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

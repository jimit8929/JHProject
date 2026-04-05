import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Clients | J & H Projects Pvt. Ltd.",
  description: "Meet the trusted companies and organizations we have partnered with across various industries.",
}

const industries = [
  {
    name: "Pharmaceuticals",
    clients: ["Leading Pharma Company A", "Healthcare Industries B", "Medical Equipment Corp"],
  },
  {
    name: "Chemicals",
    clients: ["Chemical Industries Ltd", "Petrochemical Corp", "Specialty Chemicals Co"],
  },
  {
    name: "Manufacturing",
    clients: ["Auto Parts Manufacturing", "Industrial Machinery Ltd", "Precision Engineering Co"],
  },
  {
    name: "Food Processing",
    clients: ["Food Products Ltd", "Beverage Industries", "Dairy Processing Co"],
  },
  {
    name: "Textiles",
    clients: ["Textile Mills Ltd", "Garment Industries", "Fabric Processing Co"],
  },
  {
    name: "Power & Energy",
    clients: ["Power Generation Corp", "Renewable Energy Ltd", "Energy Solutions Co"],
  },
]

const testimonials = [
  {
    quote: "J & H Projects has been our trusted partner for over 10 years. Their commitment to quality and timely delivery is unmatched in the industry.",
    author: "Managing Director",
    company: "Leading Pharma Company",
    rating: 5,
  },
  {
    quote: "The power control systems designed by J & H have significantly reduced our energy costs. Excellent technical expertise and professional service.",
    author: "Plant Head",
    company: "Chemical Industries Ltd",
    rating: 5,
  },
  {
    quote: "From initial consultation to project completion, the team at J & H demonstrated exceptional professionalism. Highly recommended for complex projects.",
    author: "Project Manager",
    company: "Manufacturing Unit",
    rating: 5,
  },
  {
    quote: "Their fabrication work is of the highest quality. We have completed multiple projects together and each one has exceeded our expectations.",
    author: "Director",
    company: "Food Processing Company",
    rating: 5,
  },
  {
    quote: "J & H Projects delivered our warehouse facility ahead of schedule. Their project management skills are excellent.",
    author: "Operations Head",
    company: "Logistics Company",
    rating: 5,
  },
  {
    quote: "Working with J & H has been a pleasure. They understand industrial requirements and deliver solutions that work.",
    author: "Technical Manager",
    company: "Textile Mills Ltd",
    rating: 5,
  },
]

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "80%", label: "Repeat Business" },
  { value: "15+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Our Clients</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                Trusted by Industry Leaders
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                We are proud to have built lasting relationships with companies across various industries, delivering excellence in every project.
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

        {/* Industries Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our expertise spans across multiple industries, delivering specialized solutions for each sector.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{industry.name}</h3>
                    <ul className="space-y-2">
                      {industry.clients.map((client) => (
                        <li key={client} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients have to say about working with J & H Projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground italic mb-4 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
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

        {/* Trust Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
                  Why Clients Choose Us
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our clients return to us because we deliver on our promises. With over 80% repeat business, we have built a reputation for reliability, quality, and excellence.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Quality Assurance</p>
                      <p className="text-sm text-muted-foreground">Every project meets the highest quality standards</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Timely Delivery</p>
                      <p className="text-sm text-muted-foreground">We respect deadlines and deliver on time</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Expert Support</p>
                      <p className="text-sm text-muted-foreground">Ongoing technical support and maintenance</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Competitive Pricing</p>
                      <p className="text-sm text-muted-foreground">Value-driven solutions within budget</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary text-primary-foreground p-8 lg:p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Experience the J & H difference. Contact us today to discuss your project requirements and discover how we can help you achieve your goals.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/enquiry">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

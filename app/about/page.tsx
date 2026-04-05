import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Eye, Users, Award, Building, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | J & H Projects Pvt. Ltd.",
  description: "Learn about J & H Projects Pvt. Ltd. - Our history, vision, mission, and commitment to engineering excellence since 1999.",
}

const timeline = [
  {
    year: "1999",
    title: "Foundation",
    description: "Jayambe Fabrication and Hardik Power Control were established as separate entities.",
  },
  {
    year: "2013",
    title: "Merger & Incorporation",
    description: "Both companies merged to form J & H Projects Pvt. Ltd., combining expertise and resources.",
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Expanded operations to handle larger multi-discipline engineering projects.",
  },
  {
    year: "2024",
    title: "100+ Projects",
    description: "Achieved milestone of completing over 100 successful installations across India.",
  },
]

const directors = [
  {
    name: "Mr. Mahendrakumar Jethabhai Patel",
    position: "Director",
    description: "Visionary leader with extensive experience in engineering and construction management.",
  },
]

const companyDetails = {
  cin: "U45200GJ2013PTC074010",
  incorporationDate: "15 March 2013",
  status: "Active",
  companyType: "Private Limited Company",
  activity: "Construction & Engineering",
  capital: "40 Lakhs",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                All Value Creator, Better Value Creator
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                J & H Projects Pvt. Ltd. is a leading engineering and construction company, delivering excellence in multi-discipline projects since 1999.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    J & H Projects Pvt. Ltd. was born from the merger of two pioneering companies - <strong className="text-foreground">Jayambe Fabrication</strong> and <strong className="text-foreground">Hardik Power Control</strong>. Both companies had been serving the industry with dedication and expertise since 1999.
                  </p>
                  <p>
                    In 2013, recognizing the synergies between fabrication and power control systems, the founders made a strategic decision to merge, creating a comprehensive engineering solutions provider capable of handling complex multi-discipline projects.
                  </p>
                  <p>
                    Today, we stand as a testament to our founders&apos; vision, having completed over 100 successful installations and built lasting relationships with major industry players across India.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">1999</p>
                    <p className="text-sm text-muted-foreground">Year Founded</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground">Installations</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">200+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred engineering partner in India, recognized for our commitment to excellence, innovation, and sustainable practices. We aim to shape the future of industrial infrastructure through cutting-edge solutions and unwavering dedication to quality.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver comprehensive engineering solutions that exceed client expectations through skilled execution, innovative approaches, and uncompromising safety standards. We are committed to building lasting partnerships and contributing to India&apos;s industrial growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to industry leadership - a timeline of our growth and achievements.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {item.year}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced leadership drives innovation and excellence across all projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {directors.map((director) => (
                <Card key={director.name} className="border-border bg-background">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{director.name}</h3>
                    <p className="text-primary text-sm mb-2">{director.position}</p>
                    <p className="text-muted-foreground text-sm">{director.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Company Information</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Official registration and legal details of J & H Projects Pvt. Ltd.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto border-border">
              <CardContent className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">CIN Number</p>
                    <p className="font-medium text-foreground">{companyDetails.cin}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Incorporation</p>
                    <p className="font-medium text-foreground">{companyDetails.incorporationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Company Status</p>
                    <p className="font-medium text-foreground">{companyDetails.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Company Type</p>
                    <p className="font-medium text-foreground">{companyDetails.companyType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Business Activity</p>
                    <p className="font-medium text-foreground">{companyDetails.activity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Authorized Capital</p>
                    <p className="font-medium text-foreground">{companyDetails.capital}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the growing list of companies that trust J & H Projects for their engineering needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

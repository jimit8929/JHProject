"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  "Fabrication Works",
  "Power Control Systems",
  "Industrial Construction",
  "Mechanical Engineering",
  "Project Management",
  "Maintenance Services",
  "Other",
]

export default function EnquiryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      budget: formData.get("budget"),
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit enquiry")
      }

      setIsSubmitted(true)
    } catch {
      setError("Failed to submit enquiry. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Enquiry</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
                Request a Quote
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours with a detailed proposal.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <Card className="border-border">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                      <p className="text-muted-foreground mb-6">
                        Your enquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                          <Link href="/">
                            Back to Home
                          </Link>
                        </Button>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Submit Another Enquiry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border">
                    <CardContent className="p-6 lg:p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                            {error}
                          </div>
                        )}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="Enter your first name"
                              required
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Enter your last name"
                              required
                              className="bg-background"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              required
                              className="bg-background"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your company name"
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Required *</Label>
                            <Select name="service" required>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Brief description of your enquiry"
                            required
                            className="bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Please provide details about your project requirements, timeline, and any specific needs..."
                            rows={6}
                            required
                            className="bg-background resize-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                          <Select name="budget">
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="below-5">Below 5 Lakhs</SelectItem>
                              <SelectItem value="5-10">5 - 10 Lakhs</SelectItem>
                              <SelectItem value="10-25">10 - 25 Lakhs</SelectItem>
                              <SelectItem value="25-50">25 - 50 Lakhs</SelectItem>
                              <SelectItem value="50-100">50 Lakhs - 1 Crore</SelectItem>
                              <SelectItem value="above-100">Above 1 Crore</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                              </span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Submit Enquiry
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                    <div className="space-y-4">
                      <a href="tel:+918156003759" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Call Us</p>
                          <p>+91 8156003759</p>
                        </div>
                      </a>
                      <a href="mailto:mahendrajp1971@gmail.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Email Us</p>
                          <p>mahendrajp1971@gmail.com</p>
                        </div>
                      </a>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Visit Us</p>
                          <p>B-16, Mangal Estate, near Lions School Cross Road, Phase-II, GIDC, Naroda, Ahmedabad - 382330</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Why Choose Us?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        25+ years of experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        100+ successful projects
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        Expert engineering team
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        Timely project delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        Competitive pricing
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We typically respond to all enquiries within 24 business hours. For urgent requirements, please call us directly.
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href="/contact">
                        View Contact Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

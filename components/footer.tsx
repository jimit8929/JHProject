import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
]

const services = [
  "Fabrication Works",
  "Power Control Systems",
  "Industrial Construction",
  "Engineering Projects",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="J & H EPC Projects" 
                width={120} 
                height={50} 
                className="h-14 w-auto rounded"
              />
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              All Value Creator, Better Value Creator. Delivering excellence in engineering and construction since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-background/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-background/80">
                  B-16, Mangal Estate, near Lions School Cross Road, Phase-II, GIDC, Naroda, Ahmedabad - 382330
                </span>
              </li>
              <li>
                <a href="tel:+918156003759" className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+91 8156003759</span>
                </a>
              </li>
              <li>
                <a href="mailto:mahendrajp1971@gmail.com" className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>mahendrajp1971@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} J & H Projects Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              CIN: U45200GJ2013PTC074010
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

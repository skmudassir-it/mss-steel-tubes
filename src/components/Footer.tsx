import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type FooterLink = { href: string; label: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  "Parent Groups": [
    { href: "https://metalogalva.pt/en/", label: "Metalogalva Group", external: true },
    { href: "https://www.soufer.com.br/empresa", label: "Soufer Group", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-steel-dark text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/15 shadow-soft">
                <Image
                  src="/images/logo-mss.png"
                  alt="MSS Steel Tubes"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-white">
                  MSS Steel Tubes
                </p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/50">
                  USA LLC
                </p>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              A Metalogalva Group company. Premium steel tubes for the U.S. solar manufacturing industry.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-white/40 shrink-0" />
                <span>
                  4129R Outland Rd.<br />
                  Memphis, TN 38118
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white/40 shrink-0" />
                <span>(901) 000-0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/40 shrink-0" />
                <span>info@mss-steeltubes.com</span>
              </li>
            </ul>
            <Button
              render={<Link href="/contact" />}
              variant="secondary"
              className="mt-5 bg-white/10 text-white hover:bg-white/20 border-0"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} MSS Steel Tubes USA LLC. All rights reserved.</p>
          <p>A Metalogalva Group Company</p>
        </div>
      </div>
    </footer>
  );
}

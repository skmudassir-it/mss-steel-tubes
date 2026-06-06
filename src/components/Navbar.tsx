"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-strong shadow-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative h-9 w-9 overflow-hidden rounded-lg shadow-soft">
              <Image
                src="/images/logo-mss.png"
                alt="MSS Steel Tubes"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-steel-dark">
                MSS Steel Tubes
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                USA LLC
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-steel-dark bg-steel/8"
                      : "text-muted-foreground hover:text-steel-dark hover:bg-steel/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-steel" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Button
              render={<Link href="/contact" />}
              className="hidden sm:inline-flex bg-steel-gradient text-white shadow-soft hover:shadow-card hover:opacity-95 transition-all"
            >
              Get a Quote
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" />} className="md:hidden">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-steel-dark bg-steel/8"
                            : "text-muted-foreground hover:text-steel-dark hover:bg-steel/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Button
                    render={<Link href="/contact" />}
                    className="mt-4 bg-steel-gradient text-white"
                    onClick={() => setOpen(false)}
                  >
                    Get a Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

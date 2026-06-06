import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe2,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Plant Address",
    lines: ["4129R Outland Road", "Memphis, TN 38118"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(901) 000-0000"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@mss-steeltubes.com", "careers@mss-steeltubes.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon–Fri: 7:00 AM – 5:00 PM", "Sat–Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-steel uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-steel-dark tracking-tight leading-[1.15]">
              Let&apos;s Build
              <br />
              Something Together
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Whether you need a quote on steel tubes, want to join our team, or
              have a general inquiry — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <GlassCard padding="lg">
                <h2 className="text-2xl font-bold text-steel-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and our team will get back to you within
                  1–2 business days.
                </p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-steel-dark mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 text-sm
                          focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                          placeholder:text-muted-foreground/50 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-steel-dark mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 text-sm
                          focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                          placeholder:text-muted-foreground/50 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-steel-dark mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 text-sm
                          focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                          placeholder:text-muted-foreground/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-steel-dark mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 text-sm
                          focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                          placeholder:text-muted-foreground/50 transition-all"
                        placeholder="(901) 555-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-steel-dark mb-1.5"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 text-sm
                        focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                        text-steel-dark transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="quote">Request a Quote</option>
                      <option value="careers">Careers / Job Application</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-steel-dark mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white/60 text-sm
                        focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/40
                        placeholder:text-muted-foreground/50 transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-steel-gradient text-white shadow-soft hover:shadow-card transition-all"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <GlassCard key={item.title} padding="md">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-steel/8 shrink-0">
                      <item.icon className="h-4 w-4 text-steel" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-steel-dark mb-1">
                        {item.title}
                      </h3>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Parent company info */}
              <GlassCard padding="md">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-accent/10 shrink-0">
                    <Globe2 className="h-4 w-4 text-amber-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-steel-dark mb-1">
                      A Metalogalva Group Company
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Part of a global network spanning 4 continents with 2,000+
                      employees worldwide.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

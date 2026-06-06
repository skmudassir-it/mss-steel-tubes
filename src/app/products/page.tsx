import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Sun,
  Ruler,
  ShieldCheck,
  Truck,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const specifications = [
  {
    icon: Ruler,
    title: "Precision Engineering",
    items: [
      "Tight dimensional tolerances for structural integrity",
      "Multiple diameter and wall thickness options",
      "Custom lengths to meet project specifications",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    items: [
      "Rigorous testing at every production stage",
      "ISO-certified manufacturing processes",
      "Full material traceability and certification",
    ],
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    items: [
      "State-of-the-art CNC tube forming lines",
      "Automated quality inspection systems",
      "Real-time production monitoring",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-steel uppercase tracking-wider mb-3">
              Products
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-steel-dark tracking-tight leading-[1.15]">
              Steel Tubes Built for
              <br />
              Solar Manufacturing
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Purpose-engineered structural steel tubes for solar panel mounting
              systems, tracker assemblies, and renewable energy infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Focus */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-steel-dark tracking-tight mb-4">
                Powering the Solar Revolution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Memphis facility is purpose-built to serve the rapidly expanding
                U.S. solar panel manufacturing industry. We produce structural steel
                tubes that form the backbone of solar mounting systems, sun-tracking
                mechanisms, and panel support structures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By manufacturing domestically, we eliminate lengthy international
                supply chains, reduce costs, and ensure American solar projects get
                the materials they need — when they need them.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Solar tracker torque tubes",
                  "Fixed-tilt mounting structures",
                  "Ground-mount support columns",
                  "Custom structural profiles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-steel shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-steel-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button render={<Link href="/contact" />} className="bg-steel-gradient text-white shadow-soft">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <GlassCard padding="lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-accent/10">
                    <Sun className="h-5 w-5 text-amber-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-dark">
                    Why U.S. Solar Manufacturers Choose MSS
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Reduced lead times with domestic production",
                    "Lower logistics costs from Memphis hub",
                    "Consistent quality backed by global expertise",
                    "Scalable capacity to grow with your demand",
                    "Technical support from experienced engineers",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-steel/8 text-xs font-bold text-steel shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Manufacturing Excellence"
            subtitle="Every tube that leaves our facility meets the highest standards of precision and quality."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {specifications.map((spec) => (
              <GlassCard key={spec.title} padding="lg" hover>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-steel/8 mb-4">
                  <spec.icon className="h-5 w-5 text-steel" />
                </div>
                <h3 className="text-lg font-bold text-steel-dark mb-3">
                  {spec.title}
                </h3>
                <ul className="space-y-2.5">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-steel/60 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-steel-gradient shadow-soft mx-auto mb-6">
              <Truck className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-steel-dark tracking-tight mb-4">
              America&apos;s Distribution Hub
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Located in Memphis — home to the world&apos;s busiest cargo airport and
              the intersection of three major interstates — our facility ensures
              rapid delivery to solar manufacturers and construction sites anywhere
              in the continental United States.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

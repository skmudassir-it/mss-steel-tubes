import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { StatsCounter, StatsRow } from "@/components/StatsCounter";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Factory,
  Sun,
  Truck,
  Globe2,
  ShieldCheck,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "State-of-the-Art Facility",
    description:
      "Our $6 million Memphis plant uses cutting-edge steel tube manufacturing technology to deliver precision products.",
  },
  {
    icon: Sun,
    title: "Solar Industry Focus",
    description:
      "Purpose-built to serve the growing U.S. solar panel manufacturing sector with high-quality structural tubes.",
  },
  {
    icon: Truck,
    title: "Central U.S. Distribution",
    description:
      "Strategically located in Memphis — America's logistics capital — for fast, cost-effective nationwide delivery.",
  },
  {
    icon: Globe2,
    title: "Global Expertise",
    description:
      "Backed by Metalogalva Group's 50+ years of steel manufacturing excellence across four continents.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-steel/8 text-steel-dark text-xs font-semibold tracking-wide mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-accent animate-pulse" />
              Now Operational in Memphis, TN
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-steel-dark tracking-tight leading-[1.1]">
              Premium Steel Tubes
              <br />
              <span className="text-steel">for America&apos;s Solar Future</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              MSS Steel Tubes USA LLC — a{" "}
              <strong>Metalogalva Group</strong> company — brings world-class steel
              tube manufacturing to Memphis with a <strong>$6 million</strong> investment
              and <strong>129 new American jobs</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                render={<Link href="/products" />}
                size="lg"
                className="bg-steel-gradient text-white shadow-soft hover:shadow-card hover:opacity-95 transition-all text-base"
              >
                Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                render={<Link href="/about" />}
                variant="outline"
                size="lg"
                className="border-steel/20 text-steel-dark hover:bg-steel/5 text-base"
              >
                About the Company
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-steel/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <GlassCard padding="lg" className="!p-6 sm:!p-10">
            <StatsRow>
              <StatsCounter value="$6M" label="Plant Investment" />
              <StatsCounter value="129" label="New Jobs Created" />
              <StatsCounter value="50+" label="Years of Expertise" />
              <StatsCounter value="4" label="Continents" />
            </StatsRow>
          </GlassCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Built for American Manufacturing"
            subtitle="Combining European engineering excellence with American production capability, right here in Memphis."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature) => (
              <GlassCard key={feature.title} hover padding="lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-steel/8 mb-5">
                  <feature.icon className="h-5 w-5 text-steel" />
                </div>
                <h3 className="text-base font-bold text-steel-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-steel-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Partner with MSS?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
              Whether you&apos;re a solar panel manufacturer looking for reliable steel
              tube supply, or a talented professional seeking a career in advanced
              manufacturing — we want to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-amber-accent text-white hover:opacity-90 shadow-soft text-base"
              >
                Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                render={<Link href="/careers" />}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-base"
              >
                View Careers <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

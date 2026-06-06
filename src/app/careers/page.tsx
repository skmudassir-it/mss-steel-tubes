import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Clock,
  DollarSign,
  Shield,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Industry-leading wages with regular performance reviews and advancement opportunities.",
  },
  {
    icon: Shield,
    title: "Full Benefits",
    description: "Comprehensive health, dental, vision, and 401(k) retirement plans for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Ongoing skills training, certifications, and career advancement pathways.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Stable shift schedules with paid time off, holidays, and flexible arrangements.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive Culture",
    description: "A diverse, respectful workplace where every team member's contribution is valued.",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative culture with regular team events and a strong sense of camaraderie.",
  },
];

const openings = [
  { title: "Production Operator", department: "Manufacturing", type: "Full-time" },
  { title: "Quality Control Inspector", department: "Quality Assurance", type: "Full-time" },
  { title: "CNC Machine Technician", department: "Manufacturing", type: "Full-time" },
  { title: "Maintenance Technician", department: "Facilities", type: "Full-time" },
  { title: "Logistics Coordinator", department: "Supply Chain", type: "Full-time" },
  { title: "Warehouse Associate", department: "Logistics", type: "Full-time" },
  { title: "Production Supervisor", department: "Manufacturing", type: "Full-time" },
  { title: "Safety Officer", department: "EHS", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-steel uppercase tracking-wider mb-3">
              Careers
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-steel-dark tracking-tight leading-[1.15]">
              Build Your Future
              <br />
              with MSS Steel Tubes
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Join a world-class manufacturing team in Memphis. We&apos;re creating{" "}
              <strong>129 new jobs</strong> and looking for dedicated professionals
              ready to grow with a global industry leader.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-steel/8 text-steel-dark text-xs font-semibold">
                <MapPin className="h-3.5 w-3.5" />
                Memphis, TN
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-accent/8 text-amber-accent text-xs font-semibold">
                <Users className="h-3.5 w-3.5" />
                129 Openings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MSS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Build Your Career at MSS?"
            subtitle="We invest in our people as much as we invest in our plant. Here's what you can expect."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((benefit) => (
              <GlassCard key={benefit.title} padding="md" hover>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-steel/8 mb-4">
                  <benefit.icon className="h-5 w-5 text-steel" />
                </div>
                <h3 className="text-base font-bold text-steel-dark mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Current Openings"
            subtitle="We're hiring across multiple departments. Find your role and apply today."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {openings.map((job) => (
              <GlassCard key={job.title} padding="sm" hover>
                <h3 className="font-bold text-steel-dark mb-1">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-steel/8 text-steel font-medium">
                    {job.department}
                  </span>
                  <span className="text-muted-foreground">{job.type}</span>
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button render={<Link href="/contact" />} className="bg-steel-gradient text-white shadow-soft">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard padding="lg" className="max-w-2xl mx-auto text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-accent/10 mx-auto mb-5">
              <Users className="h-6 w-6 text-amber-accent" />
            </div>
            <h2 className="text-2xl font-bold text-steel-dark mb-3">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We&apos;re always looking for talented individuals. Send us your resume
              and tell us how you can contribute to the MSS team.
            </p>
            <Button render={<Link href="/contact" />} variant="outline" className="border-steel/20 text-steel-dark">
              Send Open Application <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </GlassCard>
        </div>
      </section>
    </>
  );
}

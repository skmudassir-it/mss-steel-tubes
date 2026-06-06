import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Globe2,
  Building2,
  MapPin,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const timeline = [
  {
    year: "1966",
    title: "Soufer Group Founded",
    description:
      "Soufer Industrial Ltda. begins steel product manufacturing in Brazil, building a legacy of quality and innovation.",
  },
  {
    year: "1971",
    title: "Metalogalva Founded",
    description:
      "Metalogalva – Irmãos Silvas S.A. is established in Portugal, beginning a journey of global steel excellence.",
  },
  {
    year: "2010s",
    title: "Global Expansion",
    description:
      "Metalogalva Group grows to 17 industrial locations across 9 countries on 4 continents with 2,000+ employees.",
  },
  {
    year: "2023",
    title: "MSS Steel Tubes USA",
    description:
      "MSS Steel Tubes USA LLC announces $6M Memphis plant — the group's first U.S. production facility, creating 129 jobs.",
  },
];

const globalLocations = [
  { region: "Europe", countries: "Portugal, Spain" },
  { region: "South America", countries: "Brazil" },
  { region: "North America", countries: "United States" },
  { region: "Africa & Middle East", countries: "Morocco, Others" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-steel uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-steel-dark tracking-tight leading-[1.15]">
              Global Steel Expertise,<br />American Manufacturing
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              MSS Steel Tubes USA LLC is a subsidiary of Portugal-based{" "}
              <strong>MSS Steel Tubes SA</strong>, owned by{" "}
              <strong>Metalogalva Group</strong> (Portugal) in partnership with the{" "}
              <strong>Soufer Group</strong> (Brazil).
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From a Portuguese foundry to a global industrial powerhouse, our journey spans five decades of steel excellence."
                align="left"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MSS Steel Tubes USA LLC represents the latest chapter in a story
                  that began in 1971 with the founding of Metalogalva in Portugal.
                  Over 50 years, the group has grown into one of the world&apos;s premier
                  steel structure manufacturers, with industrial facilities spanning
                  four continents.
                </p>
                <p>
                  When the opportunity arose to serve the rapidly growing U.S. solar
                  panel manufacturing industry, Memphis, Tennessee, was the natural
                  choice. With its unparalleled logistics infrastructure, central
                  location, and skilled workforce, Memphis gives MSS Steel Tubes the
                  ability to deliver high-quality steel tubes faster and more
                  cost-effectively than ever before.
                </p>
                <p>
                  Our $6 million investment at 4129R Outland Road creates 129 new
                  American jobs and marks the group&apos;s first U.S.-based production
                  facility — a milestone in our global growth story.
                </p>
              </div>
            </div>

            {/* Timeline cards */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <GlassCard key={item.year} padding="md" hover>
                  <div className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-steel-gradient text-white text-sm font-bold shadow-soft">
                        {item.year.slice(2)}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border my-1" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="text-xs font-semibold text-steel uppercase tracking-wider">
                        {item.year}
                      </p>
                      <h3 className="text-base font-bold text-steel-dark mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Companies */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Backed by Industry Leaders"
            subtitle="MSS Steel Tubes USA is powered by two of the world's most respected steel manufacturing groups."
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Metalogalva */}
            <GlassCard padding="lg" hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel-gradient shadow-soft">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-steel-dark">
                    Metalogalva Group
                  </h3>
                  <p className="text-sm text-muted-foreground">Portugal · Est. 1971</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The oldest company of VigentGroup, Metalogalva operates 17 industrial
                units in 9 countries across 4 continents, occupying over 200,000 m² of
                production space and employing more than 2,000 people worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Steel Structures", "Engineering", "R&D", "Global Logistics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-steel/6 text-steel"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Button render={<a href="https://metalogalva.pt/en/" target="_blank" rel="noopener noreferrer" />} variant="outline" size="sm">
                Visit Metalogalva <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </GlassCard>

            {/* Soufer */}
            <GlassCard padding="lg" hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-accent shadow-soft">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-steel-dark">Soufer Group</h3>
                  <p className="text-sm text-muted-foreground">Brazil · Est. 1966</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Soufer Industrial Ltda. manufactures steel tubes, sheets, profiles,
                and metal tiles for industrial, agro-industrial, and civil construction.
                Operating across Brazil with facilities in São Paulo, Minas Gerais, and
                Rio de Janeiro, Soufer exports to South America, Africa, and Central America.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Steel Tubes", "Sheets & Profiles", "Metal Tiles", "Export"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-amber-accent/8 text-amber-accent"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Button render={<a href="https://www.soufer.com.br/empresa" target="_blank" rel="noopener noreferrer" />} variant="outline" size="sm">
                Visit Soufer <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Global Presence, Local Commitment"
            subtitle="With facilities spanning four continents, Metalogalva Group brings international expertise to every project."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {globalLocations.map((loc) => (
              <GlassCard key={loc.region} padding="md" hover className="text-center">
                <MapPin className="h-6 w-6 text-steel mx-auto mb-3" />
                <h4 className="font-bold text-steel-dark mb-1">{loc.region}</h4>
                <p className="text-sm text-muted-foreground">{loc.countries}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

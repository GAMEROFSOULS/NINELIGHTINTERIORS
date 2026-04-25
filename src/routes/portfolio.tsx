import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import * as React from "react";
import bedroom from "@/assets/proj1.jpg";
import kitchen from "@/assets/proj2.jpg";
import dining from "@/assets/proj3.jpg";
import lounge from "@/assets/proj4.jpg";
import bath from "@/assets/proj5.jpg";
import entry from "@/assets/portfolio-entry.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ninelight Interiors" },
      {
        name: "description",
        content:
          "Selected residential interiors by Ninelight: apartments, villas and townhouses across Europe and beyond.",
      },
      { property: "og:title", content: "Portfolio — Ninelight Interiors" },
      { property: "og:description", content: "A selected portfolio of residential interiors." },
      { property: "og:image", content: kitchen },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  {
    img: kitchen,
    title: "Atelier Marais",
    meta: "Apartment",
    year: 2025,
    location: "Paris",
    typology: "Apartment",
    slug: "atelier-marais",
    span: "md:col-span-7",
  },
  {
    img: bedroom,
    title: "Casa Sereno",
    meta: "Villa",
    year: 2024,
    location: "Comporta",
    typology: "Villa",
    slug: "casa-sereno",
    span: "md:col-span-5",
  },
  {
    img: bath,
    title: "Belgravia House",
    meta: "Townhouse",
    year: 2024,
    location: "London",
    typology: "Townhouse",
    slug: "belgravia-house",
    span: "md:col-span-5",
  },
  {
    img: dining,
    title: "House on the Heath",
    meta: "Townhouse",
    year: 2024,
    location: "London",
    typology: "Townhouse",
    slug: "house-on-heath",
    span: "md:col-span-7",
  },
  {
    img: lounge,
    title: "Sutton Mews",
    meta: "Pied-à-terre",
    year: 2023,
    location: "New York",
    typology: "Apartment",
    slug: "sutton-mews",
    span: "md:col-span-7",
  },
  {
    img: entry,
    title: "Casa de Luz",
    meta: "Country house",
    year: 2023,
    location: "Mallorca",
    typology: "Villa",
    slug: "casa-de-luz",
    span: "md:col-span-5",
  },
];

const FILTERS = ["All", "Apartment", "Villa", "Townhouse"] as const;

function PortfolioPage() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("All");
  const list = PROJECTS.filter((p) => filter === "All" || p.typology === filter);

  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl text-balance">
            Twelve years of residential commissions.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`h-9 px-5 rounded-full text-[0.7rem] tracking-[0.22em] uppercase font-medium border transition-all duration-500 ${
                  filter === f
                    ? "bg-charcoal text-bone border-charcoal"
                    : "bg-transparent text-foreground/70 border-border hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-12 gap-6 md:gap-8">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80} className={p.span}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.9,.37,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <span className="text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground">
                    {p.location} · {p.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.meta}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/contact">
            <LiquidGlassButton variant="amber" size="lg">
              Inquire about a project
            </LiquidGlassButton>
          </Link>
        </div>
      </section>
    </main>
  );
}

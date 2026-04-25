import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import * as React from "react";
import bedroom from "@/assets/proj1.jpg";
import kitchen from "@/assets/proj2.jpg";
import dining from "@/assets/proj3.jpg";
import lounge from "@/assets/proj4.jpg";
import bath from "@/assets/proj5.jpg";
import entry from "@/assets/portfolio-entry.jpg";
import materials from "@/assets/case-materials.jpg";
import hero from "@/assets/hero-living.jpg";

interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  year: number;
  typology: string;
  size: string;
  intro: string;
  story: string;
  hero: string;
  carousel: string[];
  materials: { name: string; note: string }[];
  timeline: { phase: string; detail: string }[];
}

const PROJECTS: Record<string, Project> = {
  "atelier-marais": {
    slug: "atelier-marais",
    title: "Atelier Marais",
    client: "Private",
    location: "Paris, FR",
    year: 2025,
    typology: "Apartment",
    size: "186 m²",
    intro:
      "A nineteenth-century atelier reimagined as a quiet residence for a collector of post-war ceramics.",
    story:
      "We preserved the original parquet de Versailles and the cast-iron columns, layering plastered walls in three tones of bone. The kitchen — a single Calacatta monolith — anchors the apartment, while a custom oak vitrine houses the client’s ceramics in a soft halo of warm light.",
    hero: kitchen,
    carousel: [kitchen, dining, lounge, entry],
    materials: [
      { name: "Calacatta Vagli", note: "Italian marble, honed" },
      { name: "European white oak", note: "Rift-sawn, soap-finished" },
      { name: "Limewash plaster", note: "Three custom tones" },
      { name: "Brushed bronze", note: "Hand-finished hardware" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "March – May 2024" },
      { phase: "II — Compose", detail: "June – Sept 2024" },
      { phase: "III — Make", detail: "Oct 2024 – June 2025" },
      { phase: "IV — Inhabit", detail: "July 2025" },
    ],
  },
  "casa-sereno": {
    slug: "casa-sereno",
    title: "Casa Sereno",
    client: "Family residence",
    location: "Comporta, PT",
    year: 2024,
    typology: "Villa",
    size: "412 m²",
    intro:
      "A summer house dissolved into pine forest, where every room opens onto a courtyard of stone.",
    story:
      "Casa Sereno is a study in restraint: lime-rendered walls, raw cedar ceilings, and a single long table at which fourteen can sit. Bedrooms are kept deliberately monastic — linen, wood, the sound of the sea.",
    hero: bedroom,
    carousel: [bedroom, bath, entry, lounge],
    materials: [
      { name: "Estremoz limestone", note: "Local Portuguese stone" },
      { name: "Cedar of Lebanon", note: "Vaulted ceilings, oiled" },
      { name: "Hand-woven linen", note: "Coimbra atelier" },
      { name: "Patinated copper", note: "Bath fittings" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "Jan – Mar 2023" },
      { phase: "II — Compose", detail: "Apr – Aug 2023" },
      { phase: "III — Make", detail: "Sept 2023 – May 2024" },
      { phase: "IV — Inhabit", detail: "June 2024" },
    ],
  },
  "house-on-heath": {
    slug: "house-on-heath",
    title: "House on the Heath",
    client: "Private",
    location: "London, UK",
    year: 2024,
    typology: "Townhouse",
    size: "324 m²",
    intro:
      "A Hampstead townhouse re-grounded around a single arched window and a long oak refectory table.",
    story:
      "Reception rooms were stripped back to plaster and reframed around an arched bay opening onto the Heath. We commissioned a new staircase in oiled oak that uncoils through three floors as a single sculptural gesture.",
    hero: dining,
    carousel: [dining, lounge, bedroom, kitchen],
    materials: [
      { name: "Hand-trowelled plaster", note: "Soft bone" },
      { name: "European oak", note: "Rift-sawn, oiled" },
      { name: "Linen", note: "Heavyweight, oat" },
      { name: "Antique brass", note: "Sourced ironmongery" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "Feb – Apr 2023" },
      { phase: "II — Compose", detail: "May – Aug 2023" },
      { phase: "III — Make", detail: "Sept 2023 – Aug 2024" },
      { phase: "IV — Inhabit", detail: "Sept 2024" },
    ],
  },
  "sutton-mews": {
    slug: "sutton-mews",
    title: "Sutton Mews",
    client: "Private",
    location: "New York, US",
    year: 2023,
    typology: "Pied-à-terre",
    size: "118 m²",
    intro:
      "A small West Village pied-à-terre arranged around a single curved boucle daybed and a hearth of travertine.",
    story:
      "We took the apartment back to its bones, then built up softly: travertine fireplace, oak floors with a soap finish, and a single oversized daybed for an art collector who reads.",
    hero: lounge,
    carousel: [lounge, dining, bedroom, entry],
    materials: [
      { name: "Travertine", note: "Tuscan, vein-cut" },
      { name: "Boucle wool", note: "Ivory, custom-woven" },
      { name: "Oak parquet", note: "Soaped finish" },
      { name: "Antique Persian rug", note: "Heriz, c. 1920" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "Spring 2022" },
      { phase: "II — Compose", detail: "Summer 2022" },
      { phase: "III — Make", detail: "Autumn 2022 – Summer 2023" },
      { phase: "IV — Inhabit", detail: "Autumn 2023" },
    ],
  },
  "belgravia-house": {
    slug: "belgravia-house",
    title: "Belgravia House",
    client: "Private",
    location: "London, UK",
    year: 2024,
    typology: "Townhouse",
    size: "510 m²",
    intro:
      "A grand Belgravia townhouse softened with hand-trowelled plaster, antique textiles and a freestanding stone bath.",
    story:
      "We worked alongside the original architect to bring warmth into the formal proportions: limewashed walls, a curated collection of European antiques, and a primary bath carved from a single block of Mediterranean stone.",
    hero: bath,
    carousel: [bath, bedroom, entry, lounge],
    materials: [
      { name: "Mediterranean stone", note: "Single-block bath" },
      { name: "Limewash plaster", note: "Custom mineral tone" },
      { name: "Brushed brass", note: "Sanitaryware" },
      { name: "Antique linen", note: "European, sourced" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "Jan – Apr 2023" },
      { phase: "II — Compose", detail: "May – Sept 2023" },
      { phase: "III — Make", detail: "Oct 2023 – Aug 2024" },
      { phase: "IV — Inhabit", detail: "Sept 2024" },
    ],
  },
  "casa-de-luz": {
    slug: "casa-de-luz",
    title: "Casa de Luz",
    client: "Private",
    location: "Mallorca, ES",
    year: 2023,
    typology: "Country house",
    size: "640 m²",
    intro:
      "A finca in the Tramuntana mountains, restored to embrace the soft Mediterranean light it was named for.",
    story:
      "We restored vaulted stone ceilings, opened the kitchen to a long courtyard table, and designed a sequence of quiet bedrooms each with a single window framing the olive grove beyond.",
    hero: entry,
    carousel: [entry, hero, lounge, dining],
    materials: [
      { name: "Marés stone", note: "Local Mallorcan" },
      { name: "Olive wood", note: "Reclaimed" },
      { name: "Lime plaster", note: "Sand-toned" },
      { name: "Forged iron", note: "Local blacksmith" },
    ],
    timeline: [
      { phase: "I — Listen", detail: "Spring 2022" },
      { phase: "II — Compose", detail: "Summer 2022" },
      { phase: "III — Make", detail: "Autumn 2022 – Spring 2023" },
      { phase: "IV — Inhabit", detail: "Summer 2023" },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Ninelight" }] };
    return {
      meta: [
        { title: `${p.title} — Ninelight Interiors` },
        { name: "description", content: p.intro },
        { property: "og:title", content: `${p.title} — Ninelight` },
        { property: "og:description", content: p.intro },
        { property: "og:image", content: p.hero },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl">Project not found</h1>
        <Link to="/portfolio" className="mt-8 inline-block">
          <LiquidGlassButton>Back to portfolio</LiquidGlassButton>
        </Link>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project: p } = Route.useLoaderData();
  const [idx, setIdx] = React.useState(0);

  return (
    <main className="pb-24">
      {/* Hero */}
      <section className="relative h-[100svh] overflow-hidden">
        <img src={p.hero} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-background" />
        <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24 text-bone">
          <Reveal>
            <p className="eyebrow text-bone/80">
              {p.typology} · {p.location} · {p.year}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95]">
              {p.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">The brief</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl text-balance">{p.intro}</h2>
        </Reveal>
        <Reveal
          delay={150}
          className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-foreground/80"
        >
          {p.story}
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="eyebrow">Client</dt>
              <dd className="mt-2">{p.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2">{p.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Typology</dt>
              <dd className="mt-2">{p.typology}</dd>
            </div>
            <div>
              <dt className="eyebrow">Size</dt>
              <dd className="mt-2">{p.size}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Carousel */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
            {p.carousel.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(.22,.9,.37,1)]"
                style={{ opacity: i === idx ? 1 : 0 }}
              />
            ))}
            <div className="absolute bottom-5 right-5 flex gap-2">
              {p.carousel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-bone" : "w-5 bg-bone/40"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Materials */}
      <section className="bg-secondary/50 border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Materials</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
              A library of warmth.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Every project begins as a tray of samples — stones, textiles, woods — composed and
              recomposed until it sings.
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl">
              <img src={materials} alt="Material samples" className="w-full h-auto" />
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {p.materials.map((m) => (
                <li
                  key={m.name}
                  className="flex items-baseline justify-between border-b border-border/60 pb-3"
                >
                  <span className="font-display text-lg">{m.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {m.note}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process timeline */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            {p.year - 1}–{p.year}
          </h2>
        </Reveal>
        <ol className="mt-14 grid md:grid-cols-4 gap-10">
          {p.timeline.map((s, i) => (
            <Reveal key={s.phase} delay={i * 100}>
              <li className="border-t border-foreground/30 pt-5">
                <h3 className="font-display text-xl">{s.phase}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="glass rounded-3xl p-10 md:p-16 text-center">
          <p className="eyebrow">Next chapter</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-balance">
            A home like this begins with a conversation.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/portfolio">
              <LiquidGlassButton>Back to portfolio</LiquidGlassButton>
            </Link>
            <Link to="/contact">
              <LiquidGlassButton variant="amber">Begin a project</LiquidGlassButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

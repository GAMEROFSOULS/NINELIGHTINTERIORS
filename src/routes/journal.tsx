import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import bedroom from "@/assets/proj1.jpg";
import dining from "@/assets/proj3.jpg";
import lounge from "@/assets/proj4.jpg";
import materials from "@/assets/case-materials.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal & Press — Ninelight Interiors" },
      {
        name: "description",
        content: "Notes from the studio: process, materials, and selected press features.",
      },
      { property: "og:title", content: "Journal — Ninelight" },
      { property: "og:description", content: "Notes from the studio." },
      { property: "og:image", content: dining },
    ],
  }),
  component: JournalPage,
});

const ENTRIES = [
  {
    img: materials,
    title: "On the slow making of a material library",
    date: "March 2026",
    read: "6 min",
  },
  {
    img: bedroom,
    title: "Notes from Comporta: a house dissolved into pine",
    date: "January 2026",
    read: "8 min",
  },
  { img: lounge, title: "Why we still draw by hand", date: "November 2025", read: "4 min" },
  {
    img: dining,
    title: "A conversation with our oak maker, on its tenth year",
    date: "September 2025",
    read: "5 min",
  },
];

const PRESS = [
  {
    pub: "Architectural Digest",
    title: "The boutique studio shaping a new European warmth",
    year: 2025,
  },
  { pub: "Cereal Magazine", title: "Inside Casa Sereno", year: 2024 },
  { pub: "World of Interiors", title: "A house on the Heath", year: 2024 },
  { pub: "Wallpaper*", title: "Iris Halvorsen on the unrushed home", year: 2023 },
  { pub: "Kinfolk", title: "Nine, gathered", year: 2022 },
];

function JournalPage() {
  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Journal & Press</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-3xl text-balance">
            Notes from the studio.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-20 grid md:grid-cols-2 gap-10 md:gap-14">
        {ENTRIES.map((e, i) => (
          <Reveal key={e.title} delay={i * 80}>
            <Link to="/journal" className="group block">
              <div className="overflow-hidden rounded-2xl aspect-[5/4] bg-muted">
                <img
                  src={e.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <span className="eyebrow">{e.date}</span>
                <span className="text-xs text-muted-foreground">{e.read}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-balance group-hover:text-amber transition-colors duration-500">
                {e.title}
              </h2>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-32">
        <Reveal>
          <p className="eyebrow">Press</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">Selected features.</h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {PRESS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50}>
              <div className="grid grid-cols-12 items-baseline py-6 gap-4">
                <span className="col-span-3 md:col-span-2 eyebrow">{p.year}</span>
                <span className="col-span-9 md:col-span-4 font-display text-xl">{p.pub}</span>
                <span className="col-span-12 md:col-span-6 text-muted-foreground">{p.title}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}

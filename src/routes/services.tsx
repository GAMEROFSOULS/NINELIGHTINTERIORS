import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import lounge from "@/assets/proj4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ninelight Interiors" },
      {
        name: "description",
        content:
          "Full residential design, architectural collaboration, art curation and styling. Five services from concept to completion.",
      },
      { property: "og:title", content: "Services — Ninelight" },
      { property: "og:description", content: "Five disciplines, one composed home." },
      { property: "og:image", content: lounge },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    t: "Full residential design",
    d: "Concept through completion: spatial planning, FF&E, joinery, lighting, soft furnishings and final styling.",
    bullets: ["Architectural drawings", "Custom joinery", "FF&E specification", "Site supervision"],
  },
  {
    n: "02",
    t: "Architectural collaboration",
    d: "We work alongside your appointed architect to develop interior architecture, materials and finishes from RIBA Stage 2.",
    bullets: ["Stage 2–6 input", "Material schedules", "Joinery & lighting design"],
  },
  {
    n: "03",
    t: "Custom furniture",
    d: "Pieces designed by the studio and made by our long-standing makers in oak, stone, leather and bronze.",
    bullets: ["Bespoke commissions", "Limited editions", "Single-room programmes"],
  },
  {
    n: "04",
    t: "Art curation",
    d: "We curate considered collections — from emerging makers to museum-grade works — placed with intent.",
    bullets: ["Acquisition strategy", "Hanging plans", "Lighting & framing"],
  },
  {
    n: "05",
    t: "Styling & soft launch",
    d: "Final dressing and a season of small adjustments after handover, until the home settles into use.",
    bullets: ["Move-in styling", "Photography prep", "12-month review"],
  },
];

function ServicesPage() {
  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl text-balance">
            Five disciplines, one composed home.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 max-w-2xl text-xl text-foreground/80 leading-relaxed">
            Most projects begin with full residential design. The other services stand alone for
            clients with an appointed architect, an existing home in need of curation, or a single
            room they wish to make exceptional.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-20 md:mt-28">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60} className="group">
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 transition-colors duration-500 hover:bg-secondary/40 px-2 md:px-6 -mx-2 md:-mx-6 rounded-2xl">
                <span className="md:col-span-1 font-display text-amber text-xl">{s.n}</span>
                <div className="md:col-span-5">
                  <h2 className="font-display text-3xl md:text-4xl">{s.t}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-foreground/80 text-lg leading-relaxed">{s.d}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="before:content-['·'] before:text-amber before:mr-2">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-24">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={lounge} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="relative p-10 md:p-20 text-bone">
            <Reveal>
              <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
                Tell us what you’re imagining.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-bone/80 text-lg">
                We answer every inquiry personally within five working days.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact">
                  <LiquidGlassButton variant="amber" size="lg">
                    Begin a project
                  </LiquidGlassButton>
                </Link>
                <Link to="/portfolio">
                  <LiquidGlassButton variant="dark" size="lg">
                    View portfolio
                  </LiquidGlassButton>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

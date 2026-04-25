import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import about from "@/assets/about-studio.jpg";
import materials from "@/assets/case-materials.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Ninelight Interiors" },
      {
        name: "description",
        content:
          "A boutique atelier of nine. Founded in 2014 by Iris Halvorsen — interiors composed slowly, with care.",
      },
      { property: "og:title", content: "Studio — Ninelight" },
      { property: "og:description", content: "Inside the Ninelight atelier." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Iris Halvorsen", role: "Founder, Creative Director" },
  { name: "Maxime Berger", role: "Studio Director, Paris" },
  { name: "Joana Pires", role: "Senior Designer" },
  { name: "Theo Albright", role: "Project Architect" },
  { name: "Naomi Stein", role: "Materials Lead" },
  { name: "Felix Marston", role: "Resident Draftsman" },
  { name: "Liv Andersen", role: "Project Manager" },
  { name: "Cosima Ruiz", role: "Styling & Art" },
  { name: "Inés Vidal", role: "Studio Manager" },
];

const VALUES = [
  { t: "Slowness", d: "We work at the pace the craft demands. Some rooms take a year." },
  {
    t: "Material honesty",
    d: "Stone is stone. Plaster is plaster. We don't disguise what a thing is.",
  },
  { t: "Light first", d: "Every plan begins with a study of how the sun moves through the room." },
  { t: "Privacy", d: "Most of our work never appears in print. The home belongs to the family." },
];

function AboutPage() {
  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">The studio</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl text-balance">
            We are nine, gathered around a long oak table.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-2xl text-xl text-foreground/80 leading-relaxed">
            Ninelight was founded in 2014 by Iris Halvorsen, formerly of Vincent Van Duysen and
            Studioilse. The studio takes its name from the nine hours of warm light a
            well-orientated London room receives in late autumn — and from the size of the team.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-24 md:mt-32 grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-7 overflow-hidden rounded-2xl">
          <img src={about} alt="Iris in the atelier" className="w-full h-auto" />
        </Reveal>
        <Reveal delay={150} className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">A note from Iris</p>
          <p className="mt-6 font-display text-2xl md:text-3xl leading-snug text-balance">
            “We design homes for people who intend to stay — and rooms that reward staying.”
          </p>
          <p className="mt-6 text-sm text-muted-foreground">— Iris Halvorsen, founder</p>
        </Reveal>
      </section>

      <section className="bg-secondary/50 border-y border-border/60 mt-24 md:mt-32 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Four things we hold close.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="border-t border-foreground/30 pt-5">
                  <h3 className="font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">The nine</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            A small, devoted team.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img src={materials} alt="Materials at the studio" className="w-full h-auto" />
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-7 md:col-start-6">
          <ul className="divide-y divide-border/60">
            {TEAM.map((m) => (
              <li key={m.name} className="flex items-baseline justify-between py-5">
                <span className="font-display text-2xl">{m.name}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {m.role}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="glass rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-balance">Working with us</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            We accept three to four new commissions per year. Inquiries are read by Inés in our
            London studio.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <LiquidGlassButton variant="amber">Begin a conversation</LiquidGlassButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

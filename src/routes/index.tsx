import { createFileRoute, Link } from "@tanstack/react-router";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import { Reveal } from "@/components/Reveal";
import * as React from "react";
import heroImg from "@/assets/hero-living.jpg";
import bedroom from "@/assets/proj1.jpg";
import kitchen from "@/assets/proj2.jpg";
import dining from "@/assets/proj3.jpg";
import lounge from "@/assets/proj4.jpg";
import about from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ninelight Interiors — Boutique Residential Design Studio" },
      {
        name: "description",
        content:
          "Warm, considered residences shaped by light, craft and quiet luxury. London & Lisbon.",
      },
      { property: "og:title", content: "Ninelight Interiors" },
      { property: "og:description", content: "Boutique interior design studio for refined homes." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Ethos />
      <FeaturedWork />
      <Process />
      <StudioStrip />
      <CTA />
    </main>
  );
}

function Hero() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty("--py", `${Math.min(y * 0.18, 140)}px`);
        el.style.setProperty("--ps", `${1 + Math.min(y * 0.0003, 0.06)}`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div ref={ref} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Atmospheric residential interior at dusk with warm amber light"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          style={{
            transform: "translate3d(0, var(--py,0), 0) scale(var(--ps,1))",
            transition: "transform 80ms linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-36 sm:pt-44 md:pt-56 pb-20 sm:pb-24 md:pb-40">
        <Reveal delay={100}>
          <p className="eyebrow text-bone/80">Est. 2014 — London · Lisbon</p>
        </Reveal>

        <Reveal delay={250}>
          <h1 className="mt-8 font-display text-bone text-[clamp(2.75rem,8vw,7.25rem)] leading-[0.95] max-w-[18ch] text-balance">
            Homes shaped by <em className="not-italic text-amber-soft">light</em>, craft & quiet
            luxury.
          </h1>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-10 max-w-xl text-bone/85 text-lg md:text-xl leading-relaxed">
            Ninelight is a boutique residential design studio composing warm, tactile interiors for
            collectors, founders and families.
          </p>
        </Reveal>

        <Reveal delay={750}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Link to="/portfolio" className="w-full sm:w-auto">
              <LiquidGlassButton variant="amber" size="lg" className="w-full sm:w-auto">
                View portfolio
              </LiquidGlassButton>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <LiquidGlassButton variant="dark" size="lg" className="w-full sm:w-auto">
                Begin a project →
              </LiquidGlassButton>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={1000}>
          <div className="absolute bottom-10 right-6 md:right-10 hidden md:block">
            <div className="glass rounded-2xl p-5 max-w-xs">
              <p className="eyebrow mb-2 text-foreground/70">Currently</p>
              <p className="text-sm leading-relaxed">
                Welcoming a small number of new commissions for late 2026 in Europe & the United
                States.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Residential",
    "Pied-à-terre",
    "Atelier",
    "Pied-à-mer",
    "Country house",
    "Garden suite",
    "Townhouse",
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden">
      <div
        className="flex gap-16 whitespace-nowrap [animation:marquee_40s_linear_infinite]"
        style={{ width: "200%" }}
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-foreground/40">
            {it} <span className="text-amber mx-6">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Ethos() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-48">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">Ethos — 01</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              The slow craft of a home well made.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg leading-relaxed text-foreground/80">
          <Reveal delay={150}>
            <p>
              Each Ninelight project begins with a season of listening — to the architecture, to the
              light, to the people who will live there. We design rooms that ripen with use:
              limewashed plaster, hand-loomed linen, sculpted oak, the small warmth of a brass
              detail.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              Our work spans residences from Belgravia to the Algarve, often alongside our trusted
              architects, makers and gardeners. We accept a small number of commissions each year so
              that every space we touch carries our full attention.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const works = [
    {
      img: kitchen,
      title: "Atelier Marais",
      meta: "Apartment · Paris · 2025",
      slug: "atelier-marais",
    },
    { img: bedroom, title: "Casa Sereno", meta: "Villa · Comporta · 2024", slug: "casa-sereno" },
    {
      img: dining,
      title: "House on the Heath",
      meta: "Townhouse · London · 2024",
      slug: "house-on-heath",
    },
    { img: lounge, title: "Sutton Mews", meta: "Pied-à-terre · NYC · 2023", slug: "sutton-mews" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-32">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-10 mb-12 sm:mb-14">
        <Reveal>
          <div>
            <p className="eyebrow">Selected work — 02</p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
              A small, devoted portfolio.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Link to="/portfolio">
            <LiquidGlassButton variant="light" size="md">
              All projects
            </LiquidGlassButton>
          </Link>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        {works.map((w, i) => (
          <Reveal
            key={w.slug}
            delay={i * 100}
            className={
              i === 0
                ? "md:col-span-7"
                : i === 1
                  ? "md:col-span-5"
                  : i === 2
                    ? "md:col-span-5"
                    : "md:col-span-7"
            }
          >
            <Link to="/projects/$slug" params={{ slug: w.slug }} className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[5/4] md:aspect-[4/3]">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.9,.37,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(.22,.9,.37,1)]">
                  <div className="glass rounded-xl px-4 py-3 inline-flex flex-col">
                    <span className="font-display text-xl md:text-2xl">{w.title}</span>
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground mt-1">
                      {w.meta}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "I",
      t: "Listen",
      d: "An unhurried first conversation. We visit the home and learn how you wish to live in it.",
    },
    {
      n: "II",
      t: "Compose",
      d: "Plans, palettes and a tactile material library — every surface considered, sourced or made.",
    },
    {
      n: "III",
      t: "Make",
      d: "We oversee craftsmen, fabrication and install with the patience the work deserves.",
    },
    {
      n: "IV",
      t: "Inhabit",
      d: "Styling, art curation and a final season of living adjustments. The home settles.",
    },
  ];
  return (
    <section className="bg-secondary/50 border-y border-border/60 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Process — 03</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl max-w-2xl text-balance">
            Four seasons, one home.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="border-t border-foreground/30 pt-6 pr-4 h-full">
                <span className="font-display text-amber text-sm tracking-widest">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioStrip() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-44 grid md:grid-cols-12 gap-10 items-center">
      <Reveal className="md:col-span-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={about}
            alt="Inside the Ninelight atelier"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </Reveal>
      <div className="md:col-span-5 md:col-start-8">
        <Reveal>
          <p className="eyebrow">The studio — 04</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            A small atelier of nine.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
            Founded in 2014 by Iris Halvorsen, Ninelight is a tightly held team of designers,
            project leads and a resident draftsman. We collaborate with a circle of artisans who
            have made for us, in some cases, for a decade.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8">
            <Link to="/about">
              <LiquidGlassButton variant="light">Meet the studio</LiquidGlassButton>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 -z-10">
        <img src={lounge} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-bone">
        <Reveal>
          <p className="eyebrow text-bone/70">A new commission</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl text-balance">
            Tell us about the home you’d like to live in.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact">
              <LiquidGlassButton variant="amber" size="lg">
                Begin a project
              </LiquidGlassButton>
            </Link>
            <Link to="/services">
              <LiquidGlassButton variant="dark" size="lg">
                Our services
              </LiquidGlassButton>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

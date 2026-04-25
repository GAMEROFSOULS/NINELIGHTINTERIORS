import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_12px_2px_color-mix(in_oklab,var(--amber)_60%,transparent)]" />
            <span className="font-display text-2xl tracking-tight">Ninelight Interiors</span>
          </div>
          <p className="text-pretty text-muted-foreground max-w-md leading-relaxed">
            A boutique residential design studio shaping warm, considered homes from our ateliers in
            London and Lisbon. By referral and inquiry only.
          </p>

          <form
            className="glass rounded-full p-1.5 pl-5 max-w-md flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              className="h-10 px-5 rounded-full bg-charcoal text-bone text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:bg-charcoal/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-3">
          <p className="eyebrow">Studio</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="link-underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="link-underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/journal" className="link-underline">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-3">
          <p className="eyebrow">Work</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/portfolio" className="link-underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/projects/$slug"
                params={{ slug: "atelier-marais" }}
                className="link-underline"
              >
                Case study
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline">
                Inquiries
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-3">
          <p className="eyebrow">Contact</p>
          <address className="not-italic text-sm space-y-1 text-muted-foreground">
            <p>Registered Office: 3rd Floor, 7th Block</p>
            <p>Mallareddy University, Pochampally</p>
            <p>Hyderabad - 500100</p>
            <p className="pt-2">
              <a href="mailto:navadeep@ninelightinteriors.com" className="text-foreground link-underline">
                navadeep@ninelightinteriors.com
              </a>
            </p>
            <p>+917075793396</p>
          </address>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ninelight Interiors Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="link-underline">
              Privacy
            </Link>
            <Link to="/terms" className="link-underline">
              Terms
            </Link>
            <a href="#" className="link-underline">
              Instagram
            </a>
            <a href="#" className="link-underline">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

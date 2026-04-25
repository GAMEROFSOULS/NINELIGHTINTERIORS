import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { location } = useRouterState();

  // Pages whose hero is dark (image background) — header should render in light text
  const darkHeroRoutes = ["/", "/portfolio", "/services", "/about", "/contact", "/journal"];
  const isDarkHero =
    !scrolled &&
    (location.pathname === "/" ||
      darkHeroRoutes.some(
        (r) => r !== "/" && location.pathname.startsWith(r) && location.pathname === r,
      ));
  // Only the homepage truly has a full-bleed dark hero behind the header at top.
  const overDark = !scrolled && location.pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const glassClass = overDark ? "glass-clear-dark" : "glass-clear";
  const textClass = overDark ? "text-bone" : "text-foreground";
  const mutedClass = overDark ? "text-bone/70" : "text-foreground/70";
  void isDarkHero;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(.22,.9,.37,1)]",
        scrolled ? "py-3" : "py-4 sm:py-6",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1400px] flex items-center justify-between gap-3 transition-all duration-500",
          "rounded-full px-4 sm:px-5 md:px-7 h-14 md:h-16",
          "mx-3 sm:mx-4 md:mx-6 lg:mx-10",
          glassClass,
          textClass,
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Ninelight Interiors home"
        >
          <img
            src={logo}
            alt="Ninelight Interiors Logo"
            className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
          <span className="font-display text-base sm:text-lg tracking-tight leading-none">
            Ninelight
          </span>
          <span
            className={cn(
              "font-sans text-[0.6rem] tracking-[0.3em] uppercase hidden sm:inline ml-1 leading-none",
              mutedClass,
            )}
          >
            Interiors
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(1, 5).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "link-underline text-[0.7rem] tracking-[0.24em] uppercase font-medium transition-colors",
                overDark
                  ? "text-bone/85 hover:text-bone"
                  : "text-foreground/80 hover:text-foreground",
              )}
              activeProps={{ className: overDark ? "text-bone" : "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className={cn(
              "hidden md:inline-flex h-9 lg:h-10 items-center rounded-full px-4 lg:px-5",
              "text-[0.65rem] lg:text-[0.7rem] tracking-[0.22em] uppercase font-medium",
              "transition-all duration-500 hover:scale-[1.04]",
              overDark ? "glass-clear-dark text-bone" : "glass-clear text-foreground",
            )}
          >
            Begin a project
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className={cn(
              "lg:hidden relative h-10 w-10 grid place-items-center rounded-full",
              "transition-all duration-500",
              overDark ? "glass-clear-dark" : "glass-clear",
            )}
          >
            <span className="sr-only">Menu</span>
            <span className="block w-5 h-3 relative">
              <span
                className={cn(
                  "absolute left-0 right-0 top-0 h-px transition-all duration-400 ease-[cubic-bezier(.22,.9,.37,1)]",
                  overDark ? "bg-bone" : "bg-foreground",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 bottom-0 h-px transition-all duration-400 ease-[cubic-bezier(.22,.9,.37,1)]",
                  overDark ? "bg-bone" : "bg-foreground",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet — full liquid glass overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 transition-all duration-500 ease-[cubic-bezier(.22,.9,.37,1)]",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop dim */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--charcoal) 30%, transparent), color-mix(in oklab, var(--charcoal) 55%, transparent))",
            backdropFilter: "blur(22px) saturate(160%)",
            WebkitBackdropFilter: "blur(22px) saturate(160%)",
          }}
          onClick={() => setOpen(false)}
        />

        <div
          className={cn(
            "absolute inset-x-3 sm:inset-x-4 top-20 sm:top-24 origin-top transition-all duration-500",
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-[0.98]",
          )}
        >
          <div className="glass-clear-dark rounded-3xl p-5 sm:p-7 text-bone">
            <p className="eyebrow text-bone/60">Menu</p>
            <nav className="mt-4 flex flex-col">
              {NAV.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "py-4 font-display text-3xl sm:text-4xl tracking-tight",
                    "border-b border-bone/15 last:border-0",
                    "transition-all duration-500 ease-[cubic-bezier(.22,.9,.37,1)]",
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                  activeProps={{ className: "text-amber" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-amber text-charcoal text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:scale-[1.02] transition-transform duration-500"
              >
                Begin a project
              </Link>
              <a
                href="mailto:navadeep@ninelightinteriors.com"
                className="text-center text-bone/70 text-sm link-underline"
              >
                navadeep@ninelightinteriors.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

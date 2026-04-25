import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="eyebrow text-amber">404</p>
          <h1 className="mt-6 font-display text-6xl md:text-7xl">Off the plan.</h1>
          <p className="mt-4 text-muted-foreground">
            The page you’re looking for has moved, or perhaps was never composed.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex h-12 items-center rounded-full glass px-7 text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:scale-[1.04] transition"
            >
              Return home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

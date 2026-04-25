import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Ninelight Interiors" },
      {
        name: "description",
        content: "How Ninelight Interiors collects, uses and protects your information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl">Privacy policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated April 2026</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="prose prose-neutral mt-12 space-y-6 text-foreground/85 leading-relaxed">
            <p>
              Ninelight Interiors Ltd ("we", "us") respects your privacy. This page explains what
              information we collect when you contact us, how we use it, and the choices you have.
            </p>
            <h2 className="font-display text-2xl mt-10">What we collect</h2>
            <p>
              When you submit an inquiry we collect your name, email, phone (if provided), and the
              details you share about your project. We do not use third-party advertising trackers
              on this website.
            </p>
            <h2 className="font-display text-2xl mt-10">How we use it</h2>
            <p>
              Information is used solely to respond to your inquiry, prepare a proposal if
              appropriate, and maintain a private record of our correspondence. It is never sold or
              shared with third parties.
            </p>
            <h2 className="font-display text-2xl mt-10">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your data at any time by
              writing to{" "}
              <a href="mailto:navadeep@ninelightinteriors.com" className="link-underline">
                navadeep@ninelightinteriors.com
              </a>
              .
            </p>
            <h2 className="font-display text-2xl mt-10">Cookies</h2>
            <p>
              We use a single, anonymous analytics cookie to understand how the site is used. No
              personally identifiable information is recorded.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

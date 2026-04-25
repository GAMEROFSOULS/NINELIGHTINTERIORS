import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Ninelight Interiors" },
      {
        name: "description",
        content: "Terms of use for the Ninelight Interiors website and engagement.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl">Terms of use</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated April 2026</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 space-y-6 text-foreground/85 leading-relaxed">
            <p>
              By using ninelight.co you agree to the following. The contents of this website —
              photography, text, drawings — are © Ninelight Interiors Ltd unless otherwise credited,
              and may not be reproduced without written permission.
            </p>
            <h2 className="font-display text-2xl mt-10">Engagement</h2>
            <p>
              Submitting an inquiry does not create a contract. Any engagement between Ninelight
              Interiors and a client is governed by a separate letter of appointment signed by both
              parties.
            </p>
            <h2 className="font-display text-2xl mt-10">Limitation of liability</h2>
            <p>
              The information on this website is provided in good faith but without warranty. We are
              not liable for any decisions made on the basis of content found here.
            </p>
            <h2 className="font-display text-2xl mt-10">Governing law</h2>
            <p>These terms are governed by the laws of England and Wales.</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

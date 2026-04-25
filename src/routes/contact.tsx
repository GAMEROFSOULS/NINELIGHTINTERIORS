import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import * as React from "react";
import bedroom from "@/assets/proj1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ninelight Interiors" },
      {
        name: "description",
        content:
          "Begin a conversation about your home. We answer every inquiry personally within five working days.",
      },
      { property: "og:title", content: "Contact — Ninelight" },
      { property: "og:description", content: "Begin a project with the studio." },
      { property: "og:image", content: bedroom },
    ],
  }),
  component: ContactPage,
});

const STEPS = [
  { id: "you", label: "You" },
  { id: "project", label: "The project" },
  { id: "details", label: "Details" },
] as const;

function ContactPage() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    typology: "",
    location: "",
    budget: "",
    timeline: "",
    message: "",
    file: "",
  });

  const update = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Project Details
Type: ${data.typology || "Not provided"}
Location: ${data.location || "Not provided"}
Budget: ${data.budget || "Not provided"}
Timeline: ${data.timeline || "Not provided"}

Message:
${data.message}

---
Note: Browser security prevents automatic file attachments. If you selected a file (${data.file || "none"}), please attach it manually to this email before sending.
`.trim());

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=navadeep@ninelightinteriors.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <main className="pt-40 md:pt-48 pb-24">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
        {/* Left: heading */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Begin a conversation</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl text-balance">
              Tell us about your home.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 text-foreground/80 text-lg leading-relaxed">
              Inquiries are read by Inés in our London studio. We respond personally within five
              working days, and arrange an introductory call if there is alignment.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 space-y-6 text-sm">
              <div>
                <p className="eyebrow">Registered Office</p>
                <p className="mt-2">3rd Floor, 7th Block, Mallareddy University<br />Pochampally, Hyderabad - 500100</p>
                <a href="mailto:navadeep@ninelightinteriors.com" className="link-underline mt-1 inline-block">
                  navadeep@ninelightinteriors.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="md:col-span-7">
          <Reveal delay={100}>
            <div className="glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-amber/20 grid place-items-center text-amber text-2xl font-display">
                    ✓
                  </div>
                  <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Your inquiry has been received. We will be in touch within five working days
                    from {data.email || "your email address"}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(0);
                      setData({
                        name: "",
                        email: "",
                        phone: "",
                        typology: "",
                        location: "",
                        budget: "",
                        timeline: "",
                        message: "",
                        file: "",
                      });
                    }}
                    className="mt-8 link-underline text-sm"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Stepper */}
                  <div className="flex items-center gap-2">
                    {STEPS.map((s, i) => (
                      <React.Fragment key={s.id}>
                        <button
                          type="button"
                          onClick={() => setStep(i)}
                          className={`text-[0.65rem] tracking-[0.24em] uppercase font-medium transition-colors ${i === step ? "text-amber" : "text-muted-foreground"}`}
                        >
                          {String(i + 1).padStart(2, "0")} · {s.label}
                        </button>
                        {i < STEPS.length - 1 && <span className="flex-1 h-px bg-border" />}
                      </React.Fragment>
                    ))}
                  </div>

                  {step === 0 && (
                    <div className="grid gap-5 animate-[fade-in_400ms_var(--ease-fluid)]">
                      <Field
                        label="Name"
                        required
                        value={data.name}
                        onChange={(v) => update("name", v)}
                      />
                      <Field
                        label="Email"
                        type="email"
                        required
                        value={data.email}
                        onChange={(v) => update("email", v)}
                      />
                      <Field
                        label="Phone (optional)"
                        type="tel"
                        value={data.phone}
                        onChange={(v) => update("phone", v)}
                      />
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-5 animate-[fade-in_400ms_var(--ease-fluid)]">
                      <Select
                        label="Project type"
                        value={data.typology}
                        onChange={(v) => update("typology", v)}
                        options={[
                          "Apartment",
                          "Townhouse",
                          "Villa",
                          "Country house",
                          "Pied-à-terre",
                          "Other",
                        ]}
                      />
                      <Field
                        label="Location (city, country)"
                        value={data.location}
                        onChange={(v) => update("location", v)}
                      />
                      <Select
                        label="Indicative budget"
                        value={data.budget}
                        onChange={(v) => update("budget", v)}
                        options={[
                          "Under £250k",
                          "£250k – £750k",
                          "£750k – £2m",
                          "£2m+",
                          "Prefer not to say",
                        ]}
                      />
                      <Select
                        label="Desired completion"
                        value={data.timeline}
                        onChange={(v) => update("timeline", v)}
                        options={["Within 12 months", "12–24 months", "Flexible"]}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-5 animate-[fade-in_400ms_var(--ease-fluid)]">
                      <div>
                        <label className="eyebrow block mb-3">Tell us about the home</label>
                        <textarea
                          rows={6}
                          value={data.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="The architecture, who will live there, how it should feel..."
                          className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-3">Plans or references (optional)</label>
                        <input
                          type="file"
                          onChange={(e) => update("file", e.target.files?.[0]?.name ?? "")}
                          className="block w-full text-xs text-muted-foreground file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:bg-charcoal file:text-bone file:text-[0.7rem] file:tracking-[0.22em] file:uppercase file:font-medium hover:file:bg-charcoal/90 transition-colors"
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          id="hp"
                          type="checkbox"
                          tabIndex={-1}
                          aria-hidden
                          className="hidden"
                        />
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 accent-charcoal"
                        />
                        <label
                          htmlFor="consent"
                          className="text-xs text-muted-foreground leading-relaxed"
                        >
                          I agree that Ninelight Interiors may store my information to respond to
                          this inquiry, in accordance with the privacy policy.
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      disabled={step === 0}
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
                    >
                      ← Back
                    </button>
                    {step < STEPS.length - 1 ? (
                      <LiquidGlassButton
                        type="button"
                        variant="dark"
                        onClick={() => setStep((s) => s + 1)}
                      >
                        Continue →
                      </LiquidGlassButton>
                    ) : (
                      <LiquidGlassButton type="submit" variant="amber">
                        Send inquiry
                      </LiquidGlassButton>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3">
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
      >
        <option value="">Select —</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark" | "amber";
type Size = "sm" | "md" | "lg";

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

/**
 * Apple-inspired liquid glass button.
 * - backdrop-filter blur + inner highlight + frosted border
 * - hover: cursor-follow tilt + sheen sweep + scale
 * - click: soft ripple
 * - reduced-motion: tilt/sheen disabled
 * - mobile/older: solid fallback via @supports
 */
export const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ variant = "light", size = "md", className, children, onClick, ...props }, ref) => {
    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

    const [reduced, setReduced] = React.useState(false);
    React.useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq.matches);
      const handler = () => setReduced(mq.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }, []);

    const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (reduced) return;
      const el = innerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -6;
      const ry = (px - 0.5) * 8;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };

    const handleLeave = () => {
      const el = innerRef.current;
      if (!el) return;
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = innerRef.current;
      if (el && !reduced) {
        const r = el.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(r.width, r.height);
        ripple.style.position = "absolute";
        ripple.style.left = `${e.clientX - r.left - size / 2}px`;
        ripple.style.top = `${e.clientY - r.top - size / 2}px`;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.borderRadius = "9999px";
        ripple.style.pointerEvents = "none";
        ripple.style.background =
          "radial-gradient(circle, color-mix(in oklab, var(--amber) 55%, transparent) 0%, transparent 70%)";
        ripple.style.animation = "ripple 700ms var(--ease-fluid) forwards";
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      }
      onClick?.(e);
    };

    const sizes: Record<Size, string> = {
      sm: "h-10 px-5 text-xs tracking-[0.18em]",
      md: "h-12 px-7 text-[0.78rem] tracking-[0.22em]",
      lg: "h-14 px-9 text-sm tracking-[0.24em]",
    };

    const variants: Record<Variant, string> = {
      light:
        "text-charcoal [--btn-bg:color-mix(in_oklab,var(--bone)_55%,transparent)] [--btn-border:color-mix(in_oklab,white_55%,transparent)]",
      dark: "text-bone [--btn-bg:color-mix(in_oklab,var(--charcoal)_45%,transparent)] [--btn-border:color-mix(in_oklab,white_22%,transparent)]",
      amber:
        "text-charcoal [--btn-bg:color-mix(in_oklab,var(--amber)_45%,transparent)] [--btn-border:color-mix(in_oklab,white_45%,transparent)]",
    };

    return (
      <button
        ref={innerRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        onClick={handleClick}
        className={cn(
          "group relative isolate inline-flex items-center justify-center overflow-hidden uppercase font-medium",
          "rounded-full select-none",
          "transition-[transform,box-shadow,background] duration-500 ease-[cubic-bezier(.22,.9,.37,1)]",
          "[transform:perspective(700px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))]",
          "hover:scale-[1.04] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          sizes[size],
          variants[variant],
          className,
        )}
        style={{
          background: "var(--btn-bg)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          backdropFilter: "blur(14px) saturate(160%)",
          border: "1px solid var(--btn-border)",
          boxShadow:
            "inset 0 1px 0 color-mix(in oklab, white 55%, transparent), inset 0 -1px 0 color-mix(in oklab, var(--charcoal) 14%, transparent), 0 10px 30px -12px color-mix(in oklab, var(--charcoal) 28%, transparent)",
        }}
        {...props}
      >
        {/* highlight gradient */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(120% 80% at var(--mx,50%) 0%, color-mix(in oklab, white 40%, transparent), transparent 55%)",
          }}
        />
        {/* sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -inset-x-1/3 opacity-0 group-hover:opacity-100 group-hover:[animation:sheen_1.1s_var(--ease-fluid)]"
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, color-mix(in oklab, white 60%, transparent) 50%, transparent 70%)",
            mixBlendMode: "overlay",
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>

        {/* Solid fallback for browsers without backdrop-filter */}
        <style>{`
        @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
          button[data-glass] { background: var(--bone) !important; border-color: var(--border) !important; }
        }
      `}</style>
      </button>
    );
  },
);
LiquidGlassButton.displayName = "LiquidGlassButton";

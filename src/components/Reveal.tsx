import * as React from "react";

interface RevealProps {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  y = 28,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 800ms cubic-bezier(.22,.9,.37,1) ${delay}ms, transform 900ms cubic-bezier(.22,.9,.37,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}

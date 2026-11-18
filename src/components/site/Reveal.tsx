import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, as: Tag = "div", delay = 0 }: { children: ReactNode; className?: string; as?: ElementType; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-display text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground", className)}>{children}</p>;
}

/** Editorial section header: label column + large headline on a 12-col grid. */
export function SectionHead({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-foreground pt-6 lg:grid-cols-12">
      <Label className="lg:col-span-3">{label}</Label>
      <Reveal className="lg:col-span-9">
        <h2 className="text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h2>
        {children}
      </Reveal>
    </div>
  );
}

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-10" aria-label="Main">
        <Logo />
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="link-u text-sm text-foreground">{l.label}</a></li>)}
          </ul>
          <a href="#contact" className="arrow-host inline-flex items-center gap-1 bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary">
            Let's Talk <ArrowUpRight size={15} className="arrow-nudge" />
          </a>
        </div>
        <button className="font-display text-sm font-medium uppercase tracking-[0.15em] text-foreground md:hidden py-3 pl-4" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-border px-5 pb-6 md:hidden">
          {navLinks.map((l, i) => (
            <li key={l.href} className="border-b border-border">
              <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 font-display text-2xl font-semibold text-foreground">
                <span className="text-xs text-muted-foreground">0{i + 1}</span>{l.label}
              </a>
            </li>
          ))}
          <li><a href="#contact" onClick={() => setOpen(false)} className="mt-5 inline-flex items-center gap-1 text-primary font-medium">Let's Talk <ArrowUpRight size={16} /></a></li>
        </ul>
      )}
    </header>
  );
}

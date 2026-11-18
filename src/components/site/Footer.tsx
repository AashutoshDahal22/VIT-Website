import { Logo } from "./Logo";
import { Label } from "./Reveal";
import { navLinks, contact } from "./data";
import { socials } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">A technology consultancy building software, infrastructure, and digital systems for businesses that think long-term.</p>
        </div>
        <div className="md:col-span-2"><Label>Index</Label><ul className="mt-4 space-y-2">{navLinks.map((l) => <li key={l.href}><a href={l.href} className="link-u text-foreground">{l.label}</a></li>)}</ul></div>
        <div className="md:col-span-3"><Label>Contact</Label><ul className="mt-4 space-y-2 text-foreground"><li><a href={`mailto:${contact.email}`} className="link-u">{contact.email}</a></li><li>{contact.phone}</li><li className="text-muted-foreground">{contact.address}</li></ul></div>
        <div className="md:col-span-2"><Label>Social</Label><ul className="mt-4 space-y-2">{socials.map((s) => <li key={s.label}><a href={s.href} className="link-u text-foreground">{s.label}</a></li>)}</ul></div>
      </div>
      <div className="mx-auto flex max-w-[1440px] justify-between border-t border-border px-5 py-6 font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:px-10">
        <span>© {new Date().getFullYear()} VIT</span><span>All rights reserved</span>
      </div>
    </footer>
  );
}

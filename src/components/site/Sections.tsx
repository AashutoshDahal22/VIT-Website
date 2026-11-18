import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Label, SectionHead } from "./Reveal";
import { HeroVisual, ProjectVisual } from "./Visuals";
import { principles, services, approach, projects } from "./data";

const wrap = "mx-auto max-w-[1440px] px-5 sm:px-10";
export const btnPrimary =
  "arrow-host inline-flex items-center justify-center gap-2 bg-secondary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground";
const btnText =
  "arrow-host inline-flex items-center gap-2 border-b border-foreground py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary";

export function Hero() {
  return (
    <section id="home" className={`${wrap} relative pb-20 pt-12 lg:pb-32 lg:pt-20`}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Label>VIT — Technology & Digital Solutions</Label>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-[clamp(2.75rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-foreground">
              Building technology
              <br />
              <span className="sm:pl-[12%]">for a world that</span>
              <br />
              never stands <span className="text-primary">still.</span>
            </h1>
          </Reveal>
          <Reveal delay={200} className="mt-12 grid gap-8 sm:grid-cols-12 lg:mt-16">
            <p className="text-lg leading-relaxed text-muted-foreground sm:col-span-7 sm:col-start-4">
              We help businesses navigate complexity through thoughtful engineering, intelligent
              digital solutions, and technology built for what comes next.
            </p>
            <div className="flex flex-col gap-4 sm:col-span-9 sm:col-start-4 sm:flex-row sm:items-center sm:gap-8">
              <a href="#services" className={btnPrimary}>
                Explore Services <ArrowRight size={16} className="arrow-nudge" />
              </a>
              <a href="#contact" className={btnText}>
                Start a Conversation <ArrowUpRight size={16} className="arrow-nudge" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={250} className="lg:col-span-4 lg:pt-20">
          <HeroVisual />
        </Reveal>
      </div>
      <p className="absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-90 origin-center font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground xl:block whitespace-nowrap translate-x-1/2">
        Innovation / Engineering / Technology
      </p>
      <div className="mt-16 flex justify-between border-t border-border pt-4 font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground xl:hidden">
        <span>Innovation / Engineering / Technology</span>
        <span className="hidden sm:inline">Est. VIT</span>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-card py-20 lg:py-32">
      <div className={wrap}>
        <SectionHead
          label="01 / About VIT"
          title="Good technology starts with understanding the problem."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-4">
            <p>
              <span className="text-foreground">
                VIT is a technology partner for businesses that want clarity, not complexity.
              </span>{" "}
              We listen first, then design and build software, infrastructure, and digital systems
              that fit how you actually work.
            </p>
            <p>
              From custom applications to cloud and digital transformation, we focus on practical
              solutions that keep working as you grow.
            </p>
          </Reveal>
        </div>
        <ol className="mt-20 grid border-t border-border md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 100}
              className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-display text-sm text-primary">0{i + 1} —</span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className={`${wrap} py-20 lg:py-32`}>
      <SectionHead label="02 / What We Do" title="Technology, designed around your business." />
      <ul className="mt-16 border-t border-border">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} className="border-b border-border">
            <a
              href="#contact"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-8 transition-colors hover:bg-card sm:gap-8 lg:grid-cols-12 lg:py-10"
            >
              <span className="font-display text-3xl font-light text-muted-foreground transition-colors group-hover:text-primary sm:text-5xl lg:col-span-2 lg:pl-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="transition-transform duration-500 group-hover:translate-x-2 lg:col-span-9 lg:grid lg:grid-cols-9 lg:items-center lg:gap-8">
                <h3 className="text-xl font-semibold text-foreground sm:text-3xl lg:col-span-5">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground lg:col-span-4 lg:mt-0">{s.desc}</p>
              </div>
              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
                className="arrow-nudge text-foreground group-hover:text-primary lg:col-span-1 lg:justify-self-end lg:mr-4"
              />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function ProjectBlock({
  p,
  className,
  aspect,
}: {
  p: (typeof projects)[number];
  className: string;
  aspect: string;
}) {
  return (
    <Reveal as="article" className={`group ${className}`}>
      <div className={`img-reveal overflow-hidden border border-border ${aspect}`}>
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
          <ProjectVisual variant={p.variant} />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
          <p className="mt-2 max-w-md text-muted-foreground">{p.desc}</p>
        </div>
        <div className="shrink-0 text-right font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <p>{p.category}</p>
          <p className="mt-1 text-primary">{p.year}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [a, b, c] = projects as [(typeof projects)[0], (typeof projects)[0], (typeof projects)[0]];
  return (
    <section id="projects" className="bg-card py-20 lg:py-32">
      <div className={wrap}>
        <SectionHead label="03 / What can we do?" title="From ideas to meaningful outcomes.">
          <p className="mt-6 max-w-xl text-muted-foreground">
            These are the kind of work we deliver.
          </p>
        </SectionHead>
        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-24">
          <ProjectBlock p={a} className="lg:col-span-7" aspect="aspect-[4/3]" />
          <ProjectBlock
            p={b}
            className="lg:col-span-4 lg:col-start-9 lg:mt-40"
            aspect="aspect-[3/4]"
          />
          <ProjectBlock p={c} className="lg:col-span-6 lg:col-start-4" aspect="aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className={`${wrap} py-20 lg:py-32`}>
      <SectionHead label="04 / Our Approach" title="Technology should make things simpler." />
      <ol className="mt-16 lg:ml-[25%]">
        {approach.map((t, i) => (
          <Reveal
            as="li"
            key={t}
            delay={i * 80}
            className="flex items-baseline gap-6 border-b border-border py-6 lg:py-8"
          >
            <span className="w-8 shrink-0 font-display text-sm text-primary">0{i + 1}</span>
            <span className="font-display text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              {t}
            </span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

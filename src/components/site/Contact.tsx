import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { contact } from "./data";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});
type Fields = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof Fields, string>>;

export const socials = [
  // { label: "LinkedIn", href: "#" },
  // { label: "X / Twitter", href: "#" },
  // { label: "GitHub", href: "#" },
];

const input =
  "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-lg text-foreground outline-none transition-colors focus:border-primary aria-[invalid=true]:border-destructive";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = contactSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Fields] ??= i.message;
      });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    const v = res.data;
    const body = `${v.message}\n\n— ${v.name}${v.company ? `, ${v.company}` : ""}\n${v.email}`;
    // No backend configured: hand off to the visitor's email app.
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
  }

  const field = (name: keyof Fields, label: string, type = "text", optional = false) => (
    <label className="block font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
      {label}
      {optional && " (optional)"}
      <input name={name} type={type} className={input} aria-invalid={!!errors[name]} />
      {errors[name] && (
        <span className="mt-2 block normal-case tracking-normal text-sm text-destructive">
          {errors[name]}
        </span>
      )}
    </label>
  );

  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:py-32">
      <div className="border-t border-foreground pt-6">
        <Label>05 / Contact</Label>
      </div>
      <Reveal className="mt-10">
        <h2 className="text-[clamp(2.75rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-foreground">
          Have something
          <br />
          worth <span className="text-primary">building?</span>
        </h2>
      </Reveal>
      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-lg text-muted-foreground">
          Let's turn your next challenge into something meaningful.
        </p>
        <a
          href="#contact-form"
          className="arrow-host inline-flex items-center justify-center gap-2 bg-secondary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
        >
          Start a Conversation <ArrowUpRight size={16} className="arrow-nudge" />
        </a>
      </div>

      <div className="mt-24 grid gap-16 lg:grid-cols-12">
        <dl className="space-y-8 lg:col-span-3">
          {[
            ["Email", contact.email, `mailto:${contact.email}`],
            ["Phone", contact.phone, `tel:${contact.phone.replace(/\s/g, "")}`],
            ["Office", contact.address, ""],
          ].map(([k, v, h]) => (
            <div key={k}>
              <dt>
                <Label>{k}</Label>
              </dt>
              <dd className="mt-2 text-foreground">
                {h ? (
                  <a href={h} className="link-u">
                    {v}
                  </a>
                ) : (
                  v
                )}
              </dd>
            </div>
          ))}
          {/* <div>
            <dt><Label>Social</Label></dt>
            <dd className="mt-2 flex flex-col gap-1">{socials.map((s) => <a key={s.label} href={s.href} className="link-u self-start text-foreground">{s.label}</a>)}</dd>
          </div> */}
        </dl>
        <form
          id="contact-form"
          onSubmit={submit}
          noValidate
          className="lg:col-span-8 lg:col-start-5"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            {field("name", "Name")}
            {field("email", "Email", "email")}
            {field("company", "Company", "text", true)}
            {field("subject", "Subject")}
          </div>
          <label className="mt-10 block font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Message
            <textarea
              name="message"
              rows={4}
              className={input + " resize-none"}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="mt-2 block normal-case tracking-normal text-sm text-destructive">
                {errors.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="arrow-host mt-10 inline-flex items-center gap-2 bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Send Message <ArrowUpRight size={16} className="arrow-nudge" />
          </button>
          <div aria-live="polite">
            {status === "error" && (
              <p className="mt-5 flex items-center gap-2 text-sm text-destructive">
                <AlertCircle size={16} /> Please fix the highlighted fields.
              </p>
            )}
            {status === "ok" && (
              <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" /> Your email app
                should open with your message ready — press send there to reach us.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

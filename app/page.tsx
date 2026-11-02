import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  ClipboardCheck,
  Activity,
  Users,
  Brain,
} from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";

const services = [
  {
    icon: Stethoscope,
    title: "General consultation",
    body: "A first conversation about a health concern, with time to ask questions.",
  },
  {
    icon: ClipboardCheck,
    title: "Preventive check-up",
    body: "A routine review to talk about screening, habits and follow-up.",
  },
  {
    icon: Activity,
    title: "Physical therapy",
    body: "Guided movement and exercise plans for recovery and day-to-day comfort.",
  },
  {
    icon: Users,
    title: "Family health visit",
    body: "One appointment to cover the health questions of several family members.",
  },
  {
    icon: Brain,
    title: "Mental wellbeing session",
    body: "A calm, private space to talk about stress, sleep and mood.",
  },
];

const steps = [
  {
    title: "Choose a service",
    body: "Pick the type of visit that fits what you need.",
  },
  {
    title: "Pick a day and time",
    body: "Select a preferred slot. In a real clinic this would be checked against availability.",
  },
  {
    title: "Receive confirmation",
    body: "A real clinic would confirm by email or phone. Here, the demo just shows you the summary.",
  },
];

const faqs = [
  {
    q: "Is this a real clinic?",
    a: "No. Medical Care is a fictional clinic used to demonstrate a marketing and appointment-request site. Services, hours and contact details are placeholders.",
  },
  {
    q: "What happens when I submit the form?",
    a: "The form is validated in your browser and a summary is shown on screen. Nothing is sent to a server or stored, and the entry is gone when you reload the page.",
  },
  {
    q: "Can I use this for medical advice?",
    a: "No. Nothing on this site is medical advice. For urgent problems contact your local emergency number or a qualified health professional.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[1.25fr,1fr] lg:items-center">
          <div>
            <p className="eyebrow">Sample clinic website</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Healthcare that starts with a clear, calm conversation.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A front-end demonstration of what a small clinic site can look
              like: plain language, accessible forms, and no pressure. All
              content here is fictional.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#appointment"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Try the demo form
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-card px-6 font-medium transition-colors hover:bg-muted"
              >
                See sample services
              </Link>
            </div>
          </div>

          <aside
            aria-label="What this demo includes"
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              What this demo shows
            </h2>
            <ul className="mt-5 space-y-4 text-[15px] leading-relaxed">
              <li className="border-l-2 border-primary pl-4">
                A request form with labelled fields, inline validation and
                keyboard support.
              </li>
              <li className="border-l-2 border-primary pl-4">
                A responsive layout that works from phone to desktop.
              </li>
              <li className="border-l-2 border-primary pl-4">
                Honest wording: no invented doctors, awards or patient
                numbers.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="services" className="container-page py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Sample services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Example appointment types
          </h2>
          <p className="mt-4 text-muted-foreground">
            These are placeholders for the kind of services a clinic might
            list.
          </p>
        </div>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {services.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="grid gap-2 py-6 sm:grid-cols-[3rem,1fr,2fr] sm:items-baseline sm:gap-6"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="font-sans text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted py-20">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Three simple steps
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span
                  className="font-serif text-5xl font-semibold text-primary/30"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-2 font-sans text-lg font-semibold">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="appointment"
        aria-labelledby="appointment-heading"
        className="container-page grid gap-10 py-20 lg:grid-cols-[1fr,1.2fr]"
      >
        <div>
          <p className="eyebrow">Appointment request</p>
          <h2
            id="appointment-heading"
            className="mt-3 text-3xl font-semibold sm:text-4xl"
          >
            Try the request form
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill it in with made-up details to see validation and the
            confirmation view. The form is a demo: it has no backend, so no
            data is sent or saved.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Not feeling well right now? A form is not the right tool for
            urgent problems. Contact your local emergency number.
          </p>
        </div>
        <AppointmentForm />
      </section>

      <section className="container-page pb-4" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl font-semibold">
          Questions
        </h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="text-xl text-primary transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

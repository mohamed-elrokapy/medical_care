import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Example care programs a clinic website might describe.",
};

const programs = [
  {
    name: "Preventive care",
    summary:
      "Routine reviews and screening conversations aimed at spotting issues early.",
    includes: ["Annual check-up", "Lifestyle discussion", "Follow-up planning"],
  },
  {
    name: "Rehabilitation",
    summary:
      "Structured movement and exercise support for recovery after injury or illness.",
    includes: ["Initial assessment", "Exercise plan", "Progress reviews"],
  },
  {
    name: "Family health",
    summary:
      "Coordinated appointments so that everyone in a household can be seen together.",
    includes: ["Shared scheduling", "Children and adults", "Care notes in one place"],
  },
  {
    name: "Mental wellbeing",
    summary:
      "Supportive sessions for stress, sleep and mood in a private setting.",
    includes: ["Intake conversation", "Regular sessions", "Referral guidance"],
  },
];

export default function Programs() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <p className="eyebrow">Programs</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Example care programs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            This page shows how a clinic might describe its programs. The
            programs below are placeholders and do not describe real services,
            outcomes or availability.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <ul className="divide-y divide-border border-y border-border">
          {programs.map((p) => (
            <li
              key={p.name}
              className="grid gap-4 py-8 md:grid-cols-[1fr,1.4fr,1fr] md:gap-10"
            >
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="text-muted-foreground">{p.summary}</p>
              <ul className="space-y-1.5 text-sm">
                {p.includes.map((i) => (
                  <li key={i} className="border-l-2 border-primary/40 pl-3">
                    {i}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/#appointment"
            className="inline-flex h-11 items-center rounded-md bg-primary px-5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try the demo form
          </Link>
        </div>
      </section>
    </>
  );
}

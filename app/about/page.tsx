import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ShieldCheck, Languages, Keyboard } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About this sample clinic website and its design principles.",
};

const principles = [
  {
    icon: Heart,
    title: "Plain, kind language",
    body: "Short sentences and no jargon, so people can find what they need while they may be worried.",
  },
  {
    icon: ShieldCheck,
    title: "Honest claims only",
    body: "No made-up statistics, awards or testimonials. Anything that is a placeholder says so.",
  },
  {
    icon: Keyboard,
    title: "Usable by everyone",
    body: "Every field has a label, errors are explained in words, and the whole site works with a keyboard.",
  },
  {
    icon: Languages,
    title: "Ready to adapt",
    body: "Text lives in simple data structures so a real clinic could replace it, or translate it, without touching layout code.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            About this sample site
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Medical Care is a fictional clinic. This site exists to show how a
            small healthcare marketing site and appointment-request flow can
            be built with Next.js, TypeScript and Tailwind CSS, with a focus
            on clarity and trust.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            There is no real team, address, phone number or booking system
            behind it. Those details are left out on purpose rather than
            invented.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Design principles
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon
                className="mt-1 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <dt className="font-sans text-lg font-semibold">{title}</dt>
                <dd className="mt-1 text-muted-foreground">{body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-muted py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-semibold">Built with</h2>
          <p className="mt-3 text-muted-foreground">
            Next.js (App Router, static export), TypeScript, Tailwind CSS,
            shadcn/ui primitives, React Hook Form with Zod for validation, and
            Redux Toolkit for the in-memory demo request.
          </p>
          <Link
            href="/#appointment"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try the demo form
          </Link>
        </div>
      </section>
    </>
  );
}

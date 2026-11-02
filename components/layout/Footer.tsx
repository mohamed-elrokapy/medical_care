import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[2fr,1fr]">
        <div>
          <p className="font-serif text-xl font-semibold text-primary">
            {SITE_NAME}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            This is a sample website for a fictional clinic, built as a
            front-end demonstration. It is not a real healthcare provider, and
            nothing here is medical advice. If you think you are having a
            medical emergency, contact your local emergency number.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="container-page py-4 text-xs text-muted-foreground">
          Sample content only. Contact details, staff and figures are
          intentionally not included.
        </p>
      </div>
    </footer>
  );
}

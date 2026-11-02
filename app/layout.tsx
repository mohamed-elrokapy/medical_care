import "./globals.css";
import type { Metadata } from "next";
import { StoreProvider } from "@/components/providers/StoreProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://medical-care-eta.vercel.app"),
  title: {
    default: "Medical Care | Sample clinic website",
    template: "%s | Medical Care",
  },
  description:
    "A sample clinic website with a demo appointment request form. Fictional content, built with Next.js, TypeScript and Tailwind CSS.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <StoreProvider>
          <div
            role="note"
            className="bg-primary px-4 py-2 text-center text-sm text-primary-foreground"
          >
            Demo site with fictional content. Not a real clinic.
          </div>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

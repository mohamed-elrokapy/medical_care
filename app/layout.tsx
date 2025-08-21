// import './globals.css';
// import type { Metadata } from 'next';
// import { Cairo } from 'next/font/google';
// import Script from 'next/script';
// import { StoreProvider } from '@/components/providers/StoreProvider';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import Notification from '@/components/ui/notification';

// const cairo = Cairo({
//   subsets: ['arabic', 'latin'],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: 'رعاية طبية | خدمات طبية متميزة وحجز مواعيد',
//   description: 'احصل على أفضل الخدمات الطبية مع فريق من الأطباء المتخصصين. احجز موعدك الآن واستمتع برعاية صحية شاملة ومتميزة.',
//   keywords: 'خدمات طبية, حجز مواعيد, استشارات طبية, أطباء متخصصين, رعاية صحية, فحوصات طبية, علاج طبيعي',
//   authors: [{ name: 'رعاية طبية' }],
//   creator: 'رعاية طبية',
//   publisher: 'رعاية طبية',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL('https://medicalcare.com'),
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     title: 'رعاية طبية | خدمات طبية متميزة وحجز مواعيد',
//     description: 'احصل على أفضل الخدمات الطبية مع فريق من الأطباء المتخصصين. احجز موعدك الآن واستمتع برعاية صحية شاملة ومتميزة.',
//     url: 'https://medicalcare.com',
//     siteName: 'رعاية طبية',
//     images: [
//       {
//         url: '/medical-og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'رعاية طبية - خدمات طبية متميزة',
//       },
//     ],
//     locale: 'ar_EG',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'رعاية طبية | خدمات طبية متميزة وحجز مواعيد',
//     description: 'احصل على أفضل الخدمات الطبية مع فريق من الأطباء المتخصصين. احجز موعدك الآن واستمتع برعاية صحية شاملة ومتميزة.',
//     images: ['/medical-og-image.jpg'],
//     creator: '@medicalcare',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   verification: {
//     google: 'your-google-verification-code',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ar" dir="rtl">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//       </head>
//       <body className={cairo.className}>
//         <StoreProvider>
//           <Header />
//           <main>{children}</main>
//           <Footer />
//           <Notification />
//         </StoreProvider>

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'GA_MEASUREMENT_ID', {
//               page_title: 'رعاية طبية',
//               page_location: window.location.href
//             });
//           `}
//         </Script>

//         {/* Google Tag Manager (optional alternative) */}
//         <Script id="gtm" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-XXXXXXX');
//           `}
//         </Script>

//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           />
//         </noscript>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import { StoreProvider } from "@/components/providers/StoreProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/ui/notification";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Medical Care | Distinguished Medical Services and Appointment Booking",
  description:
    "Access the best medical services with a team of specialized doctors. Book your appointment now and enjoy comprehensive and distinguished healthcare.",
  keywords:
    "medical services, appointment booking, medical consultations, specialized doctors, healthcare, medical tests, physical therapy",
  authors: [{ name: "Medical Care" }],
  creator: "Medical Care",
  publisher: "Medical Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medicalcare.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Medical Care | Distinguished Medical Services and Appointment Booking",
    description:
      "Access the best medical services with a team of specialized doctors. Book your appointment now and enjoy comprehensive and distinguished healthcare.",
    url: "https://medicalcare.com",
    siteName: "Medical Care",
    images: [
      {
        url: "/medical-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Care - Distinguished Medical Services",
      },
    ],
    locale: "en_US", // Changed from 'ar_EG' to reflect English translation
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Medical Care | Distinguished Medical Services and Appointment Booking",
    description:
      "Access the best medical services with a team of specialized doctors. Book your appointment now and enjoy comprehensive and distinguished healthcare.",
    images: ["/medical-og-image.jpg"],
    creator: "@medicalcare",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      {" "}
      {/* Changed lang to 'en' and dir to 'ltr' for English */}
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cairo.className}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Notification />
        </StoreProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'Medical Care',
              page_location: window.location.href
            });
          `}
        </Script>

        {/* Google Tag Manager (optional alternative) */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}

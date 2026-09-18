import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL('http://localhost:3000'),
  title: "Dr. M. Venkat Ramana | Botanist · Researcher · Educator",
  description:
    "Official research portfolio of Dr. M. Venkat Ramana, Assistant Professor & Head (I/C), Dept. of Botany, University College of Science, Saifabad, Osmania University. Plant systematics, Indian cycad conservation, and 7 species new to science.",
  keywords: [
    "Dr. M. Venkat Ramana",
    "Botanist",
    "Plant Systematics",
    "Osmania University",
    "Cycas",
    "Andaman and Nicobar Flora",
    "Ledebouria hyderabadensis",
    "M.V.Ramana",
    "Botanical Survey of India",
    "UCS Saifabad"
  ],
  authors: [{ name: "Dr. M. Venkat Ramana" }],
  creator: "Dr. M. Venkat Ramana",
  openGraph: {
    title: "Dr. M. Venkat Ramana | Botanical Research Portfolio",
    description:
      "20+ years of botanical fieldwork, 7 plant species new to science, Indian cycad conservation, and 42 publications by Dr. M. Venkat Ramana.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/landscapes/dsc-8774.webp",
        width: 1200,
        height: 630,
        alt: "Dr. M. Venkat Ramana during botanical fieldwork"
      }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. M. Venkat Ramana",
    jobTitle: "Assistant Professor & Head (I/C), Department of Botany",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "University College of Science, Saifabad, Osmania University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500004",
        addressCountry: "India"
      }
    },
    alumniOf: "Osmania University",
    identifier: [
      { "@type": "PropertyValue", propertyID: "ORCID", value: "0000-0003-4769-1657" },
      { "@type": "PropertyValue", propertyID: "VIDWAN", value: "610155" },
      { "@type": "PropertyValue", propertyID: "IPNI Standard Form", value: "M.V.Ramana" }
    ]
  };

  // Adds `has-motion` before paint only when JS actually runs AND the visitor
  // hasn't asked for reduced motion. Every scroll/entrance animation is
  // authored to be a no-op unless this class is present, so: no JS -> fully
  // visible page; reduced motion -> fully visible page; otherwise -> animated.
  const motionGate = `
    try {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('has-motion');
      }
    } catch (e) {}
  `;

  // The gate edits <html>'s class before hydration, so its attributes are
  // expected to differ from the server render.
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-herbarium focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollReveal />
        <Navigation />
        <main id="main" className="relative pt-16 print:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

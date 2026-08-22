import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL('http://localhost:3000'),
  title: "Dr. M. Venkat Ramana | Botanist · Researcher · Educator",
  description:
    "Official Botanical Research Portfolio of Dr. M. Venkat Ramana — Assistant Professor & Head (I/C), Dept. of Botany, University College of Science, Saifabad, Osmania University. Explorer of plant systematics, Indian cycads, and discovery of new species.",
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
    title: "Dr. M. Venkat Ramana | Immersive Botanical Research Portfolio",
    description:
      "Explore the 20+ year botanical expedition, new plant species discoveries, Indian Cycad conservation, and 42+ publications of Dr. M. Venkat Ramana.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/backgrounds/hero-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. M. Venkat Ramana Botanical Portfolio"
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
      {
        "@type": "PropertyValue",
        propertyID: "ORCID",
        value: "0000-0003-4769-1657"
      },
      {
        "@type": "PropertyValue",
        propertyID: "VIDWAN",
        value: "610155"
      },
      {
        "@type": "PropertyValue",
        propertyID: "IPNI Standard Form",
        value: "M.V.Ramana"
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#040D07] text-[#EFE8D8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

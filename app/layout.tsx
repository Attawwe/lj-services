import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "L&J:services — Aménagement Paysager Yonne (89) & Seine-et-Marne (77)",
  description:
    "L&J:services, paysagiste professionnel depuis 2017. Élagage, abattage, taille de haies, création de terrasse et entretien de jardins dans l'Yonne (89) et Seine-et-Marne (77). Devis gratuit, déplacement offert.",
  keywords: [
    "aménagement paysager",
    "élagage",
    "abattage arbre",
    "taille haies",
    "entretien jardin",
    "paysagiste Yonne",
    "paysagiste 89",
    "paysagiste Seine-et-Marne",
    "paysagiste 77",
    "création terrasse",
    "déssouchage",
    "rognage souche",
  ],
  authors: [{ name: "L&J:services" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lj-services.vercel.app" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lj-services.vercel.app",
    siteName: "L&J:services",
    title: "L&J:services — Paysagiste 89 & 77 | Devis Gratuit",
    description:
      "Paysagiste professionnel depuis 2017. Élagage, abattage, entretien jardin, création terrasse. Déplacement gratuit dans l'Yonne et Seine-et-Marne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "L&J:services — Paysagiste 89 & 77",
    description:
      "Paysagiste professionnel depuis 2017. Élagage, abattage, entretien jardin. Devis gratuit.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lj-services.vercel.app",
  name: "L&J:services",
  description:
    "Entreprise d'aménagement paysager depuis 2017. Élagage, abattage, taille de haies, entretien jardin, création terrasse.",
  url: "https://lj-services.vercel.app",
  telephone: "+33644738056",
  email: "entreprisecourieux@outlook.fr",
  foundingDate: "2017",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Yonne (89)" },
    { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
  ],
  serviceType: [
    "Abattage d'arbres",
    "Élagage",
    "Rognage de souches",
    "Déssouchage",
    "Taille de haies et arbustes",
    "Création de clôture",
    "Aménagement extérieur",
    "Entretien parc et jardin",
    "Création de terrasse",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services paysagisme",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Élagage et abattage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien jardin" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création terrasse" } },
    ],
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

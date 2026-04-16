import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "L&J Services — Paysagiste Yonne (89) & Seine-et-Marne (77) | Devis Gratuit",
  description:
    "L&J Services, paysagiste professionnel depuis 2017. Élagage, abattage, taille de haies, création de terrasse et entretien de jardins dans l'Yonne (89) et Seine-et-Marne (77). Devis gratuit, déplacement offert.",
  keywords: [
    "paysagiste Yonne",
    "paysagiste 89",
    "paysagiste Seine-et-Marne",
    "paysagiste 77",
    "élagage arbre",
    "abattage arbre",
    "taille haies",
    "entretien jardin",
    "création terrasse",
    "rognage souche",
    "déssouchage",
    "aménagement paysager",
    "aménagement extérieur",
    "clôture jardin",
  ],
  authors: [{ name: "L&J Services" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lj-services.vercel.app" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lj-services.vercel.app",
    siteName: "L&J Services",
    title: "L&J Services — Paysagiste 89 & 77 | Devis Gratuit",
    description:
      "Paysagiste professionnel depuis 2017. Élagage, abattage, entretien jardin, création terrasse. Déplacement gratuit dans l'Yonne et Seine-et-Marne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "L&J Services — Paysagiste 89 & 77",
    description:
      "Paysagiste professionnel depuis 2017. Élagage, abattage, entretien jardin. Devis gratuit.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lj-services.vercel.app/#business",
      name: "L&J Services",
      description:
        "Entreprise d'aménagement paysager depuis 2017. Élagage, abattage, taille de haies, entretien jardin, création terrasse dans l'Yonne et Seine-et-Marne.",
      url: "https://lj-services.vercel.app",
      telephone: "+33644738056",
      email: "entreprisecourieux@outlook.fr",
      foundingDate: "2017",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Yonne", alternateName: "89" },
        { "@type": "AdministrativeArea", name: "Seine-et-Marne", alternateName: "77" },
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
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://lj-services.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quelles zones géographiques couvrez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L&J Services intervient dans tout l'Yonne (89) et la Seine-et-Marne (77). Le déplacement est offert pour tout devis.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous des devis gratuits ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par téléphone, WhatsApp ou formulaire et nous vous répondons sous 24h.",
          },
        },
        {
          "@type": "Question",
          name: "Êtes-vous assurés pour les travaux d'élagage et d'abattage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, L&J Services est une entreprise professionnelle assurée en responsabilité civile pour tous les travaux d'élagage, d'abattage et d'aménagement paysager.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types d'arbres prenez-vous en charge ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous intervenons sur tous types d'arbres : chênes, peupliers, frênes, conifères, fruitiers et plus encore. Élagage, abattage complet ou rognage de souche.",
          },
        },
        {
          "@type": "Question",
          name: "Pouvez-vous créer une terrasse ou une clôture ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Nous réalisons des terrasses bois, béton ou composite, ainsi que des clôtures de toutes dimensions. Devis personnalisé sur mesure.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le délai d'intervention ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous planifions les interventions selon le planning et l'urgence. En général, nous pouvons intervenir sous 1 à 2 semaines après validation du devis.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

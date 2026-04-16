"use client";

import Image from "next/image";
import { useState } from "react";

const PHONE = "+33644738056";
const WHATSAPP = "+33644738056";
const EMAIL = "entreprisecourieux@outlook.fr";
const FORMSUBMIT = `https://formsubmit.co/${EMAIL}`;

const services = [
  {
    title: "Élagage",
    desc: "Taille raisonnée pour préserver la santé et l'esthétique de vos arbres.",
    img: "/images/service-elagage.jpg",
    icon: "🌿",
  },
  {
    title: "Abattage",
    desc: "Abattage sécurisé de tous types d'arbres, même en zones difficiles d'accès.",
    img: "/images/service-jardin.jpg",
    icon: "🪓",
  },
  {
    title: "Taille de haies",
    desc: "Taille précise de haies et arbustes pour un jardin toujours impeccable.",
    img: "/images/service-haie.jpg",
    icon: "✂️",
  },
  {
    title: "Rognage de souches",
    desc: "Élimination complète des souches par fraisage pour libérer votre terrain.",
    img: "/images/service-elagage.jpg",
    icon: "⚙️",
  },
  {
    title: "Création de terrasse",
    desc: "Terrasses bois, composite ou béton sur mesure pour sublimer votre extérieur.",
    img: "/images/service-terrasse.jpg",
    icon: "🏡",
  },
  {
    title: "Création de clôture",
    desc: "Clôtures robustes et esthétiques adaptées à votre propriété et votre style.",
    img: "/images/service-cloture.jpg",
    icon: "🔒",
  },
  {
    title: "Entretien jardin",
    desc: "Tonte, désherbage, plantation et entretien régulier de vos espaces verts.",
    img: "/images/service-jardin.jpg",
    icon: "🌱",
  },
  {
    title: "Aménagement extérieur",
    desc: "Conception et création d'espaces paysagers sur mesure, du projet à la finition.",
    img: "/images/service-haie.jpg",
    icon: "🗺️",
  },
];

const realisations = [
  { src: "/images/real-1.jpg", alt: "Élagage grand chêne Yonne" },
  { src: "/images/real-3.jpg", alt: "Taille de haie Seine-et-Marne" },
  { src: "/images/real-4.jpg", alt: "Création terrasse bois jardin" },
  { src: "/images/real-5.jpg", alt: "Abattage arbre zone résidentielle" },
  { src: "/images/real-6.jpg", alt: "Aménagement paysager complet" },
  { src: "/images/service-terrasse.jpg", alt: "Terrasse extérieure premium" },
];

const faqs = [
  {
    q: "Quelles zones géographiques couvrez-vous ?",
    a: "L&J Services intervient dans tout l'Yonne (89) et la Seine-et-Marne (77). Le déplacement est offert pour tout devis.",
  },
  {
    q: "Proposez-vous des devis gratuits ?",
    a: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par téléphone, WhatsApp ou formulaire — réponse sous 24h.",
  },
  {
    q: "Êtes-vous assurés pour les travaux d'élagage et d'abattage ?",
    a: "Oui, L&J Services est une entreprise professionnelle assurée en responsabilité civile pour tous nos travaux.",
  },
  {
    q: "Quels types d'arbres prenez-vous en charge ?",
    a: "Tous types : chênes, peupliers, frênes, conifères, fruitiers… Élagage, abattage complet ou rognage de souche.",
  },
  {
    q: "Pouvez-vous créer une terrasse ou une clôture ?",
    a: "Absolument. Terrasses bois, béton ou composite et clôtures toutes dimensions. Devis personnalisé sur mesure.",
  },
  {
    q: "Quel est le délai d'intervention ?",
    a: "Généralement 1 à 2 semaines après validation du devis, selon le planning et l'urgence de votre projet.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSent, setFormSent] = useState(false);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "var(--green-dark)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "var(--gold)", fontFamily: "var(--font-montserrat)" }}
          >
            LJ
          </div>
          <span
            className="text-white font-semibold text-lg tracking-tight hidden sm:block"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            L&amp;J Services
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition-colors hidden md:block">
            Services
          </a>
          <a href="#realisations" className="hover:text-white transition-colors hidden md:block">
            Réalisations
          </a>
          <a href="#contact" className="hover:text-white transition-colors hidden md:block">
            Contact
          </a>
          <a
            href={`tel:${PHONE}`}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--gold)",
              color: "var(--green-dark)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Appeler
          </a>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-garden.jpg"
          alt="Jardin aménagé par L&J Services — paysagiste Yonne et Seine-et-Marne"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(27, 67, 50, 0.78)" }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-20">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
            style={{
              background: "var(--gold)",
              color: "var(--green-dark)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Paysagiste depuis 2017 · Yonne 89 &amp; Seine-et-Marne 77
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Votre jardin,{" "}
            <span style={{ color: "var(--gold)" }}>notre expertise</span>
          </h1>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Élagage, abattage, entretien jardin, création de terrasse et clôture.
            Devis gratuit — déplacement offert dans l&apos;Yonne et Seine-et-Marne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
              style={{
                background: "var(--gold)",
                color: "var(--green-dark)",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Devis gratuit
            </a>
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/60 text-white hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section className="py-12" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { val: "7+", label: "ans d'expérience" },
            { val: "2", label: "départements couverts" },
            { val: "100%", label: "devis gratuits" },
            { val: "8", label: "services proposés" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--gold)", fontFamily: "var(--font-montserrat)" }}
              >
                {val}
              </div>
              <div className="text-sm text-white/70 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
            >
              Nos services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              De l&apos;élagage à la création d&apos;espaces paysagers complets,
              nous prenons en charge tous vos projets extérieurs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.35)" }} />
                  <div className="absolute top-3 left-3 text-2xl">{s.icon}</div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ───────────────────────────────────────────────── */}
      <section id="realisations" className="py-24 px-6" style={{ background: "#f0f4ef" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
            >
              Nos réalisations
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Quelques exemples de chantiers réalisés dans l&apos;Yonne et Seine-et-Marne.
              Chaque projet est unique — le vôtre le sera aussi.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realisations.map((r, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] group"
              >
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(27,67,50,0.85), transparent)" }}
                >
                  <span className="text-white text-sm font-medium">{r.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
              style={{
                background: "var(--green-dark)",
                color: "white",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Pourquoi choisir L&amp;J Services ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏅",
                title: "7 ans d'expérience",
                desc: "Entreprise fondée en 2017. Des centaines de chantiers réalisés avec sérieux.",
              },
              {
                icon: "📍",
                title: "Local & réactif",
                desc: "Basés dans l'Yonne, nous couvrons le 89 et le 77 avec des délais courts.",
              },
              {
                icon: "🆓",
                title: "Devis gratuit",
                desc: "Déplacement offert pour chaque devis. Aucun engagement, réponse sous 24h.",
              },
              {
                icon: "🛡️",
                title: "Assurés & pros",
                desc: "Nous intervenons en toute sécurité avec le matériel professionnel adapté.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
            >
              Comment ça marche ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Contact & devis",
                desc: "Appelez-nous, envoyez un WhatsApp ou remplissez le formulaire. Nous vous répondons sous 24h avec un devis gratuit.",
              },
              {
                step: "02",
                title: "Planification",
                desc: "Nous convenons ensemble d'une date d'intervention adaptée à vos contraintes et à notre planning.",
              },
              {
                step: "03",
                title: "Intervention & résultat",
                desc: "Notre équipe intervient avec le matériel professionnel. Nous laissons le chantier propre et votre jardin transformé.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
                  style={{
                    background: "var(--green-dark)",
                    color: "var(--gold)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {step}
                </div>
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 px-6" style={{ background: "#f0f4ef" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
            >
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm bg-white cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <h3
                    className="font-semibold pr-4"
                    style={{ color: "var(--green-dark)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      background: "var(--green-dark)",
                      color: "white",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </div>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Demandez votre devis gratuit
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              Décrivez votre projet et nous vous revenons sous 24h avec un devis
              détaillé. Pas d&apos;engagement, déplacement offert.
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-2xl">📞</span>
                <span>06 44 73 80 56</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp disponible</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-2xl">✉️</span>
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-2xl">🕐</span>
                <span>Lun–Sam · 8h–19h</span>
              </div>
            </div>
          </div>

          <div>
            {formSent ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Message envoyé !
                </h3>
                <p className="text-white/75">
                  Nous vous revenons sous 24h avec votre devis gratuit.
                </p>
              </div>
            ) : (
              <form
                action={FORMSUBMIT}
                method="POST"
                onSubmit={() => setFormSent(true)}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Nouveau devis L&J Services" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://lj-services.vercel.app/#contact" />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom *"
                    required
                    className="px-4 py-3 rounded-xl text-sm w-full outline-none"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone *"
                    required
                    className="px-4 py-3 rounded-xl text-sm w-full outline-none"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-xl text-sm w-full outline-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <select
                  name="service"
                  required
                  className="px-4 py-3 rounded-xl text-sm w-full outline-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <option value="" style={{ color: "#333" }}>Type de prestation *</option>
                  <option value="elagage" style={{ color: "#333" }}>Élagage</option>
                  <option value="abattage" style={{ color: "#333" }}>Abattage</option>
                  <option value="haie" style={{ color: "#333" }}>Taille de haies</option>
                  <option value="rognage" style={{ color: "#333" }}>Rognage de souche</option>
                  <option value="terrasse" style={{ color: "#333" }}>Création terrasse</option>
                  <option value="cloture" style={{ color: "#333" }}>Création clôture</option>
                  <option value="entretien" style={{ color: "#333" }}>Entretien jardin</option>
                  <option value="amenagement" style={{ color: "#333" }}>Aménagement extérieur</option>
                  <option value="autre" style={{ color: "#333" }}>Autre</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Décrivez votre projet (dimensions, accès, délai souhaité…)"
                  rows={4}
                  className="px-4 py-3 rounded-xl text-sm w-full outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
                  style={{
                    background: "var(--gold)",
                    color: "var(--green-dark)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="py-8 px-6 text-center" style={{ background: "#0f2b1e" }}>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} L&amp;J Services — Paysagiste Yonne (89) &amp;
          Seine-et-Marne (77) · Tous droits réservés
        </p>
        <p className="text-white/25 text-xs mt-2">
          Site réalisé par{" "}
          <a
            href="https://uplift-agency.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            UpLift Agency
          </a>
        </p>
      </footer>

      {/* ── WHATSAPP FLOATING ──────────────────────────────────────────── */}
      <a
        href={`https://wa.me/${WHATSAPP.replace("+", "")}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        style={{ background: "#25D366" }}
        aria-label="Contacter par WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}

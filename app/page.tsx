export default function Home() {
  const services = [
    {
      icon: "🌳",
      title: "Abattage & Élagage",
      desc: "Abattage d'arbres dangereux ou gênants, élagage et taille de formation pour redonner vie à vos arbres.",
    },
    {
      icon: "✂️",
      title: "Taille de haies & arbustes",
      desc: "Taille régulière et mise en forme de vos haies et arbustes pour un jardin net et soigné.",
    },
    {
      icon: "🪵",
      title: "Rognage & Déssouchage",
      desc: "Suppression complète des souches par rognage ou déssouchage manuel pour récupérer votre espace.",
    },
    {
      icon: "🏡",
      title: "Création de terrasse",
      desc: "Conception et réalisation de terrasses bois, dallage ou composite pour profiter pleinement de votre extérieur.",
    },
    {
      icon: "🌿",
      title: "Entretien parc & jardin",
      desc: "Entretien régulier de vos espaces verts : tonte, désherbage, taille, ramassage — tout est pris en charge.",
    },
    {
      icon: "🔨",
      title: "Création de clôture",
      desc: "Pose de clôtures bois, métal ou grillage rigide pour délimiter et sécuriser votre propriété.",
    },
    {
      icon: "🌱",
      title: "Aménagement extérieur",
      desc: "Création complète d'espaces verts : massifs, allées, gazon, plantations selon vos envies.",
    },
  ];

  const zones = [
    "Auxerre", "Sens", "Joigny", "Tonnerre", "Avallon",
    "Melun", "Meaux", "Fontainebleau", "Provins", "Montereau",
  ];

  return (
    <main className="min-h-screen bg-[#F8F9F4]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B4332]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-bold text-white text-lg tracking-wide">L&amp;J:services</span>
          </div>
          <a
            href="tel:+33661544682"
            className="hidden sm:flex items-center gap-2 bg-[#D4A017] hover:bg-[#b8880f] text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            📞 06 61 54 46 82
          </a>
          <a
            href="#contact"
            className="sm:hidden text-white text-sm font-semibold border border-white/30 px-3 py-1.5 rounded-full"
          >
            Devis gratuit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #fff 0%, transparent 40%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span>⭐</span>
            <span>Depuis 2017 · Yonne (89) & Seine-et-Marne (77)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Des artisans à votre écoute.{" "}
            <span className="text-[#D4A017]">Travail soigné.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Élagage, abattage, entretien de jardin, création de terrasse…
            L&amp;J:services intervient chez vous dans l&apos;Yonne et la Seine-et-Marne.{" "}
            <strong className="text-white">Déplacement gratuit.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33661544682"
              className="flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b8880f] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
            >
              📞 Appel gratuit — 06 61 54 46 82
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              ✉️ Demander un devis
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { num: "2017", label: "Fondée en" },
              { num: "100%", label: "Déplacement gratuit" },
              { num: "2 dép.", label: "Yonne & S-et-M" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#D4A017]">{stat.num}</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#2D6A4F] text-sm font-semibold tracking-widest uppercase mb-3">
              Ce que nous faisons
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">
              Nos domaines d&apos;expertise
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              De l&apos;abattage à la création d&apos;espaces verts, nous prenons en charge tous vos travaux paysagers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#40916C] hover:shadow-lg transition-all duration-300 bg-[#F8F9F4] hover:bg-white"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-[#1B4332] text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+33661544682"
              className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              📞 Appelez-nous pour un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section id="about" className="py-20 sm:py-28 bg-[#1B4332]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[#D4A017] text-sm font-semibold tracking-widest uppercase mb-3">
                Pourquoi L&amp;J:services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Des professionnels du paysage depuis 2017
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Fondée en 2017, L&amp;J:services accompagne les particuliers et professionnels
                dans tous leurs projets d&apos;aménagement extérieur. Notre équipe intervient
                avec soin, précision et respect de votre propriété.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "✅", text: "Devis gratuit et sans engagement" },
                  { icon: "🚗", text: "Déplacement offert dans le 89 et 77" },
                  { icon: "🔒", text: "Travail soigné, équipe sérieuse" },
                  { icon: "📅", text: "Disponibilité et respect des délais" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "7+", label: "années d'expérience" },
                { num: "2", label: "départements couverts" },
                { num: "100%", label: "devis gratuits" },
                { num: "0€", label: "frais de déplacement" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-4xl font-bold text-[#D4A017] mb-2">{stat.num}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#2D6A4F] text-sm font-semibold tracking-widest uppercase mb-3">
              Zone d&apos;intervention
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">
              Yonne (89) & Seine-et-Marne (77)
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Nous intervenons dans l&apos;ensemble des deux départements.{" "}
              <strong>Déplacement toujours gratuit.</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {zones.map((ville) => (
              <span
                key={ville}
                className="bg-[#F8F9F4] border border-[#40916C]/30 text-[#1B4332] font-medium px-4 py-2 rounded-full text-sm"
              >
                {ville}
              </span>
            ))}
            <span className="bg-[#F8F9F4] border border-dashed border-[#40916C]/30 text-gray-500 px-4 py-2 rounded-full text-sm">
              et toute la région…
            </span>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Votre commune n&apos;est pas listée ? Appelez-nous, nous intervenons probablement chez vous.
            </p>
            <a
              href="tel:+33661544682"
              className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              📞 Vérifier ma zone — 06 61 54 46 82
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-[#F8F9F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#2D6A4F] text-sm font-semibold tracking-widest uppercase mb-3">
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">
              Demandez votre devis gratuit
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Réponse rapide. Déplacement offert. Sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:+33661544682"
              className="flex flex-col items-center gap-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white p-8 rounded-2xl transition-colors text-center group"
            >
              <span className="text-4xl">📞</span>
              <span className="font-bold text-xl">06 61 54 46 82</span>
              <span className="text-white/70 text-sm">Appel direct</span>
            </a>
            <a
              href="mailto:entreprisecourieux@outlook.fr"
              className="flex flex-col items-center gap-3 bg-white hover:bg-[#F8F9F4] border-2 border-[#1B4332] text-[#1B4332] p-8 rounded-2xl transition-colors text-center"
            >
              <span className="text-4xl">✉️</span>
              <span className="font-bold text-base break-all">entreprisecourieux@outlook.fr</span>
              <span className="text-gray-500 text-sm">Email</span>
            </a>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Du lundi au samedi · 8h–19h · Déplacement gratuit (89 & 77)
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B4332] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-white text-lg">L&amp;J:services</span>
            </div>
            <div className="text-white/60 text-sm text-center">
              Aménagement Paysager · Yonne (89) & Seine-et-Marne (77) · Depuis 2017
            </div>
            <div className="flex gap-4 text-white/60 text-sm">
              <a href="tel:+33661544682" className="hover:text-white transition-colors">
                06 61 54 46 82
              </a>
              <span>·</span>
              <a href="mailto:entreprisecourieux@outlook.fr" className="hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
            © {new Date().getFullYear()} L&amp;J:services. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}

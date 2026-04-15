import Image from "next/image";

export default function Home() {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      alt: "Élagage d'arbres par un paysagiste professionnel",
      title: "Abattage & Élagage",
      desc: "Abattage d'arbres dangereux ou gênants, élagage et taille de formation.",
    },
    {
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      alt: "Taille de haies et arbustes entretien jardin",
      title: "Taille de haies & arbustes",
      desc: "Mise en forme et taille régulière de vos haies et arbustes.",
    },
    {
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
      alt: "Déssouchage et rognage de souche",
      title: "Rognage & Déssouchage",
      desc: "Suppression complète des souches pour récupérer votre espace.",
    },
    {
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80",
      alt: "Création de terrasse bois extérieur",
      title: "Création de terrasse",
      desc: "Conception et réalisation de terrasses bois, dallage ou composite.",
    },
    {
      img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&q=80",
      alt: "Entretien de parc et jardin",
      title: "Entretien parc & jardin",
      desc: "Tonte, désherbage, taille, ramassage — tout est pris en charge.",
    },
    {
      img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
      alt: "Aménagement et création paysagère extérieure",
      title: "Aménagement extérieur",
      desc: "Création complète : massifs, allées, gazon, plantations.",
    },
  ];

  const zones = [
    "Auxerre", "Sens", "Joigny", "Tonnerre", "Avallon",
    "Melun", "Meaux", "Fontainebleau", "Provins", "Montereau",
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B4332]/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#D4A017] rounded-full flex items-center justify-center text-white font-bold text-sm">
              L&amp;J
            </div>
            <div>
              <div className="font-bold text-white text-base leading-none">L&amp;J:services</div>
              <div className="text-white/60 text-xs">Aménagement Paysager</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Zones", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="tel:+33661544682"
            className="flex items-center gap-2 bg-[#D4A017] hover:bg-[#b8880f] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="hidden sm:inline">06 61 54 46 82</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end pb-16 sm:pb-24">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
            alt="Paysagiste professionnel élagage arbre jardin"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1e] via-[#1B4332]/60 to-[#1B4332]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D4A017] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              ⭐ Depuis 2017 · Déplacement Gratuit
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Des artisans
              <br />
              <span className="text-[#D4A017]">à votre écoute.</span>
              <br />
              Travail soigné.
            </h1>

            <p className="text-lg text-white/85 max-w-xl mb-8 leading-relaxed">
              Élagage, abattage, entretien jardin, création de terrasse dans l&apos;<strong className="text-white">Yonne (89)</strong> et <strong className="text-white">Seine-et-Marne (77)</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33661544682"
                className="flex items-center justify-center gap-3 bg-[#D4A017] hover:bg-[#b8880f] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-2xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Devis gratuit — 06 61 54 46 82
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm transition-all"
              >
                Voir nos services ↓
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-3 gap-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden max-w-lg">
            {[
              { num: "+7 ans", label: "d'expérience" },
              { num: "2 dép.", label: "89 & 77" },
              { num: "0€", label: "déplacement" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 px-4 text-center ${i < 2 ? "border-r border-white/20" : ""}`}
              >
                <div className="text-2xl font-bold text-[#D4A017]">{stat.num}</div>
                <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28 bg-[#F8F9F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-sm font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-[#2D6A4F]" />
              Nos prestations
              <div className="w-8 h-px bg-[#2D6A4F]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">
              Tous vos travaux paysagers
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              De l&apos;abattage à la création d&apos;espaces verts, une équipe professionnelle à votre service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1B4332] text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+33661544682"
              className="inline-flex items-center gap-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / SPLIT IMAGE */}
      <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-80 sm:h-[500px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85"
                  alt="Équipe paysagiste L&J:services au travail jardin"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#D4A017] text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold">2017</div>
                <div className="text-white/90 text-xs font-medium">Fondée en</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-sm font-bold tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-[#2D6A4F]" />
                Qui sommes-nous
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-6">
                Votre jardin mérite
                <br />
                <span className="text-[#2D6A4F]">le meilleur soin.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Depuis 2017, L&amp;J:services accompagne les particuliers et professionnels
                de l&apos;Yonne et de la Seine-et-Marne pour tous leurs travaux paysagers.
                Notre priorité : un travail soigné, une équipe à l&apos;écoute, et un résultat dont vous serez fier.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "✅", title: "Devis gratuit & sans engagement" },
                  { icon: "🚗", title: "Déplacement offert en 89 & 77" },
                  { icon: "🛡️", title: "Travail soigné, équipe assurée" },
                  { icon: "📅", title: "Disponibilité & respect des délais" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-4 bg-[#F8F9F4] rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-[#1B4332]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-14 bg-[#1B4332] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="text-center text-white/80 text-sm font-medium uppercase tracking-widest">
            Nos réalisations
          </div>
        </div>
        <div className="flex gap-4 px-4 sm:px-6 overflow-x-auto pb-2 snap-x scroll-smooth">
          {[
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
            "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&q=80",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&q=80",
            "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-none w-64 h-44 sm:w-80 sm:h-56 rounded-2xl overflow-hidden snap-start"
            >
              <Image
                src={src}
                alt={`Réalisation paysagisme L&J:services ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-20 sm:py-28 bg-[#F8F9F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#2D6A4F] text-sm font-bold tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-[#2D6A4F]" />
                Zone d&apos;intervention
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">
                Yonne & Seine-et-Marne
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Nous intervenons dans l&apos;ensemble des deux départements.{" "}
                <strong className="text-[#1B4332]">Déplacement toujours offert.</strong>
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {zones.map((ville) => (
                  <span
                    key={ville}
                    className="bg-white border border-[#40916C]/30 text-[#1B4332] font-medium px-4 py-1.5 rounded-full text-sm shadow-sm"
                  >
                    {ville}
                  </span>
                ))}
                <span className="border border-dashed border-gray-300 text-gray-400 px-4 py-1.5 rounded-full text-sm">
                  et toute la région…
                </span>
              </div>

              <a
                href="tel:+33661544682"
                className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                📍 Vérifier si j&apos;interviens chez vous
              </a>
            </div>

            {/* Map visual placeholder */}
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584822866618-20d8c4ee92f4?w=800&q=80"
                alt="Intervention paysagiste Yonne et Seine-et-Marne"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl">
                  <div className="text-4xl font-bold text-[#1B4332] mb-1">89 & 77</div>
                  <div className="text-[#2D6A4F] font-semibold text-sm">Yonne & Seine-et-Marne</div>
                  <div className="text-gray-500 text-xs mt-2">Déplacement offert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
            alt="Aménagement paysager jardin"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1B4332]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[#D4A017] text-sm font-bold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-[#D4A017]" />
            Contact
            <div className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Réponse rapide. Déplacement offert. Sans engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <a
              href="tel:+33661544682"
              className="flex flex-col items-center gap-3 bg-[#D4A017] hover:bg-[#b8880f] text-white p-8 rounded-2xl transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="font-bold text-2xl">06 61 54 46 82</span>
              <span className="text-white/80 text-sm">Appel direct</span>
            </a>
            <a
              href="mailto:entreprisecourieux@outlook.fr"
              className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 text-white p-8 rounded-2xl border border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              <span className="font-bold text-base break-all text-sm">entreprisecourieux@outlook.fr</span>
              <span className="text-white/60 text-sm">Email</span>
            </a>
          </div>

          <p className="text-white/50 text-sm mt-10">
            Lun–Sam · 8h–19h · Déplacement gratuit (89 & 77)
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F2D1E] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#D4A017] rounded-full flex items-center justify-center text-white font-bold text-sm">
                L&amp;J
              </div>
              <div>
                <div className="font-bold text-white text-base">L&amp;J:services</div>
                <div className="text-white/50 text-xs">Aménagement Paysager</div>
              </div>
            </div>
            <div className="text-white/40 text-sm text-center">
              Yonne (89) & Seine-et-Marne (77) · Depuis 2017
            </div>
            <div className="flex gap-4 text-white/50 text-sm">
              <a href="tel:+33661544682" className="hover:text-white transition-colors">06 61 54 46 82</a>
              <span>·</span>
              <a href="mailto:entreprisecourieux@outlook.fr" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
            © {new Date().getFullYear()} L&amp;J:services. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}

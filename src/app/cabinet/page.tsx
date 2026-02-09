const TRAINING_ITEMS = [
  "Diplômée de Sciences-Po (Institut d'Études Politiques de Paris)",
  "Maîtrise de droit des affaires, Paris I (Panthéon-Sorbonne)",
  "Certificat d'Aptitude à la Profession d'Avocat (CAPA)",
  "DEA de droit communautaire et européen, Paris I (Panthéon-Sorbonne)",
  "DU de Contentieux international des affaires, Paris XII (Paris-Créteil)",
  "École Internationale de Médiation et d'Arbitrage de Paris (EIMA)",
];

const ACTIVITIES = [
  "Membre de l'AJSP (juristes de Sciences-Po)",
  "Membre de l'AFAL (Association of French and Australian Lawyers)",
  "Membre médiateur de l'AME Conso",
  "Nombreuses publications dans des revues spécialisées",
  "Enseignement à l'EM Lyon – « Juriste Manager International » (2010 et 2011)",
];

const LANGUAGES = ["Français", "Anglais (bilingue, usage professionnel quotidien)", "Espagnol"];

export default function CabinetPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16">
        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Présentation et valeurs du Cabinet
          </h1>
          <p className="max-w-2xl text-sm text-slate-200">
            TEMPLE BOYER LEGAL – Cabinet d&apos;avocat d&apos;affaires international, conseil
            &amp; contentieux, à l&apos;écoute des besoins de ses clients tout au long de la
            relation d&apos;affaires.
          </p>
        </header>

        {/* Bio & contact */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Maître Sarah Temple-Boyer
            </h2>
            <p className="text-xs leading-relaxed text-slate-200">
              Sarah Temple-Boyer est avocate au Barreau de Paris depuis 2001. Elle
              est bilingue en anglais, qu&apos;elle pratique au quotidien dans le cadre
              de son activité professionnelle.
            </p>

            <div className="mt-4 space-y-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-100">Coordonnées du Cabinet</p>
              <p>Cabinet Temple Boyer Legal</p>
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                Email :
                <a
                  href="mailto:contact@templeboyer-legal.com"
                  className="ml-1 text-sky-300 underline-offset-4 hover:underline"
                >
                  contact@templeboyer-legal.com
                </a>
              </p>
              <p>Tél. : 01.77.72.66.35 ou via le formulaire de contact</p>
              <p className="text-[11px] text-slate-400">
                Le Cabinet accepte l&apos;aide juridictionnelle.
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-sky-400/25 bg-gradient-to-b from-sky-500/10 via-slate-950 to-slate-950 px-5 py-6 text-xs text-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Formation
            </p>
            <ul className="space-y-1.5">
              {TRAINING_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Expérience professionnelle
            </p>
            <p className="leading-relaxed">
              Avant de fonder le Cabinet Temple Boyer Legal, Maître Temple-Boyer a
              exercé au sein de cabinets d&apos;avocats d&apos;affaires français et
              internationaux, notamment Landwell &amp; Associés et le Cabinet Soulier
              (2001–2014).
            </p>

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Langues
            </p>
            <ul className="space-y-1.5">
              {LANGUAGES.map((lang) => (
                <li key={lang} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vision & approche */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Un cabinet d&apos;affaires à l&apos;écoute de ses clients
            </h2>
            <p className="text-xs leading-relaxed text-slate-200">
              Le Cabinet Temple Boyer Legal intervient dans tous les domaines du
              droit des affaires, en conseil comme en contentieux. Fort d&apos;une
              expérience pluridisciplinaire acquise depuis plus de quinze ans
              auprès d&apos;une clientèle française et internationale issue de secteurs
              d&apos;activité variés, le Cabinet est en mesure de traiter des dossiers
              complexes, d&apos;anticiper les risques et de proposer des stratégies
              juridiques adaptées.
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Le droit est envisagé comme un levier de croissance et non comme un
              frein. Le Cabinet se positionne en véritable « business partner »,
              pour protéger et optimiser le développement de votre activité.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-xs text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50">
              Conseil en droit des affaires
            </h3>
            <p className="leading-relaxed">
              Le Cabinet dispose d&apos;une expertise reconnue en matière de rédaction
              et de négociation de contrats, en français comme en anglais. Il
              intervient dès la phase des pourparlers pour définir, via des
              consultations juridiques ciblées, le schéma contractuel le plus
              adapté à votre projet.
            </p>
            <p className="leading-relaxed">
              Durant la phase de négociation, l&apos;objectif est de promouvoir votre
              projet dans un cadre juridique sécurisé mais flexible. Le Cabinet
              vous accompagne également pour le suivi des contrats signés
              (contract management), la prévention des risques et la mise en place
              de solutions transactionnelles.
            </p>
          </div>
        </section>

        {/* Contentieux & modes alternatifs */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-xs text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50">
              Contentieux et modes alternatifs de résolution des litiges
            </h3>
            <p className="leading-relaxed">
              Si la recherche d&apos;une solution amiable est souvent privilégiée dans
              le cadre d&apos;une relation d&apos;affaires, elle n&apos;exclut pas une défense
              énergique devant les juridictions lorsque cela s&apos;impose. Maître
              Temple-Boyer représente sa clientèle depuis près de vingt ans devant
              la plupart des juridictions et autorités spécialisées.
            </p>
            <p className="leading-relaxed">
              Les démarches, qu&apos;elles soient amiables ou judiciaires, sont
              systématiquement entreprises en concertation avec le client, afin de
              sauvegarder au mieux ses droits et intérêts.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-sky-400/25 bg-gradient-to-b from-sky-500/10 via-slate-950 to-slate-950 p-5 text-xs text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50">
              Valeurs et relation client
            </h3>
            <p className="leading-relaxed">
              Transparence, confiance et proximité avec le client sont au cœur de
              la pratique du Cabinet. Empathie, disponibilité et réactivité ne
              sont pas de simples principes affichés, mais des valeurs mises en
              œuvre au quotidien.
            </p>
            <p className="leading-relaxed">
              Le Cabinet a à cœur de maintenir un dialogue constant avec ses
              clients, en expliquant les enjeux, les options juridiques et les
              implications pratiques des décisions à prendre.
            </p>
            <p className="leading-relaxed">
              Le cabinet, situé 10 avenue de Wagram à Paris, est ouvert du lundi au
              vendredi de 9h à 12h30 et de 14h à 18h. Pour toute prise de
              rendez-vous, vous pouvez utiliser le formulaire de contact ou
              appeler le 01.43.12.38.00.
            </p>
          </div>
        </section>

        {/* Activities */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            Activités et engagements
          </h2>
          <ul className="grid gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-200 sm:grid-cols-2">
            {ACTIVITIES.map((activity) => (
              <li key={activity} className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        <section className="border-t border-white/10 pt-6 text-[11px] text-slate-400">
          <p>
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
      </main>
    </div>
  );
}

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
    <div className="app-shell">
      <main className="app-main">
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Présentation et valeurs du Cabinet
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            TEMPLE BOYER LEGAL – Cabinet d&apos;avocat d&apos;affaires international, conseil
            &amp; contentieux, à l&apos;écoute des besoins de ses clients tout au long de la
            relation d&apos;affaires.
          </p>
        </header>

        {/* Bio & contact */}
        <section className="app-panel grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Maître Sarah Temple-Boyer
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Sarah Temple-Boyer est avocate au Barreau de Paris depuis 2001. Elle
              est bilingue en anglais, qu&apos;elle pratique au quotidien dans le cadre
              de son activité professionnelle.
            </p>

            <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-800">
              <p className="font-semibold text-slate-900">Coordonnées du Cabinet</p>
              <p>Cabinet Temple Boyer Legal</p>
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                Email :
                <a
                  href="mailto:contact@templeboyer-legal.com"
                  className="ml-1 text-amber-700 underline-offset-4 hover:underline"
                >
                  contact@templeboyer-legal.com
                </a>
              </p>
              <p>Tél. : 01.77.72.66.35 ou via le formulaire de contact</p>
              <p className="text-[11px] text-slate-500">
                Le Cabinet accepte l&apos;aide juridictionnelle.
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white/90 px-5 py-6 text-xs text-slate-800">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Formation
            </p>
            <ul className="space-y-1.5">
              {TRAINING_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Expérience professionnelle
            </p>
            <p className="leading-relaxed text-slate-700">
              Avant de fonder le Cabinet Temple Boyer Legal, Maître Temple-Boyer a
              exercé au sein de cabinets d&apos;avocats d&apos;affaires français et
              internationaux, notamment Landwell &amp; Associés et le Cabinet Soulier
              (2001–2014).
            </p>

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Langues
            </p>
            <ul className="space-y-1.5">
              {LANGUAGES.map((lang) => (
                <li key={lang} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vision & approche */}
        <section className="app-panel grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Un cabinet d&apos;affaires à l&apos;écoute de ses clients
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Le Cabinet Temple Boyer Legal intervient dans tous les domaines du
              droit des affaires, en conseil comme en contentieux. Fort d&apos;une
              expérience pluridisciplinaire acquise depuis plus de quinze ans
              auprès d&apos;une clientèle française et internationale issue de secteurs
              d&apos;activité variés, le Cabinet est en mesure de traiter des dossiers
              complexes, d&apos;anticiper les risques et de proposer des stratégies
              juridiques adaptées.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              Le droit est envisagé comme un levier de croissance et non comme un
              frein. Le Cabinet se positionne en véritable « business partner »,
              pour protéger et optimiser le développement de votre activité.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
            <h3 className="text-sm font-semibold text-slate-900">
              Conseil en droit des affaires
            </h3>
            <p className="leading-relaxed text-slate-700">
              Le Cabinet dispose d&apos;une expertise reconnue en matière de rédaction
              et de négociation de contrats, en français comme en anglais. Il
              intervient dès la phase des pourparlers pour définir, via des
              consultations juridiques ciblées, le schéma contractuel le plus
              adapté à votre projet.
            </p>
            <p className="leading-relaxed text-slate-700">
              Durant la phase de négociation, l&apos;objectif est de promouvoir votre
              projet dans un cadre juridique sécurisé mais flexible. Le Cabinet
              vous accompagne également pour le suivi des contrats signés
              (contract management), la prévention des risques et la mise en place
              de solutions transactionnelles.
            </p>
          </div>
        </section>

        {/* Contentieux & modes alternatifs */}
        <section className="app-panel grid gap-10 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
            <h3 className="text-sm font-semibold text-slate-900">
              Contentieux et modes alternatifs de résolution des litiges
            </h3>
            <p className="leading-relaxed text-slate-700">
              Si la recherche d&apos;une solution amiable est souvent privilégiée dans
              le cadre d&apos;une relation d&apos;affaires, elle n&apos;exclut pas une défense
              énergique devant les juridictions lorsque cela s&apos;impose. Maître
              Temple-Boyer représente sa clientèle depuis près de vingt ans devant
              la plupart des juridictions et autorités spécialisées.
            </p>
            <p className="leading-relaxed text-slate-700">
              Les démarches, qu&apos;elles soient amiables ou judiciaires, sont
              systématiquement entreprises en concertation avec le client, afin de
              sauvegarder au mieux ses droits et intérêts.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-amber-100 bg-amber-50/90 p-5 text-xs text-slate-900">
            <h3 className="text-sm font-semibold text-slate-900">
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
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Activités et engagements
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ACTIVITIES.map((activity) => (
              <li
                key={activity}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 text-xs text-slate-800"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
          <p>
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
      </main>
    </div>
  );
}

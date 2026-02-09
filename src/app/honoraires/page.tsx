import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../lib/sanity.client";

export default async function HonorairesPage() {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  const addressParts = address.split(",").map((part) => part.trim());
  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const addressLine1 = isDefaultAddress
    ? "10, avenue de Wagram"
    : addressParts[0] || "10, avenue de Wagram";
  const addressLine2 = addressParts[1] || "75008 Paris";
  const postalAddress = address || DEFAULT_SITE_SETTINGS.address!;
  return (
    <div className="app-shell">
      <main className="app-main">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        {/* En-tête */}
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Honoraires
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Les honoraires du Cabinet Temple Boyer Legal sont fixés en toute
            transparence avec le client, après acceptation d&apos;un devis, dans le
            respect des règles déontologiques de la profession d&apos;avocat.
          </p>
        </header>

        {/* Coordonnées */}
        <section className="app-panel space-y-3 text-xs text-slate-800">
          <p className="font-semibold text-slate-900">Cabinet Temple Boyer Legal</p>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p>
            Email :
            <a
              href={`mailto:${contactEmail}`}
              className="ml-1 text-amber-700 underline-offset-4 hover:underline"
            >
              {contactEmail}
            </a>
          </p>
        </section>

        {/* Principe général */}
        <section className="app-panel space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Dès le premier rendez-vous, téléphonique ou physique, gratuit, et après
            une étude préliminaire du dossier, le Cabinet Temple Boyer Legal
            propose, lorsque le type de dossier s&apos;y prête, un choix entre
            plusieurs formules de facturation. L&apos;objectif est de retenir, en
            concertation avec le client, la formule d&apos;honoraires la plus adaptée
            et la plus avantageuse.
          </p>
          <p>
            Les modalités de fixation des honoraires font l&apos;objet d&apos;une
            convention d&apos;honoraires écrite entre le Cabinet et le client. Trois
            grandes formules peuvent être proposées.
          </p>
        </section>

        {/* Honoraires au temps passé */}
        <section className="app-panel space-y-3 text-sm text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            1. Les honoraires au temps passé
          </h2>
          <p>
            Les honoraires sont calculés sur la base du temps effectivement passé
            : nombre d&apos;heures consacrées au traitement du dossier multiplié par un
            taux horaire.
          </p>
          <p>
            Ce taux horaire est déterminé au cas par cas, en fonction de la
            nature et de la complexité des tâches à accomplir. Il varie
            généralement entre <span className="font-semibold">200 € et 350 € HT</span>{' '}
            de l&apos;heure pour les prestations à forte valeur ajoutée, telles que :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-xs text-slate-700">
            <li>consultations juridiques,</li>
            <li>
              analyse juridique d&apos;une situation, évaluation des risques et
              préconisations,
            </li>
            <li>
              appréciation stratégique dans le cadre d&apos;un précontentieux ou d&apos;un
              contentieux,
            </li>
            <li>rédaction de contrats et d&apos;actes de procédure,</li>
            <li>audiences de plaidoirie…</li>
          </ul>
          <p>
            Pour des tâches de moindre valeur ajoutée, mais indispensables au bon
            déroulement des missions (recherches documentaires, temps de
            déplacement, interfaces téléphoniques avec les autorités ou les
            juridictions…), le Cabinet applique un taux horaire réduit, précisé
            dans la convention.
          </p>
          <p className="text-xs text-slate-600">
            Lors de l&apos;établissement du devis, et sur la base des informations
            communiquées, le Cabinet détaille, dans toute la mesure du possible,
            les coûts anticipés par type de prestations envisagées.
          </p>
        </section>

        {/* Honoraire au forfait */}
        <section className="app-panel space-y-3 text-sm text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            2. L&apos;honoraire au forfait
          </h2>
          <p>
            Cette formule est privilégiée lorsque le déroulement de la procédure
            présente peu d&apos;aléas. Elle permet de convenir, dès l&apos;origine, d&apos;un
            montant forfaitaire couvrant l&apos;ensemble du traitement du dossier.
          </p>
          <p>
            Le forfait est défini de manière claire dans la convention
            d&apos;honoraires, en précisant l&apos;étendue exacte de la mission couverte.
          </p>
        </section>

        {/* Honoraire de résultat */}
        <section className="app-panel space-y-3 text-sm text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            3. Les honoraires de résultat
          </h2>
          <p>
            L&apos;honoraire de résultat se calcule sur le gain, l&apos;économie ou
            l&apos;avantage procuré au client. Il s&apos;agit d&apos;un complément de
            rémunération qui s&apos;ajoute :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-xs text-slate-700">
            <li>soit à un honoraire au temps passé ;</li>
            <li>soit à un honoraire forfaitaire.</li>
          </ul>
          <p>
            Il ne peut en aucun cas constituer le seul mode de rémunération de
            l&apos;avocat. L&apos;honoraire de résultat n&apos;est dû que s&apos;il a été convenu
            expressément par écrit entre le client et le Cabinet, dans une
            convention d&apos;honoraires.
          </p>
        </section>

        {/* Protection juridique & remboursement */}
        <section className="app-panel space-y-4 text-sm leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Assurance protection juridique
            </h2>
            <p>
              Si vous bénéficiez d&apos;une assurance protection juridique dans le
              cadre d&apos;un contrat d&apos;assurance, les honoraires du Cabinet de Maître
              Sarah Temple-Boyer peuvent être pris en charge, partiellement ou
              intégralement, par votre compagnie d&apos;assurance.
            </p>
            <p>
              Même en cas de prise en charge, vous demeurez libre de choisir votre
              avocat.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Remboursement des honoraires par la partie adverse
            </h2>
            <p>
              À l&apos;issue d&apos;un contentieux, le juge peut décider de condamner la
              partie adverse à vous indemniser pour tout ou partie des honoraires
              et frais engagés.
            </p>
            <p className="text-xs text-slate-600">
              En matière civile, cette indemnisation est prévue par l&apos;article 700
              du Code de procédure civile ; en matière pénale, par l&apos;article 475-1
              du Code de procédure pénale.
            </p>
          </div>
        </section>

        {/* Bas de page simplifié */}
        <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
          <p>
            Maître Sarah Temple-Boyer – Avocat d&apos;affaires international, Paris –
            Cabinet Temple Boyer Legal, {postalAddress} –
            {contactEmail}
          </p>
          <p className="mt-1">
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
        </div>
      </main>
    </div>
  );
}

import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../lib/sanity.client";

export default async function MentionsLegalesPage() {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const postalAddress = address || DEFAULT_SITE_SETTINGS.address!;
  const phone = siteSettings.phone ?? DEFAULT_SITE_SETTINGS.phone;

  return (
    <div className="app-shell">
      <main id="main-content" className="app-main">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
          {/* En-tête */}
          <header className="app-panel space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Temple Boyer Legal
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Mentions légales
            </h1>
          </header>

          {/* Identité de l'éditeur du site */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              1. Éditeur du site
            </h2>
            <p>
              Le présent site est édité par Maître <span className="font-semibold">Sarah
              TEMPLE-BOYER</span>, avocat au Barreau de Paris.
            </p>
            <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
              <li>Forme juridique : entrepreneur individuel</li>
              <li>SIREN : 438 307 316</li>
              <li>SIRET (établissement principal) : 438 307 316 00069</li>
              <li>Code APE / NAF : 69.10Z – Activités juridiques</li>
              <li>
                Adresse professionnelle :{" "}
                {isDefaultAddress
                  ? "10, avenue de Wagram, 75008 Paris, France"
                  : `${postalAddress}, France`}
              </li>
              <li>
                Adresse e-mail :
                <a
                  href={`mailto:${contactEmail}`}
                  className="ml-1 text-slate-900 underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </a>
              </li>
              <li>Téléphone : {phone}</li>
              <li>Barreau d&apos;inscription : Barreau de Paris</li>
            </ul>
          </section>

          {/* Hébergeur */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              2. Hébergeur du site
            </h2>
            <p>
              Le site est hébergé sur les serveurs de la société <span className="font-semibold">OVHcloud</span> :
            </p>
            <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
              <li>Raison sociale : OVHcloud</li>
              <li>Adresse : 2, rue Kellermann, 59100 Roubaix, France</li>
              <li>Téléphone : +33 (0)9 72 10 10 07</li>
              <li>Site internet : https://www.ovhcloud.com</li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments figurant sur ce site (textes, photographies,
              illustrations, logos, contenus éditoriaux, structure générale, etc.)
              est protégé par le droit de la propriété intellectuelle et est, sauf
              mention contraire, la propriété exclusive de Maître Sarah
              TEMPLE-BOYER ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation, totale ou partielle, de ces éléments, par quelque moyen
              que ce soit, sans l&apos;autorisation écrite préalable de l&apos;éditeur est
              interdite et pourrait constituer une contrefaçon au sens des articles
              L. 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Données personnelles */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              4. Données personnelles
            </h2>
            <p>
              Le Cabinet Temple Boyer Legal attache une importance particulière à la
              protection des données personnelles et au respect de la vie privée.
              Pour toute information relative aux traitements de données mis en
              œuvre via ce site, aux finalités poursuivies et à vos droits (accès,
              rectification, effacement, limitation, opposition, portabilité,
              directives post-mortem), vous êtes invité à consulter la page dédiée :
            </p>
            <p>
              <a
                href="/confidentialite"
                className="text-sky-300 underline-offset-4 hover:underline"
              >
                Politique de confidentialité et de protection des données
                personnelles
              </a>
            </p>
          </section>

          {/* Responsabilité et contenu du site */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              5. Responsabilité et contenu du site
            </h2>
            <p>
              Les informations figurant sur ce site sont fournies à titre indicatif
              et général. Elles ne constituent en aucun cas une consultation
              juridique personnalisée, ni un conseil juridique engageant la
              responsabilité de l&apos;avocat.
            </p>
            <p>
              Malgré le soin apporté à la rédaction et à la mise à jour des
              contenus, Maître Sarah TEMPLE-BOYER ne saurait être tenue responsable
              des erreurs, omissions ou résultats qui pourraient être obtenus par
              l&apos;usage de ces informations.
            </p>
            <p>
              Pour toute situation particulière, il est recommandé de solliciter un
              avis personnalisé en prenant directement contact avec le Cabinet.
            </p>
          </section>

          {/* Crédits techniques et visuels */}
          <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
            <h2 className="text-base font-semibold text-slate-950">
              6. Crédits techniques et visuels
            </h2>
            <p>
              Le présent site est développé sur une base technique moderne (framework
              Next.js). Dans le cadre du site antérieur, la plateforme d&apos;édition
              avait été développée par la société Jurihub.
            </p>
            <p>
              Les photographies et visuels utilisés sur le site proviennent de
              banques d&apos;images ou de prises de vues spécifiques. Toute réutilisation
              nécessite une autorisation préalable.
            </p>
          </section>

          {/* Bas de page simplifié */}
          <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
            <p>
              Maître Sarah Temple-Boyer – Avocat d&apos;affaires international, Paris –
              Cabinet Temple Boyer Legal, {postalAddress} – {contactEmail}
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

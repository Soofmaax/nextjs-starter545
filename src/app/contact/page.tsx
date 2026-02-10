import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../lib/sanity.client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Coordonnées du cabinet Temple Boyer Legal et formulaire de contact pour toute demande d'information, de rendez-vous ou de devis.",
};

type ContactPageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = searchParams ? await searchParams : {};
  const sent = query.sent === "1";
  const hasError = typeof query.error === "string" && query.error.length > 0;
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
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        {/* En-tête */}
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Pour toute demande d&apos;information, prise de rendez-vous ou
            sollicitation de devis, vous pouvez utiliser le formulaire ci-dessous
            ou contacter directement le Cabinet.
          </p>
          {sent ? (
            <p
              className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-800"
              role="status"
              aria-live="polite"
            >
              Votre message a bien été envoyé. Le Cabinet vous répondra dans les meilleurs délais.
            </p>
          ) : hasError ? (
            <p
              className="rounded-xl border border-red-300 bg-red-50 px-3 py-2 text-[11px] text-red-800"
              role="status"
              aria-live="polite"
            >
              Une erreur est survenue lors de l&apos;envoi de votre message. Vous pouvez réessayer ou utiliser directement l&apos;adresse email du Cabinet.
            </p>
          ) : null}
        </header>

        {/* Coordonnées */}
        <section className="app-panel space-y-3 text-xs text-slate-800">
          <p className="font-semibold text-slate-900">Cabinet Temple Boyer Legal</p>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span>
              Email :
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 text-slate-900 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </span>
          </p>
        </section>

        {/* Avertissement données personnelles */}
        <section className="app-panel space-y-3 text-[11px] leading-relaxed text-slate-800">
          <p>
            En remplissant ce formulaire, vous reconnaissez avoir pris
            connaissance de la politique de confidentialité ci-dessous et des
            finalités du traitement des données à caractère personnel mis en
            œuvre par le Cabinet, en qualité de responsable de traitement, pour
            gérer et assurer le suivi de vos demandes. Le traitement mis en
            œuvre pour ces finalités est fondé sur l&apos;intérêt légitime du
            Cabinet.
          </p>
          <p>
            Les données collectées via ce formulaire sont facultatives, à
            l&apos;exception de celles identifiées avec un astérisque (*), et sont
            destinées à Maître Sarah Temple-Boyer. Elles sont conservées pendant
            cinq ans.
          </p>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978
            modifiée et au Règlement général sur la protection des données, vous
            disposez d&apos;un droit d&apos;accès, d&apos;interrogation, de limitation, de
            portabilité, d&apos;effacement, de modification et de rectification des
            informations vous concernant. Vous disposez également d&apos;un droit
            d&apos;opposition au traitement de vos données à caractère personnel ainsi
            qu&apos;à leur utilisation à des fins de prospection commerciale. Vous
            disposez enfin du droit de définir la manière dont vous entendez que
            soient exercés, après votre décès, ces droits.
          </p>
          <p>
            Vous pouvez exercer ces droits auprès de Maître Sarah Temple-Boyer à
            l&apos;adresse suivante :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              par courriel à
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 text-slate-900 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </li>
            <li>
              ou par courrier postal à l&apos;adresse : {postalAddress}, accompagné
              d&apos;une copie d&apos;un titre d&apos;identité signé.
            </li>
          </ul>
          <p>
            Vous disposez également du droit d&apos;introduire une réclamation auprès
            de la Commission nationale de l&apos;informatique et des libertés (CNIL).
          </p>
        </section>

        {/* Formulaire de contact */}
        <section className="app-panel text-xs text-slate-800">
          <form className="space-y-3" method="post" action="/api/contact">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <div className="space-y-1.5">
              <label htmlFor="nom" className="text-[11px] text-slate-700">
                Votre nom*
              </label>
              <input
                id="nom"
                name="nom"
                required
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-500/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[11px] text-slate-700">
                Votre adresse email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-500/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
                placeholder="vous@exemple.com"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="telephone"
                className="inline-flex items-center gap-1 text-[11px] text-slate-700"
              >
                <Phone className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                <span>Votre numéro de téléphone</span>
              </label>
              <input
                id="telephone"
                name="telephone"
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-500/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
                placeholder="Numéro (facultatif)"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="objet" className="text-[11px] text-slate-700">
                Objet
              </label>
              <input
                id="objet"
                name="objet"
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-500/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
                placeholder="Objet de votre demande"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[11px] text-slate-700">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-500/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
                placeholder="Décrivez brièvement votre demande"
              />
            </div>
            <p className="text-[10px] text-slate-500">
              Les champs marqués d&apos;un astérisque (*) sont obligatoires. Votre message
              sera transmis par courrier électronique au Cabinet.
            </p>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              <Mail className="mr-2 h-4 w-4 text-white" aria-hidden="true" />
              <span>Envoyer</span>
            </button>
          </form>
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

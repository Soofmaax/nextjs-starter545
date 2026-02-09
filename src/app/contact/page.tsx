export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-16">
        {/* En-tête */}
        <header className="space-y-3 border-b border-white/10 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="max-w-2xl text-sm text-slate-200">
            Pour toute demande d&apos;information, prise de rendez-vous ou
            sollicitation de devis, vous pouvez utiliser le formulaire ci-dessous
            ou contacter directement le Cabinet.
          </p>
        </header>

        {/* Coordonnées */}
        <section className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-200">
          <p className="font-semibold text-slate-100">Cabinet Temple Boyer Legal</p>
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
        </section>

        {/* Avertissement données personnelles */}
        <section className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-[11px] leading-relaxed text-slate-300">
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
                href="mailto:contact@templeboyer-legal.com"
                className="ml-1 text-sky-300 underline-offset-4 hover:underline"
              >
                contact@templeboyer-legal.com
              </a>
            </li>
            <li>
              ou par courrier postal à l&apos;adresse : 10 avenue de Wagram, 75008
              Paris, accompagné d&apos;une copie d&apos;un titre d&apos;identité signé.
            </li>
          </ul>
          <p>
            Vous disposez également du droit d&apos;introduire une réclamation auprès
            de la Commission nationale de l&apos;informatique et des libertés (CNIL).
          </p>
        </section>

        {/* Formulaire de contact (maquette) */}
        <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-xs text-slate-200">
          <form className="space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="nom" className="text-[11px] text-slate-200">
                Votre nom*
              </label>
              <input
                id="nom"
                name="nom"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[11px] text-slate-200">
                Votre adresse email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="vous@exemple.com"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="telephone" className="text-[11px] text-slate-200">
                Votre numéro de téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Numéro (facultatif)"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="objet" className="text-[11px] text-slate-200">
                Objet
              </label>
              <input
                id="objet"
                name="objet"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Objet de votre demande"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[11px] text-slate-200">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Décrivez brièvement votre demande"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Ce formulaire est proposé à titre indicatif dans cette maquette.
              Aucun envoi effectif n&apos;est réalisé depuis ce site de démonstration.
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Envoyer
            </button>
          </form>
        </section>

        {/* Bas de page simplifié */}
        <section className="border-t border-white/10 pt-6 text-[11px] text-slate-400">
          <p>
            Maître Sarah Temple-Boyer – Avocat d&apos;affaires international, Paris –
            Cabinet Temple Boyer Legal, 10 avenue de Wagram, 75008 Paris –
            contact@templeboyer-legal.com
          </p>
          <p className="mt-1">
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
      </main>
    </div>
  );
}

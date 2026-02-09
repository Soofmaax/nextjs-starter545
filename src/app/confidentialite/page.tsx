import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../lib/sanity.client";

export default async function ConfidentialitePage() {
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
            Politique de confidentialité et de protection des données personnelles
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Le Cabinet, en sa qualité de responsable de traitement, attache une
            grande importance à la protection et au respect de vos données
            personnelles et à la confidentialité de vos échanges.
          </p>
        </header>

        {/* 1. Résumé */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">1. Résumé</h2>
          <p>
            La présente politique vise à vous informer de nos pratiques relatives
            à la collecte, l&apos;utilisation et le partage des informations que vous
            êtes amené à nous fournir par le biais de notre site (le « Site »).
            En aucun cas vos données ne sont transmises à des tiers à des fins
            commerciales ou marketing.
          </p>
          <p>
            Les informations recueillies par le biais de notre Site font l&apos;objet
            d&apos;un traitement informatique destiné à la gestion des demandes de
            contact, à la prise de rendez-vous, à l&apos;établissement de devis et,
            plus généralement, à toute communication dans le cadre de la relation
            client-avocat.
          </p>
          <p>
            Le destinataire des données est Me Sarah Temple-Boyer, Avocat exerçant
            au 12, rue Tronchet, 75008 Paris. Téléphone : 01 43 12 38 00.
          </p>
          <p>
            Conformément aux articles 13 et 14 du Règlement (UE) 2016/679 (RGPD)
            et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, il
            est précisé que :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>
              Le responsable du traitement est Me Sarah Temple-Boyer (coordonnées
              ci-dessus).
            </li>
            <li>
              La finalité du traitement est la gestion des demandes de contact,
              de rendez-vous et plus généralement des échanges client-avocat
              transitant via le Site.
            </li>
            <li>Le destinataire est l&apos;avocat, directeur de publication du Site.</li>
            <li>
              Les données sont conservées pendant 5 ans à compter du dernier
              échange client-avocat.
            </li>
            <li>
              Vous disposez de droits d&apos;accès, de rectification, d&apos;effacement,
              de limitation, d&apos;opposition, de portabilité et de définition de
              directives post-mortem.
            </li>
            <li>
              Vous pouvez introduire une réclamation auprès de la CNIL si vous
              estimez que la protection de vos données n&apos;a pas été assurée.
            </li>
          </ul>
        </section>

        {/* 2. Informations recueillies */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            2. Les informations que nous recueillons
          </h2>
          <p>
            Nous sommes susceptibles de recueillir et de traiter différentes
            catégories de données.
          </p>

          <h3 className="text-sm font-semibold text-slate-950">
            2.1. Informations que vous nous transmettez directement
          </h3>
          <p>
            En utilisant notre Site, vous nous transmettez des informations, dont
            certaines peuvent permettre de vous identifier (« Données
            Personnelles »), notamment lorsque vous remplissez un formulaire ou
            nous contactez (téléphone, email, autre moyen de communication).
          </p>
          <p>Ces données peuvent inclure :</p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>
              les données nécessaires à la prise de contact ou à l&apos;accès aux
              services fournis via le Site : nom, prénom, adresse e-mail, adresse
              postale, numéro de téléphone, etc. ;
            </li>
            <li>
              le détail de vos visites sur le Site et des contenus consultés ;
            </li>
            <li>
              les données que nous pouvons être amenés à vous demander lorsque
              vous signalez un problème ou sollicitez une assistance ;
            </li>
            <li>
              le cas échéant, des données de localisation, sous réserve de votre
              accord.
            </li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-950">
            2.2. Données recueillies automatiquement
          </h3>
          <p>
            Lors de chacune de vos visites, nous pouvons, conformément à la
            législation applicable et, le cas échéant, avec votre accord,
            recueillir des informations relatives à vos appareils et à vos
            connexions (adresse IP, données de connexion, type et version du
            navigateur, système d&apos;exploitation, parcours de navigation sur le
            Site, durée de consultation de certaines pages, termes de recherche
            utilisés, erreurs de téléchargement, interactions avec les pages,
            etc.).
          </p>
          <p>
            Ces informations peuvent être collectées au moyen de cookies ou
            technologies similaires. Pour plus d&apos;informations, se reporter à la
            section « Cookies et technologies similaires » ci-dessous.
          </p>

          <h3 className="text-sm font-semibold text-slate-950">
            2.3. Durée de conservation
          </h3>
          <p>
            Vos données sont conservées pendant une durée de 5 ans à compter du
            dernier échange dans le cadre de la relation client-avocat.
          </p>
        </section>

        {/* 3. Utilisation des données */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            3. Comment utilisons-nous les données que nous recueillons ?
          </h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>vous contacter et répondre à vos demandes ;</li>
            <li>
              exécuter les contrats conclus entre vous et nous (par exemple, une
              consultation en ligne) et fournir les services demandés ;
            </li>
            <li>vous informer des modifications apportées à nos services ;</li>
            <li>
              gérer le Site et effectuer des opérations techniques internes (tests,
              analyses, recherche, résolution d&apos;incidents) ;
            </li>
            <li>
              améliorer et optimiser le Site, notamment pour adapter l&apos;affichage
              des contenus à votre appareil ;
            </li>
            <li>
              contribuer à la préservation d&apos;un environnement sain et sécurisé.
            </li>
          </ul>
        </section>

        {/* 4. Destinataires */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            4. Qui sont les destinataires des informations et pourquoi ?
          </h2>
          <p>
            Les données recueillies servent principalement à assurer la mise en
            relation et l&apos;exécution des prestations entre vous et le Cabinet.
            Pour des raisons techniques, certaines données peuvent être partagées
            avec des sous-traitants intervenant pour le fonctionnement du Site et
            des services.
          </p>
          <p>
            Nous travaillons notamment avec des prestataires techniques (hébergeur,
            solution de mesure d&apos;audience, fournisseur de la plateforme du Site).
            Les données ne sont partagées avec ces tiers que dans les cas suivants
            :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>
              exécution d&apos;un contrat ou fourniture/amélioration des services
              (ex. : solutions de paiement, support technique) ;
            </li>
            <li>
              fourniture des services demandés (par exemple transmission de vos
              coordonnées dans le cadre d&apos;une prise de rendez-vous) ;
            </li>
            <li>
              recours à des solutions analytiques pour améliorer et optimiser le
              Site ;
            </li>
            <li>
              obligation légale ou judiciaire, ou nécessité de défendre les droits
              du Cabinet, des utilisateurs ou de tiers.
            </li>
          </ul>
          <p className="text-xs text-slate-400">
            À titre d&apos;exemple, les prestataires suivants peuvent intervenir :
            fournisseur technique du Site, hébergeur (OVH), solution de mesure
            d&apos;audience (Google Analytics).
          </p>
        </section>

        {/* 5-6. Localisation & droits */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            5. Localisation des données
          </h2>
          <p>
            Vos Données Personnelles sont hébergées et conservées en France, sauf
            exception dûment précisée dans la présente politique ou dans le cadre
            de certains prestataires conformes au RGPD.
          </p>

          <h2 className="mt-4 text-base font-semibold text-slate-950">
            6. Vos droits sur vos données personnelles
          </h2>
          <p>
            Conformément à la réglementation applicable, vous disposez des droits
            suivants sur vos Données Personnelles :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>droit d&apos;accès et d&apos;obtention d&apos;une copie des données ;</li>
            <li>droit de rectification des données inexactes ou incomplètes ;</li>
            <li>droit d&apos;effacement dans les cas prévus par la loi ;</li>
            <li>droit de limitation du traitement ;</li>
            <li>droit d&apos;opposition au traitement ;</li>
            <li>
              droit à la portabilité des données que vous avez fournies, dans un
              format structuré, couramment utilisé et lisible par machine ;
            </li>
            <li>
              droit de définir des directives relatives au sort de vos données
              après votre décès.
            </li>
          </ul>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL si
            vous estimez que vos droits n&apos;ont pas été respectés.
          </p>
        </section>

        {/* 7. Cookies */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            7. Cookies et technologies similaires
          </h2>
          <p>
            Un cookie est un petit fichier texte enregistré sur votre terminal
            (ordinateur, smartphone, etc.) par le navigateur lors de la
            consultation d&apos;un site internet. Les cookies permettent notamment de
            faire fonctionner le Site, d&apos;améliorer votre expérience utilisateur
            et de mesurer l&apos;audience.
          </p>
          <p>
            Selon leur finalité, les cookies peuvent être : strictement
            nécessaires au fonctionnement du Site, fonctionnels (personnalisation,
            préférences), ou analytiques et de performance (mesure d&apos;audience,
            pages les plus consultées, etc.).
          </p>
          <p>
            Vous pouvez à tout moment paramétrer votre navigateur pour refuser ou
            supprimer les cookies. Le refus de certains cookies peut toutefois
            dégrader l&apos;expérience utilisateur ou limiter l&apos;accès à certaines
            fonctionnalités.
          </p>
        </section>

        {/* 8-11. Divers */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-800">
          <h2 className="text-base font-semibold text-slate-950">
            8. Confidentialité de vos identifiants
          </h2>
          <p>
            Si un espace personnel nécessitant un mot de passe est mis à votre
            disposition, vous êtes responsable de la confidentialité de ce mot de
            passe et vous vous engagez à ne pas le communiquer à des tiers.
          </p>

          <h2 className="mt-4 text-base font-semibold text-slate-950">
            9. Liens vers d&apos;autres sites
          </h2>
          <p>
            Le Site peut contenir des liens vers d&apos;autres sites internet ou
            services tiers. Ces sites disposent de leurs propres politiques de
            confidentialité, que nous vous invitons à consulter. Le Cabinet ne
            saurait être tenu responsable de l&apos;utilisation de vos données par ces
            sites tiers.
          </p>

          <h2 className="mt-4 text-base font-semibold text-slate-950">
            10. Modification de la politique de confidentialité
          </h2>
          <p>
            La présente politique est susceptible d&apos;être modifiée pour tenir
            compte des évolutions légales, réglementaires ou techniques. En cas de
            modification substantielle, nous pourrons être amenés à vous en
            informer par tout moyen approprié. Nous vous invitons à la consulter
            régulièrement.
          </p>

          <h2 className="mt-4 text-base font-semibold text-slate-950">11. Contact</h2>
          <p>
            Pour toute question relative à la présente politique de
            confidentialité ou pour exercer vos droits, vous pouvez nous contacter
            :
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[13px] text-slate-700">
            <li>via le formulaire de contact disponible sur le Site ;</li>
            <li>
              ou par courrier à l&apos;adresse suivante : Me Sarah Temple-Boyer,
              Avocat, 12, rue Tronchet, 75008 Paris. Téléphone : 01 43 12 38 00.
            </li>
          </ul>
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

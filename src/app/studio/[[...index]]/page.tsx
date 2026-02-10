"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const isStudioExplicitlyEnabled = process.env.NEXT_PUBLIC_ENABLE_STUDIO === "1";

export default function StudioPage() {
  // Par défaut, on désactive l'accès au Studio en production sauf si
  // NEXT_PUBLIC_ENABLE_STUDIO=1 est explicitement défini.
  if (process.env.NODE_ENV === "production" && !isStudioExplicitlyEnabled) {
    return (
      <div className="app-shell">
        <main className="app-main">
          <div className="app-panel">
            <p className="text-sm text-slate-800">
              Le Studio Sanity n&apos;est pas accessible dans cet environnement.
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (!projectId || !dataset) {
    return (
      <div className="app-shell">
        <main className="app-main">
          <div className="app-panel">
            <p className="text-sm text-slate-800">
              Le Studio Sanity n&apos;est pas encore configuré. Veuillez définir les
              variables d&apos;environnement NEXT_PUBLIC_SANITY_PROJECT_ID et
              NEXT_PUBLIC_SANITY_DATASET, puis redémarrer l&apos;application.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
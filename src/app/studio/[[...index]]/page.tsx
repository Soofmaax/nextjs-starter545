"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default function StudioPage() {
  if (!projectId || !dataset) {
    return (
      <div className="app-shell">
        <main id="main-content" className="app-main">
          <div className="app-panel">
            <h1 className="text-lg font-semibold text-slate-900">
              Studio Sanity non configuré
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Le studio Sanity n&apos;est pas encore configuré. Veuillez définir les
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

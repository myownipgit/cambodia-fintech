"use client";

import { useState } from "react";

type Lang = "en" | "km";

const FOUNDER_NAME = "William Mallett";
const FOUNDER_TITLE_EN = "Founder & Managing Director";
const FOUNDER_TITLE_KM = "ស្ថាបនិក និងនាយកគ្រប់គ្រង";
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/william-mall/";
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/118224010/";
const CONTACT_EMAIL = "info@camfintech.com";

const T = {
  title: { en: `About ${FOUNDER_NAME}`, km: `អំពី ${FOUNDER_NAME}` },
  role: { en: `${FOUNDER_TITLE_EN}, CamFinTech`, km: `${FOUNDER_TITLE_KM}, CamFinTech` },
  lead: {
    en: `${FOUNDER_NAME} founded CamFinTech to help enterprises, investors, and partners engage with Cambodia's deliberately-planned Government-as-a-Platform (GaaP) digital infrastructure — Bakong payments, CamDigiKey identity, CamDX data exchange, and CamInvoice compliance.`,
    km: `${FOUNDER_NAME} បានបង្កើត CamFinTech ដើម្បីជួយដល់សហគ្រាស វិនិយោគិន និងដៃគូក្នុងការចូលរួមជាមួយហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល Government-as-a-Platform (GaaP) ដែលបានកំណត់ផែនការច្បាស់លាស់របស់កម្ពុជា — បាគង CamDigiKey CamDX និង CamInvoice។`,
  },
  bioHeading: { en: "Background", km: "ប្រវត្តិរូប" },
  bioPlaceholder: {
    en: "[Bio in progress. Coming soon: William's professional background, prior engagements in Cambodian and ASEAN FinTech, and the specific expertise he brings to GaaP integration work.]",
    km: "[ប្រវត្តិរូបកំពុងរៀបចំ។ មកដល់ឆាប់ៗ៖ ប្រវត្តិអាជីព ការងារពីមុនក្នុងវិស័យ FinTech កម្ពុជា និងអាស៊ាន និងជំនាញជាក់លាក់ដែលគាត់នាំមកក្នុងការងាររួមបញ្ចូល GaaP។]",
  },
  practiceHeading: { en: "About the practice", km: "អំពីការងារប្រឹក្សា" },
  practiceBody: {
    en: "CamFinTech is a Phnom Penh–based specialist consulting practice (trading name; CAMFINTECH CO., LTD pending registration). The practice publishes deep research and structured technical content across five clusters — glossary, learn, knowledge, insights, and use cases — covering the architecture, regulation, and investment opportunities of Cambodia's digital financial infrastructure. Direct engagements with enterprises focus on Bakong integration, CamDigiKey identity flows, CamDX data-exchange compliance, and CamInvoice readiness for the 2025–2027 phased mandate.",
    km: "CamFinTech គឺជាការងារប្រឹក្សាឯកទេសដែលមានមូលដ្ឋាននៅភ្នំពេញ (ឈ្មោះពាណិជ្ជកម្ម; CAMFINTECH CO., LTD កំពុងរង់ចាំការចុះបញ្ជី)។ ការងារនេះបោះពុម្ពផ្សាយការស្រាវជ្រាវយ៉ាងស៊ីជម្រៅ និងខ្លឹមសារបច្ចេកទេសរចនាសម្ព័ន្ធនៅទូទាំងក្រុមចំនួនប្រាំ — វាក្យសព្ទ ការសិក្សា មូលដ្ឋានចំណេះដឹង ការយល់ដឹង និងករណីសិក្សា — ដែលគ្របដណ្តប់លើស្ថាបត្យកម្ម បទប្បញ្ញត្តិ និងឱកាសវិនិយោគនៃហេដ្ឋារចនាសម្ព័ន្ធហិរញ្ញវត្ថុឌីជីថលរបស់កម្ពុជា។",
  },
  connectHeading: { en: "Connect", km: "ទាក់ទង" },
  linkedinPersonal: { en: "LinkedIn — personal profile", km: "LinkedIn — ប្រវត្តិរូបផ្ទាល់ខ្លួន" },
  linkedinCompany: { en: "LinkedIn — CamFinTech company page", km: "LinkedIn — ទំព័រក្រុមហ៊ុន CamFinTech" },
  emailLink: { en: `Email: ${CONTACT_EMAIL}`, km: `អ៊ីមែល៖ ${CONTACT_EMAIL}` },
  breadcrumb: { en: "About", km: "អំពី" },
  back: { en: "Back to CamFinTech", km: "ត្រឡប់ទៅ CamFinTech" },
  toggle: { en: "ខ្មែរ", km: "English" },
  langNote: {
    en: "If there is any inconsistency between the English and Khmer versions of this page, the English version prevails.",
    km: "ប្រសិនបើមានភាពមិនស៊ីសង្វាក់រវាងទំព័រនេះជាភាសាអង់គ្លេស និងជាភាសាខ្មែរ ឯកសារភាសាអង់គ្លេសត្រូវយកជាការ។",
  },
};

function FounderAvatar() {
  return (
    <div
      className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 text-primary text-2xl font-bold tracking-wider ring-2 ring-primary/40"
      aria-label={`Placeholder avatar for ${FOUNDER_NAME}`}
    >
      WM
    </div>
  );
}

export default function AboutContent() {
  const [lang, setLang] = useState<Lang>("en");
  const isKm = lang === "km";

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Breadcrumb + lang toggle */}
      <div className="max-w-3xl mx-auto px-4 pt-6 flex items-center justify-between text-sm text-text-light/60 dark:text-text-dark/60">
        <nav>
          <a href="/" className="hover:text-primary">CamFinTech</a>
          <span className="mx-1">/</span>
          <span className={isKm ? "font-khmer" : ""}>{T.breadcrumb[lang]}</span>
        </nav>
        <button
          onClick={() => setLang(isKm ? "en" : "km")}
          className={`px-3 py-1 rounded-md border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-colors text-xs font-medium ${isKm ? "" : "font-khmer"}`}
          aria-label={isKm ? "Switch to English" : "ប្តូរទៅភាសាខ្មែរ"}
        >
          {T.toggle[lang]}
        </button>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex items-center gap-5">
            <FounderAvatar />
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark leading-tight ${isKm ? "font-khmer" : ""}`}>
                {T.title[lang]}
              </h1>
              <p className={`mt-2 text-primary font-medium ${isKm ? "font-khmer" : ""}`}>
                {T.role[lang]}
              </p>
            </div>
          </div>
          <p className={`mt-6 text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed ${isKm ? "font-khmer" : ""}`}>
            {T.lead[lang]}
          </p>
        </header>

        <section className="mb-10">
          <h2 className={`text-xl font-semibold text-text-light dark:text-text-dark mb-3 ${isKm ? "font-khmer" : ""}`}>
            {T.bioHeading[lang]}
          </h2>
          <p className={`text-text-light/80 dark:text-text-dark/80 leading-relaxed italic text-text-light/60 dark:text-text-dark/60 ${isKm ? "font-khmer" : ""}`}>
            {T.bioPlaceholder[lang]}
          </p>
        </section>

        <section className="mb-10">
          <h2 className={`text-xl font-semibold text-text-light dark:text-text-dark mb-3 ${isKm ? "font-khmer" : ""}`}>
            {T.practiceHeading[lang]}
          </h2>
          <p className={`text-text-light/80 dark:text-text-dark/80 leading-relaxed ${isKm ? "font-khmer" : ""}`}>
            {T.practiceBody[lang]}
          </p>
        </section>

        <section className="mb-10">
          <h2 className={`text-xl font-semibold text-text-light dark:text-text-dark mb-3 ${isKm ? "font-khmer" : ""}`}>
            {T.connectHeading[lang]}
          </h2>
          <ul className="space-y-2 text-text-light/80 dark:text-text-dark/80">
            <li>
              <a
                href={FOUNDER_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-primary hover:underline"
              >
                {T.linkedinPersonal[lang]}
              </a>
            </li>
            <li>
              <a
                href={COMPANY_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {T.linkedinCompany[lang]}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {T.emailLink[lang]}
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark">
          <p className={`text-xs text-text-light/50 dark:text-text-dark/50 mb-4 ${isKm ? "font-khmer" : ""}`}>
            {T.langNote[lang]}
          </p>
          <a href="/" className="text-primary hover:underline text-sm">
            &larr; {T.back[lang]}
          </a>
        </div>
      </main>
    </div>
  );
}

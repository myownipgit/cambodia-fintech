"use client";

import { useState } from "react";
import Script from "next/script";

const EFFECTIVE_DATE = "22 May 2026";
const EFFECTIVE_DATE_KM = "ថ្ងៃទី២២ ខែឧសភា ឆ្នាំ២០២៦";
const CONTACT_EMAIL = "info@camfintech.com";

type Lang = "en" | "km";

interface Section {
  id: string;
  heading: { en: string; km: string };
  body: { en: string; km: string };
}

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    heading: {
      en: "1. Acceptance of these terms",
      km: "១. ការទទួលយកលក្ខខណ្ឌទាំងនេះ",
    },
    body: {
      en: "These Terms of Use (\"Terms\") govern your access to and use of camfintech.com and any content, services, or materials we make available through the site (together, the \"Service\"). By using the Service you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the Service.",
      km: "លក្ខខណ្ឌប្រើប្រាស់ទាំងនេះ (\"លក្ខខណ្ឌ\") គ្រប់គ្រងការចូលប្រើ និងការប្រើប្រាស់ camfintech.com និងខ្លឹមសារ សេវាកម្ម ឬសម្ភារៈណាមួយដែលយើងធ្វើឱ្យមាននៅលើគេហទំព័រ (រួមគ្នាហៅថា \"សេវាកម្ម\")។ ដោយការប្រើប្រាស់សេវាកម្ម អ្នកបញ្ជាក់ថាអ្នកបានអាន យល់ និងយល់ព្រមធ្វើតាមលក្ខខណ្ឌទាំងនេះ។ ប្រសិនបើអ្នកមិនយល់ព្រម សូមកុំប្រើសេវាកម្មនេះ។",
    },
  },
  {
    id: "about",
    heading: {
      en: "2. About CamFinTech",
      km: "២. អំពី CamFinTech",
    },
    body: {
      en: "\"CamFinTech\" is a trading name used to publish research, analysis, and consulting services focused on Cambodia's digital financial infrastructure — Bakong, CamDigiKey, CamDX, CamInvoice, KHQR, and the broader Government-as-a-Platform (GaaP) model. We are an independent consulting practice. We are not a bank, payment service provider, broker-dealer, investment adviser, or licensed financial institution, and these Terms do not create any such relationship.",
      km: "\"CamFinTech\" គឺជាឈ្មោះពាណិជ្ជកម្មដែលប្រើដើម្បីបោះពុម្ពផ្សាយការស្រាវជ្រាវ ការវិភាគ និងសេវាប្រឹក្សាដែលផ្តោតលើហេដ្ឋារចនាសម្ព័ន្ធហិរញ្ញវត្ថុឌីជីថលរបស់កម្ពុជា — បាគង, CamDigiKey, CamDX, CamInvoice, KHQR, និងគំរូ Government-as-a-Platform (GaaP) ដ៏ទូលំទូលាយ។ យើងគឺជាក្រុមហ៊ុនប្រឹក្សាឯករាជ្យ។ យើងមិនមែនជាធនាគារ អ្នកផ្តល់សេវាបង់ប្រាក់ ឈ្មួញកណ្តាល ទីប្រឹក្សាវិនិយោគ ឬគ្រឹះស្ថានហិរញ្ញវត្ថុដែលមានអាជ្ញាប័ណ្ណឡើយ ហើយលក្ខខណ្ឌទាំងនេះមិនបង្កើតទំនាក់ទំនងបែបនោះឡើយ។",
    },
  },
  {
    id: "no-advice",
    heading: {
      en: "3. Informational content only — no professional advice",
      km: "៣. ខ្លឹមសារផ្តល់ព័ត៌មានតែប៉ុណ្ណោះ — មិនមែនជាការប្រឹក្សាវិជ្ជាជីវៈ",
    },
    body: {
      en: "Articles, glossary entries, knowledge-base material, insights, and use-case studies published on this site are provided for general information and educational purposes. They do not constitute financial, investment, legal, tax, regulatory, or other professional advice, and should not be relied on as a substitute for advice from appropriately qualified, licensed professionals in your jurisdiction.\n\nReferences to Bakong, CamDigiKey, CamDX, CamInvoice, KHQR, the National Bank of Cambodia (NBC), the General Department of Taxation (GDT), or any other named system, regulator, or organisation are descriptive only. We are not affiliated with those organisations unless explicitly stated, and references to them do not imply endorsement of CamFinTech by them, or vice versa.\n\nMarket data, statistics, and forecasts are sourced from publicly available reports as cited in each article. They are accurate to the best of our knowledge at the time of publication but may change without notice.",
      km: "អត្ថបទ វាក្យសព្ទ សម្ភារៈមូលដ្ឋានចំណេះដឹង ការយល់ដឹង និងករណីសិក្សាដែលបោះពុម្ពផ្សាយនៅលើគេហទំព័រនេះ ត្រូវបានផ្តល់ឱ្យសម្រាប់គោលបំណងព័ត៌មានទូទៅ និងការអប់រំ។ ពួកវាមិនមែនជាការប្រឹក្សាខាងហិរញ្ញវត្ថុ វិនិយោគ ច្បាប់ ពន្ធ បទប្បញ្ញត្តិ ឬវិជ្ជាជីវៈផ្សេងទៀតឡើយ ហើយមិនគួរត្រូវបានពឹងផ្អែកជាការជំនួសសម្រាប់ការប្រឹក្សាពីអ្នកវិជ្ជាជីវៈដែលមានគុណវុឌ្ឍិសមរម្យ និងមានអាជ្ញាប័ណ្ណនៅក្នុងយុត្តាធិការរបស់អ្នកឡើយ។\n\nការយោងទៅលើបាគង CamDigiKey CamDX CamInvoice KHQR ធនាគារជាតិនៃកម្ពុជា (NBC) អគ្គនាយកដ្ឋានពន្ធដារ (GDT) ឬប្រព័ន្ធ និយតករ ឬអង្គការដែលមានឈ្មោះណាមួយផ្សេងទៀត គឺពិពណ៌នាតែប៉ុណ្ណោះ។ យើងមិនមានទំនាក់ទំនងជាមួយអង្គការទាំងនោះឡើយ លុះត្រាតែបញ្ជាក់ច្បាស់លាស់ ហើយការយោងទាំងនោះមិនបញ្ជាក់ពីការគាំទ្រ CamFinTech ដោយពួកគេ ឬផ្ទុយមកវិញឡើយ។\n\nទិន្នន័យទីផ្សារ ស្ថិតិ និងការព្យាករណ៍ត្រូវបានយកមកពីរបាយការណ៍សាធារណៈដែលបានដកស្រង់នៅក្នុងអត្ថបទនីមួយៗ។ ពួកវាមានភាពត្រឹមត្រូវតាមការដឹងបំផុតរបស់យើងនៅពេលបោះពុម្ពផ្សាយ ប៉ុន្តែអាចផ្លាស់ប្តូរដោយគ្មានការជូនដំណឹង។",
    },
  },
  {
    id: "ip",
    heading: {
      en: "4. Intellectual property",
      km: "៤. កម្មសិទ្ធិបញ្ញា",
    },
    body: {
      en: "All content on the Service — including text, articles, diagrams, graphics, logos, structured data, and the underlying selection and arrangement of that content — is owned by CamFinTech or its licensors and is protected by copyright and related rights.\n\nYou may view, download, and print individual pages for your own non-commercial reference. Beyond that, you may not reproduce, republish, distribute, modify, or create derivative works from the content without our prior written consent.\n\nShort quotations with clear attribution and a working link back to the source page are permitted and encouraged.\n\nAttribution format: \"Source: CamFinTech — https://www.camfintech.com/<page>\".",
      km: "ខ្លឹមសារទាំងអស់នៅលើសេវាកម្មនេះ — រួមមានអត្ថបទ អត្ថបទវែង ដ្យាក្រាម ក្រាហ្វិក ឡូហ្គោ ទិន្នន័យរចនាសម្ព័ន្ធ និងការជ្រើសរើស និងការរៀបចំខ្លឹមសារនោះ — ជាកម្មសិទ្ធិរបស់ CamFinTech ឬអ្នកផ្តល់អាជ្ញាប័ណ្ណរបស់ខ្លួន ហើយត្រូវបានការពារដោយសិទ្ធិអ្នកនិពន្ធ និងសិទ្ធិដែលពាក់ព័ន្ធ។\n\nអ្នកអាចមើល ទាញយក និងបោះពុម្ពទំព័រនីមួយៗសម្រាប់ការយោងផ្ទាល់ខ្លួនមិនមែនពាណិជ្ជកម្ម។ ហួសពីនោះ អ្នកមិនអាចចម្លង បោះពុម្ពផ្សាយឡើងវិញ ចែកចាយ កែប្រែ ឬបង្កើតស្នាដៃដែលបានមកពីខ្លឹមសារដោយគ្មានការយល់ព្រមជាលាយលក្ខណ៍អក្សរជាមុនពីយើងឡើយ។\n\nការដកស្រង់ខ្លី ដោយមានការសរសេរប្រភពច្បាស់លាស់ និងតំណភ្ជាប់ដែលដំណើរការត្រឡប់ទៅទំព័រប្រភពត្រូវបានអនុញ្ញាត និងត្រូវបានលើកទឹកចិត្ត។\n\nទម្រង់សរសេរប្រភព៖ \"Source: CamFinTech — https://www.camfintech.com/<page>\"។",
    },
  },
  {
    id: "acceptable-use",
    heading: {
      en: "5. Acceptable use",
      km: "៥. ការប្រើប្រាស់ដែលអាចទទួលយកបាន",
    },
    body: {
      en: "When using the Service, you agree not to:\n• use the site in any way that is unlawful, fraudulent, or harmful;\n• attempt to gain unauthorised access to any part of the site, our infrastructure, or accounts;\n• probe, scan, or test the vulnerability of the site without our prior written authorisation;\n• interfere with or disrupt the Service, including by overloading, flooding, or sending malicious code;\n• scrape, harvest, or systematically extract content for use in competing services without our written consent;\n• misrepresent your identity or affiliation when contacting us; or\n• use our content to train commercial generative-AI systems in a way that strips attribution or breaches Section 4.\n\nResponsible research, indexing by search and AI-search crawlers identified in robots.txt and llms.txt, and short attributed quotation are explicitly permitted.",
      km: "នៅពេលប្រើសេវាកម្ម អ្នកយល់ព្រមមិន៖\n• ប្រើគេហទំព័រតាមរបៀបណាមួយដែលខុសច្បាប់ ក្លែងបន្លំ ឬបង្កគ្រោះថ្នាក់។\n• ព្យាយាមចូលប្រើដោយគ្មានការអនុញ្ញាតទៅផ្នែកណាមួយនៃគេហទំព័រ ហេដ្ឋារចនាសម្ព័ន្ធ ឬគណនីរបស់យើង។\n• ស្ទង់មតិ ស្កេន ឬសាកល្បងភាពងាយរងគ្រោះនៃគេហទំព័រដោយគ្មានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរជាមុនពីយើង។\n• រំខាន ឬបង្អាក់សេវាកម្ម រួមមានដោយការបញ្ជូនលើសទម្ងន់ ការបញ្ជូនច្រើនលើស ឬការផ្ញើកូដព្យាបាទ។\n• គូរ ប្រមូល ឬដកស្រង់ខ្លឹមសារជាប្រព័ន្ធសម្រាប់ប្រើនៅក្នុងសេវាកម្មប្រកួតប្រជែងដោយគ្មានការយល់ព្រមជាលាយលក្ខណ៍អក្សររបស់យើង។\n• បង្ហាញខុសអំពីអត្តសញ្ញាណ ឬទំនាក់ទំនងរបស់អ្នកនៅពេលទាក់ទងយើង។ ឬ\n• ប្រើខ្លឹមសាររបស់យើងដើម្បីបណ្តុះបណ្តាលប្រព័ន្ធ AI បង្កើតពាណិជ្ជកម្មតាមរបៀបដែលដកប្រភព ឬបំពានផ្នែកទី៤។\n\nការស្រាវជ្រាវដែលមានទំនួលខុសត្រូវ ការធ្វើលិបិក្រមដោយឧបករណ៍រុករកស្វែងរក និងស្វែងរក AI ដែលបានកំណត់នៅក្នុង robots.txt និង llms.txt និងការដកស្រង់ខ្លីដែលមានប្រភពត្រូវបានអនុញ្ញាតយ៉ាងច្បាស់លាស់។",
    },
  },
  {
    id: "third-parties",
    heading: {
      en: "6. Third-party links and integrations",
      km: "៦. តំណភ្ជាប់ និងការរួមបញ្ចូលភាគីទីបី",
    },
    body: {
      en: "The Service contains links to third-party websites, regulators, official Cambodian government portals, statistical sources, and platform documentation. These links are provided for convenience. We do not control those sites and are not responsible for their content, accuracy, availability, or privacy practices. Following a link is at your own risk.",
      km: "សេវាកម្មនេះមានតំណភ្ជាប់ទៅគេហទំព័រភាគីទីបី និយតករ វិបផតថលរដ្ឋាភិបាលកម្ពុជាផ្លូវការ ប្រភពស្ថិតិ និងឯកសារវេទិកា។ តំណភ្ជាប់ទាំងនេះត្រូវបានផ្តល់ឱ្យសម្រាប់ភាពងាយស្រួល។ យើងមិនគ្រប់គ្រងគេហទំព័រទាំងនោះ ហើយមិនទទួលខុសត្រូវចំពោះខ្លឹមសារ ភាពត្រឹមត្រូវ ភាពមាន ឬការអនុវត្តឯកជនភាពរបស់ពួកគេឡើយ។ ការតាមតំណភ្ជាប់គឺនៅហានិភ័យផ្ទាល់ខ្លួនរបស់អ្នក។",
    },
  },
  {
    id: "no-relationship",
    heading: {
      en: "7. No professional relationship from website use",
      km: "៧. គ្មានទំនាក់ទំនងវិជ្ជាជីវៈពីការប្រើប្រាស់គេហទំព័រ",
    },
    body: {
      en: "Using the Service or contacting us through it does not, by itself, create a consulting, advisory, fiduciary, or confidential relationship between you and CamFinTech. Such a relationship arises only under a separate written engagement agreement signed by both parties. Until then, do not send information that you consider confidential or privileged.",
      km: "ការប្រើប្រាស់សេវាកម្ម ឬការទាក់ទងយើងតាមរយៈវាមិនបង្កើតទំនាក់ទំនងប្រឹក្សា ការផ្តល់ដំបូន្មាន ការទុកចិត្ត ឬការសម្ងាត់រវាងអ្នក និង CamFinTech ដោយខ្លួនវាឡើយ។ ទំនាក់ទំនងបែបនេះកើតឡើងតែក្រោមកិច្ចព្រមព្រៀងការងារដាច់ដោយឡែកជាលាយលក្ខណ៍អក្សរដែលចុះហត្ថលេខាដោយភាគីទាំងពីរប៉ុណ្ណោះ។ រហូតមកដល់ពេលនោះ សូមកុំផ្ញើព័ត៌មានដែលអ្នកចាត់ទុកថាសម្ងាត់ ឬមានឯកសិទ្ធិ។",
    },
  },
  {
    id: "warranties",
    heading: {
      en: "8. Disclaimer of warranties",
      km: "៨. ការបដិសេធការធានា",
    },
    body: {
      en: "The Service and all content on it are provided on an \"as is\" and \"as available\" basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, and uninterrupted availability. We do not warrant that the Service will be free of errors, vulnerabilities, or interruptions.",
      km: "សេវាកម្ម និងខ្លឹមសារទាំងអស់នៅលើវាត្រូវបានផ្តល់ឱ្យលើមូលដ្ឋាន \"ដូចដែលមាន\" និង \"ដូចដែលមានស្រាប់\"។ ដល់ការវាស់វែងអតិបរមាដែលច្បាប់អនុញ្ញាត យើងបដិសេធការធានាទាំងអស់ ទាំងជាក់លាក់ ឬជាន័យ រួមមានការធានាអំពីភាពអាចលក់ដូរបាន ភាពសមរម្យសម្រាប់គោលបំណងជាក់លាក់ ការមិនរំលោភបំពាន ភាពត្រឹមត្រូវ ភាពពេញលេញ និងភាពមានជាប់ជានិច្ច។ យើងមិនធានាថាសេវាកម្មនឹងគ្មានកំហុស ភាពងាយរងគ្រោះ ឬការរំខានឡើយ។",
    },
  },
  {
    id: "liability",
    heading: {
      en: "9. Limitation of liability",
      km: "៩. ការកំណត់ការទទួលខុសត្រូវ",
    },
    body: {
      en: "To the maximum extent permitted by law, CamFinTech and its operators, employees, and contributors will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, business, data, or goodwill, arising from or related to your use of, or inability to use, the Service, even if we have been advised of the possibility of such damages.\n\nNothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
      km: "ដល់ការវាស់វែងអតិបរមាដែលច្បាប់អនុញ្ញាត CamFinTech និងប្រតិបត្តិករ និយោជិត និងអ្នករួមចំណែករបស់ខ្លួន នឹងមិនទទួលខុសត្រូវចំពោះការខូចខាតប្រយោល ការខូចខាតដោយចៃដន្យ ការខូចខាតពិសេស ការខូចខាតជាលទ្ធផល ការខូចខាតជាគំរូ ឬការខូចខាតជាការដាក់ទោស ឬចំពោះការបាត់បង់ប្រាក់ចំណេញ ប្រាក់ចំណូល អាជីវកម្ម ទិន្នន័យ ឬឧតិបទ ដែលកើតឡើងពី ឬពាក់ព័ន្ធនឹងការប្រើប្រាស់របស់អ្នក ឬអសមត្ថភាពក្នុងការប្រើ សេវាកម្មនេះឡើយ ទោះបីយើងត្រូវបានណែនាំអំពីលទ្ធភាពនៃការខូចខាតបែបនេះក៏ដោយ។\n\nគ្មានអ្វីនៅក្នុងលក្ខខណ្ឌទាំងនេះមិនរាប់បញ្ចូល ឬកំណត់ការទទួលខុសត្រូវដែលមិនអាចមិនរាប់បញ្ចូល ឬកំណត់បានក្រោមច្បាប់ដែលអាចអនុវត្តបានឡើយ។",
    },
  },
  {
    id: "indemnity",
    heading: {
      en: "10. Indemnification",
      km: "១០. ការទូទាត់សំណង",
    },
    body: {
      en: "You agree to indemnify and hold harmless CamFinTech and its operators from any claim, demand, loss, liability, or expense (including reasonable legal fees) arising from your breach of these Terms or your misuse of the Service.",
      km: "អ្នកយល់ព្រមទូទាត់សំណង និងធ្វើឱ្យ CamFinTech និងប្រតិបត្តិកររបស់ខ្លួនរួចផុតពីការទាមទារ ការទារទារ ការខាតបង់ ការទទួលខុសត្រូវ ឬចំណាយ (រួមមានថ្លៃច្បាប់សមរម្យ) ដែលកើតឡើងពីការបំពានលក្ខខណ្ឌទាំងនេះរបស់អ្នក ឬការប្រើប្រាស់ខុសសេវាកម្មរបស់អ្នក។",
    },
  },
  {
    id: "governing-law",
    heading: {
      en: "11. Governing law and disputes",
      km: "១១. ច្បាប់គ្រប់គ្រង និងវិវាទ",
    },
    body: {
      en: "These Terms are governed by the laws of the Kingdom of Cambodia, without regard to its conflict-of-laws principles. Any dispute arising from or relating to these Terms or the Service will be subject to the exclusive jurisdiction of the courts of Cambodia, unless mandatory consumer-protection laws in your country of residence apply.\n\nWe encourage you to contact us at " + CONTACT_EMAIL + " first so we can try to resolve any issue informally.",
      km: "លក្ខខណ្ឌទាំងនេះត្រូវបានគ្រប់គ្រងដោយច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា ដោយមិនគិតពីគោលការណ៍ជម្លោះច្បាប់របស់វាឡើយ។ វិវាទណាមួយដែលកើតឡើងពី ឬពាក់ព័ន្ធនឹងលក្ខខណ្ឌទាំងនេះ ឬសេវាកម្មនឹងស្ថិតក្រោមយុត្តាធិការផ្តាច់មុខនៃតុលាការនៃប្រទេសកម្ពុជា លុះត្រាតែច្បាប់ការពារអ្នកប្រើប្រាស់ដែលជាកាតព្វកិច្ចនៅក្នុងប្រទេសដែលអ្នករស់នៅអាចអនុវត្តបាន។\n\nយើងលើកទឹកចិត្តឱ្យអ្នកទាក់ទងយើងនៅ " + CONTACT_EMAIL + " មុនគេ ដើម្បីយើងអាចព្យាយាមដោះស្រាយបញ្ហាណាមួយដោយមិនផ្លូវការ។",
    },
  },
  {
    id: "changes",
    heading: {
      en: "12. Changes to these Terms",
      km: "១២. ការផ្លាស់ប្តូរលក្ខខណ្ឌទាំងនេះ",
    },
    body: {
      en: "We may update these Terms from time to time. The updated version will be posted at /terms with a revised effective date. Continued use of the Service after the update means you accept the new Terms. If you do not accept the changes, stop using the Service.",
      km: "យើងអាចធ្វើបច្ចុប្បន្នភាពលក្ខខណ្ឌទាំងនេះពីពេលមួយទៅពេលមួយ។ ការធ្វើបច្ចុប្បន្នភាពនឹងត្រូវបានបោះផ្សាយនៅ /terms ជាមួយនឹងកាលបរិច្ឆេទមានប្រសិទ្ធភាពដែលបានកែប្រែ។ ការបន្តប្រើប្រាស់សេវាកម្មបន្ទាប់ពីការធ្វើបច្ចុប្បន្នភាពមានន័យថាអ្នកទទួលយកលក្ខខណ្ឌថ្មី។ ប្រសិនបើអ្នកមិនទទួលយកការផ្លាស់ប្តូរ សូមឈប់ប្រើសេវាកម្ម។",
    },
  },
  {
    id: "contact",
    heading: {
      en: "13. Contact",
      km: "១៣. ទំនាក់ទំនង",
    },
    body: {
      en: "Questions about these Terms can be sent to:\n\nCamFinTech\nEmail: " + CONTACT_EMAIL + "\nAddress: 30 Preah Norodom Boulevard, Khan Daun Penh, Phnom Penh, Kingdom of Cambodia\n\nFor information on how we handle personal data, see our Privacy Statement at /privacy.",
      km: "សំណួរអំពីលក្ខខណ្ឌទាំងនេះអាចត្រូវបានផ្ញើទៅ៖\n\nCamFinTech\nអ៊ីមែល៖ " + CONTACT_EMAIL + "\nអាសយដ្ឋាន៖ ផ្លូវព្រះនរោត្តម លេខ៣០, ខណ្ឌដូនពេញ, ភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា\n\nសម្រាប់ព័ត៌មានអំពីរបៀបដែលយើងគ្រប់គ្រងទិន្នន័យផ្ទាល់ខ្លួន សូមមើលសេចក្តីប្រកាសឯកជនភាពរបស់យើងនៅ /privacy។",
    },
  },
];

const T = {
  title: { en: "Terms of Use", km: "លក្ខខណ្ឌប្រើប្រាស់" },
  lead: {
    en: "The rules that govern your access to and use of camfintech.com and the content we publish on it.",
    km: "ច្បាប់ដែលគ្រប់គ្រងការចូលប្រើ និងការប្រើប្រាស់ camfintech.com និងខ្លឹមសារដែលយើងបោះពុម្ពផ្សាយនៅលើវា។",
  },
  effective: { en: "Effective", km: "មានប្រសិទ្ធភាព" },
  breadcrumb: { en: "Terms", km: "លក្ខខណ្ឌ" },
  back: { en: "Back to CamFinTech", km: "ត្រឡប់ទៅ CamFinTech" },
  toggle: { en: "ខ្មែរ", km: "English" },
  langNote: {
    en: "If there is any inconsistency between the English and Khmer versions of these Terms, the English version prevails.",
    km: "ប្រសិនបើមានភាពមិនស៊ីសង្វាក់រវាងលក្ខខណ្ឌទាំងនេះជាភាសាអង់គ្លេស និងជាភាសាខ្មែរ ឯកសារភាសាអង់គ្លេសត្រូវយកជាការ។",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.camfintech.com/terms#terms",
  name: "CamFinTech Terms of Use",
  url: "https://www.camfintech.com/terms",
  inLanguage: ["en", "km"],
  isPartOf: { "@id": "https://www.camfintech.com/#website" },
  publisher: { "@id": "https://www.camfintech.com/#organization" },
  dateModified: "2026-05-22",
  about: {
    "@type": "Thing",
    name: "Terms of Use",
  },
};

export default function TermsContent() {
  const [lang, setLang] = useState<Lang>("en");
  const isKm = lang === "km";

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
        <header className="mb-8">
          <span className={`inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-3 ${isKm ? "font-khmer" : ""}`}>
            {T.breadcrumb[lang]}
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4 leading-tight ${isKm ? "font-khmer" : ""}`}>
            {T.title[lang]}
          </h1>
          <p className={`text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed ${isKm ? "font-khmer" : ""}`}>
            {T.lead[lang]}
          </p>
          <p className={`mt-4 text-xs text-text-light/50 dark:text-text-dark/50 ${isKm ? "font-khmer" : ""}`}>
            {T.effective[lang]}: {isKm ? EFFECTIVE_DATE_KM : EFFECTIVE_DATE}
          </p>
        </header>

        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="mb-8">
            <h2 className={`text-xl font-semibold text-text-light dark:text-text-dark mb-3 ${isKm ? "font-khmer" : ""}`}>
              {section.heading[lang]}
            </h2>
            <div className={`text-text-light/80 dark:text-text-dark/80 leading-relaxed whitespace-pre-line ${isKm ? "font-khmer" : ""}`}>
              {section.body[lang]}
            </div>
          </section>
        ))}

        <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark">
          <p className={`text-xs text-text-light/50 dark:text-text-dark/50 mb-4 ${isKm ? "font-khmer" : ""}`}>
            {T.langNote[lang]}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/" className="text-primary hover:underline">
              &larr; {T.back[lang]}
            </a>
            <span className="text-text-light/30 dark:text-text-dark/30">·</span>
            <a href="/privacy" className={`text-primary hover:underline ${isKm ? "font-khmer" : ""}`}>
              {isKm ? "សេចក្តីប្រកាសឯកជនភាព" : "Privacy Statement"}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

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
    id: "overview",
    heading: {
      en: "1. Overview",
      km: "១. ទិដ្ឋភាពទូទៅ",
    },
    body: {
      en: "CamFinTech (\"we\", \"us\", \"our\") is a specialist FinTech consulting practice focused on Cambodia's digital financial infrastructure — Bakong, CamDigiKey, CamDX, CamInvoice, and related Government-as-a-Platform (GaaP) services. This Privacy Statement explains what information we collect when you visit camfintech.com or interact with us through our communication channels, how we use it, who we share it with, and the choices and rights available to you.\n\nWe operate from Phnom Penh, Cambodia and our work touches enterprises, investors, and partners across Cambodia, the ASEAN region, and Australia. Cross-border data handling is described in Section 7.",
      km: "CamFinTech (\"យើង\", \"ពួកយើង\") គឺជាក្រុមហ៊ុនប្រឹក្សាឯកទេសខាងហិរញ្ញវត្ថុបច្ចេកវិទ្យាដែលផ្តោតលើហេដ្ឋារចនាសម្ព័ន្ធហិរញ្ញវត្ថុឌីជីថលរបស់កម្ពុជា — បាគង, CamDigiKey, CamDX, CamInvoice, និងសេវាកម្ម Government-as-a-Platform (GaaP) ដែលពាក់ព័ន្ធ។ សេចក្តីប្រកាសឯកជនភាពនេះពន្យល់ពីព័ត៌មានអ្វីដែលយើងប្រមូលនៅពេលអ្នកចូលមើល camfintech.com ឬទាក់ទងជាមួយយើងតាមរយៈបណ្តាញទំនាក់ទំនងរបស់យើង របៀបដែលយើងប្រើប្រាស់វា អ្នកដែលយើងចែករំលែកវាជាមួយ និងជម្រើស និងសិទ្ធិដែលមានសម្រាប់អ្នក។\n\nយើងធ្វើប្រតិបត្តិការពីភ្នំពេញ ប្រទេសកម្ពុជា ហើយការងាររបស់យើងពាក់ព័ន្ធនឹងសហគ្រាស វិនិយោគិន និងដៃគូទូទាំងប្រទេសកម្ពុជា តំបន់អាស៊ាន និងប្រទេសអូស្ត្រាលី។ ការគ្រប់គ្រងទិន្នន័យឆ្លងព្រំដែនត្រូវបានពិពណ៌នាក្នុងផ្នែកទី៧។",
    },
  },
  {
    id: "who-we-are",
    heading: {
      en: "2. Who we are",
      km: "២. យើងជានរណា",
    },
    body: {
      en: "\"CamFinTech\" is a trading name used by the operators of camfintech.com to deliver advisory and technical consulting services. We are not a bank, payment service provider, or licensed financial institution. We do not hold customer funds, hold banking credentials, or process payments on behalf of third parties.\n\nThe data controller for personal information collected through this website is the operator of CamFinTech, contactable at " + CONTACT_EMAIL + ".",
      km: "\"CamFinTech\" គឺជាឈ្មោះពាណិជ្ជកម្មដែលប្រើដោយប្រតិបត្តិករនៃ camfintech.com ដើម្បីផ្តល់សេវាប្រឹក្សា និងសេវាប្រឹក្សាបច្ចេកទេស។ យើងមិនមែនជាធនាគារ អ្នកផ្តល់សេវាបង់ប្រាក់ ឬគ្រឹះស្ថានហិរញ្ញវត្ថុដែលមានអាជ្ញាប័ណ្ណទេ។ យើងមិនកាន់កាប់ប្រាក់របស់អតិថិជន មិនកាន់កាប់ព័ត៌មានសម្ងាត់ធនាគារ ឬដំណើរការទូទាត់ប្រាក់ជំនួសភាគីទីបីឡើយ។\n\nអ្នកគ្រប់គ្រងទិន្នន័យសម្រាប់ព័ត៌មានផ្ទាល់ខ្លួនដែលប្រមូលបានតាមរយៈគេហទំព័រនេះ គឺជាប្រតិបត្តិករនៃ CamFinTech ដែលអាចទាក់ទងបានតាមរយៈ " + CONTACT_EMAIL + "។",
    },
  },
  {
    id: "information-we-collect",
    heading: {
      en: "3. Information we collect",
      km: "៣. ព័ត៌មានដែលយើងប្រមូល",
    },
    body: {
      en: "Information you provide to us\n• Name, email address, organisation, and message content when you contact us by email or through any contact form on this site.\n• Information shared with us when you reach us through messaging channels such as WhatsApp, Telegram, LinkedIn, or similar — typically your display name, profile information, and message contents.\n• Information you share during consulting engagements, meetings, demonstrations, or correspondence.\n\nInformation collected automatically\n• Standard server and request logs (IP address, browser type, device type, referring URL, pages requested, timestamps) generated when you visit the site.\n• Analytics events from Google Analytics (see Section 5).\n• Cookies and similar technologies (see Section 5).\n\nInformation we do not collect\n• We do not collect banking credentials, account numbers, KHQR payment data, CamDigiKey credentials, Bakong wallet identifiers, or any other authentication factors for any third-party financial system. If a project requires us to access such systems, we do so exclusively through the client's own administrative controls, never by collecting credentials from end users.",
      km: "ព័ត៌មានដែលអ្នកផ្តល់ឱ្យយើង\n• ឈ្មោះ អាសយដ្ឋានអ៊ីមែល អង្គភាព និងខ្លឹមសារសារ នៅពេលអ្នកទាក់ទងយើងតាមអ៊ីមែល ឬតាមរយៈទម្រង់ទាក់ទងណាមួយនៅលើគេហទំព័រនេះ។\n• ព័ត៌មានដែលអ្នកចែករំលែកជាមួយយើងនៅពេលអ្នកទាក់ទងយើងតាមរយៈបណ្តាញសារដូចជា WhatsApp, Telegram, LinkedIn ឬស្រដៀងគ្នា — ជាធម្មតាគឺឈ្មោះបង្ហាញ ព័ត៌មានទម្រង់ និងខ្លឹមសារសាររបស់អ្នក។\n• ព័ត៌មានដែលអ្នកចែករំលែកក្នុងអំឡុងពេលការប្រឹក្សា ការប្រជុំ ការបង្ហាញ ឬការឆ្លើយឆ្លង។\n\nព័ត៌មានដែលប្រមូលដោយស្វ័យប្រវត្តិ\n• កំណត់ហេតុម៉ាស៊ីនមេ និងសំណើស្តង់ដារ (អាសយដ្ឋាន IP, ប្រភេទកម្មវិធីរុករក, ប្រភេទឧបករណ៍, URL យោង, ទំព័រដែលស្នើសុំ, ត្រាពេលវេលា) ដែលបង្កើតឡើងនៅពេលអ្នកចូលមើលគេហទំព័រ។\n• ព្រឹត្តិការណ៍វិភាគពី Google Analytics (សូមមើលផ្នែកទី៥)។\n• ខូឃីស៍ និងបច្ចេកវិទ្យាស្រដៀងគ្នា (សូមមើលផ្នែកទី៥)។\n\nព័ត៌មានដែលយើងមិនប្រមូល\n• យើងមិនប្រមូលព័ត៌មានសម្ងាត់ធនាគារ លេខគណនី ទិន្នន័យបង់ប្រាក់ KHQR ព័ត៌មានសម្ងាត់ CamDigiKey អត្តសញ្ញាណកាបូបបាគង ឬកត្តាផ្ទៀងផ្ទាត់ផ្សេងទៀតសម្រាប់ប្រព័ន្ធហិរញ្ញវត្ថុភាគីទីបីណាមួយឡើយ។ ប្រសិនបើគម្រោងណាមួយតម្រូវឱ្យយើងចូលប្រើប្រព័ន្ធបែបនេះ យើងធ្វើដូច្នេះតែតាមរយៈការគ្រប់គ្រងផ្ទាល់របស់អតិថិជន មិនមែនតាមរយៈការប្រមូលព័ត៌មានសម្ងាត់ពីអ្នកប្រើប្រាស់ចុងក្រោយឡើយ។",
    },
  },
  {
    id: "how-we-use",
    heading: {
      en: "4. How we use information",
      km: "៤. របៀបដែលយើងប្រើព័ត៌មាន",
    },
    body: {
      en: "We use the information described above to:\n• Respond to your enquiries and provide the information, materials, or services you request.\n• Deliver, manage, and improve consulting engagements with clients and partners.\n• Operate, secure, and improve the camfintech.com website (including diagnostics, error tracking, and performance measurement).\n• Understand which content and topics are most useful so we can prioritise what we publish.\n• Comply with applicable legal, accounting, and regulatory obligations.\n• Where permitted, send occasional updates about CamFinTech, the Cambodian FinTech ecosystem, or content we have published. You can opt out of any such updates at any time by replying to the message or emailing " + CONTACT_EMAIL + ".",
      km: "យើងប្រើព័ត៌មានដែលបានពិពណ៌នាខាងលើដើម្បី៖\n• ឆ្លើយតបទៅនឹងសំណួររបស់អ្នក និងផ្តល់ព័ត៌មាន សម្ភារៈ ឬសេវាកម្មដែលអ្នកស្នើសុំ។\n• ផ្តល់ គ្រប់គ្រង និងកែលម្អកិច្ចព្រមព្រៀងប្រឹក្សាជាមួយអតិថិជន និងដៃគូ។\n• ប្រតិបត្តិការ ការពារ និងកែលម្អគេហទំព័រ camfintech.com (រួមមានការវិនិច្ឆ័យ ការតាមដានកំហុស និងការវាស់វែងដំណើរការ)។\n• យល់ពីខ្លឹមសារ និងប្រធានបទណាមួយដែលមានប្រយោជន៍បំផុត ដើម្បីយើងអាចផ្តល់អាទិភាពដល់អ្វីដែលយើងបោះពុម្ពផ្សាយ។\n• អនុលោមតាមកាតព្វកិច្ចច្បាប់ គណនេយ្យ និងបទប្បញ្ញត្តិដែលអាចអនុវត្តបាន។\n• នៅពេលដែលត្រូវបានអនុញ្ញាត ផ្ញើព័ត៌មានបច្ចុប្បន្នភាពម្តងម្កាលអំពី CamFinTech ប្រព័ន្ធអេកូ FinTech កម្ពុជា ឬខ្លឹមសារដែលយើងបានបោះពុម្ពផ្សាយ។ អ្នកអាចបដិសេធការទទួលព័ត៌មានបច្ចុប្បន្នភាពបែបនេះនៅពេលណាក៏បាន ដោយឆ្លើយតបទៅសារ ឬផ្ញើអ៊ីមែលទៅ " + CONTACT_EMAIL + "។",
    },
  },
  {
    id: "cookies-analytics",
    heading: {
      en: "5. Cookies and analytics",
      km: "៥. ខូឃីស៍ និងការវិភាគ",
    },
    body: {
      en: "We use a small number of cookies and analytics services to understand how the site is used.\n\nGoogle Analytics — we use Google Analytics 4 (measurement ID G-QDZ83JQWVC) to collect aggregated, pseudonymised information about pages viewed, traffic sources, devices, and approximate location. This data is processed by Google LLC and is governed by Google's privacy practices.\n\nSearch console verification — we verify the site with Google Search Console, Bing Webmaster Tools, and Facebook domain verification. These services do not set tracking cookies on your device.\n\nEssential cookies — the site stores a small amount of information in your browser (for example, your dark-mode preference) using browser storage. This data stays on your device.\n\nYou can disable cookies and analytics in your browser settings, or use browser extensions that block analytics scripts. Doing so will not prevent you from using the site.",
      km: "យើងប្រើខូឃីស៍ និងសេវាវិភាគចំនួនតិចតួចដើម្បីយល់ពីរបៀបដែលគេហទំព័រត្រូវបានប្រើប្រាស់។\n\nGoogle Analytics — យើងប្រើ Google Analytics 4 (លេខសម្គាល់រង្វាស់ G-QDZ83JQWVC) ដើម្បីប្រមូលព័ត៌មានសរុបដែលបានធ្វើជានាមផ្សេងអំពីទំព័រដែលបានមើល ប្រភពចរាចរណ៍ ឧបករណ៍ និងទីតាំងប្រហាក់ប្រហែល។ ទិន្នន័យនេះត្រូវបានដំណើរការដោយ Google LLC ហើយត្រូវបានគ្រប់គ្រងដោយការអនុវត្តឯកជនភាពរបស់ Google។\n\nការផ្ទៀងផ្ទាត់កុងសូលស្វែងរក — យើងផ្ទៀងផ្ទាត់គេហទំព័រជាមួយ Google Search Console, Bing Webmaster Tools, និងការផ្ទៀងផ្ទាត់ដែន Facebook។ សេវាកម្មទាំងនេះមិនកំណត់ខូឃីស៍តាមដាននៅលើឧបករណ៍របស់អ្នកទេ។\n\nខូឃីស៍ចាំបាច់ — គេហទំព័ររក្សាទុកព័ត៌មានបន្តិចបន្តួចនៅក្នុងកម្មវិធីរុករករបស់អ្នក (ឧទាហរណ៍ ចំណូលចិត្តរបៀបងងឹតរបស់អ្នក) ដោយប្រើការផ្ទុកកម្មវិធីរុករក។ ទិន្នន័យនេះស្ថិតនៅលើឧបករណ៍របស់អ្នក។\n\nអ្នកអាចបិទខូឃីស៍ និងការវិភាគនៅក្នុងការកំណត់កម្មវិធីរុករករបស់អ្នក ឬប្រើផ្នែកបន្ថែមកម្មវិធីរុករកដែលរារាំងស្គ្រីបវិភាគ។ ការធ្វើដូច្នេះនឹងមិនរារាំងអ្នកពីការប្រើគេហទំព័រនេះទេ។",
    },
  },
  {
    id: "third-parties",
    heading: {
      en: "6. Third-party services and automation",
      km: "៦. សេវាកម្មភាគីទីបី និងស្វ័យប្រវត្តិកម្ម",
    },
    body: {
      en: "We rely on a small number of trusted third-party platforms to operate this site and run our practice. The principal ones are:\n• Vercel Inc. — hosting and content delivery for camfintech.com.\n• Google LLC — analytics, font delivery, search console, and (where used) Workspace email.\n• Microsoft Corporation — Bing Webmaster Tools verification.\n• Meta Platforms Inc. — Facebook domain verification.\n• Messaging providers — WhatsApp (Meta), Telegram, and similar platforms when you choose to contact us through them.\n• n8n.io — we use n8n, a workflow automation platform, on infrastructure we operate to coordinate internal tasks such as content publishing, monitoring, and structured-data validation.\n• Generative AI providers — we use large language models from OpenAI, Anthropic, Google, and similar providers to assist with research, drafting, and analysis. We do not feed personally identifiable information from contact forms or client conversations into public AI tools without explicit consent.\n\nEach of these providers acts as an independent data controller or processor for the information they handle and is governed by their own privacy terms.",
      km: "យើងពឹងផ្អែកលើវេទិកាភាគីទីបីដែលគួរឱ្យទុកចិត្តចំនួនតិចតួចដើម្បីដំណើរការគេហទំព័រនេះ និងដំណើរការអាជីវកម្មរបស់យើង។ វេទិកាសំខាន់ៗមាន៖\n• Vercel Inc. — បង្ហោះ និងផ្តល់ខ្លឹមសារសម្រាប់ camfintech.com។\n• Google LLC — ការវិភាគ ការផ្តល់ពុម្ពអក្សរ កុងសូលស្វែងរក និង (ពេលប្រើ) អ៊ីមែល Workspace។\n• Microsoft Corporation — ការផ្ទៀងផ្ទាត់ Bing Webmaster Tools។\n• Meta Platforms Inc. — ការផ្ទៀងផ្ទាត់ដែន Facebook។\n• អ្នកផ្តល់សារ — WhatsApp (Meta), Telegram, និងវេទិកាស្រដៀងគ្នានៅពេលអ្នកជ្រើសរើសទាក់ទងយើងតាមរយៈពួកគេ។\n• n8n.io — យើងប្រើ n8n ដែលជាវេទិកាស្វ័យប្រវត្តិកម្ម workflow នៅលើហេដ្ឋារចនាសម្ព័ន្ធដែលយើងដំណើរការ ដើម្បីសម្របសម្រួលកិច្ចការផ្ទៃក្នុងដូចជាការបោះពុម្ពខ្លឹមសារ ការត្រួតពិនិត្យ និងការផ្ទៀងផ្ទាត់ទិន្នន័យរចនាសម្ព័ន្ធ។\n• អ្នកផ្តល់ AI ប្រភេទ Generative — យើងប្រើគំរូភាសាធំៗពី OpenAI, Anthropic, Google, និងអ្នកផ្តល់ស្រដៀងគ្នាដើម្បីជួយក្នុងការស្រាវជ្រាវ ការតាក់តែង និងការវិភាគ។ យើងមិនបញ្ចូលព័ត៌មានដែលអាចសម្គាល់អត្តសញ្ញាណបុគ្គលពីទម្រង់ទាក់ទង ឬការសន្ទនាជាមួយអតិថិជនទៅក្នុងឧបករណ៍ AI សាធារណៈដោយគ្មានការយល់ព្រមច្បាស់លាស់ឡើយ។\n\nអ្នកផ្តល់ទាំងនេះម្នាក់ៗ ដើរតួជាអ្នកគ្រប់គ្រងទិន្នន័យ ឬអ្នកដំណើរការទិន្នន័យឯករាជ្យសម្រាប់ព័ត៌មានដែលពួកគេគ្រប់គ្រង ហើយត្រូវបានគ្រប់គ្រងដោយលក្ខខណ្ឌឯកជនភាពផ្ទាល់ខ្លួនរបស់ពួកគេ។",
    },
  },
  {
    id: "cross-border",
    heading: {
      en: "7. Cross-border data handling",
      km: "៧. ការគ្រប់គ្រងទិន្នន័យឆ្លងព្រំដែន",
    },
    body: {
      en: "We operate from Cambodia and use cloud infrastructure and SaaS providers that are typically hosted outside Cambodia (primarily in the United States, the European Union, and the Asia-Pacific region, including Australia and Singapore). When you contact us or browse the site, your information may be stored and processed in those jurisdictions.\n\nWhere transfers occur, we rely on the standard contractual protections offered by our providers and limit the personal information we share to what is necessary to operate the service. We do not sell or rent personal information.",
      km: "យើងធ្វើប្រតិបត្តិការពីប្រទេសកម្ពុជា ហើយប្រើហេដ្ឋារចនាសម្ព័ន្ធពពក និងអ្នកផ្តល់ SaaS ដែលជាធម្មតាបង្ហោះនៅខាងក្រៅប្រទេសកម្ពុជា (ជាចម្បងនៅសហរដ្ឋអាមេរិក សហភាពអឺរ៉ុប និងតំបន់អាស៊ីប៉ាស៊ីហ្វិក រួមមានប្រទេសអូស្ត្រាលី និងសិង្ហបុរី)។ នៅពេលដែលអ្នកទាក់ទងយើង ឬរុករកគេហទំព័រ ព័ត៌មានរបស់អ្នកអាចត្រូវបានរក្សាទុក និងដំណើរការនៅក្នុងយុត្តាធិការទាំងនោះ។\n\nនៅពេលដែលការផ្ទេរកើតឡើង យើងពឹងផ្អែកលើការការពារកិច្ចសន្យាស្តង់ដារដែលផ្តល់ដោយអ្នកផ្តល់សេវារបស់យើង ហើយដាក់កម្រិតព័ត៌មានផ្ទាល់ខ្លួនដែលយើងចែករំលែកត្រឹមអ្វីដែលចាំបាច់ដើម្បីដំណើរការសេវាកម្ម។ យើងមិនលក់ ឬជួលព័ត៌មានផ្ទាល់ខ្លួនទេ។",
    },
  },
  {
    id: "retention",
    heading: {
      en: "8. Data retention",
      km: "៨. ការរក្សាទុកទិន្នន័យ",
    },
    body: {
      en: "We retain personal information only for as long as it is needed for the purposes for which it was collected, or as required by applicable law. As a general guideline:\n• Contact form and enquiry messages — up to 3 years from the last interaction, then deleted or anonymised.\n• Server and analytics logs — typically 14 to 26 months, in line with provider defaults.\n• Client engagement records — for the duration of the engagement and for a reasonable period afterwards to meet legal, tax, and audit obligations.\n\nYou can ask us to delete your information earlier — see Section 10.",
      km: "យើងរក្សាទុកព័ត៌មានផ្ទាល់ខ្លួនតែប៉ុណ្ណោះដែលចាំបាច់សម្រាប់គោលបំណងដែលវាត្រូវបានប្រមូល ឬតាមការតម្រូវដោយច្បាប់ដែលអាចអនុវត្តបាន។ ជាគោលការណ៍ណែនាំទូទៅ៖\n• សារទម្រង់ទាក់ទង និងសារសាកសួរ — រហូតដល់ ៣ ឆ្នាំចាប់ពីការទាក់ទងចុងក្រោយ បន្ទាប់មកលុបចោល ឬធ្វើជានាមផ្សេង។\n• កំណត់ហេតុម៉ាស៊ីនមេ និងការវិភាគ — ជាធម្មតា ១៤ ទៅ ២៦ ខែ ស្របតាមការកំណត់លំនាំដើមរបស់អ្នកផ្តល់សេវា។\n• កំណត់ត្រាការងារអតិថិជន — ក្នុងអំឡុងពេលនៃការងារ និងសម្រាប់រយៈពេលសមរម្យបន្ទាប់ពីនោះ ដើម្បីបំពេញកាតព្វកិច្ចច្បាប់ ពន្ធ និងសវនកម្ម។\n\nអ្នកអាចស្នើសុំឱ្យយើងលុបព័ត៌មានរបស់អ្នកមុនពេលនេះ — សូមមើលផ្នែកទី១០។",
    },
  },
  {
    id: "security",
    heading: {
      en: "9. Security",
      km: "៩. សុវត្ថិភាព",
    },
    body: {
      en: "We use reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, or destruction. These include encrypted connections (HTTPS/TLS), access controls on our internal tools, principle-of-least-privilege configuration of automation workflows, and ongoing monitoring of our infrastructure.\n\nNo internet service is perfectly secure. If you believe your interactions with us may have been compromised, please contact " + CONTACT_EMAIL + " so we can investigate.",
      km: "យើងប្រើវិធានការបច្ចេកទេស និងអង្គការសមរម្យដើម្បីការពារព័ត៌មានផ្ទាល់ខ្លួនពីការចូលប្រើដោយគ្មានការអនុញ្ញាត ការផ្លាស់ប្តូរ ការបង្ហាញ ឬការបំផ្លាញ។ ទាំងនេះរួមមានការតភ្ជាប់ដែលបានអ៊ិនគ្រីប (HTTPS/TLS) ការគ្រប់គ្រងការចូលប្រើនៅលើឧបករណ៍ផ្ទៃក្នុងរបស់យើង ការកំណត់រចនាសម្ព័ន្ធ workflow ស្វ័យប្រវត្តិកម្មតាមគោលការណ៍សិទ្ធិតិចបំផុត និងការត្រួតពិនិត្យបន្តនៃហេដ្ឋារចនាសម្ព័ន្ធរបស់យើង។\n\nគ្មានសេវាអ៊ីនធឺណិតណាដែលមានសុវត្ថិភាពពេញលេញឡើយ។ ប្រសិនបើអ្នកជឿថាការទាក់ទងរបស់អ្នកជាមួយយើងអាចត្រូវបានសម្របសម្រួល សូមទាក់ទង " + CONTACT_EMAIL + " ដើម្បីឱ្យយើងអាចស៊ើបអង្កេត។",
    },
  },
  {
    id: "your-rights",
    heading: {
      en: "10. Your rights and choices",
      km: "១០. សិទ្ធិ និងជម្រើសរបស់អ្នក",
    },
    body: {
      en: "You can ask us to:\n• confirm whether we hold personal information about you;\n• give you a copy of that information;\n• correct information that is inaccurate or out of date;\n• delete information that we no longer have a lawful basis to keep;\n• stop sending you direct communications.\n\nTo exercise any of these rights, email " + CONTACT_EMAIL + ". We will respond within a reasonable time and may ask you to verify your identity before disclosing or deleting information. Where the law of your jurisdiction gives you additional rights, we will honour those.",
      km: "អ្នកអាចស្នើសុំយើងឱ្យ៖\n• បញ្ជាក់ថាតើយើងកាន់កាប់ព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកឬទេ។\n• ផ្តល់ឱ្យអ្នកនូវច្បាប់ចម្លងនៃព័ត៌មាននោះ។\n• កែតម្រូវព័ត៌មានដែលមិនត្រឹមត្រូវ ឬហួសសម័យ។\n• លុបព័ត៌មានដែលយើងលែងមានមូលដ្ឋានច្បាប់ដើម្បីរក្សាទុក។\n• បញ្ឈប់ការផ្ញើទំនាក់ទំនងផ្ទាល់ដល់អ្នក។\n\nដើម្បីអនុវត្តសិទ្ធិទាំងនេះ សូមផ្ញើអ៊ីមែលទៅ " + CONTACT_EMAIL + "។ យើងនឹងឆ្លើយតបក្នុងរយៈពេលសមរម្យ ហើយអាចស្នើសុំអ្នកផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកមុនពេលបង្ហាញ ឬលុបព័ត៌មាន។ នៅពេលដែលច្បាប់នៃយុត្តាធិការរបស់អ្នកផ្តល់សិទ្ធិបន្ថែម យើងនឹងគោរពតាមសិទ្ធិទាំងនោះ។",
    },
  },
  {
    id: "children",
    heading: {
      en: "11. Children",
      km: "១១. កុមារ",
    },
    body: {
      en: "The CamFinTech website and services are intended for business, professional, and institutional audiences. We do not knowingly collect personal information from children under 16. If you believe a child has provided information to us, please contact " + CONTACT_EMAIL + " and we will delete it.",
      km: "គេហទំព័រ និងសេវាកម្ម CamFinTech មានគោលបំណងសម្រាប់ទស្សនិកជនអាជីវកម្ម អ្នកវិជ្ជាជីវៈ និងស្ថាប័ន។ យើងមិនប្រមូលព័ត៌មានផ្ទាល់ខ្លួនពីកុមារអាយុក្រោម ១៦ ឆ្នាំដោយដឹងឡើយ។ ប្រសិនបើអ្នកជឿថាកុមារបានផ្តល់ព័ត៌មានដល់យើង សូមទាក់ទង " + CONTACT_EMAIL + " ហើយយើងនឹងលុបវាចោល។",
    },
  },
  {
    id: "regulatory",
    heading: {
      en: "12. Regulatory alignment",
      km: "១២. ការតម្រឹមតាមបទប្បញ្ញត្តិ",
    },
    body: {
      en: "Cambodia's data-protection and FinTech regulatory landscape is evolving. We monitor guidance from the National Bank of Cambodia (NBC), the Telecommunication Regulator of Cambodia (TRC), the Ministry of Posts and Telecommunications (MPTC), and emerging Technology Risk Management Guidance (TRMG) principles. We will update this statement as relevant Cambodian legislation, NBC circulars, and ASEAN-level data-protection norms take effect.",
      km: "ទេសភាពច្បាប់ការពារទិន្នន័យ និងបទប្បញ្ញត្តិ FinTech របស់កម្ពុជាកំពុងវិវត្ត។ យើងតាមដានការណែនាំពីធនាគារជាតិនៃកម្ពុជា (NBC), និយតករទូរគមនាគមន៍កម្ពុជា (TRC), ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (MPTC), និងគោលការណ៍ការណែនាំគ្រប់គ្រងហានិភ័យបច្ចេកវិទ្យា (TRMG) ដែលកំពុងលេចឡើង។ យើងនឹងធ្វើបច្ចុប្បន្នភាពសេចក្តីប្រកាសនេះនៅពេលដែលច្បាប់កម្ពុជា សារាចរ NBC និងបទដ្ឋានការពារទិន្នន័យកម្រិតអាស៊ានដែលពាក់ព័ន្ធចូលជាធរមាន។",
    },
  },
  {
    id: "changes",
    heading: {
      en: "13. Changes to this statement",
      km: "១៣. ការផ្លាស់ប្តូរសេចក្តីប្រកាសនេះ",
    },
    body: {
      en: "We may update this Privacy Statement from time to time. When we do, we will change the \"Effective\" date at the top of the page. For material changes, we will take reasonable steps to highlight the update — for example by posting a notice on the site or, where appropriate, by contacting people who have engaged with us directly.",
      km: "យើងអាចធ្វើបច្ចុប្បន្នភាពសេចក្តីប្រកាសឯកជនភាពនេះពីពេលមួយទៅពេលមួយ។ នៅពេលដែលយើងធ្វើដូច្នេះ យើងនឹងផ្លាស់ប្តូរកាលបរិច្ឆេទ \"មានប្រសិទ្ធភាព\" នៅផ្នែកខាងលើនៃទំព័រ។ សម្រាប់ការផ្លាស់ប្តូរសំខាន់ៗ យើងនឹងចាត់វិធានការសមរម្យដើម្បីរំលេចការធ្វើបច្ចុប្បន្នភាព — ឧទាហរណ៍ដោយបោះផ្សាយការជូនដំណឹងនៅលើគេហទំព័រ ឬនៅពេលដែលសមរម្យ ដោយទាក់ទងអ្នកដែលបានចូលរួមជាមួយយើងដោយផ្ទាល់។",
    },
  },
  {
    id: "contact",
    heading: {
      en: "14. Contact",
      km: "១៤. ទំនាក់ទំនង",
    },
    body: {
      en: "Privacy questions, requests, and complaints can be sent to:\n\nCamFinTech\nEmail: " + CONTACT_EMAIL + "\nAddress: 30 Preah Norodom Boulevard, Khan Daun Penh, Phnom Penh, Kingdom of Cambodia\n\nIf you are not satisfied with our response, you may have the right to complain to a data-protection authority in your country of residence.",
      km: "សំណួរ សំណើ និងការត្អូញត្អែរអំពីឯកជនភាពអាចត្រូវបានផ្ញើទៅ៖\n\nCamFinTech\nអ៊ីមែល៖ " + CONTACT_EMAIL + "\nអាសយដ្ឋាន៖ ផ្លូវព្រះនរោត្តម លេខ៣០, ខណ្ឌដូនពេញ, ភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា\n\nប្រសិនបើអ្នកមិនពេញចិត្តនឹងការឆ្លើយតបរបស់យើង អ្នកអាចមានសិទ្ធិដាក់ការត្អូញត្អែរទៅអាជ្ញាធរការពារទិន្នន័យនៅក្នុងប្រទេសដែលអ្នករស់នៅ។",
    },
  },
];

const T = {
  title: { en: "Privacy Statement", km: "សេចក្តីប្រកាសឯកជនភាព" },
  lead: {
    en: "How CamFinTech collects, uses, and protects information about the people who interact with our website and our consulting practice.",
    km: "របៀបដែល CamFinTech ប្រមូល ប្រើប្រាស់ និងការពារព័ត៌មានអំពីបុគ្គលដែលទាក់ទងជាមួយគេហទំព័រ និងការងារប្រឹក្សារបស់យើង។",
  },
  effective: { en: "Effective", km: "មានប្រសិទ្ធភាព" },
  breadcrumb: { en: "Privacy", km: "ឯកជនភាព" },
  back: { en: "Back to CamFinTech", km: "ត្រឡប់ទៅ CamFinTech" },
  toggle: { en: "ខ្មែរ", km: "English" },
  langNote: {
    en: "If there is any inconsistency between the English and Khmer versions of this statement, the English version prevails.",
    km: "ប្រសិនបើមានភាពមិនស៊ីសង្វាក់រវាងសេចក្តីប្រកាសនេះជាភាសាអង់គ្លេស និងជាភាសាខ្មែរ ឯកសារភាសាអង់គ្លេសត្រូវយកជាការ។",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  "@id": "https://www.camfintech.com/privacy#privacy",
  name: "CamFinTech Privacy Statement",
  url: "https://www.camfintech.com/privacy",
  inLanguage: ["en", "km"],
  isPartOf: { "@id": "https://www.camfintech.com/#website" },
  publisher: { "@id": "https://www.camfintech.com/#organization" },
  dateModified: "2026-05-22",
};

export default function PrivacyContent() {
  const [lang, setLang] = useState<Lang>("en");
  const isKm = lang === "km";

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Script
        id="privacy-schema"
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
            <a href="/terms" className={`text-primary hover:underline ${isKm ? "font-khmer" : ""}`}>
              {isKm ? "លក្ខខណ្ឌប្រើប្រាស់" : "Terms of Use"}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

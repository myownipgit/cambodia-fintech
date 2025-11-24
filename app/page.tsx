"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

type Language = "en" | "km";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "km" : "en"));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header language={language} onLanguageToggle={toggleLanguage} />

      <main className="flex-1">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Hero Section */}
          <section className="w-full" id="home">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-6 text-left">
                <h1 className={`text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en"
                    ? "Architecting Cambodia's Digital Financial Future"
                    : "ស្ថាបត្យករអនាគតហិរញ្ញវត្ថុបែបឌីជីថលរបស់កម្ពុជា"}
                </h1>
                <p className={`text-base font-normal leading-normal sm:text-lg ${language === "km" ? "font-khmer leading-relaxed" : ""}`}>
                  {language === "en"
                    ? "We build compliant, interoperable FinTech solutions that empower enterprises to thrive on Cambodia's national digital infrastructure, fully aligned with the Government-as-a-Platform model."
                    : "យើងបង្កើតដំណោះស្រាយបច្ចេកវិទ្យាហិរញ្ញវត្ថុ (FinTech) ដែលអនុលោមតាមបទប្បញ្ញត្តិ និងមានអន្តរប្រតិបត្តិការ ដែលផ្ដល់អំណាចដល់សហគ្រាសនានាឱ្យរីកចម្រើនលើហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលជាតិរបស់កម្ពុជា ដោយស្របតាមគំរូ «រដ្ឋាភិបាលជាវេទិកា» (Government-as-a-Platform)។"}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className={`flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold tracking-[0.015em] text-text-light transition-transform hover:scale-105 ${language === "km" ? "font-khmer" : ""}`}>
                    <span className="truncate">
                      {language === "en" ? "Book Consultation" : "កក់ការពិគ្រោះយោបល់"}
                    </span>
                  </button>
                  <button className={`flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-5 text-base font-bold tracking-[0.015em] text-text-light dark:text-text-dark transition-transform hover:scale-105 ${language === "km" ? "font-khmer" : ""}`}>
                    <span className="truncate">
                      {language === "en" ? "Contact Us" : "ទំនាក់ទំនងមកយើង"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="aspect-square w-full rounded-xl bg-primary/10 lg:aspect-[4/3] relative">
                <Image
                  alt="Abstract illustration of digital infrastructure"
                  className="h-full w-full object-cover rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnMQy_ZbJSdDGCvJiIuqttn3BMYDq0zDfOdRRtj9WtFsjJGb_6ou3sSUF3MVhKT2EOlt82mn1h4J5A5lildJaVg6Y5J9sWtaUe-99pjzomToDSZp7mbSvOzOi-Y57W4mDdoZ3VNL5AVBvWtkmHSR_CBMKvsEMDP34yiKqYa9qyM3mQqueepPnkdHFGYmJjAxViVbmnUJF_8pMWANBGrEU5ljVpzQu84xfgw1-TnDkkXM4V2SVqJhDZkGrLYlshrpv3A5GrPKCnuc"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="mt-24 w-full" id="about">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en" ? "About Us" : "អំពី​ពួក​យើង"}
              </h2>
              <p className={`max-w-3xl text-lg text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en"
                  ? "A short introductory paragraph about the company's mission and vision, followed by more detailed content presented in two columns below."
                  : "កថាខណ្ឌណែនាំខ្លីៗអំពីបេសកកម្ម និងចក្ខុវិស័យរបស់ក្រុមហ៊ុន បន្ទាប់មកដោយខ្លឹមសារលម្អិតបន្ថែមដែលបង្ហាញក្នុងជួរឈរពីរខាងក្រោម។"}
              </p>
            </div>
            <div className={`mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 ${language === "km" ? "font-khmer" : ""}`}>
              <p className="leading-relaxed">
                {language === "en"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat."
                  : "អត្ថបទជាភាសាខ្មែរសម្រាប់ជួរឈរទីមួយ។ ខ្លឹមសារនេះរៀបរាប់លម្អិតអំពីប្រវត្តិ និងគោលដៅរបស់ក្រុមហ៊ុន ដោយផ្តោតលើការប្តេជ្ញាចិត្តរបស់យើងក្នុងការជំរុញនវានុវត្តន៍ផ្នែកហិរញ្ញវត្ថុក្នុងប្រទេសកម្ពុជា។ យើងខិតខំផ្តល់នូវដំណោះស្រាយដ៏ល្អបំផុត។"}
              </p>
              <p className="leading-relaxed">
                {language === "en"
                  ? "Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh."
                  : "អត្ថបទជាភាសាខ្មែរសម្រាប់ជួរឈរទីពីរ។ នៅទីនេះ យើងពន្យល់ពីទស្សនវិជ្ជារបស់យើង និងរបៀបដែលយើងសហការជាមួយដៃគូដើម្បីបង្កើតប្រព័ន្ធអេកូឡូស៊ីហិរញ្ញវត្ថុឌីជីថលដែលរឹងមាំ និងប្រកបដោយបរិយាប័ន្នសម្រាប់ទាំងអស់គ្នា។"}
              </p>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="mt-24 w-full" id="services">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en" ? "Our Services" : "សេវាកម្មរបស់យើង"}
              </h2>
              <p className={`max-w-3xl text-lg text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en"
                  ? "We offer a comprehensive suite of services designed to accelerate your FinTech journey in Cambodia."
                  : "យើងផ្តល់ជូននូវសេវាកម្មគ្រប់ជ្រុងជ្រោយ ដែលត្រូវបានរៀបចំឡើងដើម្បីជំរុញដំណើរការ FinTech របស់អ្នកនៅក្នុងប្រទេសកម្ពុជា។"}
              </p>
            </div>
            <div className={`mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${language === "km" ? "font-khmer" : ""}`}>
              {language === "en" ? (
                <>
                  <ServiceCard
                    title="Compliance as a Service"
                    description="Navigate Cambodia's regulatory landscape with confidence."
                  />
                  <ServiceCard
                    title="Digital Payment Gateway Integration"
                    description="Connect to national payment systems like KHQR and Bakong."
                  />
                  <ServiceCard
                    title="Core Banking System Modernization"
                    description="Upgrade legacy systems for the digital age."
                  />
                  <ServiceCard
                    title="Lending & Credit Scoring Solutions"
                    description="Automate and enhance your lending processes."
                  />
                  <ServiceCard
                    title="API Development & Management"
                    description="Build secure and scalable APIs for your financial services."
                  />
                  <ServiceCard
                    title="Cybersecurity & Data Privacy"
                    description="Protect your assets and customer data."
                  />
                </>
              ) : (
                <>
                  <ServiceCard
                    title="សេវាកម្មអនុលោមភាព"
                    description="រុករកក្របខ័ណ្ឌបទប្បញ្ញត្តិរបស់កម្ពុជាដោយទំនុកចិត្ត។"
                  />
                  <ServiceCard
                    title="ការរួមបញ្ចូលច្រកផ្លូវទូទាត់ឌីជីថល"
                    description="ភ្ជាប់ទៅប្រព័ន្ធទូទាត់ជាតិដូចជា KHQR និងបាគង។"
                  />
                  <ServiceCard
                    title="ទំនើបកម្មប្រព័ន្ធធនាគារស្នូល"
                    description="ធ្វើឱ្យប្រសើរឡើងនូវប្រព័ន្ធចាស់សម្រាប់យុគសម័យឌីជីថល។"
                  />
                  <ServiceCard
                    title="ដំណោះស្រាយការផ្តល់ប្រាក់កម្ចី និងពិន្ទុឥណទាន"
                    description="ដំណើរការដោយស្វ័យប្រវត្តិ និងបង្កើនដំណើរការផ្តល់ប្រាក់កម្ចីរបស់អ្នក។"
                  />
                  <ServiceCard
                    title="ការអភិវឌ្ឍន៍ និងគ្រប់គ្រង API"
                    description="បង្កើត API ដែលមានសុវត្ថិភាព និងអាចធ្វើមាត្រដ្ឋានបានសម្រាប់សេវាកម្មហិរញ្ញវត្ថុរបស់អ្នក។"
                  />
                  <ServiceCard
                    title="សន្តិសុខតាមអ៊ីនធឺណិត និងឯកជនភាពទិន្នន័យ"
                    description="ការពារទ្រព្យសម្បត្តិ និងទិន្នន័យអតិថិជនរបស់អ្នក។"
                  />
                </>
              )}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mt-24 w-full" id="why-us">
            <div className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 ${language === "km" ? "font-khmer" : ""}`}>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {language === "en" ? "Why Choose Us" : "ហេតុអ្វីជ្រើសរើសយើង"}
                </h2>
                <p className="text-lg text-text-light/80 dark:text-text-dark/80">
                  {language === "en"
                    ? "We are more than consultants; we are your strategic partners in navigating the complexities of Cambodia's FinTech ecosystem."
                    : "យើងមិនមែនត្រឹមតែជាអ្នកប្រឹក្សាទេ។ យើងជាដៃគូយុទ្ធសាស្ត្ររបស់អ្នកក្នុងការដោះស្រាយភាពស្មុគស្មាញនៃប្រព័ន្ធអេកូឡូស៊ី FinTech របស់កម្ពុជា។"}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold">
                    {language === "en" ? "Deep Local Expertise" : "ជំនាញក្នុងស្រុកស៊ីជម្រៅ"}
                  </h3>
                  <p className="mt-2 text-text-light/80 dark:text-text-dark/80">
                    {language === "en"
                      ? "Our team possesses unparalleled understanding of the local regulatory, cultural, and business landscape."
                      : "ក្រុមការងាររបស់យើងមានការយល់ដឹងដែលមិនអាចប្រៀបផ្ទឹមបានអំពីបទប្បញ្ញត្តិ វប្បធម៌ និងបរិយាកាសអាជីវកម្មក្នុងស្រុក។"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {language === "en" ? "Future-Proof Architecture" : "ស្ថាបត្យកម្មដែលធានាអនាគត"}
                  </h3>
                  <p className="mt-2 text-text-light/80 dark:text-text-dark/80">
                    {language === "en"
                      ? "We design scalable and interoperable systems built to last and adapt to future technological advancements."
                      : "យើងរចនាប្រព័ន្ធដែលអាចធ្វើមាត្រដ្ឋានបាន និងមានអន្តរប្រតិបត្តិការ ដែលត្រូវបានបង្កើតឡើងដើម្បីស្ថិតស្ថេរ និងសម្របខ្លួនទៅនឹងការវិវត្តបច្ចេកវិទ្យានាពេលអនាគត។"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {language === "en" ? "Proven Track Record" : "កំណត់ត្រាដែលបានបញ្ជាក់"}
                  </h3>
                  <p className="mt-2 text-text-light/80 dark:text-text-dark/80">
                    {language === "en"
                      ? "We have a history of successful project delivery for leading financial institutions and enterprises in Cambodia."
                      : "យើងមានប្រវត្តិជោគជ័យក្នុងការផ្តល់គម្រោងសម្រាប់គ្រឹះស្ថានហិរញ្ញវត្ថុ និងសហគ្រាសឈានមុខគេនៅក្នុងប្រទេសកម្ពុជា។"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mt-24 w-full" id="use-cases">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en" ? "Use Cases" : "ករណីសិក្សា"}
              </h2>
              <p className={`max-w-3xl text-lg text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en"
                  ? "Discover how we've helped businesses like yours to innovate and grow."
                  : "ស្វែងយល់ពីរបៀបដែលយើងបានជួយអាជីវកម្មដូចជាអាជីវកម្មរបស់អ្នកក្នុងការបង្កើតថ្មី និងរីកចម្រើន។"}
              </p>
            </div>
            <div className={`mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${language === "km" ? "font-khmer" : ""}`}>
              {language === "en" ? (
                <>
                  <UseCaseCard
                    title="B2B Payment Automation for a Major Distributor"
                    challenge="Manual invoicing and reconciliation processes."
                    solution="Implemented an automated payment gateway integrated with their ERP."
                    impact="Reduced processing time by 80% and improved cash flow."
                  />
                  <UseCaseCard
                    title="Automated Tax Compliance for an Enterprise"
                    challenge="Complex tax reporting and risk of non-compliance."
                    solution="Developed a middleware connecting their systems to the General Department of Taxation (GDT) API."
                    impact="Achieved 100% automated and accurate tax filing."
                  />
                  <UseCaseCard
                    title="SME Lending Acceleration for an MFI"
                    challenge="Slow manual credit assessment for SME loans."
                    solution="Deployed a digital lending platform with an automated credit scoring engine."
                    impact="Loan approval time reduced from weeks to days, expanding market reach."
                  />
                </>
              ) : (
                <>
                  <UseCaseCard
                    title="ស្វ័យប្រវត្តិកម្មការទូទាត់ B2B សម្រាប់ក្រុមហ៊ុនចែកចាយធំមួយ"
                    challenge="ដំណើរការចេញវិក្កយបត្រ និងផ្ទៀងផ្ទាត់ដោយដៃ។"
                    solution="បានអនុវត្តច្រកផ្លូវទូទាត់ដោយស្វ័យប្រវត្តិដែលរួមបញ្ចូលជាមួយ ERP របស់ពួកគេ។"
                    impact="កាត់បន្ថយពេលវេលាដំណើរការ ៨០% និងធ្វើឱ្យប្រសើរឡើងនូវលំហូរសាច់ប្រាក់។"
                  />
                  <UseCaseCard
                    title="អនុលោមភាពពន្ធដោយស្វ័យប្រវត្តិសម្រាប់សហគ្រាស"
                    challenge="ការរាយការណ៍ពន្ធស្មុគស្មាញ និងហានិភ័យនៃការមិនអនុលោម។"
                    solution="បានអភិវឌ្ឍ middleware ដែលភ្ជាប់ប្រព័ន្ធរបស់ពួកគេទៅនឹង API របស់អគ្គនាយកដ្ឋានពន្ធដារ (GDT)។"
                    impact="សម្រេចបានការដាក់ឯកសារពន្ធដោយស្វ័យប្រវត្តិ និងត្រឹមត្រូវ ១០០%។"
                  />
                  <UseCaseCard
                    title="ការជំរុញការផ្តល់ប្រាក់កម្ចីដល់សហគ្រាសធុនតូច និងមធ្យមសម្រាប់គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុ"
                    challenge="ការវាយតម្លៃឥណទានដោយដៃយឺតសម្រាប់ប្រាក់កម្ចីសហគ្រាសធុនតូច និងមធ្យម។"
                    solution="បានដាក់ឱ្យប្រើប្រាស់វេទិកាផ្តល់ប្រាក់កម្ចីឌីជីថលជាមួយនឹងម៉ាស៊ីនគណនាពិន្ទុឥណទានដោយស្វ័យប្រវត្តិ។"
                    impact="ពេលវេលាអនុម័តប្រាក់កម្ចីត្រូវបានកាត់បន្ថយពីច្រើនសប្តាហ៍មកត្រឹមតែប៉ុន្មានថ្ងៃ ដែលពង្រីកវិសាលភាពទីផ្សារ។"
                  />
                </>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-24 w-full" id="contact">
            <div className="rounded-xl bg-primary/10 dark:bg-primary/20 p-8 text-center sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Build Your Future on Cambodia&apos;s Digital Infrastructure
              </h2>
              <p className="font-khmer mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                កសាងអនាគតរបស់អ្នកនៅលើហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលរបស់កម្ពុជា
              </p>
              <div className="mt-8">
                <button className="flex mx-auto h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold tracking-[0.015em] text-text-light transition-transform hover:scale-105">
                  <span className="truncate">Book a Free Consultation</span>
                </button>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">
              <div>
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
                  <a
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                    href="mailto:info@camfintech.com"
                  >
                    <span className="material-symbols-outlined text-xl">mail</span>
                    <span>info@camfintech.com</span>
                  </a>
                  <a
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                    href="tel:+85576277565"
                  >
                    <span className="material-symbols-outlined text-xl">call</span>
                    <span>+855 76 277 5645</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Messaging</h3>
                <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="https://wa.me/85576277565">
                    <span className="material-symbols-outlined text-xl">chat</span>
                    <span>WhatsApp</span>
                  </a>
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-xl">send</span>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Office Location</h3>
                <p className="mt-4 leading-relaxed">
                  វត្ត​ថ្មី, Venus street,
                  <br />
                  near Wat thmey,
                  <br />
                  Krong Siem Reap, 17000
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Postal Address</h3>
                <p className="mt-4 leading-relaxed">
                  PO Box 93101
                  <br />
                  54 Pokambor Avenue
                  <br />
                  Siem Reap Post Office
                  <br />
                  Krong Cambodia
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-text-light/80 dark:text-text-dark/80">{description}</p>
    </div>
  );
}

interface UseCaseCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

function UseCaseCard({ title, challenge, solution, impact }: UseCaseCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-col gap-2">
        <p>
          <strong className="text-primary">Challenge:</strong> {challenge}
        </p>
        <p>
          <strong className="text-primary">Solution:</strong> {solution}
        </p>
        <p>
          <strong className="text-primary">Impact:</strong> {impact}
        </p>
      </div>
    </div>
  );
}

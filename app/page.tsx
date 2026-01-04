"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import UseCaseCard from "./components/UseCaseCard";
import Image from "next/image";
import type { Language } from "./types";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "km" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
                  ? "We are strategic advisors and technical architects specializing in Cambodia's emerging digital financial infrastructure. Our expertise lies at the intersection of regulatory compliance, government technology platforms, and enterprise integration."
                  : "យើងជាទីប្រឹក្សាយុទ្ធសាស្ត្រ និងស្ថាបត្យករបច្ចេកទេសដែលមានជំនាញពិសេសក្នុងហេដ្ឋារចនាសម្ព័ន្ធហិរញ្ញវត្ថុឌីជីថលកំពុងរីកចម្រើនរបស់កម្ពុជា។ ជំនាញរបស់យើងស្ថិតនៅចំណុចប្រសព្វនៃការអនុលោមតាមបទប្បញ្ញត្តិ វេទិកាបច្ចេកវិទ្យារដ្ឋាភិបាល និងការរួមបញ្ចូលសហគ្រាស។"}
              </p>
            </div>
            <div className={`mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 ${language === "km" ? "font-khmer" : ""}`}>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {language === "en"
                    ? "We understand Cambodia's unique position as one of the few countries implementing a comprehensive Government-as-a-Platform model. Our team has deep expertise in working with national digital infrastructure layers including CamDigiKey (digital identity), Bakong (instant payments), CamDX (data exchange), and the mandatory CamInvoice system."
                    : "យើងយល់ពីទីតាំងពិសេសរបស់កម្ពុជាជាប្រទេសមួយក្នុងចំណោមប្រទេសមួយចំនួនតែប៉ុណ្ណោះដែលអនុវត្តគំរូ «រដ្ឋាភិបាលជាវេទិកា» ដ៏ទូលំទូលាយ។ ក្រុមរបស់យើងមានជំនាញជ្រាលជ្រៅក្នុងការធ្វើការជាមួយស្រទាប់ហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលជាតិ រួមទាំង CamDigiKey (អត្តសញ្ញាណឌីជីថល), បាគង (ការទូទាត់ភ្លាមៗ), CamDX (ការផ្លាស់ប្តូរទិន្នន័យ), និងប្រព័ន្ធ CamInvoice ដែលមានលក្ខណៈបង្ខិតបង្ខំ។"}
                </p>
                <p className="leading-relaxed">
                  {language === "en"
                    ? "Our approach combines technical implementation with strategic business advisory. We help enterprises navigate the complexities of integrating with government APIs, ensuring regulatory compliance, and building solutions that leverage Cambodia's unique digital infrastructure advantages."
                    : "វិធីសាស្រ្តរបស់យើងរួមបញ្ចូលការអនុវត្តបច្ចេកទេសជាមួយការប្រឹក្សាអាជីវកម្មយុទ្ធសាស្ត្រ។ យើងជួយសហគ្រាសក្នុងការដោះស្រាយភាពស្មុគស្មាញនៃការរួមបញ្ចូលជាមួយ API របស់រដ្ឋាភិបាល ធានាការអនុលោមតាមបទប្បញ្ញត្តិ និងបង្កើតដំណោះស្រាយដែលប្រើប្រាស់គុណសម្បត្តិហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលពិសេសរបស់កម្ពុជា។"}
                </p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {language === "en"
                    ? "What sets us apart is our understanding that Cambodia's digital transformation is not organic market evolution—it's deliberate architectural planning. We specialize in identifying and capitalizing on the strategic opportunities that emerge at the intersection of these mandatory government platforms."
                    : "អ្វីដែលធ្វើឱ្យយើងខុសគ្នាគឺការយល់ដឹងរបស់យើងថាការផ្លាស់ប្តូរឌីជីថលរបស់កម្ពុជាមិនមែនជាការវិវត្តទីផ្សារធម្មជាតិទេ—វាជាការរៀបចំស្ថាបត្យកម្មដោយចេតនា។ យើងមានជំនាញពិសេសក្នុងការកំណត់ និងទាញយកប្រយោជន៍ពីឱកាសយុទ្ធសាស្ត្រដែលកើតឡើងនៅចំណុចប្រសព្វនៃវេទិការដ្ឋាភិបាលដែលមានលក្ខណៈបង្ខិតបង្ខំទាំងនេះ។"}
                </p>
                <p className="leading-relaxed">
                  {language === "en"
                    ? "From automated supply chain finance leveraging CamInvoice data, to embedded micro-insurance through KHQR payment flows, to compliance-as-a-service for SMEs—we help businesses build on Cambodia's digital rails rather than around them. Our mission is to empower enterprises to thrive in Cambodia's Government-as-a-Platform ecosystem."
                    : "ពីហិរញ្ញវត្ថុខ្សែសង្វាក់ផ្គត់ផ្គង់ស្វ័យប្រវត្តិដែលប្រើប្រាស់ទិន្នន័យ CamInvoice ទៅធានារ៉ាប់រងខ្នាតតូចដែលដាក់បញ្ចូលតាមរយៈលំហូរទូទាត់ KHQR ដល់អនុលោមភាព-ជា-សេវាកម្មសម្រាប់សហគ្រាសធុនតូច និងមធ្យម—យើងជួយអាជីវកម្មក្នុងការសាងសង់នៅលើបណ្តាញឌីជីថលរបស់កម្ពុជាជាជាងជុំវិញពួកវា។ បេសកកម្មរបស់យើងគឺផ្តល់អំណាចដល់សហគ្រាសឱ្យរីកចម្រើនក្នុងប្រព័ន្ធអេកូឡូស៊ី «រដ្ឋាភិបាលជាវេទិកា» របស់កម្ពុជា។"}
                </p>
              </div>
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

          {/* Digital Infrastructure Section */}
          <section className="mt-24 w-full">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "en" ? "A Deliberate Design, Not Organic Growth" : "ការរចនាដោយចេតនា មិនមែនការរីកចម្រើនធម្មជាតិ"}
              </h2>
              <p className={`max-w-4xl text-lg ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en"
                  ? "Cambodia is executing a profound structural transformation, shifting from fragmented digital services to a cohesive, state-orchestrated national infrastructure. This is not market evolution; it is architectural planning."
                  : "កម្ពុជាកំពុងអនុវត្តការផ្លាស់ប្តូររចនាសម្ព័ន្ធយ៉ាងជ្រាលជ្រៅ ដោយផ្លាស់ប្តូរពីសេវាកម្មឌីជីថលដែលបែងចែកទៅជាហេដ្ឋារចនាសម្ព័ន្ធជាតិដែលរៀបចំដោយរដ្ឋ។ នេះមិនមែនជាការវិវត្តទីផ្សារទេ វាជាការរៀបចំស្ថាបត្យកម្ម។"}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-xl border-2 border-primary/30 bg-card-light dark:bg-card-dark p-6">
                <div className="flex h-16 items-center justify-center text-primary">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en" ? "1. Government-as-a-Platform (GaaP)" : "១. រដ្ឋាភិបាលជាវេទិកា (GaaP)"}
                </h3>
                <p className={`text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en"
                    ? "The state builds and operates the core digital rails—Identity (CamDigiKey), Interoperability (CamDX), and Payments (Bakong)—as public utilities."
                    : "រដ្ឋបង្កើត និងដំណើរការបណ្តាញឌីជីថលស្នូល—អត្តសញ្ញាណ (CamDigiKey), អន្តរប្រតិបត្តិការ (CamDX), និងការទូទាត់ (បាគង)—ជាសេវាសាធារណៈ។"}
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border-2 border-primary/30 bg-card-light dark:bg-card-dark p-6">
                <div className="flex h-16 items-center justify-center text-primary">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en" ? "2. Leapfrogging Legacy Systems" : "២. លោតផុតប្រព័ន្ធចាស់"}
                </h3>
                <p className={`text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en"
                    ? "By bypassing the constraints of mainframes and card networks, Cambodia has moved directly to a modern, microservices-based national stack."
                    : "ដោយរំលងកម្រិតនៃប្រព័ន្ធមេ និងបណ្តាញកាត កម្ពុជាបានផ្លាស់ប្តូរដោយផ្ទាល់ទៅប្រព័ន្ធជាតិសម័យទំនើបដែលផ្អែកលើ microservices។"}
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border-2 border-primary/30 bg-card-light dark:bg-card-dark p-6">
                <div className="flex h-16 items-center justify-center text-primary">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en" ? "3. Integrated by Mandate" : "៣. រួមបញ្ចូលតាមបទបញ្ជា"}
                </h3>
                <p className={`text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                  {language === "en"
                    ? "The strategy connects these public utilities through a top-down legal framework, creating a closed-loop ecosystem where identity, payments, and compliance are inextricably linked."
                    : "យុទ្ធសាស្ត្រភ្ជាប់សេវាសាធារណៈទាំងនេះតាមរយៈក្របខ័ណ្ឌច្បាប់ពីលើចុះក្រោម បង្កើតប្រព័ន្ធអេកូឡូស៊ីបិទជិតដែលអត្តសញ្ញាណ ការទូទាត់ និងការអនុលោមភាពត្រូវបានភ្ជាប់ជាមួយគ្នា។"}
                </p>
              </div>
            </div>
          </section>

          {/* Investment Opportunities Section */}
          <section className="mt-24 w-full">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "en" ? "The Next Frontier: Strategic Investment Opportunities" : "ព្រំដែនបន្ទាប់: ឱកាសវិនិយោគយុទ្ធសាស្ត្រ"}
              </h2>
              <p className={`max-w-4xl text-lg text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                {language === "en"
                  ? "The integrated national stack has created unique opportunities at the intersection of its layers."
                  : "ប្រព័ន្ធជាតិរួមបញ្ចូលបានបង្កើតឱកាសពិសេសនៅចំណុចប្រសព្វនៃស្រទាប់របស់វា។"}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                    {language === "en" ? "Automated Supply Chain Finance (SCF)" : "ហិរញ្ញវត្ថុខ្សែសង្វាក់ផ្គត់ផ្គង់ស្វ័យប្រវត្តិ"}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Gap:" : "គម្លាត:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "SMEs need capital, but banks lack trusted data on their performance."
                        : "សហគ្រាសធុនតូច និងមធ្យមត្រូវការដើមទុន ប៉ុន្តែធនាគារខ្វះទិន្នន័យដែលអាចជឿទុកចិត្តបានអំពីការអនុវត្តរបស់ពួកគេ។"}
                    </p>
                  </div>
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Solution:" : "ដំណោះស្រាយ:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "Leverage the mandatory, GDT-verified data from Layer 4 (CamInvoice) and customs data from Layer 6 (National Single Window). Build middleware to offer banks automated, low-risk invoice financing and trade finance products."
                        : "ប្រើប្រាស់ទិន្នន័យដែលបានផ្ទៀងផ្ទាត់ដោយអគ្គនាយកដ្ឋានពន្ធដារពីស្រទាប់ទី៤ (CamInvoice) និងទិន្នន័យគយពីស្រទាប់ទី៦។ បង្កើត middleware ដើម្បីផ្តល់ជូនធនាគារនូវផលិតផលហិរញ្ញវត្ថុវិក្កយបត្រស្វ័យប្រវត្តិ។"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">2</span>
                  <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                    {language === "en" ? "'Adapter Services' for SME Tax Compliance" : "សេវាកម្ម 'អាដាប់ទ័រ' សម្រាប់អនុលោមភាពពន្ធ"}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Gap:" : "គម្លាត:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "The CamInvoice mandate will be technically challenging for many of Cambodia's 43,970+ SMEs."
                        : "បទបញ្ជា CamInvoice នឹងមានបញ្ហាបច្ចេកទេសសម្រាប់សហគ្រាសធុនតូច និងមធ្យមជាង ៤៣,៩៧០+ របស់កម្ពុជា។"}
                    </p>
                  </div>
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Solution:" : "ដំណោះស្រាយ:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "Develop API-first accounting tools that act as a simple interface to the GDT's systems. These services bundle automated CamInvoice submission with basic bookkeeping, selling 'compliance-as-a-service'."
                        : "អភិវឌ្ឍឧបករណ៍គណនេយ្យ API-first ដែលធ្វើការជាចំណុចប្រទាក់សាមញ្ញទៅប្រព័ន្ធរបស់អគ្គនាយកដ្ឋានពន្ធដារ។"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <h3 className={`text-xl font-bold ${language === "km" ? "font-khmer" : ""}`}>
                    {language === "en" ? "Embedded Micro-Insurance" : "ធានារ៉ាប់រងខ្នាតតូចដាក់បញ្ចូល"}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Gap:" : "គម្លាត:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "Low insurance penetration, with purchasing being an analogue process."
                        : "ការជ្រាបចូលធានារ៉ាប់រងទាប ដោយការទិញជាដំណើរការដែលមិនទាន់ទំនើប។"}
                    </p>
                  </div>
                  <div>
                    <p className={`font-semibold text-primary ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en" ? "The Solution:" : "ដំណោះស្រាយ:"}
                    </p>
                    <p className={`text-sm text-text-light/80 dark:text-text-dark/80 ${language === "km" ? "font-khmer" : ""}`}>
                      {language === "en"
                        ? "Use Layer 3 (KHQR payments) as a distribution channel for insurance products. Embed micro-insurance offers directly into payment flows (e.g., add travel insurance to a bus ticket purchase), using Layer 1 (CamDigiKey) for seamless identity verification."
                        : "ប្រើស្រទាប់ទី៣ (ការទូទាត់ KHQR) ជាช្រងផ្សព្វផ្សាយសម្រាប់ផលិតផលធានារ៉ាប់រង។ ដាក់ការផ្តល់ធានារ៉ាប់រងខ្នាតតូចដោយផ្ទាល់ទៅក្នុងលំហូរទូទាត់។"}
                    </p>
                  </div>
                </div>
              </div>
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
                    href="tel:+855762775645"
                  >
                    <span className="material-symbols-outlined text-xl">call</span>
                    <span>+855 76 277 5645</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Messaging</h3>
                <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="https://wa.me/855762775645">
                    <span className="material-symbols-outlined text-xl">chat</span>
                    <span>WhatsApp</span>
                  </a>
                  <a className="flex items-center gap-2 transition-colors hover:text-primary" href="https://t.me/+855762775645">
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

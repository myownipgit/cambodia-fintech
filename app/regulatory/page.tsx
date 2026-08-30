import Link from 'next/link';
import { Metadata } from 'next';
import { getAllInstruments, getInstrumentsByIssuer } from '@/app/content/regulatory/registry';
import RegulatoryNotice from '@/app/components/RegulatoryNotice';
import { forceLabel, kindLabel, formatIssued } from './labels';

export const metadata: Metadata = {
  title: 'Cambodia FinTech Regulatory Instruments — CamFinTech',
  description:
    'A verified index of the Prakas, laws, sub-decrees and policy instruments governing FinTech, payments, digital assets and e-commerce in Cambodia — with issuer, dates, legal force, and a link to the source each entry was checked against.',
  alternates: { canonical: '/regulatory' },
};

/**
 * The five-regulator map. Confined to what the verification pass established:
 * the NBFSA sector list is from the 2021 law, and every other row is
 * supported by an instrument that has a page in this section. Nothing here
 * asserts a licensing outcome for any business.
 */
const regulators = [
  {
    name: 'National Bank of Cambodia (NBC)',
    remit: 'Banking, payments and the fiat rails',
    supervises:
      'Commercial banks, payment service institutions, e-money, and cryptoasset exposures held by supervised institutions',
  },
  {
    name: 'Non-Bank Financial Services Authority (NBFSA)',
    remit: 'Umbrella regulator for non-bank financial sectors',
    supervises:
      'Insurance and pensions, securities, social security, trusts, accounting and audit, real estate and pawnshops — delegating day-to-day supervision to sector regulators including SERC and the Trust Regulator',
  },
  {
    name: 'Securities and Exchange Regulator of Cambodia (SERC)',
    remit: 'Capital markets and digital assets held for investment',
    supervises:
      'Securities activity, Digital Asset Service Providers, and the FinTech Regulatory Sandbox every DASP applicant must pass through',
  },
  {
    name: 'Trust Regulator (TR)',
    remit: 'Fiduciary services',
    supervises: 'Licensed trustees and the four statutory trust types',
  },
  {
    name: 'Ministry of Economy and Finance (MEF) / GDT',
    remit: 'Fiscal policy and taxation',
    supervises: 'Capital gains, trust taxation, and tax administration generally',
  },
  {
    name: 'Ministry of Commerce (MOC)',
    remit: 'Commercial registration and e-commerce',
    supervises: 'E-commerce permits and licences, company registration',
  },
  {
    name: 'Royal Government / cross-ministry',
    remit: 'Digital government infrastructure',
    supervises: 'National platforms including CamDigiKey',
  },
];

export default function RegulatoryIndex() {
  const groups = getInstrumentsByIssuer();
  const total = getAllInstruments().length;

  return (
    <div className="min-h-screen bg-cloud">
      <nav className="max-w-4xl mx-auto px-4 pt-6 text-sm text-navy/60">
        <Link
          href="/"
          className="hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
        >
          CamFinTech
        </Link>{' '}
        / Regulatory Instruments
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Cambodia FinTech Regulatory Instruments
        </h1>
        <p className="text-lg text-navy/80 mb-6 leading-relaxed">
          Which body regulates what, which instrument sets the rule, and —
          the part that is hardest to find anywhere else — what each instrument
          does <em>not</em> cover. Every entry links to the source it was checked
          against and carries the date it was checked.
        </p>

        <RegulatoryNotice />

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-navy mb-3">
            Who regulates what
          </h2>
          <p className="text-navy/80 mb-4 leading-relaxed">
            Cambodia does not have a single financial regulator. Jurisdiction is
            split by activity, and the split is sharp: the same token can sit
            under one regulator when it is traded as an investment and another
            when it moves as a payment. Establishing which body owns your
            activity is the first question, and it is often the only one that
            matters.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden bg-card">
              <thead className="bg-teal/10">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-navy-deep">Authority</th>
                  <th className="px-3 py-2 text-left font-semibold text-navy-deep">Remit</th>
                  <th className="px-3 py-2 text-left font-semibold text-navy-deep">Supervises</th>
                </tr>
              </thead>
              <tbody>
                {regulators.map((r) => (
                  <tr key={r.name} className="border-b border-line align-top">
                    <td className="px-3 py-2 text-navy font-medium">{r.name}</td>
                    <td className="px-3 py-2 text-navy/80">{r.remit}</td>
                    <td className="px-3 py-2 text-navy/80">{r.supervises}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mb-2">
            Instrument index
          </h2>
          <p className="text-sm text-navy/60 mb-5">
            {total} instruments. Each entry was checked against a source that
            was actually fetched and read — the instrument itself where an
            official text is published, otherwise professional legal commentary.
            Every page names its sources and marks which kind each one is.
          </p>

          <div className="space-y-8">
            {groups.map(({ issuer, instruments }) => (
              <div key={issuer}>
                <p className="text-xs font-bold text-navy uppercase tracking-wider px-2 py-1 rounded bg-teal/10 inline-block mb-3">
                  {issuer}
                </p>
                <ul className="space-y-3">
                  {instruments.map((instrument) => (
                    <li key={instrument.slug}>
                      <Link
                        href={`/regulatory/${instrument.slug}`}
                        className="block p-4 bg-card rounded-lg border border-line hover:border-teal transition-colors"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                          {instrument.number && (
                            <span className="font-mono text-xs text-navy/70">
                              {instrument.number}
                            </span>
                          )}
                          <h3 className="font-medium text-navy">{instrument.title}</h3>
                        </div>
                        <p className="text-sm text-navy/70 leading-relaxed">
                          {instrument.summary}
                        </p>
                        <p className="text-xs text-navy/50 mt-2">
                          {kindLabel[instrument.kind]} · {formatIssued(instrument.issued)} ·{' '}
                          {forceLabel[instrument.force]}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

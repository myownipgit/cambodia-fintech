import { RegulatoryInstrument } from './types';
import { prakasB7024735 } from './instruments/prakas-b7-024-735';
import { prakasB14017161 } from './instruments/prakas-b14-017-161';
import { lawOnBanking } from './instruments/law-on-banking';
import { lawOnECommerce } from './instruments/law-on-e-commerce';
import { subDecree207CamDigiKey } from './instruments/sub-decree-207-camdigikey';
import { fintechDevelopmentPolicy } from './instruments/fintech-development-policy';

/**
 * The /regulatory instrument set.
 *
 * Phase R1 — the six instruments for which a PRIMARY source was fetched and
 * read: the instrument itself, or an official government repository. Eleven
 * further instruments sourced to reputable firm commentary (Prakas 093,
 * Notification 083/25, the trust and e-commerce instruments, CGT, the virtual
 * assets working group) are verified and queued for R2.
 *
 * The bar for adding an entry: a source was fetched and checked in this
 * session, and the entry records that date in `asAt`. Deliberately excluded
 * until better sourced — the NBC Technology and Cyber Risk Management
 * Guidelines (single non-legal source, which also misdated it), the Law on
 * AML/CFT (its only citation was our own site), and all bank/MFI/PSP capital
 * tier figures (industry tracker only).
 *
 * See vault DPI Integration/65_Regulatory_Instruments_Verification_Pass.
 */
const allInstruments: RegulatoryInstrument[] = [
  // National Bank of Cambodia
  prakasB14017161,
  prakasB7024735,
  // National Assembly
  lawOnBanking,
  lawOnECommerce,
  // Royal Government
  subDecree207CamDigiKey,
  // Policy
  fintechDevelopmentPolicy,
];

export function getAllInstruments() {
  return allInstruments;
}

export function getInstrumentBySlug(slug: string) {
  return allInstruments.find((i) => i.slug === slug);
}

/**
 * Grouped by issuer for the index, because a reader arrives asking "who
 * regulates me" rather than "what was issued when". Insertion order of
 * `allInstruments` sets the group order.
 */
export function getInstrumentsByIssuer() {
  const groups = new Map<string, RegulatoryInstrument[]>();
  for (const instrument of allInstruments) {
    const existing = groups.get(instrument.issuer);
    if (existing) existing.push(instrument);
    else groups.set(instrument.issuer, [instrument]);
  }
  return Array.from(groups, ([issuer, instruments]) => ({ issuer, instruments }));
}

/**
 * Resolves `relatedInstruments` slugs, dropping any that are not yet published.
 * R1 entries reference R2 instruments deliberately — the cross-links light up
 * as those ship rather than needing a second edit pass.
 */
export function getRelatedInstruments(slugs: string[]) {
  return slugs
    .map((slug) => getInstrumentBySlug(slug))
    .filter((i): i is RegulatoryInstrument => Boolean(i));
}

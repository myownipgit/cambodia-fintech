import { RegulatoryInstrument } from './types';
import { prakasB7024735 } from './instruments/prakas-b7-024-735';
import { prakasB14017161 } from './instruments/prakas-b14-017-161';
import { lawOnBanking } from './instruments/law-on-banking';
import { lawOnECommerce } from './instruments/law-on-e-commerce';
import { subDecree207CamDigiKey } from './instruments/sub-decree-207-camdigikey';
import { fintechDevelopmentPolicy } from './instruments/fintech-development-policy';
// R2 — commentary-sourced instruments.
import { prakas093 } from './instruments/prakas-093';
import { notification08325 } from './instruments/notification-083-25';
import { lawOnNbfsa } from './instruments/law-on-nbfsa';
import { lawOnTrust } from './instruments/law-on-trust';
import { prakas004TrusteeEthics } from './instruments/prakas-004-trustee-ethics';
import { prakas192TrustTax } from './instruments/prakas-192-trust-tax';
import { prakas4961130Cgt } from './instruments/prakas-496-1130-cgt';
import { subDecree134ECommerce } from './instruments/sub-decree-134-ecommerce';
import { prakas290ECommerce } from './instruments/prakas-290-ecommerce';
import { jointPrakas316ECommerce } from './instruments/joint-prakas-316-ecommerce';
import { decisionVirtualAssetsWorkingGroup } from './instruments/decision-virtual-assets-working-group';

/**
 * The /regulatory instrument set.
 *
 * R1 shipped the six instruments with a PRIMARY source — the instrument itself
 * or an official government repository. R2 adds eleven sourced to reputable
 * professional legal commentary, plus a third primary text (the Law on Trust,
 * from the Trust Regulator's own site) that the R2 verification round turned up.
 *
 * The bar for adding an entry: a source was fetched and read, and the entry
 * records that date in `asAt`. Deliberately excluded until better sourced —
 * the NBC Technology and Cyber Risk Management Guidelines (single non-legal
 * source, which also misdated it), the Law on AML/CFT (its only citation was
 * our own site), all bank/MFI/PSP capital tier figures (industry tracker only),
 * and NBFSA Prakas 003 on trust management (surfaced during R2 but not yet
 * fetched — do not add it from a search summary).
 *
 * See vault DPI Integration/65_Regulatory_Instruments_Verification_Pass.
 */
const allInstruments: RegulatoryInstrument[] = [
  // National Bank of Cambodia
  prakasB14017161,
  prakasB7024735,
  // NBFSA and SERC — digital assets
  prakas093,
  notification08325,
  prakas004TrusteeEthics,
  // National Assembly
  lawOnBanking,
  lawOnNbfsa,
  lawOnTrust,
  lawOnECommerce,
  // Ministry of Economy and Finance — taxation
  prakas192TrustTax,
  prakas4961130Cgt,
  // Ministry of Commerce — e-commerce
  prakas290ECommerce,
  jointPrakas316ECommerce,
  // Royal Government
  subDecree134ECommerce,
  subDecree207CamDigiKey,
  // Policy and legislative pipeline
  fintechDevelopmentPolicy,
  decisionVirtualAssetsWorkingGroup,
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

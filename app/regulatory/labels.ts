import { InstrumentKind, LegalForce } from '@/app/content/regulatory/types';

export const kindLabel: Record<InstrumentKind, string> = {
  law: 'Law',
  'royal-decree': 'Royal Decree',
  'sub-decree': 'Sub-Decree',
  prakas: 'Prakas',
  'joint-prakas': 'Joint Prakas',
  notification: 'Notification',
  decision: 'Decision',
  policy: 'Policy',
};

/**
 * Reader-facing wording for legal force. "Not binding" is stated plainly rather
 * than softened — a policy that creates no obligation should not be able to be
 * mistaken for one that does.
 */
export const forceLabel: Record<LegalForce, string> = {
  'in-force': 'In force',
  'partially-in-force': 'Partially in force',
  superseded: 'Superseded',
  draft: 'Draft',
  'non-binding': 'Not binding',
};

/**
 * Issued dates render as month and year. Several instruments in this set are
 * known to the day and some are not, and a uniform granularity avoids implying
 * a precision the entry does not have.
 */
export function formatIssued(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
}

/** Full date, used on instrument pages where the exact day is part of the record. */
export function formatIssuedFull(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

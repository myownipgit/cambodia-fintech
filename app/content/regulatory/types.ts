/**
 * Types for the /regulatory section.
 *
 * Deliberately NOT ArticleContent. A regulatory instrument carries structured
 * fields — number, issuer, dates, legal force, sources with their tier — that
 * drive both the index table and the schema.org/Legislation JSON-LD. Forcing
 * them into prose loses both.
 *
 * The governing rule for this whole section: nothing gets a page unless a
 * source was fetched and checked. `sources` is non-empty by construction below
 * and every instrument records the date its contents were last verified.
 * See vault DPI Integration/65_Regulatory_Instruments_Verification_Pass.
 */

export type InstrumentKind =
  | 'law'
  | 'royal-decree'
  | 'sub-decree'
  | 'prakas'
  | 'joint-prakas'
  | 'notification'
  | 'decision'
  | 'policy';

/**
 * The first three map to schema.org LegalForceStatus. `non-binding` does not —
 * a policy or a working-group decision is a government instrument that creates
 * no obligation, and labelling it "in force" in the index would misdescribe it.
 * Instruments carrying this value are emitted as CreativeWork rather than
 * Legislation, and carry no legislationLegalForce.
 */
export type LegalForce =
  | 'in-force'
  | 'partially-in-force'
  | 'superseded'
  | 'draft'
  | 'non-binding';

/** Kinds that create binding obligations, and are emitted as schema.org/Legislation. */
export const BINDING_KINDS = [
  'law',
  'royal-decree',
  'sub-decree',
  'prakas',
  'joint-prakas',
  'notification',
] as const;

/**
 * `primary` = the instrument itself, or an official government repository.
 * `commentary` = a law firm or professional-services analysis of it.
 *
 * The distinction is rendered to the reader. Citing commentary is normal and
 * respectable; implying we read the instrument when we read a summary is not.
 */
export type SourceTier = 'primary' | 'commentary';

export interface InstrumentSource {
  /** Who published the source — 'National Bank of Cambodia', 'DFDL', … */
  publisher: string;
  /** What the link actually goes to, e.g. 'Official English translation (PDF)'. */
  label: string;
  url: string;
  tier: SourceTier;
}

export interface RegulatoryInstrument {
  slug: string;
  /**
   * Official instrument number as the issuer writes it. Null where the
   * instrument is customarily cited by title alone.
   *
   * Get this exactly right. The research this section was built from carried
   * `B7-017-282` for the payments Prakas; the NBC's own preamble cites
   * `B14-017-161 P.K`, and no trace of the former exists.
   */
  number: string | null;
  title: string;
  /** Only where verified from the instrument. Never transliterate a guess. */
  titleKh?: string;
  kind: InstrumentKind;
  issuer: string;
  /** ISO date the instrument was signed / promulgated. */
  issued: string;
  /** Omit rather than infer. An unstated effective date is not a same-day one. */
  effective?: string;
  force: LegalForce;
  /** Phasing, deferrals, partial commencement — the detail prose gets wrong. */
  forceNote?: string;
  sectors: string[];
  /** One sentence. Used verbatim in the index row. */
  summary: string;
  /** Who the instrument actually binds. */
  binds: string;
  requires: string[];
  /**
   * What the instrument does NOT reach.
   *
   * This is the field that makes the section worth reading. Nearly every
   * regulatory summary published in this market states what an instrument
   * requires; almost none states what it leaves untouched, which is what a
   * reader needs in order to know whether it applies to them. It is also
   * structurally protective: a page that states its own limits cannot be read
   * as over-claiming.
   */
  doesNotCover: string[];
  /** Date the contents of this entry were last checked against its sources. */
  asAt: string;
  /** Non-empty. Primary sources first. */
  sources: [InstrumentSource, ...InstrumentSource[]];
  relatedInstruments: string[];
  /** Slugs into the article registry — /learn, /knowledge, /glossary. */
  relatedContent: string[];
}

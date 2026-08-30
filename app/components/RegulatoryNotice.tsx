/**
 * Structural guardrail for /regulatory, on the ScenarioNotice precedent.
 *
 * Rendered by the section's pages rather than written into any instrument's
 * prose, so it cannot be removed by editing content. Do not make it
 * conditional and do not move it below the fold.
 *
 * The last sentence is the load-bearing one. A regulatory reference section is
 * the single place on this site where a reader might infer that CamFinTech
 * speaks to regulators — the exact perception the firm's positioning exists to
 * prevent. It is denied on every page of the section.
 */
export default function RegulatoryNotice() {
  return (
    <aside
      className="mb-8 border-l-4 border-teal bg-teal/10 px-4 py-3 rounded-r"
      aria-label="Regulatory information notice"
    >
      <p className="text-sm font-semibold text-navy-deep mb-1">
        Regulatory information — not legal or tax advice
      </p>
      <p className="text-sm text-navy/80 leading-relaxed">
        Cambodian instruments change, and are sometimes deferred after being
        announced. Every page here shows the date its contents were last
        verified and links to the source it was verified against — check both
        before relying on anything. Reserved work, meaning legal opinions, tax
        filings and licence applications, belongs with Bar-admitted counsel and
        licensed tax agents. CamFinTech advises clients on process; it does not
        represent them before any regulator.
      </p>
    </aside>
  );
}

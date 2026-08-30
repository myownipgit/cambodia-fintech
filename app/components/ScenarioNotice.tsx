/**
 * Structural integrity guardrail for /use-cases.
 *
 * CamFinTech is pre-revenue with no client engagements. The four articles under
 * /use-cases describe how an engagement would be SCOPED, not work delivered —
 * and the URLs they sit on previously carried fabricated case studies naming
 * clients that did not exist (deleted 2026-06-18 in c5b5201, rewritten
 * 2026-08-31). This notice is rendered by ArticleLayout for every
 * `type: 'use-cases'` article rather than written into each article's prose, so
 * that it cannot be removed by editing copy. Do not make it conditional and do
 * not move it below the fold.
 *
 * If a real engagement is ever delivered and can be evidenced, that is a new
 * content type with the client's written consent — not an edit to this file.
 */
export default function ScenarioNotice() {
  return (
    <aside
      className="mb-8 border-l-4 border-teal bg-teal/10 px-4 py-3 rounded-r"
      aria-label="Scenario disclosure"
    >
      <p className="text-sm font-semibold text-navy-deep mb-1">
        Illustrative scenario — not a client engagement
      </p>
      <p className="text-sm text-navy/80 leading-relaxed">
        CamFinTech is pre-revenue and has no client engagements to report. This
        page sets out how work of this kind would be scoped, architected and
        divided between us, the client and the licensed parties involved. Every
        figure cited is attributed to a published source; none of it describes
        work we have delivered.
      </p>
    </aside>
  );
}

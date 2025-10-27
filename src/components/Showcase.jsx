import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    brand: "TechSphere",
    metric: "+312% engagement",
    summary:
      "Scaled short-form video with data-backed creative sprints. Drove 9.8M views and 3.2x CTR on paid social.",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    brand: "Glow Beauty",
    metric: "2.4x ROAS",
    summary:
      "Full-funnel paid social and UGC engine. Reduced CPA by 38% while maintaining volume across Meta & TikTok.",
    gradient: "from-fuchsia-500 to-amber-500",
  },
  {
    brand: "FinCore",
    metric: "+185% followers",
    summary:
      "Playbook revamp with thought-leadership content. Organic growth from 120k to 340k in 6 months.",
    gradient: "from-emerald-500 to-sky-500",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-fuchsia-600">Results</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Proven impact across industries
          </h2>
          <p className="mt-3 text-slate-600">
            We partner with FAANG/MAANG leaders and hypergrowth brands to deliver measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.brand}
              className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className={`h-28 bg-gradient-to-br ${cs.gradient}`} />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-slate-500">{cs.brand}</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">{cs.metric}</div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{cs.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16} /> Creative engine + media</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16} /> Weekly experimentation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16} /> Live dashboards</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

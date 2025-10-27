import { Megaphone, BarChart3, Users, Globe } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Creative & Content",
    desc:
      "High-performing content tailored for each platform. Thumb-stopping visuals, motion, and native formats.",
  },
  {
    icon: BarChart3,
    title: "Paid Social & Growth",
    desc:
      "Full-funnel media strategy and execution across Meta, TikTok, YouTube, and LinkedIn for predictable ROI.",
  },
  {
    icon: Users,
    title: "Community Management",
    desc:
      "24/7 moderation, response frameworks, and proactive engagement that turns followers into fans.",
  },
  {
    icon: Globe,
    title: "Strategy & Analytics",
    desc:
      "Research, positioning, and always-on performance dashboards to guide decisions and scale results.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium tracking-wide text-fuchsia-600">What we do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              End-to-end social built for scale
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-slate-900 text-white px-5 py-2 text-sm shadow hover:shadow-md transition"
          >
            Book a strategy call
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              <div className="mt-4 text-xs text-slate-500">Deliverables: monthly content calendars, asset production, A/B testing, creative iteration, insights</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 ring-1 ring-black/10 shadow-sm">
            <Star size={14} className="text-amber-500" /> Trusted by global brands
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Social growth for category-leading companies
          </h1>
          <p className="mt-5 text-slate-700 text-lg leading-relaxed max-w-xl">
            We plan, create, and scale social media that converts. Performance-driven strategy, world-class creative, and meticulous community management — all under one roof.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm shadow hover:shadow-md transition"
            >
              Get a free audit
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-slate-900 px-6 py-3 text-sm ring-1 ring-black/10 hover:ring-black/20 transition"
            >
              See our work
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div className="text-3xl font-semibold text-slate-900">2.1B+</div>
            <div className="text-sm text-slate-600">Monthly impressions managed</div>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-b from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}

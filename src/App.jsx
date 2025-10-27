import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s plan your next growth chapter</h3>
            <p className="mt-3 text-white/80 max-w-xl">
              Share your goals and we’ll return a tailored audit, channel roadmap, and a creative jumpstart within 72 hours.
            </p>
          </div>
          <form className="bg-white text-slate-900 rounded-2xl p-6 ring-1 ring-white/10 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Full name" />
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Work email" />
            </div>
            <input className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Company" />
            <textarea className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="What are you trying to achieve?" rows={4} />
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm shadow hover:shadow-md transition">
              Request proposal
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Flare Social. All rights reserved.</p>
          <div className="text-sm text-slate-600">Privacy • Terms • Careers</div>
        </div>
      </footer>
    </div>
  );
}

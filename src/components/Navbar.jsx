import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center text-white shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Flare Social</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#showcase" className="hover:text-slate-900 transition">Showcase</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 shadow hover:shadow-md transition">
            <Sparkles size={16} /> Get Proposal
          </a>
        </nav>
      </div>
    </header>
  );
}

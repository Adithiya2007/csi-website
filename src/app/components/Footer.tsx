import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-white/7 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold">CSI</div>
              <span className="text-white">CSI <span className="text-cyan-400">Chapter</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">Building the next generation of tech leaders — one project at a time.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Chapter</h4>
            <ul className="flex flex-col gap-3">
              {["About", "Events", "Projects", "Blog"].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Members</h4>
            <ul className="flex flex-col gap-3">
              {["Sign in", "Join us", "Directory", "Resources"].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Connect</h4>
            <ul className="flex flex-col gap-3">
              {["Discord", "GitHub", "LinkedIn", "Instagram"].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/7 pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-slate-500 text-sm">2025 CSI Student Chapter. All rights reserved.</p>
          <div className="flex gap-3">
            {["GH", "IN", "DC"].map((s) => (
              <a key={s} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs font-mono">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

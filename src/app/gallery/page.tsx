"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = ["All", "Hackathons", "Workshops", "Talks", "Team"];

const photos = [
  { id: 1, category: "Hackathons", title: "HackCSI 2024", desc: "Teams working through the night", emoji: "💻", color: "from-cyan-500/20 to-blue-500/20" },
  { id: 2, category: "Hackathons", title: "Prize Ceremony", desc: "Winners of HackCSI 2024", emoji: "🏆", color: "from-yellow-500/20 to-orange-500/20" },
  { id: 3, category: "Workshops", title: "ML Workshop", desc: "Hands-on machine learning session", emoji: "🤖", color: "from-purple-500/20 to-pink-500/20" },
  { id: 4, category: "Workshops", title: "Web Dev Bootcamp", desc: "Building with React and Next.js", emoji: "🌐", color: "from-green-500/20 to-cyan-500/20" },
  { id: 5, category: "Talks", title: "Industry Talk", desc: "Guest speaker from a top tech company", emoji: "🎤", color: "from-pink-500/20 to-rose-500/20" },
  { id: 6, category: "Team", title: "Core Team 2024", desc: "The people behind CSI Chapter", emoji: "👥", color: "from-blue-500/20 to-purple-500/20" },
  { id: 7, category: "Hackathons", title: "Project Demo", desc: "Teams presenting their projects", emoji: "🚀", color: "from-orange-500/20 to-red-500/20" },
  { id: 8, category: "Workshops", title: "DSA Masterclass", desc: "Cracking coding interviews together", emoji: "📊", color: "from-teal-500/20 to-green-500/20" },
  { id: 9, category: "Talks", title: "Open Source Talk", desc: "Contributing to open source projects", emoji: "💡", color: "from-yellow-500/20 to-green-500/20" },
  { id: 10, category: "Team", title: "Team Outing", desc: "Having fun outside the club", emoji: "🎉", color: "from-pink-500/20 to-purple-500/20" },
  { id: 11, category: "Hackathons", title: "Midnight Coding", desc: "The grind at 3am during HackCSI", emoji: "🌙", color: "from-indigo-500/20 to-blue-500/20" },
  { id: 12, category: "Workshops", title: "Git and GitHub", desc: "Version control for beginners", emoji: "🔧", color: "from-slate-500/20 to-cyan-500/20" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  const filtered = photos.filter((p) => active === "All" || p.category === active);

  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// memories</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Moments from our hackathons, workshops, talks and everything in between.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (active === cat ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/25" : "text-slate-400 border-white/10 hover:text-white hover:border-white/20")}>
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div key={photo.id} onClick={() => setSelected(photo)} className="break-inside-avoid cursor-pointer group">
                <div className={"rounded-2xl border border-white/10 bg-gradient-to-br overflow-hidden transition-all duration-300 group-hover:border-cyan-500/30 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-cyan-500/10 " + photo.color}>
                  <div className="aspect-square flex items-center justify-center text-6xl md:text-7xl">
                    {photo.emoji}
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-sm mb-1">{photo.title}</p>
                    <p className="text-xs text-slate-400">{photo.desc}</p>
                    <span className="text-xs font-mono text-cyan-400 mt-2 block">{photo.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto border border-dashed border-white/20 rounded-2xl p-12 hover:border-cyan-500/30 transition-all">
          <div className="text-4xl mb-4">📸</div>
          <h3 className="font-bold text-xl mb-2">Have photos to share?</h3>
          <p className="text-slate-400 text-sm mb-6">If you attended a CSI event and captured great moments, share them with us!</p>
          <a href="/#join" className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/20 transition-all inline-block">Share photos</a>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#0a0f1e] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className={"rounded-xl bg-gradient-to-br mb-6 aspect-square flex items-center justify-center text-8xl " + selected.color}>
              {selected.emoji}
            </div>
            <span className="text-xs font-mono text-cyan-400 mb-2 block">{selected.category}</span>
            <h3 className="font-bold text-xl mb-2">{selected.title}</h3>
            <p className="text-slate-400 text-sm mb-6">{selected.desc}</p>
            <button onClick={() => setSelected(null)} className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all text-sm">Close</button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

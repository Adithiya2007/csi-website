"use client";
import { useState } from "react";
import { motion } from "framer-motion";
const events = [
  { type: "hackathon", title: "HackCSI 2025", date: "Mar 15-16", venue: "Main Auditorium", desc: "24-hour hackathon open to all.", spots: "18 spots left", color: "cyan" },
  { type: "workshop", title: "Intro to ML", date: "Feb 28", venue: "Lab 3B", desc: "Hands-on session covering supervised learning.", spots: "12 spots left", color: "purple" },
  { type: "talk", title: "Building for Scale", date: "Mar 5", venue: "Seminar Hall", desc: "Industry talk on architecting large systems.", spots: "Open entry", color: "pink" },
  { type: "workshop", title: "Web Dev Bootcamp", date: "Mar 10", venue: "Lab 2A", desc: "React, Tailwind, and Next.js in one day.", spots: "8 spots left", color: "purple" },
  { type: "hackathon", title: "AI Challenge", date: "Apr 1-2", venue: "Innovation Lab", desc: "Build an AI solution in 24 hours.", spots: "20 spots left", color: "cyan" },
  { type: "talk", title: "Open Source 101", date: "Apr 8", venue: "Seminar Hall", desc: "How to contribute to open source.", spots: "Open entry", color: "pink" },
];
const filters = ["All", "Hackathons", "Workshops", "Talks"];
const colorMap: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};
const borderHover: Record<string, string> = {
  cyan: "hover:border-cyan-500/40",
  purple: "hover:border-purple-500/40",
  pink: "hover:border-pink-500/40",
};
export default function Events() {
  const [active, setActive] = useState("All");
  const filtered = events.filter((e) => {
    if (active === "All") return true;
    if (active === "Hackathons") return e.type === "hackathon";
    if (active === "Workshops") return e.type === "workshop";
    if (active === "Talks") return e.type === "talk";
    return true;
  });
  return (
    <section id="events" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// upcoming</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Events and workshops</h2>
          <p className="text-slate-400 text-lg max-w-lg">From 24-hour hackathons to hands-on workshops.</p>
        </motion.div>
        <div className="flex gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={"px-5 py-2 rounded-lg text-sm font-medium transition-all " + (active === f ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25" : "text-slate-400 border border-white/10 hover:text-white")}>{f}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event, i) => (
            <motion.div key={event.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={"bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 " + borderHover[event.color]}>
              <span className={"inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-4 " + colorMap[event.color]}>{event.type}</span>
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              <div className="flex gap-4 text-xs text-slate-500 mb-3 font-mono">
                <span>Date: {event.date}</span>
                <span>Venue: {event.venue}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{event.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">{event.spots}</span>
                <a href="#" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white transition-all">Register</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

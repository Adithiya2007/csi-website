"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  { type: "hackathon", title: "HackCSI 2025", date: "Mar 15-16, 2025", venue: "Main Auditorium", desc: "24-hour hackathon open to all students. Build anything you want — prizes worth Rs.1,00,000 up for grabs. Form a team of up to 4 and bring your best ideas.", spots: 18, total: 50, status: "upcoming", color: "cyan" },
  { type: "workshop", title: "Intro to Machine Learning", date: "Feb 28, 2025", venue: "Lab 3B", desc: "Hands-on session covering supervised learning, sklearn, and model evaluation. Bring your laptop and be ready to code along.", spots: 12, total: 30, status: "upcoming", color: "purple" },
  { type: "talk", title: "Building for Scale", date: "Mar 5, 2025", venue: "Seminar Hall", desc: "Industry talk on architecting systems that handle millions of users. Open to all students, no registration needed.", spots: 0, total: 0, status: "upcoming", color: "pink" },
  { type: "workshop", title: "Web Dev Bootcamp", date: "Mar 10, 2025", venue: "Lab 2A", desc: "From zero to deployed: React, Tailwind, and Next.js in one day. Perfect for beginners who want to get into web development.", spots: 8, total: 30, status: "upcoming", color: "purple" },
  { type: "hackathon", title: "AI Challenge", date: "Apr 1-2, 2025", venue: "Innovation Lab", desc: "Build an AI-powered solution to a real-world problem in 24 hours. Special prizes for most impactful and most creative solutions.", spots: 20, total: 60, status: "upcoming", color: "cyan" },
  { type: "talk", title: "Open Source 101", date: "Apr 8, 2025", venue: "Seminar Hall", desc: "How to contribute to open source, build your GitHub profile, and get noticed by top companies.", spots: 0, total: 0, status: "upcoming", color: "pink" },
  { type: "workshop", title: "DSA Masterclass", date: "Jan 20, 2025", venue: "Lab 3B", desc: "Deep dive into data structures and algorithms with real interview questions from top tech companies.", spots: 0, total: 40, status: "past", color: "purple" },
  { type: "hackathon", title: "HackCSI 2024", date: "Nov 10-11, 2024", venue: "Main Auditorium", desc: "Our biggest hackathon yet with 200+ participants and 40+ projects built in 24 hours.", spots: 0, total: 200, status: "past", color: "cyan" },
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

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStatus, setActiveStatus] = useState("upcoming");
  const [showForm, setShowForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = events.filter((e) => {
    const matchStatus = e.status === activeStatus;
    const matchType =
      activeFilter === "All" ? true :
      activeFilter === "Hackathons" ? e.type === "hackathon" :
      activeFilter === "Workshops" ? e.type === "workshop" :
      e.type === "talk";
    return matchStatus && matchType;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setShowForm(null); setSubmitted(false); setFormData({ name: "", email: "", phone: "" }); }, 3000);
  };

  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// whats happening</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 mb-6">
            Events <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">and workshops</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            From 24-hour hackathons to hands-on workshops — always something to level up your skills.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 flex-wrap mb-6">
            <div className="flex gap-2 bg-white/[0.03] border border-white/10 rounded-xl p-1">
              {["upcoming", "past"].map((s) => (
                <button key={s} onClick={() => setActiveStatus(s)} className={"px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize " + (activeStatus === s ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25" : "text-slate-400 hover:text-white")}>
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (activeFilter === f ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/25" : "text-slate-400 border-white/10 hover:text-white hover:border-white/20")}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((event, i) => (
              <div key={i} className={"bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 " + borderHover[event.color]}>
                <div className="flex items-start justify-between mb-4">
                  <span className={"inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border " + colorMap[event.color]}>{event.type}</span>
                  {event.status === "past" && <span className="text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded-full">Completed</span>}
                </div>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <div className="flex gap-4 text-xs text-slate-500 mb-3 font-mono flex-wrap">
                  <span>Date: {event.date}</span>
                  <span>Venue: {event.venue}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{event.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    {event.spots > 0 ? (
                      <span className="text-xs font-mono text-cyan-400">{event.spots} spots left</span>
                    ) : event.total === 0 ? (
                      <span className="text-xs font-mono text-green-400">Open entry</span>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Event completed</span>
                    )}
                  </div>
                  {event.status === "upcoming" && (
                    <button onClick={() => setShowForm(event.title)} className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-all">
                      Register
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0f1e] border border-white/10 rounded-2xl p-8 w-full max-w-md">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Registered!</h3>
                <p className="text-slate-400">You are registered for {showForm}. We will send details to your email.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Register for {showForm}</h3>
                  <button onClick={() => setShowForm(null)} className="text-slate-400 hover:text-white transition-colors text-xl">x</button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-2 block">Full name</label>
                    <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-2 block">College email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@college.edu" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-2 block">Phone number</label>
                    <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all mt-2">Confirm registration</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

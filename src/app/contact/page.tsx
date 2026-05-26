"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// get in touch</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">us</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Have a question, suggestion, or just want to say hi? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-black mb-2">Let us talk</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Whether you want to join the club, collaborate on a project, or just have a question — reach out and we will get back to you within 24 hours.</p>
            </div>
            {[
              { emoji: "📧", title: "Email us", desc: "csi.chapter@college.edu", sub: "We reply within 24 hours" },
              { emoji: "💬", title: "Join our Discord", desc: "discord.gg/csichapter", sub: "Chat with us in real time" },
              { emoji: "📍", title: "Find us", desc: "CS Department, Block A", sub: "We meet every Friday at 5pm" },
              { emoji: "📱", title: "Follow us", desc: "@csichapter", sub: "Instagram, LinkedIn, GitHub" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-cyan-500/25 transition-all">
                <div className="text-2xl">{item.emoji}</div>
                <div>
                  <p className="font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-cyan-400 text-sm font-mono">{item.desc}</p>
                  <p className="text-slate-500 text-xs mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black mb-3 text-cyan-400">Message sent!</h3>
                <p className="text-slate-400 mb-8">Thanks for reaching out! We will get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-all text-sm font-medium">Send another message</button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-black mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-2 block">Your name</label>
                      <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-2 block">Your email</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-2 block">Subject</label>
                    <input required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="What is this about?" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-2 block">Message</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us what is on your mind..." rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2">
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

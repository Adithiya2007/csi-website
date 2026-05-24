"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Join() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="join" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// get in</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Ready to build?</h2>
          <p className="text-slate-400 text-lg mb-10">Drop your email and we will send you everything you need to join the chapter.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {submitted ? (
            <div className="py-8 px-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/25">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">You are in!</h3>
              <p className="text-slate-400">We will reach out to you soon. Welcome to CSI Chapter!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-center">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@college.edu" className="flex-1 min-w-[220px] px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-all text-sm" />
              <button type="submit" className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all hover:-translate-y-0.5">Get access</button>
            </form>
          )}
          <p className="text-slate-500 text-sm mt-4 font-mono">No spam, ever. Just events and opportunities.</p>
        </motion.div>
      </div>
    </section>
  );
}

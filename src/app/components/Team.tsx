"use client";
import { motion } from "framer-motion";
const team = [
  { name: "Adithiya", role: "President", domain: "Full Stack", avatar: "AD", color: "from-cyan-400 to-blue-500" },
  { name: "Tharun", role: "Vice President", domain: "3D & Design", avatar: "TH", color: "from-purple-400 to-pink-500" },
  { name: "Keerthana", role: "Design Lead", domain: "UI/UX", avatar: "KE", color: "from-pink-400 to-rose-500" },
  { name: "Rahul", role: "Tech Lead", domain: "Backend", avatar: "RA", color: "from-green-400 to-cyan-500" },
  { name: "Priya", role: "Events Head", domain: "Management", avatar: "PR", color: "from-orange-400 to-pink-500" },
  { name: "Karthik", role: "Marketing Head", domain: "Social Media", avatar: "KA", color: "from-yellow-400 to-orange-500" },
  { name: "Divya", role: "Content Lead", domain: "Writing", avatar: "DI", color: "from-blue-400 to-purple-500" },
  { name: "Arjun", role: "Developer", domain: "Frontend", avatar: "AR", color: "from-teal-400 to-green-500" },
];
export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// the people</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Core team</h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">The folks running the show — come say hi.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/25">
              <div className={"w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br flex items-center justify-center text-xl font-black text-white " + member.color}>{member.avatar}</div>
              <h3 className="font-bold text-base mb-1">{member.name}</h3>
              <p className="text-xs text-cyan-400 font-mono mb-1">{member.role}</p>
              <p className="text-xs text-slate-500">{member.domain}</p>
              <div className="flex gap-2 justify-center mt-4">
                <a href="#" className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs">in</a>
                <a href="#" className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs">gh</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

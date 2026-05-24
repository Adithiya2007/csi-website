"use client";
import { motion } from "framer-motion";
const projects = [
  { emoji: "🤖", title: "AI Study Buddy", desc: "An AI-powered study assistant that generates quizzes and summaries from your notes.", tags: ["Next.js", "OpenAI", "Tailwind"], github: "#", demo: "#" },
  { emoji: "🔐", title: "CampusAuth", desc: "Single sign-on system for college apps using college email verification.", tags: ["Node.js", "JWT", "PostgreSQL"], github: "#", demo: "#" },
  { emoji: "📊", title: "GradeTracker", desc: "Track your grades, GPA, and academic progress with beautiful charts.", tags: ["React", "Recharts", "Firebase"], github: "#", demo: "#" },
  { emoji: "🌐", title: "DevConnect", desc: "A platform for students to find teammates for hackathons and projects.", tags: ["Next.js", "Prisma", "Socket.io"], github: "#", demo: "#" },
  { emoji: "📱", title: "CampusEvents", desc: "Mobile-first app to discover and register for college events.", tags: ["React Native", "Expo", "Supabase"], github: "#", demo: "#" },
  { emoji: "🎮", title: "CodeQuest", desc: "Gamified coding challenges platform built for the CSI community.", tags: ["Next.js", "MongoDB", "TypeScript"], github: "#", demo: "#" },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// showcase</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Built by members</h2>
          <p className="text-slate-400 text-lg max-w-lg">Real projects, real impact. See what CSI members have shipped.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 border border-purple-500/20 flex items-center justify-center text-2xl">{project.emoji}</div>
                <div className="flex gap-2">
                  <a href={project.github} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs font-mono">GH</a>
                  <a href={project.demo} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs font-mono">↗</a>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-400">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

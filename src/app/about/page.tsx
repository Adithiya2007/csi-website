import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// our story</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 mb-6">
            We are <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">CSI Chapter</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            A community of passionate students building real things, learning together, and pushing the boundaries of what is possible with technology.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 md:px-12 border-y border-white/7">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: "🚀", title: "Our Mission", desc: "To create a space where students can learn, build, and grow together through hands-on experience with real technology." },
            { emoji: "👁️", title: "Our Vision", desc: "To build the most active and impactful student tech community in our college — one project and one hackathon at a time." },
            { emoji: "💡", title: "Our Values", desc: "Curiosity, collaboration, and continuous learning. We believe the best way to learn is by building things that matter." },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// journey</span>
            <h2 className="text-4xl font-black tracking-tight mt-3">How we got here</h2>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { year: "2019", title: "Chapter Founded", desc: "CSI Student Chapter was founded with just 12 members and a shared passion for technology." },
              { year: "2020", title: "First Hackathon", desc: "We hosted our first 24-hour hackathon with 50 participants and 3 amazing projects built." },
              { year: "2021", title: "Going Online", desc: "During the pandemic we shifted to virtual events, reaching students across the country." },
              { year: "2022", title: "100 Members", desc: "We crossed 100 active members and launched our first industry mentorship program." },
              { year: "2023", title: "National Recognition", desc: "Won best student chapter award at the national CSI convention for the first time." },
              { year: "2024", title: "240+ Members", desc: "Grew to 240+ members, 52 projects built, and 12 hackathon wins across the country." },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold flex-shrink-0 z-10">
                    {item.year.slice(2)}
                  </div>
                  {i < 5 && <div className="w-px flex-1 bg-white/10 my-1" />}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-mono text-cyan-400">{item.year}</span>
                  <h3 className="font-bold text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-6 md:px-12 bg-white/[0.01] border-y border-white/7">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// activities</span>
            <h2 className="text-4xl font-black tracking-tight mt-3">What we do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "⚡", title: "Hackathons", desc: "24-hour builds, real problems, amazing solutions. We host and compete in hackathons all year." },
              { emoji: "🛠️", title: "Workshops", desc: "Hands-on sessions on Web Dev, AI, Cybersecurity, and more — taught by members for members." },
              { emoji: "🎤", title: "Tech Talks", desc: "Industry professionals share real-world experience and career insights with our community." },
              { emoji: "🔨", title: "Build Together", desc: "Collaborative projects where members team up to build and ship real products." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight mb-4">Want to be part of this?</h2>
          <p className="text-slate-400 mb-8">Join 240+ students who are already building, learning, and growing together.</p>
          <a href="/#join" className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold text-base hover:bg-cyan-400 transition-all hover:-translate-y-1 inline-block">
            Join the chapter
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

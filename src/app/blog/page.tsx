import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const blogs = [
  {
    title: "How we built an AI study assistant in 24 hours",
    excerpt: "At HackCSI 2024, our team built an AI-powered study tool that generates quizzes from your notes. Here is how we did it.",
    author: "Priyanka",
    role: "President",
    date: "Jan 15, 2025",
    tag: "Hackathon",
    color: "cyan",
    readTime: "5 min read",
    slug: "ai-study-assistant",
  },
  {
    title: "A beginners guide to contributing to open source",
    excerpt: "Open source can feel intimidating at first. Here is a simple step by step guide to making your first pull request.",
    author: "Tharun",
    role: "Vice President",
    date: "Jan 22, 2025",
    tag: "Tutorial",
    color: "purple",
    readTime: "7 min read",
    slug: "open-source-guide",
  },
  {
    title: "What I learned from my first hackathon",
    excerpt: "I walked in nervous and walked out with a trophy, new friends, and a project I am proud of. Here is my story.",
    author: "Keerthana",
    role: "Design Lead",
    date: "Feb 1, 2025",
    tag: "Experience",
    color: "pink",
    readTime: "4 min read",
    slug: "first-hackathon",
  },
  {
    title: "Building a full stack app with Next.js and Prisma",
    excerpt: "A practical walkthrough of building a production-ready web app using Next.js App Router, Prisma ORM, and PostgreSQL.",
    author: "Rahul",
    role: "Tech Lead",
    date: "Feb 10, 2025",
    tag: "Tutorial",
    color: "purple",
    readTime: "10 min read",
    slug: "nextjs-prisma",
  },
  {
    title: "Why every CS student should learn UI/UX design",
    excerpt: "Most developers ignore design. Here is why learning the basics of UI/UX will make you a significantly better developer.",
    author: "Keerthana",
    role: "Design Lead",
    date: "Feb 18, 2025",
    tag: "Opinion",
    color: "pink",
    readTime: "6 min read",
    slug: "uiux-for-developers",
  },
  {
    title: "How to prepare for a hackathon and actually win",
    excerpt: "After winning 12 hackathons, here are the strategies, tools, and mindset shifts that consistently give us an edge.",
    author: "Priyanka",
    role: "President",
    date: "Mar 1, 2025",
    tag: "Guide",
    color: "cyan",
    readTime: "8 min read",
    slug: "hackathon-guide",
  },
];

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const avatarColor: Record<string, string> = {
  cyan: "from-cyan-400 to-blue-500",
  purple: "from-purple-400 to-pink-500",
  pink: "from-pink-400 to-rose-500",
};

export default function Blog() {
  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// knowledge base</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 mb-6">
            The CSI <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Tutorials, experiences, and insights written by CSI members. Learn from people who are building real things.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Featured</span>
              <span className="text-xs text-slate-500 font-mono">5 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">How we built an AI study assistant in 24 hours</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">At HackCSI 2024, our team built an AI-powered study tool that generates quizzes from your notes. Here is how we did it and what we learned along the way.</p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm font-black text-white">AD</div>
                <div>
                  <p className="text-sm font-semibold">Priyanka</p>
                  <p className="text-xs text-slate-500">President · Jan 15, 2025</p>
                </div>
              </div>
              <a href="#" className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all">Read article</a>
            </div>
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.slice(1).map((blog) => (
              <div key={blog.slug} className={"bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:border-" + blog.color + "-500/30"}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={"px-3 py-1 rounded-full text-xs font-mono font-semibold border " + colorMap[blog.color]}>{blog.tag}</span>
                  <span className="text-xs text-slate-500 font-mono">{blog.readTime}</span>
                </div>
                <h3 className="font-bold text-base leading-snug mb-3 flex-1">{blog.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={"w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-black text-white " + avatarColor[blog.color]}>
                      {blog.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{blog.author}</p>
                      <p className="text-xs text-slate-500">{blog.date}</p>
                    </div>
                  </div>
                  <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write for us */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-4">Want to write for CSI?</h2>
          <p className="text-slate-400 mb-8">Share your knowledge, experience, or projects with the community. We welcome all CSI members to contribute.</p>
          <a href="/#join" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-base hover:border-cyan-500/30 hover:text-cyan-400 transition-all inline-block">
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

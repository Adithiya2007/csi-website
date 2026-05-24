"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 240, suffix: "+", label: "members" },
  { number: 38, suffix: "", label: "events hosted" },
  { number: 52, suffix: "", label: "projects built" },
  { number: 12, suffix: "", label: "hackathons won" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          function step(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="border-y border-white/7 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-10 px-6 text-center ${
              i !== stats.length - 1 ? "border-r border-white/7" : ""
            }`}
          >
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              <CountUp target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
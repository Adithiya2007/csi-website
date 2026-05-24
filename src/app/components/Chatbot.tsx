"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "bot"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I am the CSI Chapter assistant. Ask me anything about the club!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, something went wrong. Please try again!" }]);
    }
    setLoading(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 h-96 bg-[#0a0f1e] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-sm">🤖</div>
              <div>
                <p className="text-sm font-bold text-white">CSI Assistant</p>
                <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>Online</p>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={"flex " + (msg.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={"px-3 py-2 rounded-xl text-sm max-w-[80%] " + (msg.role === "user" ? "bg-cyan-500 text-black font-medium" : "bg-white/5 border border-white/10 text-slate-300")}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-500/50 transition-all"
              />
              <button onClick={sendMessage} className="px-3 py-2 rounded-lg bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-all"
      >
        {open ? "✕" : "🤖"}
      </motion.button>
    </div>
  );
}

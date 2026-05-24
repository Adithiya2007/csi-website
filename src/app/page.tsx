import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Events from "./components/Events";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Events />
      <Projects />
    </main>
  );
}
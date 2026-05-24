import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Events />
      <Projects />
      <Team />
      <Join />
      <Footer />
    </main>
  );
}
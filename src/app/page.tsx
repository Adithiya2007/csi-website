import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
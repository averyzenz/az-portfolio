import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FocusBand } from "@/components/FocusBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { RevealObserver } from "@/components/RevealObserver";
import { Statement } from "@/components/Statement";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <FocusBand />
        <Statement />
        <Stats />
        <Experience />
        <Research />
        <About />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

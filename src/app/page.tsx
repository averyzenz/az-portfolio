import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FocusBand } from "@/components/FocusBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Statement } from "@/components/Statement";
import { Stats } from "@/components/Stats";
import { Toolkit } from "@/components/Toolkit";

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
        <Toolkit />
        <About />
      </main>
      <Footer />
    </>
  );
}

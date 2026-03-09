import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Insights } from "@/components/insights";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Full-page background image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image_rainier.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
      </div>

      {/* Page content above background */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

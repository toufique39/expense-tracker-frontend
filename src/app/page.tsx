import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

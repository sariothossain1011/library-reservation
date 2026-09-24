import About from "@/components/landing/about";
import ContentSection from "@/components/landing/content-section";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About  */}
      <About />

      {/* Books */}
      <ContentSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
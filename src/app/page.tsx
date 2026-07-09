import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import QuickLinksCards from "@/components/QuickLinksCards";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesListCards from "@/components/ServicesListCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Hero />
      <Navbar />
      <SearchSection />
      <QuickLinksCards />
      <PartnersMarquee />
      <ServicesListCards />
      <Footer />
    </main>
  );
}

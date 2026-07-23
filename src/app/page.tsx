import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import QuickLinksCards from "@/components/QuickLinksCards";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesListCards from "@/components/ServicesListCards";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <SearchSection />
      <QuickLinksCards />
      <PartnersMarquee />
      <ServicesListCards />
    </>
  );
}

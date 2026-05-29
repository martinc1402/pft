import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Qualifications from "@/components/Qualifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Qualifications />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}

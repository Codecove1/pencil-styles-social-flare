import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import SocialHub from "@/components/SocialHub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Collections />
      <About />
      <SocialHub />
      <Footer />
    </div>
  );
};

export default Index;

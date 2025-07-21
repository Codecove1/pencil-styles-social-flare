import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Pencil Styles Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-fashion bg-clip-text text-transparent">
            Pencil
          </span>{" "}
          <span className="text-foreground">Styles</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up font-light leading-relaxed">
          Where contemporary fashion meets timeless elegance.
          <br />
          Discover your signature style.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button variant="fashion" size="lg" className="text-lg px-8 py-6">
            Explore Collections
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6">
            Follow Our Journey
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a 
            href="https://instagram.com/pencilstyles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="glass" size="icon" className="rounded-full h-12 w-12 group-hover:animate-glow">
              <Instagram className="h-5 w-5" />
            </Button>
          </a>
          <a 
            href="https://facebook.com/pencilstyles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="glass" size="icon" className="rounded-full h-12 w-12 group-hover:animate-glow">
              <Facebook className="h-5 w-5" />
            </Button>
          </a>
          <a 
            href="https://twitter.com/pencilstyles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="glass" size="icon" className="rounded-full h-12 w-12 group-hover:animate-glow">
              <Twitter className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
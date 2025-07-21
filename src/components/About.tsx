import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Scissors,
      title: "Craftsmanship",
      description: "Every piece is carefully designed with attention to detail and quality that lasts"
    },
    {
      icon: Palette,
      title: "Creativity",
      description: "We blend contemporary trends with timeless elegance for unique style expressions"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of fashion enthusiasts who inspire each other"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering premium quality and exceptional customer experience"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-fashion bg-clip-text text-transparent">Pencil Styles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that fashion is a form of self-expression, Pencil Styles creates contemporary clothing that empowers individuals to showcase their unique personality
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small design studio has grown into a movement that celebrates individual style and authentic self-expression. We believe that the right outfit can transform not just how you look, but how you feel.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every collection tells a story, and every piece is designed to become part of your personal narrative. From concept to creation, we pour passion into every detail.
            </p>
            <Button variant="fashion" size="lg" className="mt-6">
              Discover Our Journey
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2018</div>
              <p className="text-muted-foreground">Founded</p>
            </div>
            <div className="bg-gradient-to-br from-primary-glow/10 to-primary-glow/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-muted-foreground">Collections Launched</p>
            </div>
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Countries Reached</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group cursor-pointer border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-card to-card/80 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-xl mb-4">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-muted/50 to-background rounded-2xl p-12 shadow-elegant">
          <h3 className="font-display text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To create fashion that transcends trends and empowers individuals to express their authentic selves with confidence, while building a sustainable and inclusive fashion community that celebrates diversity and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
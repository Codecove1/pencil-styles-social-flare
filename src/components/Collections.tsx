import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Contemporary Essentials",
      description: "Modern pieces that define everyday elegance",
      image: collection1,
      category: "Casual"
    },
    {
      id: 2,
      title: "Urban Lifestyle",
      description: "Comfort meets style for the modern professional",
      image: collection2,
      category: "Lifestyle"
    },
    {
      id: 3,
      title: "Executive Collection",
      description: "Premium formal wear for distinguished occasions",
      image: collection3,
      category: "Formal"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-gold bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated fashion lines that speak to your unique style and personality
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className="group cursor-pointer border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full border border-foreground/10">
                      {collection.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="gold" size="lg" className="text-lg px-12 py-6">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
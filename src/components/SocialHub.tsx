import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Youtube, Heart, Share2 } from "lucide-react";

const SocialHub = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@pencilstyles",
      followers: "125K",
      description: "Daily style inspiration & behind-the-scenes",
      color: "from-pink-500 to-purple-600",
      url: "https://instagram.com/pencilstyles"
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "Pencil Styles",
      followers: "85K",
      description: "Community updates & style discussions",
      color: "from-blue-600 to-blue-700",
      url: "https://facebook.com/pencilstyles"
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@pencilstyles",
      followers: "42K",
      description: "Latest trends & fashion insights",
      color: "from-blue-400 to-blue-500",
      url: "https://twitter.com/pencilstyles"
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "Pencil Styles",
      followers: "28K",
      description: "Style guides & fashion content",
      color: "from-red-500 to-red-600",
      url: "https://youtube.com/pencilstyles"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Join Our <span className="bg-gradient-rose bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with fellow fashion enthusiasts and stay updated with the latest from Pencil Styles across all platforms
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Card 
                key={platform.name}
                className="group cursor-pointer border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:animate-glow`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{platform.handle}</p>
                  <p className="text-2xl font-bold text-primary mb-3">{platform.followers}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Follow
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Engagement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-3xl font-bold">280K+</span>
            </div>
            <p className="text-muted-foreground">Total Likes This Month</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Share2 className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-3xl font-bold">45K+</span>
            </div>
            <p className="text-muted-foreground">Content Shares</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-3xl font-bold">12K+</span>
            </div>
            <p className="text-muted-foreground">User-Generated Posts</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 shadow-elegant">
          <h3 className="font-display text-3xl font-bold mb-4">Stay In Style</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get exclusive access to new collections, styling tips, and behind-the-scenes content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="rose" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
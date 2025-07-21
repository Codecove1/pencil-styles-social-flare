import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Scissors } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/pencilstyles", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/pencilstyles", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/pencilstyles", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/pencilstyles", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Collections", href: "#collections" },
    { name: "About Us", href: "#about" },
    { name: "Size Guide", href: "#" },
    { name: "Care Instructions", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-primary/5 to-muted/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-fashion rounded-lg flex items-center justify-center">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">Pencil Styles</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Contemporary fashion that empowers your unique style. Join our community of fashion enthusiasts worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                      <IconComponent className="h-5 w-5 group-hover:text-primary transition-colors" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@pencilstyles.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest fashion updates and exclusive offers.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="rose" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Pencil Styles. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
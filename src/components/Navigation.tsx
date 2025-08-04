
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black">
            <span className="text-foreground">POWER</span>
            <span className="text-primary">ON</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Classes <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#membership" className="text-foreground hover:text-primary transition-colors">
              Membership
            </a>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full">
              Contact Us
            </Button>
            
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#classes" className="block text-foreground hover:text-primary transition-colors">
              Classes
            </a>
            <a href="#services" className="block text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#membership" className="block text-foreground hover:text-primary transition-colors">
              Membership
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-full">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-black">
      {/* CTA Section */}
      <div className="py-20">
        <div 
          className="relative bg-cover bg-center py-20 rounded-3xl mx-4 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3')`,
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-wider">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
                READY TO JOIN<br />
                THE CYBER REVOLUTION?
              </span>
            </h2>
            <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black px-12 py-4 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-wider">
              CONTACT US [+]
            </Button>
          </div>
          
          {/* Animated border */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-xl mb-6 tracking-wider bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">QUICK ACCESS</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">ABOUT US</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">CONTACT</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">NEURAL BLOG</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-xl mb-6 tracking-wider bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">CYBER SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">QUANTUM YOGA</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">MUSCLE FORGE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">COMBAT ZONE</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-xl mb-6 tracking-wider bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">NEURAL LINK</h3>
              <div className="space-y-3 text-gray-400">
                <p className="tracking-wide">CYBER DISTRICT 9708 SUITE 125-G,<br />NEO TOKYO SECTOR 778</p>
                <p className="tracking-wide">+324 12 48 52 26</p>
                <p className="tracking-wide">CONNECT@CYBERFITNESS.COM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-white font-black text-xl mb-6 tracking-wider bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">SOCIAL MATRIX</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">FACEBOOK</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">INSTAGRAM</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block tracking-wide">TWITTER-X</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="tracking-wide">
              © Copyright 2025 <span className="text-primary font-bold">CyberFitness</span> – All Rights Reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 tracking-wide">TERMS & CONDITIONS</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 tracking-wide">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

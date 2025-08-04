import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import { Button } from "./ui/button";

const OffersPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popupDismissed");
    if (dismissed !== "true") {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("popupDismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border-2 border-primary max-w-md w-full relative transform animate-scale-in shadow-2xl shadow-primary/30">
        
        {/* ❌ Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          onClick={handleClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* 🎯 Content */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-orange-500 p-4 rounded-full inline-block mb-6 animate-pulse">
            <Zap className="w-8 h-8 text-black" />
          </div>
          
          <h3 className="text-2xl font-black text-white mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              LIMITED TIME OFFER!
            </span>
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Get <span className="text-primary font-bold">50% OFF</span> your first month of Cyber Training! 
            Join the revolution and unlock your true potential.
          </p>

          <div className="space-y-4">
            <Button 
              className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black py-3 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 tracking-wider"
              onClick={handleClose}
            >
              CLAIM OFFER NOW
            </Button>
            
            <button 
              className="w-full text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              onClick={handleClose}
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* ✨ Animated border */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
};

export default OffersPopup;

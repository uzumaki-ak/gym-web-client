
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3')`,
        }}
      />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="w-40 h-40 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent tracking-wider">
            BOOST YOUR
          </span>
          <br />
          <span className="text-white tracking-wider">CYBER </span>
          <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent tracking-wider">FITNESS</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent tracking-wider">TODAY!</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto tracking-wide">
          Enter the future of fitness. Enhance your body, upgrade your mind, transcend your limits.
        </p>

        <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black px-12 py-4 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-wider">
          START EVOLUTION [+]
        </Button>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

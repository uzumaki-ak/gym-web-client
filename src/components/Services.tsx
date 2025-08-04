
import { Button } from "./ui/button";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "CYBER YOGA & PILATES",
      description: "Build strength and endurance through targeted workouts, proper nutrition, and consistent training routines in our futuristic environment.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3",
      cta: "VIEW MORE [+]"
    },
    {
      title: "MUSCLE FORGE",
      description: "Transform your body in our high-tech muscle building zone with advanced equipment and AI-powered training protocols.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      cta: "ENTER FORGE [+]"
    },
    {
      title: "COMBAT ZONE",
      description: "Master the art of combat in our cyberpunk boxing arena with holographic training partners and real-time performance analytics.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3",
      cta: "JOIN BATTLE [+]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-bold mb-4 tracking-[0.3em]">OUR SERVICES</div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              DISCOVER FITNESS SERVICES
            </span>
          </h2>
          <div className="text-primary text-4xl animate-pulse">✦</div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-gray-800 bg-gray-900 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                
                {/* Overlay with info that slides up from bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-black mb-3 text-primary tracking-wider">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black rounded-2xl px-6 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 tracking-wider">
                      {service.cta}
                    </Button>
                  </div>
                </div>

                {/* Static content when not hovered */}
                <div className={`p-6 transition-all duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-wider">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black px-12 py-4 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-wider">
            VIEW ALL SERVICES [+]
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

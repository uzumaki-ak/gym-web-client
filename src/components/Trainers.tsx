
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Trainers = () => {
  const [activeTrainer, setActiveTrainer] = useState(2);

  const trainers = [
    { 
      name: "JAMES STEEL", 
      role: "Cyber Combat Specialist", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    { 
      name: "LUKE STORM", 
      role: "Neural Enhancement Expert", 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
    },
    { 
      name: "BEN QUANTUM", 
      role: "Bio-Hack Nutritionist", 
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3"
    },
    { 
      name: "TOM VORTEX", 
      role: "Matrix Training Coach", 
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3"
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Trainers List */}
          <div>
            <div className="text-primary text-sm font-bold mb-4 tracking-[0.3em]">OUR SPECIALISTS</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-wider">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
                MEET OUR ELITE TRAINERS
              </span>
            </h2>

            <div className="space-y-4">
              {trainers.map((trainer, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center justify-between p-6 rounded-3xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl ${
                    activeTrainer === index 
                      ? 'bg-white border-primary text-black shadow-2xl shadow-primary/30 scale-[1.02]' 
                      : 'border-gray-700 hover:border-primary bg-gray-900/50 hover:bg-gray-800 backdrop-blur-sm'
                  }`}
                  onClick={() => setActiveTrainer(index)}
                >
                  <div className="transform transition-all duration-300 group-hover:translate-x-2">
                    <h3 className={`text-xl font-black tracking-wider ${activeTrainer === index ? 'text-primary' : 'text-white'}`}>
                      {trainer.name} /
                    </h3>
                    <p className={`text-sm tracking-wide ${activeTrainer === index ? 'text-gray-700' : 'text-gray-400'}`}>
                      {trainer.role}
                    </p>
                  </div>
                  <ChevronRight className={`w-6 h-6 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${
                    activeTrainer === index ? 'text-primary' : 'text-gray-400'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Trainer Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <div 
                className="w-full h-96 bg-cover bg-center transition-all duration-700 transform hover:scale-105"
                style={{
                  backgroundImage: `url('${trainers[activeTrainer].image}')`,
                }}
              />
              
              {/* Overlay with trainer info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-wider">
                    {trainers[activeTrainer].name}
                  </h3>
                  <p className="text-primary font-bold tracking-wide">
                    {trainers[activeTrainer].role}
                  </p>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;

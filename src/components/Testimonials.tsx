
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "JOINING CYBER FITNESS HAS TRANSFORMED MY EXISTENCE! I'VE GAINED 25 POUNDS OF PURE MUSCLE AND UNLOCKED ABILITIES I NEVER KNEW EXISTED. THE NEURAL TRAINERS AND QUANTUM ATMOSPHERE MAKE IT PERFECT FOR ANYONE READY TO TRANSCEND THEIR LIMITS. I FULLY RECOMMEND THIS DIGITAL PARADISE!",
      name: "ALEX MATRIX",
      role: "Cyber Warrior",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      quote: "THE HOLOGRAPHIC TRAINING SESSIONS AT CYBER FITNESS HAVE PUSHED ME BEYOND HUMAN LIMITATIONS. MY STRENGTH HAS INCREASED BY 300% AND MY ENDURANCE IS NOW SUPERHUMAN. THE QUANTUM COACHES ARE INCREDIBLE AND THE ATMOSPHERE IS PURE ENERGY!",
      name: "NOVA STORM",
      role: "Bio-Enhanced Athlete",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
    },
    {
      quote: "I'VE BEEN TRAINING FOR 10 YEARS BUT NOTHING PREPARED ME FOR THE CYBER FITNESS EXPERIENCE. THE NEURAL ENHANCEMENT PROGRAMS AND QUANTUM EQUIPMENT HAVE MADE ME STRONGER THAN I EVER IMAGINED POSSIBLE. THIS IS THE FUTURE OF FITNESS!",
      name: "TITAN BOLT",
      role: "Enhanced Powerlifter",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-bold mb-4 tracking-[0.3em]">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-wider">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              MEMBER SUCCESS STORIES
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <div 
                  className="w-full h-96 bg-cover bg-center transition-all duration-700"
                  style={{
                    backgroundImage: `url('${testimonials[currentTestimonial].image}')`,
                  }}
                />
                
                {/* Navigation Arrows */}
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110 rounded-2xl"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110 rounded-2xl"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Glowing border */}
                <div className="absolute inset-0 border-2 border-primary/50 rounded-3xl animate-pulse"></div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-900 p-8 rounded-3xl border-2 border-gray-700 relative transform transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
              <div className="text-primary text-6xl mb-6 font-black">"</div>
              
              <blockquote className="text-white text-lg mb-8 leading-relaxed font-medium tracking-wide">
                {testimonials[currentTestimonial].quote}
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-black bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent tracking-wider">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400 font-bold tracking-wide">{testimonials[currentTestimonial].role}</p>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary animate-pulse" />
                  ))}
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

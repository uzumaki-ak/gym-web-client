
import { useState } from "react";
import { Button } from "./ui/button";

const Schedule = () => {
  const days = ["SATURDAY", "MONDAY", "WEDNESDAY", "FRIDAY"];
  const [activeDay, setActiveDay] = useState("SATURDAY");
  
  const scheduleData = {
    SATURDAY: [
      { name: "INTENSE CROSSFIT", time: "9:00AM - 10:00AM", trainer: "DAVID WARNER", highlighted: false },
      { name: "MUSCLE FORGE", time: "10:00AM - 11:00AM", trainer: "DAVID VILA", highlighted: false },
      { name: "POWER SPRINT", time: "4:00PM - 5:00PM", trainer: "JUNIOR JONAS", highlighted: true },
      { name: "CORE DESTROYER", time: "6:00PM - 7:00PM", trainer: "PAUL WEIGHT", highlighted: false },
    ],
    MONDAY: [
      { name: "BEAST MODE LIFTING", time: "8:00AM - 9:00AM", trainer: "ALEX STEEL", highlighted: false },
      { name: "CARDIO RAMPAGE", time: "10:00AM - 11:00AM", trainer: "MAYA STORM", highlighted: true },
      { name: "IRON WARRIORS", time: "5:00PM - 6:00PM", trainer: "VICTOR RAGE", highlighted: false },
      { name: "NIGHT BURN", time: "7:00PM - 8:00PM", trainer: "LUNA FIRE", highlighted: false },
    ],
    WEDNESDAY: [
      { name: "POWER SURGE", time: "9:00AM - 10:00AM", trainer: "TITAN BOLT", highlighted: false },
      { name: "FLEX FUSION", time: "11:00AM - 12:00PM", trainer: "NOVA FLEX", highlighted: false },
      { name: "COMBAT ZONE", time: "4:00PM - 5:00PM", trainer: "BLADE FURY", highlighted: true },
      { name: "STRENGTH MATRIX", time: "6:00PM - 7:00PM", trainer: "STEEL VENOM", highlighted: false },
    ],
    FRIDAY: [
      { name: "ADRENALINE RUSH", time: "8:30AM - 9:30AM", trainer: "STORM BREAKER", highlighted: true },
      { name: "CYBER CONDITIONING", time: "10:30AM - 11:30AM", trainer: "NEON PULSE", highlighted: false },
      { name: "POWER OVERDRIVE", time: "5:00PM - 6:00PM", trainer: "QUANTUM FORCE", highlighted: false },
      { name: "MIDNIGHT MADNESS", time: "7:30PM - 8:30PM", trainer: "SHADOW HAWK", highlighted: false },
    ]
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              EXPLORE YOUR CLASSES SCHEDULE
            </span>
          </h2>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day) => (
            <Button
              key={day}
              variant={activeDay === day ? "default" : "outline"}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 ${
                activeDay === day 
                  ? "bg-gradient-to-r from-primary to-orange-500 text-black shadow-2xl shadow-primary/50 scale-105" 
                  : "border-2 border-primary/50 text-white bg-transparent hover:border-primary hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {scheduleData[activeDay]?.map((item, index) => (
              <div 
                key={index}
                className={`group grid grid-cols-1 md:grid-cols-4 gap-6 p-8 rounded-3xl border-2 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                  item.highlighted 
                    ? "bg-gradient-to-r from-primary/20 to-orange-500/20 border-primary shadow-xl shadow-primary/30" 
                    : "bg-gray-900/50 border-gray-700 hover:border-primary hover:bg-white hover:text-black hover:shadow-primary/50 backdrop-blur-sm"
                }`}
              >
                <div className="transform transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-primary text-sm mb-2 font-bold tracking-wider">CLASS NAME</div>
                  <div className="text-white group-hover:text-black font-black text-xl tracking-wide">{item.name}</div>
                </div>
                
                <div className="transform transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-primary text-sm mb-2 font-bold tracking-wider">TIME</div>
                  <div className="text-white group-hover:text-black font-bold text-lg">{item.time}</div>
                </div>
                
                <div className="transform transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-primary text-sm mb-2 font-bold tracking-wider">TRAINER</div>
                  <div className="text-white group-hover:text-black font-bold text-lg">{item.trainer}</div>
                </div>
                
                <div className="flex items-center transform transition-all duration-300 group-hover:scale-110">
                  <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black px-8 py-3 rounded-2xl shadow-lg shadow-primary/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-wider">
                    JOIN NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;


import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      title: "CARDIO AND CROSS COMBAT TRAINING SESSION",
      opening: "July 23, 2023",
      time: "9:00am - 10:00am",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      title: "INTENSE DEADLIFT WORKOUT FOR STRENGTH BUILDING.",
      opening: "July 23, 2023",
      time: "9:00am - 10:00am",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
    },
    {
      title: "WEIGHTLIFTING: BENCH PRESS FOR STRENGTH GAINS",
      opening: "July 23, 2023",
      time: "9:00am - 10:00am",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <div className="text-primary text-sm font-semibold mb-4">OUR CLASSES</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              ENROLL IN CLASSES!
            </h2>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full mt-6 lg:mt-0">
            VIEW ALL CLASS [+]
          </Button>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${classItem.image}')` }}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {classItem.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Opening: {classItem.opening}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Class Time: {classItem.time}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                >
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;


import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Pushing</span><br />
              <span className="text-foreground">Your Limits</span><br />
              <span className="text-foreground">Further</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Challenge Yourself To Exceed Your Limits With Innovative Training Techniques, State-Of-The-Art Gear & A Motivating Community Cheering You On.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              ABOUT US [+]
            </Button>
          </div>

          {/* Stats and Image */}
          <div className="relative">
            <div 
              className="w-full h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3')`,
              }}
            />
            
            {/* Stats Cards */}
            <div className="absolute -right-4 top-8 space-y-4">
              <div className="bg-card/90 backdrop-blur-sm border border-primary p-4 rounded-lg">
                <div className="text-primary text-sm font-semibold">/// FITNESS TRAINEE</div>
                <div className="text-foreground text-2xl font-black">252K +</div>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm border border-primary p-4 rounded-lg">
                <div className="text-primary text-sm font-semibold">/// FITNESS STUDENT</div>
                <div className="text-foreground text-2xl font-black">248K +</div>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm border border-primary p-4 rounded-lg">
                <div className="text-primary text-sm font-semibold">/// FITNESS PLACE</div>
                <div className="text-foreground text-2xl font-black">220K +</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

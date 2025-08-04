
import { Button } from "./ui/button";

const Blog = () => {
  const posts = [
    {
      title: "10 Tips to Stay Consistent with Your Workouts",
      description: "Discover practical strategies to maintain motivation, build a solid routine, and stay on track with your fitness goals every day.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      cta: "MORE INFO [+]"
    },
    {
      title: "How to Create a Balanced Exercise Plan",
      description: "Learn how to design an effective workout program that fits your schedule and promotes overall health and wellness.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3",
      cta: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold mb-4">BLOG</div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            FITNESS TIPS & INSPIRATION
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="grid lg:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  
                  {post.cta && (
                    <Button 
                      variant="outline" 
                      className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full"
                    >
                      {post.cta}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/30">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Star className="h-4 w-4 text-primary fill-primary" />
              Premium Dessert Experience
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-foreground">Trove</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                Sweet Treasures for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
                  Every Moment
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Discover our exquisite collection of handcrafted desserts, 
              sugarless delights, and magical treats specially created for little 
              ones. Every bite tells a story of passion and perfection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Explore Our Menu
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary/20 hover:bg-primary/5">
                Find Nearest Store
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={heroImage}
                alt="Beautiful dessert collection"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-card border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Fresh Daily</p>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-card border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful dessert collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-6 border border-primary/20">
            <Star className="h-4 w-4 text-primary fill-primary" />
            Premium Handcrafted Desserts
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sweet
            </span>{" "}
            <span className="text-foreground">
              Moments
            </span>
            <br />
            <span className="text-foreground">Made</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Indulge in our handcrafted collection of cupcakes, cakes, and cookies. 
            Every bite tells a story of passion, quality, and pure deliciousness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              Explore Our Menu
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="elegant" size="xl">
              View Special Offers
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Fresh</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5★</div>
              <div className="text-sm text-muted-foreground">Rated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-40 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;
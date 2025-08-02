import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategorySectionProps {
  title: string;
  description: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    basePrice: number;
    image: string;
    description: string;
    categoryType: 'special' | 'sugarless' | 'kids';
  }>;
  categoryType: 'special' | 'sugarless' | 'kids';
  linkTo: string;
}

const CategorySection = ({ 
  title, 
  description, 
  products, 
  categoryType, 
  linkTo 
}: CategorySectionProps) => {
  // Show only first 4 products for homepage preview
  const displayProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              categoryType={categoryType}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="elegant" 
            size="lg" 
            asChild
            className="group"
          >
            <Link to={linkTo}>
              View All {title}
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { getCategoryProducts } from "@/data/products";

const Index = () => {
  const specialProducts = getCategoryProducts('special');
  const sugarlessProducts = getCategoryProducts('sugarless');
  const kidsProducts = getCategoryProducts('kids');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Special Bites Section */}
      <CategorySection
        title="Special Bites"
        description="Our signature collection of premium handcrafted desserts made with the finest ingredients for those special moments."
        products={specialProducts}
        categoryType="special"
        linkTo="/special-bites"
      />
      
      {/* Sugarless Bites Section */}
      <CategorySection
        title="Sugarless Bites"
        description="Indulge guilt-free with our health-conscious collection made with natural sweeteners, perfect for diabetics and health enthusiasts."
        products={sugarlessProducts}
        categoryType="sugarless"
        linkTo="/sugarless-bites"
      />
      
      {/* Kids Edition Section */}
      <CategorySection
        title="Kids Edition"
        description="Fun-sized treats designed especially for little ones with playful designs and pocket-friendly prices."
        products={kidsProducts}
        categoryType="kids"
        linkTo="/kids-edition"
      />
      
      <Footer />
    </div>
  );
};

export default Index;

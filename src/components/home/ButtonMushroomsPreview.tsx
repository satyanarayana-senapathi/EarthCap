
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const ButtonMushroomsPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-mushroom-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Specialty: Button Mushrooms"
          subtitle="Premium quality, sustainably grown button mushrooms with exceptional flavor and nutritional value"
          centered
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-forest-800 mb-4">
              Premium Button Mushrooms
            </h3>
            <p className="text-mushroom-700 mb-6 leading-relaxed">
              Our farm specializes in cultivating the finest button mushrooms, 
              known for their delicate flavor, firm texture, and versatile culinary applications. 
              We use advanced cultivation techniques while maintaining eco-friendly practices to 
              ensure consistent quality and sustainability.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-forest-100 rounded-full p-2 mr-4 text-forest-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-forest-800 mb-1">Fresh & Nutritious</h4>
                  <p className="text-mushroom-600 text-sm">Rich in vitamins, minerals, and antioxidants</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 rounded-full p-2 mr-4 text-forest-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-forest-800 mb-1">Pesticide-Free Cultivation</h4>
                  <p className="text-mushroom-600 text-sm">Grown without harmful chemicals or pesticides</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 rounded-full p-2 mr-4 text-forest-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-forest-800 mb-1">Year-Round Availability</h4>
                  <p className="text-mushroom-600 text-sm">Consistent supply for retail and wholesale customers</p>
                </div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/products">
                Explore Our Button Mushrooms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Premium Button Mushrooms"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-forest-800 font-medium mb-1">Harvested at Peak Freshness</p>
              <p className="text-mushroom-600 text-sm">Our button mushrooms are harvested daily to ensure maximum flavor and nutritional value</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-forest-50 rounded-xl p-8 border border-forest-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl text-forest-700">01</span>
              </div>
              <h4 className="font-medium text-forest-800 mb-2">Carefully Selected Strains</h4>
              <p className="text-mushroom-600 text-sm">We use premium button mushroom strains selected for superior taste and texture</p>
            </div>
            
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl text-forest-700">02</span>
              </div>
              <h4 className="font-medium text-forest-800 mb-2">Controlled Environment</h4>
              <p className="text-mushroom-600 text-sm">Grown in state-of-the-art facilities with optimal temperature and humidity</p>
            </div>
            
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl text-forest-700">03</span>
              </div>
              <h4 className="font-medium text-forest-800 mb-2">Careful Handling</h4>
              <p className="text-mushroom-600 text-sm">Harvested and packaged with care to preserve freshness and quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonMushroomsPreview;

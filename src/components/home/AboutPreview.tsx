
import { ArrowRight, Sprout, CheckCircle2, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Our Mushroom Farm"
              subtitle="Committed to excellence in cultivating premium quality mushrooms using sustainable methods."
            />
            
            <p className="text-mushroom-800 mb-6">
              Founded with a passion for mycology and sustainable agriculture, Mycelium Masters has grown into a leading producer of gourmet and medicinal mushrooms. Our farm combines traditional knowledge with modern technology to create optimal growing conditions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Sprout className="h-6 w-6 text-forest-600 mt-1 mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium text-lg text-forest-800">Sustainable Farming</h3>
                  <p className="text-mushroom-700">We use environmentally responsible methods that minimize waste and conserve resources.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-forest-600 mt-1 mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium text-lg text-forest-800">Quality Assurance</h3>
                  <p className="text-mushroom-700">Every mushroom is carefully inspected to ensure the highest standards of freshness and flavor.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CircleDollarSign className="h-6 w-6 text-forest-600 mt-1 mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium text-lg text-forest-800">Fair Pricing</h3>
                  <p className="text-mushroom-700">We believe in making premium mushrooms accessible through honest pricing.</p>
                </div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Our sustainable mushroom farm"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-forest-800 font-serif italic">
                  "Our mission is to cultivate mushrooms that nourish both people and the planet."
                </p>
                <p className="text-right text-forest-600 mt-2 font-medium">— Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

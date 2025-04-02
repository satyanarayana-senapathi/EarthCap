
import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Leaf, Users, History, Award, Sprout, Recycle } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="pt-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="About Mycelium Masters"
              subtitle="Our journey, mission, and commitment to sustainable mushroom cultivation."
              centered
            />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-secondary/30"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Our mushroom farm"
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-forest-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-mushroom-800">
                <p>
                  Mycelium Masters was founded in 2010 by a group of passionate mycologists and sustainable farming advocates. What began as a small-scale experiment has grown into a thriving operation that supplies premium mushrooms to restaurants, health food stores, and individual customers.
                </p>
                <p>
                  Our journey started with a simple question: how can we grow the most flavorful, nutritious mushrooms while respecting the environment? This question has guided our approach to cultivation, leading us to develop innovative methods that maximize quality while minimizing environmental impact.
                </p>
                <p>
                  Over the years, we've expanded our variety of mushrooms, refined our growing techniques, and built a community of mushroom enthusiasts who share our passion for fungi. Today, we're proud to be recognized as leaders in sustainable mushroom cultivation.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-forest-800 mb-6">Our Mission</h2>
              <div className="space-y-4 text-mushroom-800">
                <p>
                  At Mycelium Masters, our mission is to cultivate the highest quality mushrooms using sustainable methods that honor the natural growing cycles of fungi and respect our planet's resources.
                </p>
                <p>
                  We believe in the power of mushrooms not just as delicious food, but as important contributors to human health and ecological balance. Our goal is to share this belief through education and by providing products that demonstrate the remarkable potential of fungi.
                </p>
                <p>
                  We are committed to transparency in our practices, continuous improvement in our methods, and building lasting relationships with our customers, employees, and community partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The core principles that guide everything we do at Mycelium Masters."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Sustainability</h3>
              <p className="text-mushroom-700">
                We prioritize eco-friendly practices at every stage, from growing substrate selection to packaging.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Quality</h3>
              <p className="text-mushroom-700">
                We never compromise on the quality of our mushrooms, ensuring peak freshness and flavor.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Community</h3>
              <p className="text-mushroom-700">
                We build strong relationships with customers, suppliers, and our local community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <History className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Innovation</h3>
              <p className="text-mushroom-700">
                We continuously research and implement innovative cultivation techniques.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Education</h3>
              <p className="text-mushroom-700">
                We share knowledge about mushroom benefits and cultivation with our community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800 mb-2">Zero Waste</h3>
              <p className="text-mushroom-700">
                We strive to minimize waste in all aspects of our operation, finding use for all byproducts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The dedicated people behind Mycelium Masters."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden h-48 w-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800">John Smith</h3>
              <p className="text-mushroom-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden h-48 w-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800">Emma Johnson</h3>
              <p className="text-mushroom-600">Head Mycologist</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden h-48 w-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800">Michael Chen</h3>
              <p className="text-mushroom-600">Cultivation Manager</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden h-48 w-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-800">Sarah Garcia</h3>
              <p className="text-mushroom-600">Sales Director</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

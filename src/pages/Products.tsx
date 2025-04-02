
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, Leaf, ShieldCheck } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ProductCategory = "culinary" | "medicinal" | "grow-kits";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  details: string;
  nutritionalInfo?: string;
  growingConditions?: string;
  harvesting?: string;
  category: ProductCategory;
  image: string;
  benefits: string[];
  featured?: boolean;
  organic: boolean;
  available: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Oyster Mushrooms",
    description: "Delicate, savory mushrooms with a seafood-like flavor profile.",
    details: "Our oyster mushrooms are grown on sustainable hardwood substrate and harvested at peak maturity for optimal flavor and texture. Available in white, blue, and pink varieties, these versatile mushrooms are perfect for stir-fries, soups, and sautés.",
    nutritionalInfo: "Rich in protein, fiber, and essential minerals including selenium, copper, and potassium. Also contains B vitamins and antioxidants.",
    harvesting: "Harvested daily to ensure maximum freshness.",
    price: "$8.99/lb",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Rich in nutrients", "Low in calories", "Immune-supporting properties"],
    featured: true,
    organic: true,
    available: true
  },
  {
    id: 2,
    name: "Shiitake Mushrooms",
    description: "Rich, earthy flavor perfect for stir-fries and soups.",
    details: "Our shiitake mushrooms are grown using traditional log cultivation methods, resulting in dense, flavorful caps with a distinctive umami taste. These premium mushrooms add depth and richness to any dish.",
    nutritionalInfo: "Excellent source of vitamin D, B vitamins, and minerals. Contains all eight essential amino acids and several unique polysaccharides.",
    harvesting: "Harvested when caps are fully opened but before spore release for optimal flavor.",
    price: "$10.99/lb",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Supports heart health", "Rich in vitamin D", "Contains all essential amino acids"],
    organic: true,
    available: true
  },
  {
    id: 3,
    name: "King Trumpet Mushrooms",
    description: "Meaty texture with a mild, slightly sweet flavor profile.",
    details: "With their thick stems and small caps, king trumpet mushrooms offer a substantial meaty texture that holds up well to grilling and roasting. Their mild flavor becomes rich and nutty when cooked.",
    nutritionalInfo: "High in protein, potassium, and ergothioneine, a powerful antioxidant. Contains immune-supporting beta-glucans.",
    harvesting: "Harvested when stems are thick and caps are still closed for best texture.",
    price: "$12.99/lb",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Meat substitute", "High in ergothioneine", "Supports gut health"],
    organic: true,
    available: true
  },
  {
    id: 4,
    name: "Lion's Mane",
    description: "Known for potential cognitive benefits and seafood-like taste.",
    details: "Lion's Mane is a unique mushroom with cascading white spines resembling a lion's mane. Beyond its culinary applications, this remarkable fungus has been studied for its potential cognitive and neurological benefits.",
    nutritionalInfo: "Contains hericenones and erinacines, compounds that may stimulate nerve growth factor. Rich in antioxidants and anti-inflammatory compounds.",
    harvesting: "Harvested when teeth are fully formed but still white.",
    price: "$14.99/lb",
    category: "medicinal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Supports cognitive function", "Promotes nerve health", "Contains unique bioactive compounds"],
    featured: true,
    organic: true,
    available: true
  },
  {
    id: 5,
    name: "Reishi Extract",
    description: "Powerful immune-supporting mushroom in convenient extract form.",
    details: "Our Reishi extract is made from mature fruiting bodies grown on hardwood logs. The dual extraction process (both water and alcohol extraction) ensures that all beneficial compounds are preserved.",
    price: "$24.99",
    category: "medicinal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Supports immune system", "Promotes relaxation", "Traditional adaptogen"],
    organic: true,
    available: true
  },
  {
    id: 6,
    name: "Chaga Tincture",
    description: "Concentrated extract from wild-harvested chaga mushrooms.",
    details: "Our Chaga tincture is made from wild-harvested chaga mushrooms. The dual extraction process preserves both water-soluble and alcohol-soluble compounds for maximum benefit.",
    price: "$29.99",
    category: "medicinal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Rich in antioxidants", "Supports immune function", "Promotes skin health"],
    organic: true,
    available: true
  },
  {
    id: 7,
    name: "Oyster Mushroom Kit",
    description: "Grow your own oyster mushrooms at home with our easy kit.",
    details: "Our Oyster Mushroom Growing Kit includes everything you need to grow delicious gourmet mushrooms at home. The substrate is fully colonized and ready to fruit – just mist with water and watch them grow!",
    growingConditions: "Requires indirect light, high humidity (70-85%), and temperatures between 55-75°F.",
    price: "$29.99",
    category: "grow-kits",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Easy to grow", "Multiple harvests possible", "Educational for all ages"],
    featured: true,
    organic: true,
    available: true
  },
  {
    id: 8,
    name: "Shiitake Log Kit",
    description: "Traditional log-grown shiitake kit for the home grower.",
    details: "Our Shiitake Log Kit uses the traditional method of inoculating hardwood logs with shiitake spawn. While it takes longer than bag cultivation, the resulting mushrooms have superior flavor and texture.",
    growingConditions: "Keep outdoors in a shaded area. Fruiting occurs after rain or can be initiated by soaking the log in cold water.",
    price: "$39.99",
    category: "grow-kits",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Authentic cultivation method", "Can produce for years", "Superior flavor"],
    organic: true,
    available: true
  },
  {
    id: 9,
    name: "Lion's Mane Growing Kit",
    description: "Grow this unique medicinal and culinary mushroom at home.",
    details: "Our Lion's Mane Growing Kit allows you to grow this fascinating mushroom at home. Watch as the unique cascading spines develop, then harvest and enjoy both the culinary and potential health benefits.",
    growingConditions: "Requires indirect light, high humidity (80-90%), and temperatures between 65-75°F.",
    price: "$34.99",
    category: "grow-kits",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    benefits: ["Unique appearance", "Both medicinal and culinary", "Fascinating to grow"],
    organic: true,
    available: false
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("culinary");

  return (
    <PageLayout>
      <div className="pt-24 pb-16 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Mushroom Products"
            subtitle="Explore our selection of premium mushrooms, medicinal extracts, and cultivation kits."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            <Tabs defaultValue="culinary" className="w-full" onValueChange={(value) => setActiveCategory(value as ProductCategory)}>
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="culinary">Culinary Mushrooms</TabsTrigger>
                <TabsTrigger value="medicinal">Medicinal Products</TabsTrigger>
                <TabsTrigger value="grow-kits">Grow Kits</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(["culinary", "medicinal", "grow-kits"] as const).map((category) => (
            <div key={category} className={activeCategory === category ? "block" : "hidden"}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter(product => product.category === category)
                  .map((product) => (
                    <Card key={product.id} id={`product-${product.id}`} className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                      <div className="relative">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        {product.featured && (
                          <Badge className="absolute top-2 right-2 bg-forest-600 hover:bg-forest-700">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{product.name}</CardTitle>
                            <CardDescription className="text-lg font-medium mt-1">{product.price}</CardDescription>
                          </div>
                          {product.organic && (
                            <div className="flex items-center text-forest-600">
                              <Leaf className="h-5 w-5 mr-1" />
                              <span className="text-xs font-medium">Organic</span>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-mushroom-700 mb-4">{product.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="bg-forest-50 text-forest-700 border-forest-200">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="details">
                            <AccordionTrigger className="text-sm font-medium text-forest-700">
                              Product Details
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm text-mushroom-700 mb-2">{product.details}</p>
                              
                              {product.nutritionalInfo && (
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium text-forest-700 mb-1">Nutritional Information</h4>
                                  <p className="text-sm text-mushroom-700">{product.nutritionalInfo}</p>
                                </div>
                              )}
                              
                              {product.growingConditions && (
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium text-forest-700 mb-1">Growing Conditions</h4>
                                  <p className="text-sm text-mushroom-700">{product.growingConditions}</p>
                                </div>
                              )}
                              
                              {product.harvesting && (
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium text-forest-700 mb-1">Harvesting</h4>
                                  <p className="text-sm text-mushroom-700">{product.harvesting}</p>
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="w-full flex justify-between items-center">
                          <div className="flex items-center">
                            {product.available ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                In Stock
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          <Button disabled={!product.available}>
                            {product.available ? "Add to Cart" : "Notify Me"}
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              
              {category === "culinary" && (
                <div className="mt-16 bg-forest-50 rounded-lg p-6 border border-forest-100">
                  <div className="flex items-start">
                    <InfoIcon className="h-6 w-6 text-forest-600 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-forest-800 mb-2">
                        About Our Culinary Mushrooms
                      </h3>
                      <p className="text-mushroom-700 mb-4">
                        All our culinary mushrooms are harvested fresh daily and available for local pickup or delivery. For restaurant or wholesale orders, please contact us directly for volume pricing.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-forest-600 mr-2" />
                          <span className="text-sm text-mushroom-700">USDA Certified Organic</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-forest-600 mr-2" />
                          <span className="text-sm text-mushroom-700">No Pesticides or Chemicals</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-forest-600 mr-2" />
                          <span className="text-sm text-mushroom-700">Sustainable Growing Practices</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-forest-600 mr-2" />
                          <span className="text-sm text-mushroom-700">Locally Grown</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {category === "medicinal" && (
                <div className="mt-16 bg-forest-50 rounded-lg p-6 border border-forest-100">
                  <div className="flex items-start">
                    <InfoIcon className="h-6 w-6 text-forest-600 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-forest-800 mb-2">
                        About Our Medicinal Mushroom Products
                      </h3>
                      <p className="text-mushroom-700">
                        Our medicinal mushroom products are crafted to preserve the beneficial compounds found in these remarkable fungi. All our extracts undergo third-party testing for potency and purity.
                      </p>
                      <p className="text-mushroom-700 mt-2 italic">
                        *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {category === "grow-kits" && (
                <div className="mt-16 bg-forest-50 rounded-lg p-6 border border-forest-100">
                  <div className="flex items-start">
                    <InfoIcon className="h-6 w-6 text-forest-600 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-forest-800 mb-2">
                        About Our Mushroom Growing Kits
                      </h3>
                      <p className="text-mushroom-700 mb-4">
                        Our mushroom growing kits are designed to make cultivation easy and rewarding for beginners and experienced growers alike. Each kit comes with detailed instructions and access to our online resources for support.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="#" className="text-forest-700">
                          View Growing Instructions
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;

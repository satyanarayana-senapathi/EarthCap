
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProductCategory = "culinary" | "medicinal" | "grow-kits";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: ProductCategory;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Oyster Mushrooms",
    description: "Delicate, savory mushrooms with a seafood-like flavor profile.",
    price: "$8.99/lb",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 2,
    name: "Shiitake Mushrooms",
    description: "Rich, earthy flavor perfect for stir-fries and soups.",
    price: "$10.99/lb",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 3,
    name: "Lion's Mane",
    description: "Known for potential cognitive benefits and seafood-like taste.",
    price: "$12.99/lb",
    category: "medicinal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 4,
    name: "Reishi Extract",
    description: "Powerful immune-supporting mushroom in convenient extract form.",
    price: "$24.99",
    category: "medicinal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 5,
    name: "Oyster Mushroom Kit",
    description: "Grow your own oyster mushrooms at home with our easy kit.",
    price: "$29.99",
    category: "grow-kits",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 6,
    name: "Shiitake Log Kit",
    description: "Traditional log-grown shiitake kit for the home grower.",
    price: "$39.99",
    category: "grow-kits",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  }
];

const ProductsPreview = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("culinary");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Premium Mushrooms"
          subtitle="Discover our selection of freshly harvested mushrooms, medicinal products, and cultivation kits."
          centered
        />

        <Tabs defaultValue="culinary" className="w-full space-y-8" onValueChange={(value) => setActiveCategory(value as ProductCategory)}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="culinary">Culinary</TabsTrigger>
              <TabsTrigger value="medicinal">Medicinal</TabsTrigger>
              <TabsTrigger value="grow-kits">Grow Kits</TabsTrigger>
            </TabsList>
          </div>

          {(["culinary", "medicinal", "grow-kits"] as const).map((category) => (
            <TabsContent value={category} key={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter(product => product.category === category)
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{product.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/products#${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

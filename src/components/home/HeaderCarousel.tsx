
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const farmImages = [
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    caption: "Our Mushroom Farm",
    description: "Sunlight filtering through our greenhouse growing environment"
  },
  {
    url: "https://images.unsplash.com/photo-1542764164-3711b22d0c35",
    caption: "Growing Process",
    description: "Button mushrooms growing in our controlled substrate beds"
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    caption: "Harvesting Technique",
    description: "Careful harvesting ensures premium quality and freshness"
  },
  {
    url: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e",
    caption: "Sustainable Practices",
    description: "Our commitment to environmentally friendly cultivation methods"
  }
];

const HeaderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? farmImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === farmImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="farm-images" className="py-16 bg-forest-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-forest-800">
          Our Farm Journey
        </h2>
        <p className="text-lg text-center text-forest-600 mb-10 max-w-3xl mx-auto">
          Take a visual tour of Nutricap Mushrooms farm and discover our growing process
        </p>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {farmImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-lg shadow-md">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                      <h3 className="text-2xl font-serif font-bold text-forest-800 mb-3">
                        {image.caption}
                      </h3>
                      <p className="text-forest-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-forest-800" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-forest-800" />
          </Carousel>

          <div className="flex justify-center mt-8 gap-2">
            {farmImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-forest-600" : "bg-forest-200"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="border-forest-500 text-forest-700 hover:bg-forest-50"
            onClick={() => window.location.href = '/about'}
          >
            Learn More About Our Farm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeaderCarousel;


import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, Leaf, Sprout, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const farmImages = [
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    caption: "Our Mushroom Farm",
    description: "Sunlight filtering through our greenhouse growing environment",
    icon: <Sun className="h-5 w-5 text-forest-600" />
  },
  {
    url: "https://images.unsplash.com/photo-1542764164-3711b22d0c35",
    caption: "Growing Process",
    description: "Button mushrooms growing in our controlled substrate beds",
    icon: <Sprout className="h-5 w-5 text-forest-600" />
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    caption: "Harvesting Technique",
    description: "Careful harvesting ensures premium quality and freshness",
    icon: <Leaf className="h-5 w-5 text-forest-600" />
  },
  {
    url: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e",
    caption: "Sustainable Practices",
    description: "Our commitment to environmentally friendly cultivation methods",
    icon: <Sprout className="h-5 w-5 text-forest-600" />
  },
  {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    caption: "Farm Environment",
    description: "Our farm is located in a pristine natural setting",
    icon: <Sun className="h-5 w-5 text-forest-600" />
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    caption: "Natural Surroundings",
    description: "We're committed to preserving the natural ecosystem around our farm",
    icon: <Leaf className="h-5 w-5 text-forest-600" />
  }
];

const HeaderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? farmImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === farmImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, currentIndex]);

  return (
    <section id="farm-images" className="py-16 bg-forest-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-forest-800">
          Our Farm Journey
        </h2>
        <p className="text-lg text-center text-forest-600 mb-10 max-w-3xl mx-auto">
          Take a visual tour of EarthCap Mushrooms farm and discover our growing process
        </p>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {farmImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-lg shadow-md relative group">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          {image.icon}
                          <h4 className="text-xl font-bold">{image.caption}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        {image.icon}
                        <h3 className="text-2xl font-serif font-bold text-forest-800">
                          {image.caption}
                        </h3>
                      </div>
                      <p className="text-forest-600 mb-4">
                        {image.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-1 flex-grow bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-forest-600 rounded-full" 
                            style={{width: `${((index + 1) / farmImages.length) * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-sm text-forest-700 font-medium">
                          {index + 1}/{farmImages.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-forest-800" />
            <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-forest-800" />
          </Carousel>

          <div className="flex justify-center mt-8 gap-2">
            {farmImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-forest-600" : "bg-forest-200"
                } transition-colors duration-300`}
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

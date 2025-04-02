
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto md:mx-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Premium Button Mushroom Cultivation
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl leading-relaxed">
            Sustainably grown, premium quality button mushrooms,
            cultivated with care for exceptional flavor, nutrition, and freshness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/products">
                Explore Our Mushrooms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">About Our Farm</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="animate-bounce inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

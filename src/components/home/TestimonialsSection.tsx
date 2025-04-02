
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Chef",
    content: "The quality of Mycelium Masters' mushrooms is exceptional. The flavor profile of their oyster mushrooms adds a perfect umami element to our signature dishes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Health Food Store Owner",
    content: "Our customers are always asking for Mycelium Masters products. Their medicinal mushroom extracts are among our best-selling items, and for good reason.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Home Cook & Blogger",
    content: "I've tried growing mushrooms at home many times, but never with the success I've had using Mycelium Masters grow kits. The instructions are clear and the yields are amazing!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 4,
    name: "Thomas Williams",
    role: "Wellness Coach",
    content: "I recommend Mycelium Masters to all my clients interested in natural supplements. Their commitment to quality and sustainable practices aligns perfectly with my philosophy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it – hear from the people who love our mushrooms."
          centered
        />

        <div className="mt-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border border-secondary">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {testimonial.image && (
                          <div className="mr-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-forest-800">{testimonial.name}</h4>
                          <p className="text-sm text-mushroom-600">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="italic text-mushroom-700 flex-grow">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 translate-x-0" />
              <CarouselNext className="relative ml-2 translate-x-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

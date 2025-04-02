
import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  inquiryType: z.string({
    required_error: "Please select an inquiry type.",
  }),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <PageLayout>
      <div className="pt-24 pb-16 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Reach out to learn more about our farm or products. We'd love to hear from you!"
            centered
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
                <div className="h-64 w-full bg-forest-700">
                  {/* This would be replaced with an actual map integration */}
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <span>Map Location</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-forest-800 mb-6">
                    Visit Our Farm
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-forest-800">Address</h4>
                        <p className="text-mushroom-700">123 Farm Road</p>
                        <p className="text-mushroom-700">Mushroom Valley, MV 98765</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-forest-800">Phone</h4>
                        <p className="text-mushroom-700">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-forest-800">Email</h4>
                        <p className="text-mushroom-700">info@myceliummasters.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-forest-800 mb-2">Hours of Operation</h4>
                    <div className="space-y-1 text-mushroom-700">
                      <p className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-semibold text-forest-800 mb-4">
                  Follow Us
                </h3>
                <p className="text-mushroom-700 mb-4">
                  Stay updated with our latest news, harvests, and special offers by following us on social media.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-forest-100 hover:bg-forest-200 text-forest-700 p-3 rounded-full transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="bg-forest-100 hover:bg-forest-200 text-forest-700 p-3 rounded-full transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="bg-forest-100 hover:bg-forest-200 text-forest-700 p-3 rounded-full transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="bg-forest-100 hover:bg-forest-200 text-forest-700 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <Card className="border-green-100 bg-green-50">
                  <CardHeader>
                    <div className="mx-auto bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-2">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-center text-green-800">Message Sent Successfully!</CardTitle>
                    <CardDescription className="text-center text-green-700">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-semibold text-forest-800 mb-6">
                    Send Us a Message
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inquiry Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an inquiry type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="product">Product Question</SelectItem>
                                  <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                                  <SelectItem value="tour">Farm Tour Request</SelectItem>
                                  <SelectItem value="feedback">Feedback</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Subject of your message" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide details about your inquiry..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end">
                        <Button type="submit" size="lg">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}
              
              <div className="mt-12 bg-forest-50 rounded-lg p-6 border border-forest-100">
                <h3 className="text-lg font-medium text-forest-800 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-forest-700 mb-2">Do you offer farm tours?</h4>
                    <p className="text-mushroom-700">
                      Yes, we offer guided tours of our facility by appointment. Please contact us to schedule.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-700 mb-2">What is your shipping policy?</h4>
                    <p className="text-mushroom-700">
                      We ship fresh mushrooms locally and offer nationwide shipping for our dried products and grow kits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-700 mb-2">Do you sell to restaurants?</h4>
                    <p className="text-mushroom-700">
                      Yes, we offer wholesale pricing for restaurants. Please select "Wholesale Inquiry" when contacting us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

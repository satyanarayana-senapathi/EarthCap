
import { ArrowRight, PhoneCall, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions or interested in our products? Reach out to us."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-forest-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <PhoneCall className="h-6 w-6 text-forest-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-lg text-forest-800">Phone</h4>
                  <p className="text-mushroom-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-forest-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-lg text-forest-800">Email</h4>
                  <p className="text-mushroom-700">info@myceliummasters.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-forest-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-lg text-forest-800">Business Hours</h4>
                  <p className="text-mushroom-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-mushroom-700">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-mushroom-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
              {/* This would be replaced with an actual map integration */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Map Location</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold text-forest-800 mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-mushroom-600">We'll get back to you within 24 hours.</p>
                <Button type="submit">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-mushroom-700 mb-4">Looking for more detailed information?</p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Visit Our Contact Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;

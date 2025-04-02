
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      <TestimonialsSection />
      <BlogPreview />
      <ContactPreview />
    </PageLayout>
  );
};

export default Index;

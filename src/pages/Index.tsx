
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ButtonMushroomsPreview from "@/components/home/ButtonMushroomsPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import ContactPreview from "@/components/home/ContactPreview";
import HeaderCarousel from "@/components/home/HeaderCarousel";

const Index = () => {
  return (
    <PageLayout>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      <HeaderCarousel />
      <section id="button-mushrooms">
        <ButtonMushroomsPreview />
      </section>
      <section id="products">
        <ProductsPreview />
      </section>
      <TestimonialsSection />
      <section id="blog">
        <BlogPreview />
      </section>
      <section id="contact">
        <ContactPreview />
      </section>
    </PageLayout>
  );
};

export default Index;

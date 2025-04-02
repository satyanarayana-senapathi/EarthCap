
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Health Benefits of Lion's Mane Mushroom",
    excerpt: "Discover the cognitive and immune system benefits of this remarkable medicinal mushroom that's gaining popularity worldwide.",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Dr. Emily Chen"
  },
  {
    id: 2,
    title: "Sustainable Mushroom Farming Practices",
    excerpt: "Learn about how we're reducing our environmental footprint through innovative cultivation techniques and resource management.",
    date: "April 22, 2023",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Michael Johnson"
  },
  {
    id: 3,
    title: "Cooking with Gourmet Mushrooms: Chef's Guide",
    excerpt: "Professional culinary tips on how to bring out the best flavors in different mushroom varieties for stunning dishes.",
    date: "March 10, 2023",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Chef Anna Martinez"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Stay updated with mushroom cultivation tips, recipes, and industry insights."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <Link to={`/blog#${post.id}`} className="block">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-mushroom-600 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-forest-800 mb-2 hover:text-forest-600 transition-colors">
                  <Link to={`/blog#${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-mushroom-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-mushroom-600">By {post.author}</span>
                  <Link
                    to={`/blog#${post.id}`}
                    className="text-forest-600 hover:text-forest-800 font-medium inline-flex items-center transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;


import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Clock, Search, User } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: number;
  categories: string[];
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Magic of Mycelium: Exploring the World of Fungi",
    excerpt:
      "Dive into the fascinating world of mycelium and discover its vital role in our ecosystem.",
    image:
      "https://images.unsplash.com/photo-1631937430713-c543e5319936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "November 15, 2023",
    author: "Alice Johnson",
    readTime: 8,
    categories: ["Ecology", "Science"],
    content:
      "Mycelium, the vegetative part of a fungus, plays a crucial role in nutrient cycling...",
  },
  {
    id: 2,
    title: "Cultivating Gourmet Mushrooms: A Beginner's Guide",
    excerpt:
      "Learn the basics of growing your own gourmet mushrooms at home with our easy-to-follow guide.",
    image:
      "https://images.unsplash.com/photo-1617385372724-89d89e794215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "November 10, 2023",
    author: "Bob Williams",
    readTime: 10,
    categories: ["Cultivation", "DIY"],
    content:
      "Growing gourmet mushrooms can be a rewarding experience. This guide covers the essential steps...",
  },
  {
    id: 3,
    title: "The Health Benefits of Medicinal Mushrooms",
    excerpt:
      "Explore the powerful health benefits of medicinal mushrooms and how they can improve your well-being.",
    image:
      "https://images.unsplash.com/photo-1628113744930-974e9998213d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "November 5, 2023",
    author: "Carol Davis",
    readTime: 12,
    categories: ["Health", "Nutrition"],
    content:
      "Medicinal mushrooms have been used for centuries to treat various ailments. Discover their benefits...",
  },
  {
    id: 4,
    title: "Mushroom Foraging: A Guide to Finding Wild Mushrooms",
    excerpt:
      "Learn how to safely forage for wild mushrooms and identify edible species in your local area.",
    image:
      "https://images.unsplash.com/photo-1542833775-5554141269dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "October 28, 2023",
    author: "David Garcia",
    readTime: 15,
    categories: ["Foraging", "Nature"],
    content:
      "Foraging for wild mushrooms can be a fun and rewarding activity. This guide provides essential tips...",
  },
  {
    id: 5,
    title: "The Role of Fungi in Forest Ecosystems",
    excerpt:
      "Understand the critical role that fungi play in maintaining the health and balance of forest ecosystems.",
    image:
      "https://images.unsplash.com/photo-1571999442677-c89cb1544054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "October 20, 2023",
    author: "Emily Rodriguez",
    readTime: 9,
    categories: ["Ecology", "Forestry"],
    content:
      "Fungi are essential for the health of forest ecosystems. They form symbiotic relationships with trees...",
  },
  {
    id: 6,
    title: "Mushroom-Based Cuisine: Delicious Recipes to Try",
    excerpt:
      "Discover a variety of delicious recipes that showcase the versatility and unique flavors of mushrooms.",
    image:
      "https://images.unsplash.com/photo-1630434515685-17c31e53929b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "October 15, 2023",
    author: "Frank Martinez",
    readTime: 11,
    categories: ["Recipes", "Cooking"],
    content:
      "Mushrooms are a versatile ingredient that can be used in a variety of dishes. Explore these recipes...",
  },
];

const featuredPost = blogPosts[0];

interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: "Ecology", count: 2 },
  { name: "Cultivation", count: 1 },
  { name: "Health", count: 1 },
  { name: "Foraging", count: 1 },
  { name: "Forestry", count: 1 },
  { name: "Recipes", count: 1 },
  { name: "Science", count: 1 },
  { name: "DIY", count: 1 },
  { name: "Nutrition", count: 1 },
  { name: "Nature", count: 1 },
  { name: "Cooking", count: 1 },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter((post) => {
    const searchMatch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const categoryMatch =
      !selectedCategory || post.categories.includes(selectedCategory);
    return searchMatch && categoryMatch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <PageLayout>
      <div className="pt-24 pb-16 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Blog"
            subtitle="Insights, tips, and news from our mushroom farm."
            centered
          />
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-forest-50 border border-forest-100 overflow-hidden">
            <div className="md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="flex-grow">
                <div className="flex gap-2 mb-2">
                  {featuredPost.categories.map((cat) => (
                    <Badge
                      key={cat}
                      className="bg-forest-100 hover:bg-forest-200 text-forest-800"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold hover:text-forest-700 transition-colors">
                  <a href={`/blog/${featuredPost.id}`}>{featuredPost.title}</a>
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {featuredPost.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex gap-2 mb-2">
                        {post.categories.map((cat) => (
                          <Badge
                            key={cat}
                            className="bg-forest-100 hover:bg-forest-200 text-forest-800"
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg hover:text-forest-700 transition-colors">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) paginate(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  
                  {Array.from({
                    length: Math.ceil(filteredPosts.length / postsPerPage),
                  }).map((_, i) => {
                    const pageNumber = i + 1;
                    if (
                      pageNumber === 1 ||
                      pageNumber ===
                        Math.ceil(filteredPosts.length / postsPerPage) ||
                      (pageNumber >= currentPage - 1 &&
                        pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              paginate(pageNumber);
                            }}
                            isActive={currentPage === pageNumber}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (
                      i === 1 ||
                      i === Math.ceil(filteredPosts.length / postsPerPage) - 2
                    ) {
                      return <PaginationEllipsis key={`ellipsis-${i}`} />;
                    } else {
                      return null;
                    }
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
                          paginate(currentPage + 1);
                        }
                      }} 
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="w-full md:w-1/3 space-y-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category.name}
                        className={`${
                          selectedCategory === category.name
                            ? "bg-forest-700 text-white hover:bg-forest-800"
                            : "bg-forest-100 hover:bg-forest-200 text-forest-800"
                        } cursor-pointer`}
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name} ({category.count})
                      </Badge>
                    ))}
                    {selectedCategory && (
                      <Badge
                        variant="outline"
                        className="border-forest-300 text-forest-800 cursor-pointer"
                        onClick={resetFilters}
                      >
                        Clear filters
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts
                    .slice(0, 3)
                    .map((post) => (
                      <div key={post.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <a
                            href={`/blog/${post.id}`}
                            className="text-sm font-medium hover:text-forest-700 transition-colors"
                          >
                            {post.title}
                          </a>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>
                    Subscribe to our newsletter to get the latest updates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Input type="email" placeholder="Enter your email..." />
                  <Button className="w-full mt-4">Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;

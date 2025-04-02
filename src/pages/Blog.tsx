
import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, Search, Tag, User } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Health Benefits of Lion's Mane Mushroom",
    excerpt: "Discover the cognitive and immune system benefits of this remarkable medicinal mushroom that's gaining popularity worldwide.",
    content: `
      Lion's Mane (Hericium erinaceus) is one of the most fascinating medicinal mushrooms, with its distinctive appearance resembling a lion's mane as it grows. Beyond its unique look, this fungus has been the subject of numerous scientific studies examining its potential health benefits.

      ## Cognitive Support

      Perhaps the most well-known benefit of Lion's Mane is its potential to support brain health. Research suggests that compounds in Lion's Mane, specifically hericenones and erinacines, may stimulate the production of nerve growth factor (NGF), a protein that plays a crucial role in the maintenance and growth of certain neurons.

      These neuroprotective properties have led researchers to investigate Lion's Mane's potential in supporting cognitive function and memory, as well as its possible applications in neurological conditions.

      ## Immune System Support

      Like many medicinal mushrooms, Lion's Mane contains beta-glucans, which have been shown to modulate the immune system. These compounds can help regulate immune response, potentially enhancing the body's ability to defend against pathogens while also helping to prevent excessive inflammation.

      ## Digestive Health

      Traditionally, Lion's Mane has been used to support digestive health. Some research indicates that it may help protect the mucous membrane lining of the stomach, potentially beneficial for individuals with certain digestive concerns.

      ## How to Use Lion's Mane

      At Mycelium Masters, we offer Lion's Mane in several forms:

      - Fresh culinary mushrooms, which have a delicate seafood-like flavor when cooked
      - Dried mushrooms, which can be reconstituted for culinary use or made into teas
      - Powdered extracts, which can be added to beverages or foods
      - Capsules, for convenient daily supplementation

      As with any supplement, it's important to consult with a healthcare provider before adding Lion's Mane to your routine, especially if you have existing health conditions or are taking medications.
    `,
    date: "May 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Dr. Emily Chen",
    tags: ["Medicinal Mushrooms", "Health", "Lion's Mane", "Cognitive Health"]
  },
  {
    id: 2,
    title: "Sustainable Mushroom Farming Practices",
    excerpt: "Learn about how we're reducing our environmental footprint through innovative cultivation techniques and resource management.",
    content: `
      At Mycelium Masters, sustainability isn't just a buzzword—it's at the core of everything we do. Mushroom cultivation offers unique opportunities for sustainable agriculture, and we're committed to maximizing these benefits while minimizing our environmental impact.

      ## Closed-Loop Systems

      One of the most powerful aspects of mushroom farming is the ability to create closed-loop systems. We grow our mushrooms on agricultural byproducts that would otherwise go to waste, such as sawdust from lumber mills, coffee grounds from local cafes, and straw from nearby farms.

      After our mushrooms have completed their growth cycle, the spent substrate becomes a nutrient-rich compost that we either use in our vegetable gardens or provide to local farmers, completing the loop.

      ## Water Conservation

      Mushroom cultivation requires significantly less water than many other forms of agriculture. Our automated humidity systems recapture water, and we collect rainwater for use in our operations when possible.

      ## Energy Efficiency

      We've designed our growing rooms with energy efficiency in mind:

      - Insulated walls to maintain temperature
      - LED lighting that reduces energy consumption
      - Solar panels that offset a significant portion of our electricity usage
      - Timing systems that ensure lights and climate control run only when necessary

      ## Minimal Packaging

      We're committed to reducing packaging waste. Our mushrooms are sold in compostable containers, and we offer a container return program for local customers. For shipped products, we use biodegradable packaging materials.

      ## Spore-to-Store Transparency

      We believe in total transparency in our growing process. Customers are welcome to tour our facility (by appointment) to see exactly how their food is grown. We document and share our practices, successes, and even failures as we continually work to improve our sustainability.

      ## Looking Forward

      As we grow, we're exploring new ways to make our operation even more sustainable, including:

      - Developing more efficient growing techniques
      - Expanding our use of renewable energy
      - Partnering with more local businesses to utilize their waste products
      - Researching new biodegradable packaging options

      At Mycelium Masters, we believe that sustainable farming isn't just better for the planet—it produces better mushrooms and builds a stronger community. We're proud to be part of the solution to creating a more sustainable food system.
    `,
    date: "April 22, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Michael Johnson",
    tags: ["Sustainability", "Farming", "Environment", "Agriculture"]
  },
  {
    id: 3,
    title: "Cooking with Gourmet Mushrooms: Chef's Guide",
    excerpt: "Professional culinary tips on how to bring out the best flavors in different mushroom varieties for stunning dishes.",
    content: `
      Mushrooms are the culinary world's chameleons—adaptable, versatile, and capable of transforming dishes with their unique textures and flavors. As a chef who has worked with Mycelium Masters' mushrooms for years, I'm excited to share some professional tips for working with these remarkable fungi.

      ## Understanding Mushroom Flavor Profiles

      Each mushroom variety has its own unique flavor profile:

      - **Oyster Mushrooms**: Delicate and subtly sweet with a hint of anise
      - **Shiitake**: Rich, earthy, and umami with a meaty texture
      - **King Trumpet**: Mild but robust with a satisfying chewy texture
      - **Lion's Mane**: Delicate seafood-like flavor reminiscent of crab or lobster
      - **Maitake (Hen of the Woods)**: Complex, spicy, and earthy

      Understanding these profiles helps you pair mushrooms with complementary ingredients.

      ## Proper Cleaning Techniques

      Many people make the mistake of soaking mushrooms, which causes them to absorb water and become soggy when cooked. Instead:

      1. Use a soft brush or paper towel to gently remove any substrate or dirt
      2. For stubborn debris, use a damp cloth to quickly wipe, but don't saturate
      3. Clean mushrooms just before cooking, not in advance

      ## Cooking Methods

      **Sautéing (Best for most varieties)**
      1. Use a hot pan with a high smoke-point oil
      2. Don't overcrowd the pan—mushrooms release moisture and need space
      3. Season with salt only after mushrooms have released and reabsorbed their moisture
      4. Finish with butter, herbs, and garlic for maximum flavor

      **Roasting (Great for king trumpets, shiitake, and maitake)**
      1. Preheat oven to 425°F
      2. Toss mushrooms with oil, salt, and herbs
      3. Spread in a single layer on a baking sheet
      4. Roast until edges are crispy and golden (15-25 minutes)

      **Grilling (Perfect for large king trumpets, oyster clusters, and portobello)**
      1. Lightly oil mushrooms
      2. Season with salt and pepper
      3. Grill over medium-high heat
      4. Brush with herb butter while grilling

      ## Flavor Pairings

      **Classic Pairings:**
      - Mushrooms + Thyme + Garlic + Butter
      - Mushrooms + Soy Sauce + Ginger + Scallions
      - Mushrooms + White Wine + Shallots + Cream

      **Unexpected Pairings:**
      - Lion's Mane + Lemon + Capers (as a seafood substitute)
      - King Trumpet + Smoke + Maple (for a bacon-like application)
      - Blue Oyster + Blueberries + Balsamic (a surprisingly harmonious combination)

      ## Recipe: Umami Bomb Mushroom Risotto

      *Ingredients:*
      - 2 cups mixed Mycelium Masters mushrooms, sliced
      - 1 cup Arborio rice
      - 4 cups warm vegetable stock
      - 1/2 cup dry white wine
      - 1 shallot, finely diced
      - 2 cloves garlic, minced
      - 2 tbsp butter, divided
      - 2 tbsp olive oil
      - 1/4 cup grated Parmesan
      - Fresh thyme
      - Salt and pepper

      *Method:*
      1. In a large pan, heat 1 tbsp butter and olive oil. Sauté mushrooms until golden and moisture is reabsorbed. Set aside.
      2. In the same pan, sauté shallot until translucent, add garlic briefly.
      3. Add rice, stirring to coat in oil for 1-2 minutes.
      4. Add wine, stirring until absorbed.
      5. Add stock 1/2 cup at a time, stirring until absorbed before adding more.
      6. When rice is creamy and al dente, fold in mushrooms, remaining butter, and Parmesan.
      7. Finish with fresh thyme, salt, and pepper.

      Remember that mushrooms are the stars of the culinary world—treat them with respect, and they'll reward you with incredible flavors and textures that elevate any dish.
    `,
    date: "March 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Chef Anna Martinez",
    tags: ["Cooking", "Recipes", "Culinary", "Gourmet"]
  },
  {
    id: 4,
    title: "Starting Your Home Mushroom Garden",
    excerpt: "A beginner's guide to growing your own mushrooms at home with minimal equipment and space requirements.",
    content: `
      Growing mushrooms at home can be a rewarding hobby that provides you with fresh, organic fungi right from your own space. Unlike traditional gardening, mushroom cultivation doesn't require outdoor space or even much light, making it perfect for apartment dwellers or those with limited gardening areas.

      ## Why Grow Mushrooms at Home?

      - Fresh mushrooms whenever you want them
      - Significant cost savings over store-bought mushrooms
      - Control over growing conditions and inputs
      - The satisfaction of growing your own food
      - Educational opportunity for children and adults alike

      ## Getting Started: Choose Your Method

      There are several ways to grow mushrooms at home, ranging from very simple to more complex:

      **1. Pre-Made Growing Kits (Easiest)**
      
      Kits like those we offer at Mycelium Masters come fully colonized and ready to fruit. Simply follow the instructions for misting and air exchange, and you'll have mushrooms in 10-14 days. These are perfect for beginners.

      **2. Bucket or Bag Method (Intermediate)**
      
      This method involves purchasing mushroom spawn (the mushroom equivalent of "seeds") and introducing it to a prepared substrate in a bucket or bag. This gives you more control but requires a few more steps.

      **3. Log Cultivation (Advanced but Low Maintenance)**
      
      Traditional outdoor method where hardwood logs are inoculated with mushroom spawn. Takes longer to produce (6-12 months) but can continue fruiting for years.

      ## Basic Equipment for Beginners

      If you're starting with a kit, you'll need minimal equipment:

      - Spray bottle for misting
      - Thermometer to monitor temperature
      - Humidity gauge (optional but helpful)

      For those moving beyond kits:

      - Pressure cooker or large pot for sterilizing substrate
      - Spawn (mushroom mycelium grown on grain or other material)
      - Growing medium (depends on mushroom type)
      - Clean containers (buckets, bags, or trays)
      - Rubber gloves and alcohol for sanitizing

      ## Creating the Right Environment

      Most culinary mushrooms prefer:

      - Temperature: 55-75°F (varies by species)
      - Humidity: 80-90%
      - Indirect light (mushrooms don't photosynthesize like plants)
      - Fresh air exchange without drying out

      You can create this environment in many places:
      - Under the kitchen sink
      - In a spare closet
      - Basement or garage (temperature controlled)
      - Spare bathroom

      ## First-Timer Recommendations

      If you're new to mushroom growing, we recommend starting with:

      1. **Oyster Mushrooms** - The most forgiving variety for beginners, with fast growth and high yields
      2. **Shiitake** - Slightly more challenging but very rewarding
      3. **Lion's Mane** - Unique appearance and flavor, relatively easy to grow

      ## Common Mistakes to Avoid

      - **Poor Sanitation** - Mushroom cultivation requires cleanliness to prevent mold and contaminants
      - **Inconsistent Conditions** - Sudden changes in temperature or humidity can stress mycelium
      - **Overwatering** - Misting is good, soaking is not
      - **Insufficient Air Exchange** - Mushrooms release CO2 and need fresh air to develop properly

      ## From Hobby to Passion

      Many of our customers start with a simple kit and develop a passion for mycology. As you gain experience, you might find yourself exploring advanced techniques, experimenting with different species, or even setting up a small commercial operation.

      At Mycelium Masters, we're always happy to support home growers with advice, supplies, and encouragement. Visit our store or contact us with questions about starting your mushroom growing journey.

      Happy growing!
    `,
    date: "February 18, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Sarah Williams",
    tags: ["Growing", "DIY", "Beginner", "Home Cultivation"]
  },
  {
    id: 5,
    title: "The History and Future of Mushroom Cultivation",
    excerpt: "From ancient techniques to modern innovation, explore the fascinating evolution of mushroom growing practices.",
    content: `
      The cultivation of mushrooms represents one of humanity's oldest forms of agriculture, with evidence suggesting that people have been intentionally growing fungi for thousands of years. Yet, it's also at the cutting edge of agricultural innovation, with new techniques constantly emerging. Let's explore this fascinating journey from past to present to future.

      ## Ancient Beginnings

      The earliest documented mushroom cultivation dates back to around 600 CE in China, where Auricularia auricula (wood ear mushrooms) were grown on wood logs. By 800-900 CE, shiitake cultivation had been developed in Japan and China, using a method of cutting logs from shii trees (hence the name "shiitake" or "shii mushroom") after trees had been inoculated by natural spores.

      These early techniques were developed through careful observation and passed down through generations, laying the groundwork for all mushroom cultivation that followed.

      ## Traditional Methods

      Traditional mushroom cultivation primarily relied on log cultivation, where hardwood logs were inoculated with mushroom spawn and left to colonize for months or years before fruiting. This method is still used today for certain species like shiitake and is valued for the exceptional flavor it produces.

      In Europe, button mushroom (Agaricus bisporus) cultivation began in the 1600s in France, where mushroom growers discovered they could grow mushrooms in caves on composted horse manure. This led to the development of the French mushroom industry.

      ## The Modern Revolution

      The 20th century brought significant advances in mushroom cultivation:

      **1. Pure Culture Techniques**
      
      The development of laboratory techniques for isolating and maintaining pure mushroom cultures revolutionized cultivation, allowing for consistent, contaminant-free spawn production.

      **2. Substrate Innovations**
      
      Moving beyond logs and manure, cultivators developed techniques for growing mushrooms on a wide range of agricultural byproducts, including straw, sawdust, coffee grounds, and more. This made cultivation more accessible and economically viable.

      **3. Climate Control**

      The introduction of controlled growing environments allowed year-round production regardless of outdoor conditions, dramatically increasing yields and consistency.

      **4. Species Diversification**

      While button mushrooms dominated commercial production for decades, the late 20th century saw a boom in gourmet mushroom cultivation, introducing consumers to oyster, shiitake, lion's mane, and many other varieties.

      ## Today's Cultivation Landscape

      Modern mushroom cultivation spans a wide spectrum:

      - **Industrial-Scale Production**: Highly automated facilities producing thousands of pounds daily
      - **Mid-Size Specialty Farms**: Operations like Mycelium Masters focusing on quality and diversity
      - **Urban Mushroom Farms**: Using small spaces in cities to grow mushrooms on local waste products
      - **Home Cultivators**: A growing movement of people producing mushrooms in their homes

      These different scales all benefit from shared knowledge and technology, though they often employ different approaches based on their goals and resources.

      ## Innovations Shaping the Future

      Several exciting developments are currently shaping the future of mushroom cultivation:

      **1. Substrate Engineering**
      
      Scientists and growers are developing optimized substrates that maximize yields while utilizing specific waste streams, creating mutually beneficial relationships with other industries.

      **2. Genetic Work**
      
      While not genetic modification in the GMO sense, growers are using selective breeding and strain isolation to develop mushroom varieties with desirable traits like higher yields, unique colors, or enhanced nutrient profiles.

      **3. Automation and AI**
      
      From automated monitoring systems to robotics for harvesting, technology is making mushroom cultivation more efficient and consistent.

      **4. Vertical Integration**
      
      Many farms are combining cultivation with value-added products like dried mushrooms, tinctures, and ready-to-eat foods, creating more sustainable business models.

      **5. Mycoremediation**
      
      Using mushrooms to clean up environmental contaminants is opening new possibilities for combining ecosystem restoration with food production.

      ## The Circular Economy Connection

      Perhaps most exciting is how mushroom cultivation fits perfectly into the emerging circular economy model. Mushrooms excel at converting "waste" materials into valuable food, medicine, and soil amendments. This positions mushroom cultivation as not just a food production system but as a critical component of sustainable resource management.

      At Mycelium Masters, we're proud to be part of this long continuum of mushroom cultivation history. We honor traditional methods while embracing innovation, always with an eye toward what mushroom cultivation might become in the future.

      As we often say: in the mushroom world, what appears on the surface is just a small part of a vast, interconnected network underneath. The same could be said for the world of mushroom cultivation itself.
    `,
    date: "January 5, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Professor James Wong",
    tags: ["History", "Innovation", "Agriculture", "Sustainability"]
  },
  {
    id: 6,
    title: "Medicinal Mushrooms: Separating Fact from Fiction",
    excerpt: "An evidence-based look at the proven benefits of medicinal mushrooms and areas where more research is needed.",
    content: `
      The world of medicinal mushrooms is filled with both promising scientific research and exaggerated marketing claims. As a company committed to integrity, we believe it's important to clearly distinguish between what science has confirmed and what remains speculative about these fascinating fungi.

      ## The Evidence-Based Benefits

      Let's start with what scientific research has established about several key medicinal mushrooms:

      **Reishi (Ganoderma lucidum)**
      
      - **Well-Established**: Contains immunomodulating compounds, particularly beta-glucans, that can help regulate immune function
      - **Moderate Evidence**: May help reduce fatigue and improve quality of life in some patients
      - **Preliminary Evidence**: Potential support for liver health and blood glucose regulation

      **Lion's Mane (Hericium erinaceus)**
      
      - **Well-Established**: Contains compounds (hericenones and erinacines) that stimulate Nerve Growth Factor (NGF) production in lab studies
      - **Moderate Evidence**: May support cognitive function and nervous system health
      - **Preliminary Evidence**: Potential benefits for mood support and digestive health

      **Turkey Tail (Trametes versicolor)**
      
      - **Well-Established**: PSK and PSP compounds have been used as pharmaceutical grade adjuncts to standard cancer treatments in Japan and China for decades
      - **Moderate Evidence**: Supports immune system function
      - **Preliminary Evidence**: May support beneficial gut bacteria diversity

      **Cordyceps (Cordyceps militaris)**
      
      - **Well-Established**: Contains cordycepin and other compounds with immunomodulating properties
      - **Moderate Evidence**: May support athletic performance through improved oxygen utilization
      - **Preliminary Evidence**: Potential benefits for sexual health and kidney function

      ## Areas of Ongoing Research

      Many benefits attributed to medicinal mushrooms are based on promising but preliminary research:

      - **Neuroprotective effects**: Early research suggests some mushrooms may help protect against neurodegenerative conditions
      - **Anti-aging properties**: Research on compounds that may support cellular health and longevity
      - **Stress adaptation**: Studies examining how adaptogenic mushrooms help the body respond to various stressors
      - **Microbiome support**: Investigations into how mushroom prebiotics influence gut bacteria

      ## Common Misconceptions

      It's important to address some common misconceptions:

      **Misconception #1: "Medicinal mushrooms are miracle cures"**
      
      Reality: While beneficial, mushrooms work best as part of a comprehensive health approach, not as miracle solutions to complex health conditions.

      **Misconception #2: "All mushroom supplements are created equal"**
      
      Reality: Product quality varies dramatically. Many supplements contain little to no active compounds due to poor growing, processing, or extraction methods.

      **Misconception #3: "If it's traditional, it must work"**
      
      Reality: While traditional use provides valuable clues for research, traditional applications aren't always supported by modern evidence.

      ## Evaluating Quality

      To receive potential benefits from medicinal mushrooms, quality matters tremendously. Here's what to look for:

      1. **Fruiting Body vs. Mycelium**: Products made from actual mushroom fruiting bodies often contain higher concentrations of beneficial compounds compared to mycelium grown on grain
      
      2. **Extraction Method**: Many beneficial compounds need to be extracted properly (often using both water and alcohol) to be bioavailable
      
      3. **Testing and Standardization**: Reputable products are tested for active compound content and contaminants
      
      4. **Transparency**: Good companies disclose their sourcing, growing methods, and testing results

      ## The Mycelium Masters Approach

      At Mycelium Masters, we:

      - Clearly state what's supported by science vs. what's traditional or preliminary
      - Use only fruiting bodies in our medicinal products
      - Employ dual extraction methods to maximize bioavailable compounds
      - Test all products for both active compounds and contaminants
      - Focus on education rather than making exaggerated claims

      ## Looking Forward

      The field of medicinal mushroom research is growing rapidly. Studies currently underway may validate additional traditional uses or discover entirely new applications. We stay current with this research while maintaining a commitment to only making claims supported by evidence.

      When used appropriately, medicinal mushrooms offer valuable support for many aspects of health—no exaggeration needed. Their legitimate benefits are impressive enough without overstating what science has confirmed.

      *Disclaimer: This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before beginning any supplement regimen.*
    `,
    date: "December 12, 2022",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    author: "Dr. Robert Chen",
    tags: ["Medicine", "Research", "Health", "Science"]
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  // Extract all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Handle search and tag filtering
  useEffect(() => {
    let result = blogPosts;
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(
        post =>
          post.title.toLowerCase().includes(lowercasedTerm) ||
          post.excerpt.toLowerCase().includes(lowercasedTerm) ||
          post.content.toLowerCase().includes(lowercasedTerm) ||
          post.author.toLowerCase().includes(lowercasedTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm))
      );
    }
    
    // Filter by selected tag
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag));
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedTag]);

  // Check URL hash for blog post ID on page load
  useEffect(() => {
    const checkHashForBlogPost = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#')) {
        const postId = parseInt(hash.substring(1), 10);
        if (!isNaN(postId)) {
          const post = blogPosts.find(p => p.id === postId);
          if (post) {
            setActiveBlogPost(post);
          }
        }
      }
    };

    checkHashForBlogPost();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', checkHashForBlogPost);
    return () => {
      window.removeEventListener('hashchange', checkHashForBlogPost);
    };
  }, []);

  const handleBackToList = () => {
    setActiveBlogPost(null);
    window.history.pushState("", document.title, window.location.pathname);
  };

  return (
    <PageLayout>
      <div className="pt-24 pb-16 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mushroom Cultivation Blog"
            subtitle="Insights, guides, and news about mushroom cultivation, health benefits, and sustainable farming."
            centered
          />
          
          {!activeBlogPost && (
            <div className="max-w-3xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mushroom-400" />
                <Input
                  className="pl-10 bg-white"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {activeBlogPost ? (
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                className="mb-6"
                onClick={handleBackToList}
              >
                ← Back to all articles
              </Button>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-forest-800 mb-4">
                {activeBlogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-mushroom-600 mb-6 gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{activeBlogPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{activeBlogPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{activeBlogPost.readTime}</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src={activeBlogPost.image}
                  alt={activeBlogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-8 text-mushroom-800">
                {activeBlogPost.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-2xl font-serif font-semibold text-forest-800 mt-8 mb-4">
                        {paragraph.substring(3)}
                      </h2>
                    );
                  } else if (paragraph.startsWith('*')) {
                    return (
                      <p key={idx} className="italic my-4">
                        {paragraph}
                      </p>
                    );
                  } else if (paragraph.startsWith('1.') || paragraph.startsWith('- ')) {
                    return (
                      <div key={idx} className="my-4 ml-6">
                        {paragraph.split('\n').map((item, i) => (
                          <p key={i} className="mb-2">
                            {item}
                          </p>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <p key={idx} className="my-4">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {activeBlogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-forest-50 text-forest-700 border-forest-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-serif font-semibold text-forest-800 mb-4">
                    Filter by Tag
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge
                      variant={selectedTag === null ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedTag === null
                          ? "bg-forest-600 hover:bg-forest-700"
                          : "bg-white hover:bg-forest-50 text-forest-700"
                      }`}
                      onClick={() => setSelectedTag(null)}
                    >
                      All
                    </Badge>
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTag === tag
                            ? "bg-forest-600 hover:bg-forest-700"
                            : "bg-white hover:bg-forest-50 text-forest-700"
                        }`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-3">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-forest-800 mb-2">No articles found</h3>
                    <p className="text-mushroom-600">
                      Try adjusting your search or filter criteria.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedTag(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} id={`${post.id}`} className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                        <a href={`#${post.id}`} className="block">
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </a>
                        <CardHeader>
                          <div className="flex flex-wrap items-center text-mushroom-600 text-sm mb-2 gap-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl hover:text-forest-600 transition-colors">
                            <a href={`#${post.id}`}>{post.title}</a>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-mushroom-700 mb-4">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded-full cursor-pointer hover:bg-forest-100"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedTag(tag);
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <div className="w-full flex justify-between items-center">
                            <span className="text-sm text-mushroom-600">By {post.author}</span>
                            <a
                              href={`#${post.id}`}
                              className="text-forest-600 hover:text-forest-800 font-medium inline-flex items-center transition-colors"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;

import { Card, CardContent } from "@/components/ui/card";
import type { NewsItem } from "@/lib/types";

const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "COMMUNITY OUTREACH",
    title: "Dreams Don't Wait Campaign Reaches 500+ Students",
    excerpt: "Our latest motivational campaign has inspired hundreds of university students across Lilongwe to take action on their career goals.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "2", 
    category: "FAMILY DEVELOPMENT",
    title: "New Parent-Coaching Circles Launch This Month",
    excerpt: "Introducing our revolutionary parenting program that transforms family responsibility into nation-building purpose.",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "3",
    category: "LEADERSHIP",
    title: "Men's Mental Health Initiative Shows Promising Results",
    excerpt: "Our Father's Day campaign during Men's Mental Health Month breaks stigma and creates supportive communities.",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function NewsSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "COMMUNITY OUTREACH":
        return "text-accent-custom";
      case "FAMILY DEVELOPMENT":
        return "text-secondary-custom";
      case "LEADERSHIP":
        return "text-primary-custom";
      default:
        return "text-primary-custom";
    }
  };

  return (
    <div className="bg-neutral-custom-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-custom-900 mb-4">
            Latest Impact News
          </h2>
          <p className="text-lg text-neutral-custom-900 max-w-2xl mx-auto">
            Stay updated on our recent initiatives and the positive changes happening across Malawi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className={`text-sm font-medium mb-2 ${getCategoryColor(item.category)}`}>
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-neutral-custom-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-custom-900 mb-4">
                  {item.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-custom-900">{item.date}</span>
                  <a href="#" className="text-primary-custom hover:text-accent-custom font-medium">
                    Read More →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

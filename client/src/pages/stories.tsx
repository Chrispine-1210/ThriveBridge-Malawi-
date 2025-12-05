import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { StoryItem } from "@/lib/types";
import universityStudentImg from "@assets/generated_images/university_student_age_20-24.png";
import earlyProfImg from "@assets/generated_images/early_professional_age_25-30.png";
import establishedProfImg from "@assets/generated_images/established_professional_age_30-35.png";
import experiencedLeaderImg from "@assets/generated_images/experienced_leader_age_40-45.png";

const featuredStory: StoryItem = {
  id: "featured",
  category: "YOUTH EMPOWERMENT",
  title: "From University Student to Social Entrepreneur",
  excerpt: "When I joined ThriveBridge's weekly coaching sessions, I was a struggling university student with big dreams but no clear path. Today, I run a successful youth mentorship program that has reached over 200 students in my community.",
  author: "Patricia Mbewe",
  location: "Lilongwe, Malawi",
  image: universityStudentImg
};

const stories: StoryItem[] = [
  {
    id: "1",
    category: "FAMILY DEVELOPMENT",
    title: "Rebuilding Family Bonds Through Coaching",
    excerpt: "The Phiri family's journey from crisis to strength through our parent-coaching circles program.",
    author: "The Phiri Family",
    location: "Blantyre, Malawi",
    image: establishedProfImg
  },
  {
    id: "2",
    category: "LEADERSHIP",
    title: "A New Generation of Community Leaders",
    excerpt: "How our leadership incubation program is creating change-makers across rural Malawi.",
    author: "Community Leaders Network",
    location: "Rural Malawi",
    image: experiencedLeaderImg
  },
  {
    id: "3",
    category: "MENTAL HEALTH",
    title: "Breaking the Silence on Men's Mental Health",
    excerpt: "John's courageous journey from depression to becoming a mental health advocate in his community.",
    author: "John Banda",
    location: "Mzuzu, Malawi",
    image: earlyProfImg
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
];

export default function Stories() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "YOUTH EMPOWERMENT":
        return "text-primary-custom";
      case "FAMILY DEVELOPMENT":
        return "text-secondary-custom";
      case "LEADERSHIP":
        return "text-accent-custom";
      case "MENTAL HEALTH":
        return "text-primary-custom";
      default:
        return "text-primary-custom";
    }
  };

  return (
    <div className="py-20 bg-neutral-custom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            Real stories of transformation, resilience, and hope from the communities we serve across Malawi.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-16">
          <Card className="bg-white shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-96">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title}
                  className="w-full h-full object-cover min-h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`font-medium mb-3 ${getCategoryColor(featuredStory.category)}`}>
                  {featuredStory.category}
                </div>
                <h3 className="text-3xl font-bold text-neutral-custom-900 mb-4 font-serif">
                  {featuredStory.title}
                </h3>
                <p className="text-neutral-custom-900 mb-6 leading-relaxed">
                  "{featuredStory.excerpt}"
                </p>
                <div className="flex items-center mb-6">
                  <img 
                    src={universityStudentImg}
                    alt="Author portrait"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-custom-900">{featuredStory.author}</div>
                    <div className="text-sm text-neutral-custom-900">{featuredStory.location}</div>
                  </div>
                </div>
                <Button variant="outline" className="inline-flex items-center text-primary-custom hover:text-accent-custom font-semibold">
                  Read Full Story →
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <Card key={story.id} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className={`text-sm font-medium mb-2 ${getCategoryColor(story.category)}`}>
                  {story.category}
                </div>
                <h3 className="text-xl font-bold text-neutral-custom-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-neutral-custom-900 mb-4 text-sm leading-relaxed">
                  {story.excerpt}
                </p>
                <Button variant="ghost" className="text-primary-custom hover:text-accent-custom font-medium text-sm p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery Preview */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 mb-8">
            Community in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Community activity ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            ))}
          </div>
          <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white">
            View Full Gallery
          </Button>
        </div>
      </div>
    </div>
  );
}

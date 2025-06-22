import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, BookOpen, Play, Download } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ResourceItem } from "@/lib/types";

const resourceCategories = [
  {
    id: "reports",
    icon: BarChart3,
    title: "Research Reports",
    description: "Comprehensive studies on youth development, family dynamics, and community resilience in Malawi.",
    color: "primary-custom",
    resources: [
      { title: "Youth Empowerment Impact Study 2024", type: "report" as const },
      { title: "Family Development Assessment", type: "report" as const },
      { title: "Community Resilience Framework", type: "report" as const }
    ]
  },
  {
    id: "training",
    icon: BookOpen,
    title: "Training Materials",
    description: "Practical guides, workbooks, and toolkits for implementing empowerment programs in your community.",
    color: "secondary-custom",
    resources: [
      { title: "Youth Coaching Handbook", type: "training" as const },
      { title: "Parent Circle Facilitation Guide", type: "training" as const },
      { title: "Leadership Development Toolkit", type: "training" as const }
    ]
  },
  {
    id: "videos",
    icon: Play,
    title: "Video Resources",
    description: "Inspirational talks, training sessions, and documentary content showcasing our programs and impact.",
    color: "accent-custom",
    resources: [
      { title: "Dreams Don't Wait: Documentary", type: "video" as const },
      { title: "Leadership Training Series", type: "video" as const },
      { title: "Family Transformation Stories", type: "video" as const }
    ]
  }
];

export default function Resources() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const message = error.message.includes("409") 
        ? "You're already subscribed to our newsletter!"
        : "Failed to subscribe. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Resources
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            Access our research, reports, and downloadable materials to support your own youth 
            empowerment and family development initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="bg-neutral-custom-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-custom-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-neutral-custom-900 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {category.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="text-sm font-medium">{resource.title}</span>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className={`text-${category.color} hover:text-accent-custom`}
                        >
                          {resource.type === "video" ? <Play className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-${category.color} hover:bg-${category.color}/90 text-white`}>
                    {category.id === "reports" && "View All Reports"}
                    {category.id === "training" && "Access Materials"}
                    {category.id === "videos" && "Watch Videos"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-primary-custom to-secondary-custom text-white text-center">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold font-serif mb-4">Stay Updated</h3>
            <p className="text-xl mb-6 opacity-90">
              Subscribe to receive our latest research, success stories, and program updates.
            </p>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleNewsletterSignup} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-neutral-custom-900"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-primary-custom hover:bg-gray-50"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

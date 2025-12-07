import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Handshake, CheckCircle } from "lucide-react";
import { Link } from "wouter";

interface DonationItem {
  amount: string;
  description: string;
}

interface ListItem {
  title: string;
}

const involvementOptions: Array<{
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
  items: (DonationItem | ListItem)[];
  buttonText: string;
}> = [
  {
    id: "donation",
    icon: Heart,
    title: "Make a Donation",
    description: "Your contribution directly funds coaching sessions, community outreach, and family support programs across Malawi.",
    color: "primary-custom",
    items: [
      { amount: "$25", description: "Supports 1 youth coaching session" },
      { amount: "$50", description: "Funds 1 family mentorship program" },
      { amount: "$100", description: "Powers 1 community outreach event" }
    ],
    buttonText: "Donate Now"
  },
  {
    id: "volunteer",
    icon: HandHeart,
    title: "Volunteer With Us",
    description: "Share your skills and passion to directly impact youth and families. From coaching to event coordination, we need you.",
    color: "secondary-custom",
    items: [
      { title: "Youth Mentorship" },
      { title: "Community Event Support" },
      { title: "Program Coordination" },
      { title: "Digital Marketing" }
    ],
    buttonText: "Join Our Team"
  },
  {
    id: "partnership",
    icon: Handshake,
    title: "Partner With Us",
    description: "Organizations, businesses, and institutions can amplify our impact through strategic partnerships and collaborative initiatives.",
    color: "accent-custom",
    items: [
      { title: "Corporate Sponsorship" },
      { title: "Educational Partnerships" },
      { title: "NGO Collaborations" },
      { title: "Innovation Partnerships" }
    ],
    buttonText: "Explore Partnership"
  }
];

export default function GetInvolved() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            Together, we're building one month at a time. Join our mission to create a self-reliant 
            generation through multiple pathways of engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card key={option.id} className={`bg-gradient-to-br from-${option.color} to-${option.color}/80 text-white text-center`}>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {option.items.map((item, index) => (
                      <div key={index}>
                        {"amount" in item ? (
                          <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                            <span className="font-semibold">{item.amount}</span>
                            <span className="text-sm">{item.description}</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-left">
                            <CheckCircle className="w-5 h-5 mr-3" />
                            <span className="text-sm">{item.title}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-white text-primary-custom hover:bg-gray-50">
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-neutral-custom-50">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold font-serif text-neutral-custom-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-neutral-custom-900 mb-8 max-w-2xl mx-auto">
              Every contribution, whether time, resources, or expertise, helps us build a stronger, 
              more self-reliant Malawi. Let's walk together - building one month at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-4 text-lg font-semibold">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white px-8 py-4 text-lg font-semibold">
                  Schedule a Meeting
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

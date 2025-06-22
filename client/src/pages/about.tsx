import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, University, HandHeart, Building, Globe } from "lucide-react";
import type { TeamMember } from "@/lib/types";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Michael Phiri",
    position: "Executive Director",
    bio: "15+ years of experience in youth development and community leadership across Southern Africa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "2",
    name: "Grace Banda",
    position: "Programs Director",
    bio: "Specialist in family development and parenting programs with a background in social psychology.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "3",
    name: "James Mwanza",
    position: "Youth Coordinator",
    bio: "Dynamic youth advocate focused on career coaching and mentorship for university students.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const partners = [
  { name: "University of Malawi", icon: University },
  { name: "Youth Alliance Network", icon: HandHeart },
  { name: "Lilongwe City Council", icon: Building },
  { name: "African Development Foundation", icon: Globe }
];

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Organization Background */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            ThriveBridge Malawi stands at the intersection of youth mentorship, family transformation, 
            and leadership incubation. We are more than a motivational platform—we're a strategic 
            incubator for self-reliant, value-driven leadership across generations.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 bg-neutral-custom-50">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-custom-900 mb-4">Our Mission</h3>
              <p className="text-neutral-custom-900 leading-relaxed">
                Building a self-reliant generation through youth and family empowerment, 
                operating as a bridge between ambition and impact.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-neutral-custom-50">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-secondary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-custom-900 mb-4">Our Vision</h3>
              <p className="text-neutral-custom-900 leading-relaxed">
                A Malawi where every youth and family thrives with purpose, contributing to 
                sustainable social growth from the ground up.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-neutral-custom-50">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-custom-900 mb-4">Our Values</h3>
              <p className="text-neutral-custom-900 leading-relaxed">
                Patriotic history, visionary leadership, generational thinking, and values-based 
                nation building rooted in enduring principles.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-neutral-custom-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-custom font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-neutral-custom-900">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 mb-8">
            Our Partners
          </h2>
          <p className="text-lg text-neutral-custom-900 mb-8">
            Working together with organizations that share our vision for a thriving Malawi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div key={index} className="text-center">
                  <Card className="p-6">
                    <CardContent className="pt-6">
                      <IconComponent className="w-12 h-12 text-primary-custom mb-2 mx-auto" />
                      <div className="text-sm font-medium">{partner.name}</div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

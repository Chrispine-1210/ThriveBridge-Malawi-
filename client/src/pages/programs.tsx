import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Home, Flag, Brain, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const programs = [
  {
    id: "youth-empowerment",
    icon: Rocket,
    title: "Personal & Youth Empowerment",
    description: "Transforming young minds through motivational campaigns, career coaching, and skill-building programs that prepare the next generation for success.",
    color: "primary-custom",
    features: [
      {
        title: "Dreams Don't Wait Campaign",
        description: "Motivational initiatives targeting students and young professionals"
      },
      {
        title: "Weekly Online Coaching",
        description: "Free career preparedness sessions for university students"
      },
      {
        title: "Leadership Development",
        description: "Building future-ready leaders with strong values"
      }
    ]
  },
  {
    id: "family-development",
    icon: Home,
    title: "Parenting & Family Development",
    description: "Reimagining parenting as nation-building purpose through coaching circles, mentorship programs, and community outreach initiatives.",
    color: "secondary-custom",
    features: [
      {
        title: "Parent-Coaching Circles",
        description: "Collaborative learning environments for effective parenting"
      },
      {
        title: "Family Mentorship Programs",
        description: "Comprehensive support systems for struggling families"
      },
      {
        title: "Community Outreach",
        description: "Expanding positive parenting practices across communities"
      }
    ]
  },
  {
    id: "leadership",
    icon: Flag,
    title: "Leadership & Values-Based Nation Building",
    description: "Anchored in patriotic history and emphasizing visionary, generational leadership rooted in enduring values and national pride.",
    color: "accent-custom",
    features: [
      {
        title: "Leadership Incubation",
        description: "Developing strategic thinkers and change-makers"
      },
      {
        title: "Values-Driven Training",
        description: "Building leaders with strong moral foundations"
      },
      {
        title: "Nation Building Initiatives",
        description: "Programs focused on community and national development"
      }
    ]
  },
  {
    id: "mental-health",
    icon: Brain,
    title: "Mental Health & Men's Wellness",
    description: "Addressing mental health challenges with special focus on men's wellness, breaking stigma, and creating supportive communities.",
    color: "primary-custom",
    features: [
      {
        title: "Men's Mental Health Campaigns",
        description: "Specialized initiatives during Men's Mental Health Month"
      },
      {
        title: "Stigma Reduction Programs",
        description: "Breaking barriers around mental health discussions"
      },
      {
        title: "Support Networks",
        description: "Building communities of care and understanding"
      }
    ]
  }
];

export default function Programs() {
  return (
    <div className="py-20 bg-neutral-custom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to empower youth, strengthen families, 
            and build resilient communities across Malawi.
          </p>
        </div>

        {/* Program Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${program.color} rounded-xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-custom-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-neutral-custom-900 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className={`text-${program.color} mt-1 mr-3 w-5 h-5`} />
                        <div>
                          <h4 className="font-semibold text-neutral-custom-900">{feature.title}</h4>
                          <p className="text-sm text-neutral-custom-900">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-${program.color} hover:bg-${program.color}/90 text-white`}>
                    Learn More About {program.title.split(' &')[0]} Programs
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary-custom to-secondary-custom text-white text-center">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold font-serif mb-4">Ready to Transform Lives?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join our programs and be part of building Malawi's self-reliant generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button className="bg-white text-primary-custom hover:bg-gray-50">
                  Apply for Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-custom">
                  Program Schedule
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

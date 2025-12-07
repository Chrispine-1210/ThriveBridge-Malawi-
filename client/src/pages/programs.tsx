import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Home, Flag, Brain, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import youngStudentImg from "@assets/generated_images/young_malawi_student_age_15-18.png";
import universityStudentImg from "@assets/generated_images/university_student_age_20-24.png";
import earlyProfImg from "@assets/generated_images/early_professional_age_25-30.png";
import establishedProfImg from "@assets/generated_images/established_professional_age_30-35.png";
import transformationBgImg from "@assets/generated_images/youth_community_collaboration_and_growth.png";

const programs = [
  {
    id: "youth-empowerment",
    icon: Rocket,
    title: "Personal & Youth Empowerment",
    description: "Transforming young minds through motivational campaigns, career coaching, and skill-building programs that prepare the next generation for success.",
    color: "primary-custom",
    image: youngStudentImg,
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
    image: universityStudentImg,
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
    image: establishedProfImg,
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
    image: earlyProfImg,
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
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <Card key={program.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {program.image && (
                    <>
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </>
                  )}
                </div>
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
        <div className="relative overflow-hidden rounded-lg h-96">
          <img 
            src={transformationBgImg}
            alt="Transformation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `translateY(${offsetY}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-custom/85 to-secondary-custom/85" />
          <div className="relative h-full flex items-center justify-center text-white text-center">
            <div className="px-8 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ready to Transform Lives?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join our programs and be part of building Malawi's self-reliant generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button className="bg-white text-primary-custom hover:bg-gray-50">
                    Apply for Programs
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-white/20 text-white hover:bg-white hover:text-primary-custom border-2 border-white">
                    Program Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

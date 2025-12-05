import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Users, Target, BookOpen, Award, Calendar, Video, CheckCircle, ArrowRight } from "lucide-react";
import universityStudentImg from "@assets/generated_images/university_student_age_20-24.png";
import earlyProfImg from "@assets/generated_images/early_professional_age_25-30.png";
import transformationBgImg from "@assets/generated_images/youth_community_collaboration_and_growth.png";

const coachingPrograms = [
  {
    id: "university",
    title: "University Student Coaching",
    description: "Free weekly online sessions for university and college students focused on career preparation and skill-building.",
    duration: "Weekly sessions",
    format: "Online group sessions",
    price: "Free",
    features: [
      "Career planning and goal setting",
      "Resume and interview preparation", 
      "Professional networking skills",
      "Industry-specific guidance",
      "Skill development workshops"
    ]
  },
  {
    id: "professional",
    title: "Young Professional Development",
    description: "Comprehensive coaching for recent graduates and early-career professionals to accelerate their growth.",
    duration: "8-week program",
    format: "Individual + group sessions",
    price: "Affordable rates",
    features: [
      "Leadership development",
      "Communication skills enhancement",
      "Career transition support",
      "Personal branding strategies",
      "Goal achievement frameworks"
    ]
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Mentorship",
    description: "Support for aspiring entrepreneurs to develop business ideas and launch successful ventures.",
    duration: "12-week intensive",
    format: "One-on-one mentorship",
    price: "Investment program",
    features: [
      "Business idea validation",
      "Market research guidance",
      "Financial planning support",
      "Networking opportunities",
      "Investor readiness preparation"
    ]
  }
];

const testimonials = [
  {
    name: "Patricia Mbewe",
    role: "University Graduate",
    quote: "The career coaching sessions transformed my approach to job searching. I landed my dream job within 3 months of graduation.",
    image: universityStudentImg
  },
  {
    name: "James Kachingwe",
    role: "Young Professional",
    quote: "ThriveBridge's coaching helped me transition from student to confident professional. The skills I learned are invaluable.",
    image: earlyProfImg
  }
];

export default function CareerCoaching() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Career Coaching Services
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering Malawian youth with the skills, confidence, and networks needed to build 
            successful careers and become tomorrow's leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-4 text-lg font-semibold">
                Book Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white px-8 py-4 text-lg font-semibold">
              <Video className="w-5 h-5 mr-2" />
              Watch Success Stories
            </Button>
          </div>
        </div>

        {/* Coaching Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 text-center mb-12">
            Our Coaching Programs
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {coachingPrograms.map((program) => (
              <Card key={program.id} className="bg-neutral-custom-50 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-custom-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-neutral-custom-900 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-semibold text-primary-custom">Duration:</span>
                      <p>{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary-custom">Format:</span>
                      <p>{program.format}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="font-semibold text-primary-custom">Includes:</span>
                    <ul className="mt-2 space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="text-primary-custom mt-1 mr-2 w-4 h-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-custom mb-4">{program.price}</div>
                    <Button className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 text-center mb-12">
            Why Choose Our Career Coaching?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-custom-900 mb-2">Expert Mentors</h3>
              <p className="text-neutral-custom-900">Learn from successful professionals with deep industry experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-custom rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-custom-900 mb-2">Personalized Plans</h3>
              <p className="text-neutral-custom-900">Customized coaching tailored to your specific goals and aspirations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-custom rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-custom-900 mb-2">Practical Skills</h3>
              <p className="text-neutral-custom-900">Real-world skills that employers value and career success demands.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-custom-900 mb-2">Proven Results</h3>
              <p className="text-neutral-custom-900">Track record of helping students and professionals achieve their goals.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-serif text-neutral-custom-900 text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-neutral-custom-50">
                <CardContent className="p-8">
                  <p className="text-neutral-custom-900 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-neutral-custom-900">{testimonial.name}</div>
                      <div className="text-sm text-neutral-custom-900">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden rounded-lg h-96">
          <img 
            src={transformationBgImg}
            alt="Career Transformation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `translateY(${offsetY}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-custom/85 to-secondary-custom/85" />
          <div className="relative h-full flex items-center justify-center text-white text-center">
            <div className="px-8 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ready to Transform Your Career?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Malawian youth who have accelerated their careers through our coaching programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-primary-custom hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Button className="bg-white/20 text-white hover:bg-white hover:text-primary-custom px-8 py-4 text-lg font-semibold border-2 border-white">
                  Download Program Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
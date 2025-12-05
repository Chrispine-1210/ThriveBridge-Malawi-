import HeroSection from "@/components/hero-section";
import EventCarousel from "@/components/event-carousel";
import StatsSection from "@/components/stats-section";
import NewsSection from "@/components/news-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Calendar, ArrowRight } from "lucide-react";
import careerMentorshipBg from "@assets/generated_images/career_mentorship_professional_background.png";

function CareerCoachingHighlight() {
  return (
    <div 
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('${careerMentorshipBg}')`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/55" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold font-serif mb-6 text-shadow-md">
              Free Career Coaching for Students
            </h2>
            <p className="text-xl mb-6 opacity-95 leading-relaxed text-shadow-md">
              Weekly online coaching sessions helping university students build successful careers. 
              From resume writing to interview skills, we prepare Malawi's youth for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/career-coaching">
                <Button className="bg-white text-primary-custom hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Free Sessions
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-custom px-8 py-4 text-lg font-semibold">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center text-white">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="opacity-90">Students Coached</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center text-white">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">85%</h3>
                <p className="opacity-90">Job Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventCarousel />
      <StatsSection />
      <CareerCoachingHighlight />
      <NewsSection />
    </div>
  );
}

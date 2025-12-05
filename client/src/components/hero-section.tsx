import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import youthCoachingImg from "@assets/generated_images/youth_coaching_session_event.png";

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-primary-custom/90 to-secondary-custom/90">
      <img
        src={youthCoachingImg}
        alt="ThriveBridge Malawi event"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight text-shadow-lg">
            Building a <span className="text-accent-custom">Self-Reliant</span> Generation
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow-md">
            Empowering youth and families in Malawi through coaching, community outreach, 
            and mindset transformation to nurture future-ready leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career-coaching">
              <Button className="bg-accent-custom hover:bg-accent-custom/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Free Career Coaching
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button 
                className="bg-white/20 text-white hover:bg-white hover:text-primary-custom px-8 py-4 text-lg font-semibold transition-all duration-200 border-2 border-white"
              >
                Get Involved Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-primary-custom/90 to-secondary-custom/90">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-custom/90 to-secondary-custom/80" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Building a <span className="text-accent-custom">Self-Reliant</span> Generation
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Empowering youth and families in Malawi through coaching, community outreach, 
            and mindset transformation to nurture future-ready leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-accent-custom hover:bg-accent-custom/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Get Involved Today
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-custom px-8 py-4 text-lg font-semibold transition-all duration-200"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

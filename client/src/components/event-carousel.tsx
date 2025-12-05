import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import youthCoachingImg from "@assets/generated_images/youth_coaching_session_event.png";
import familyMentorshipImg from "@assets/generated_images/family_mentorship_program_event.png";
import leadershipTrainingImg from "@assets/generated_images/leadership_training_workshop_event.png";
import communityOutreachImg from "@assets/generated_images/community_outreach_activity_event.png";
import successCelebrationImg from "@assets/generated_images/success_celebration_event.png";

const carouselImages = [
  {
    src: youthCoachingImg,
    title: "Youth Coaching Sessions",
    description: "Empowering the next generation"
  },
  {
    src: familyMentorshipImg,
    title: "Family Mentorship Programs",
    description: "Strengthening family bonds"
  },
  {
    src: leadershipTrainingImg,
    title: "Leadership Training",
    description: "Building future leaders"
  },
  {
    src: communityOutreachImg,
    title: "Community Outreach",
    description: "Creating lasting impact"
  },
  {
    src: successCelebrationImg,
    title: "Celebrating Success",
    description: "Honoring achievements"
  }
];

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="bg-neutral-custom-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-custom-900 mb-2">
            Our Impact in Action
          </h2>
          <p className="text-lg text-neutral-custom-900">
            Transforming lives across Malawi through our programs and community initiatives
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 card-overlay flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-shadow-md">
                {carouselImages[currentIndex].title}
              </h3>
              <p className="text-white/95 text-lg text-shadow-md">
                {carouselImages[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-neutral-custom-900 rounded-full w-12 h-12 md:w-14 md:h-14"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </Button>

          <Button
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-neutral-custom-900 rounded-full w-12 h-12 md:w-14 md:h-14"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-custom w-8"
                    : "bg-neutral-custom-300 hover:bg-neutral-custom-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Status */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="text-sm text-neutral-custom-900 hover:text-primary-custom transition-colors"
            >
              {isAutoplay ? "⏸ Autoplay ON" : "▶ Autoplay OFF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

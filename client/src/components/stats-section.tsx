import { useEffect, useState, useRef } from "react";
import type { Stats } from "@/lib/types";

const stats: Stats = {
  youthReached: "2,500+",
  familiesSupported: "850+",
  programsLaunched: "15",
  communitiesServed: "25+"
};

export default function StatsSection() {
  const [animatedStats, setAnimatedStats] = useState({
    youthReached: "0",
    familiesSupported: "0", 
    programsLaunched: "0",
    communitiesServed: "0"
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const targets = [
      { key: "youthReached", value: 2500, suffix: "+" },
      { key: "familiesSupported", value: 850, suffix: "+" },
      { key: "programsLaunched", value: 15, suffix: "" },
      { key: "communitiesServed", value: 25, suffix: "+" }
    ];

    targets.forEach(({ key, value, suffix }) => {
      let currentValue = 0;
      const increment = value / 50;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
          currentValue = value;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(currentValue).toLocaleString() + suffix
        }));
      }, 40);
    });
  };

  return (
    <div ref={sectionRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="stat-item">
            <div className="text-4xl font-bold text-primary-custom mb-2">
              {animatedStats.youthReached}
            </div>
            <div className="text-neutral-custom-900 font-medium">Youth Reached</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-bold text-secondary-custom mb-2">
              {animatedStats.familiesSupported}
            </div>
            <div className="text-neutral-custom-900 font-medium">Families Supported</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-bold text-accent-custom mb-2">
              {animatedStats.programsLaunched}
            </div>
            <div className="text-neutral-custom-900 font-medium">Programs Launched</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-bold text-primary-custom mb-2">
              {animatedStats.communitiesServed}
            </div>
            <div className="text-neutral-custom-900 font-medium">Communities Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}

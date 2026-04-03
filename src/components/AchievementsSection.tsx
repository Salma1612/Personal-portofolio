import { Trophy } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const achievements = [
  "Top Performer – Infotact Solutions: Recognized for outstanding performance during Data Science & Machine Learning Internship",
];

const AchievementsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading"><span className="glow-text">Achievements</span></h2>
          <p className="section-subheading">Recognition & milestones</p>
        </div>
        <div className={`max-w-3xl mx-auto space-y-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {achievements.map((a, i) => (
            <div key={i} className="glass-card-hover p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Trophy size={18} className="text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium leading-relaxed">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

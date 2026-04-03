import { Award, Trophy } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const certs = [
  "IBM AI Certifications",
  "AWS Certifications (Ethnus)",
  "MATLAB Image Processing",
  "Power BI Certification",
];
const achievements = [
  "Microsoft Hackathon Participation",
  "Top Performer – Infotact Solutions",
];

const CertificationsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications & <span className="glow-text">Achievements</span></h2>
          <p className="section-subheading">Building credibility through continuous learning</p>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {certs.map((c, i) => (
            <div key={i} className="glass-card-hover p-5 flex items-center gap-3">
              <Award size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{c}</span>
            </div>
          ))}
          {achievements.map((a, i) => (
            <div key={i} className="glass-card-hover p-5 flex items-center gap-3 border-primary/30">
              <Trophy size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

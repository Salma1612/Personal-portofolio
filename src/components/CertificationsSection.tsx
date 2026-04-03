import { Award, ExternalLink, Trophy } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const certs = [
  { name: "IBM AI Certifications", link: "https://www.credly.com/users/shaik-salma1612" },
  { name: "AWS Certifications (Ethnus)", link: "https://www.linkedin.com/in/sksalma1612" },
  { name: "MATLAB Image Processing", link: "https://www.linkedin.com/in/sksalma1612" },
  { name: "Power BI Certification", link: "https://www.linkedin.com/in/sksalma1612" },
];

const achievements = [
  "Top Performer – Infotact Solutions: Recognized for outstanding performance during Data Science & Machine Learning Internship",
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
            <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex items-center gap-3 group">
              <Award size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium flex-1">{c.name}</span>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
          {achievements.map((a, i) => (
            <div key={i} className="glass-card-hover p-5 flex items-start gap-3 border-primary/30 sm:col-span-2 lg:col-span-3">
              <Trophy size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm font-medium">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

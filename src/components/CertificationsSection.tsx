import { Award, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const certs = [
  { name: "Journey to Cloud: Envisioning Your Solution", org: "IBM SkillsBuild", link: "https://www.credly.com/users/shaik-salma1612" },
  { name: "Getting Started with Artificial Intelligence", org: "IBM SkillsBuild", link: "https://www.credly.com/users/shaik-salma1612" },
  { name: "AWS Academy Graduate - Cloud Foundations", org: "Ethnus", link: "https://www.linkedin.com/in/sksalma1612" },
  { name: "AWS Academy Graduate - Cloud Architecting", org: "Ethnus", link: "https://www.linkedin.com/in/sksalma1612" },
  { name: "Image Processing Onramp", org: "MathWorks – MATLAB", link: "https://www.linkedin.com/in/sksalma1612" },
  { name: "Power BI for Data Analytics", org: "Skill Course", link: "https://www.linkedin.com/in/sksalma1612" },
];

const CertificationsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading"><span className="glow-text">Certifications</span></h2>
          <p className="section-subheading">Building credibility through continuous learning</p>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {certs.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex items-start gap-3 group">
              <Award size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-foreground text-sm font-medium block">{c.name}</span>
                <span className="text-muted-foreground text-xs">{c.org}</span>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

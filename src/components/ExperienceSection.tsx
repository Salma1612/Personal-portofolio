import { Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "Infotact Solutions",
    role: "Data Associate L1 Intern",
    duration: "Dec 2025 – Feb 2026",
    points: [
      "IoT Predictive Maintenance: Achieved 97.2% accuracy using XGBoost with real-time sensor data and SHAP explainability.",
      "Visual Quality Control: Implemented MobileNetV2 & ResNet50 with Grad-CAM explainability, reaching 92.49% accuracy.",
    ],
  },
  {
    company: "SmartBridge",
    role: "Generative AI Intern",
    duration: "Jun – Jul 2025",
    points: [
      "Built an AI Email Generator using GPT-Neo, reducing manual effort by 35–40%.",
      "Improved response time by 30% and reduced errors by 25%.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work <span className="glow-text">Experience</span></h2>
          <p className="section-subheading">Real-world impact through AI</p>
        </div>
        <div className={`max-w-3xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30 ml-4">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Briefcase size={10} className="text-primary" />
              </div>
              <div className="glass-card-hover p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading font-semibold text-foreground">{exp.company}</h3>
                  <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

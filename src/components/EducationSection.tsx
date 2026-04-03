import { GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const education = [
  { degree: "B.Tech CSE (AI & ML)", school: "VIT-AP University", detail: "CGPA: 8.7" },
  { degree: "Intermediate", school: "NRI Junior College", detail: "94.7%" },
  { degree: "SSC", school: "Sresta High School", detail: "98.5%" },
];

const EducationSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading"><span className="glow-text">Education</span></h2>
          <p className="section-subheading">Academic background</p>
        </div>
        <div className={`max-w-2xl mx-auto space-y-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {education.map((e, i) => (
            <div key={i} className="glass-card-hover p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{e.degree}</h3>
                <p className="text-muted-foreground text-sm">{e.school}</p>
                {e.detail && <p className="text-primary text-sm mt-1">{e.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { Code2, Brain, Library, Wrench, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = [
  { icon: Code2, title: "Programming", skills: ["Python", "Java"] },
  { icon: Brain, title: "AI/ML", skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "NLP", "GenAI", "Explainable AI"] },
  { icon: Library, title: "Libraries", skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask"] },
  { icon: Wrench, title: "Tools", skills: ["GitHub", "Jupyter", "Colab", "VS Code"] },
  { icon: Globe, title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical <span className="glow-text">Skills</span></h2>
          <p className="section-subheading">Technologies I work with</p>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {categories.map((cat, i) => (
            <div key={i} className="glass-card-hover p-6" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="text-primary" size={24} />
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { Brain, Cpu, Database, Server } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import aboutPhoto from "@/assets/about-photo.png";

const highlights = [
  { icon: Brain, label: "AI/ML Specialization", desc: "Deep learning, NLP & Explainable AI" },
  { icon: Cpu, label: "ML Pipelines", desc: "End-to-end model development & deployment" },
  { icon: Database, label: "Data Engineering", desc: "Data preprocessing & feature engineering" },
  { icon: Server, label: "CS Fundamentals", desc: "DSA, OS, CN, SQL" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About <span className="glow-text">Me</span></h2>
          <p className="section-subheading">Passionate about building intelligent systems</p>
        </div>
        <div className={`grid md:grid-cols-2 gap-12 items-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img src={aboutPhoto} alt="Shaik Salma" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -inset-2 rounded-2xl border border-primary/10 -z-10" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground text-2xl mb-4">Hello! I'm <span className="text-primary">Shaik Salma</span></h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at VIT-AP University. My expertise spans building robust ML pipelines, deploying deep learning models, and implementing Explainable AI techniques like SHAP and Grad-CAM.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With hands-on experience from internships at Infotact Solutions and SmartBridge, I've developed production-grade systems including IoT predictive maintenance, visual quality control, and generative AI applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My areas of interest include <span className="text-primary font-medium">Machine Learning</span>, <span className="text-primary font-medium">Deep Learning</span>, <span className="text-primary font-medium">Natural Language Processing</span>, <span className="text-primary font-medium">Data Science</span>, and <span className="text-primary font-medium">Explainable AI</span>.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card-hover p-4 text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                  <h.icon className="mx-auto mb-2 text-primary" size={24} />
                  <h4 className="font-semibold text-foreground text-xs mb-1">{h.label}</h4>
                  <p className="text-muted-foreground text-xs">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

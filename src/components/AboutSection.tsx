import { Brain, Cpu, Database, Server } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at VIT-AP University. My expertise spans building robust ML pipelines, deploying deep learning models, and implementing Explainable AI techniques like SHAP and Grad-CAM.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience from internships at Infotact Solutions and SmartBridge, I've developed production-grade systems including IoT predictive maintenance, visual quality control, and generative AI applications. I combine strong CS fundamentals in Data Structures, Operating Systems, Computer Networks, and SQL with cutting-edge AI research.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="glass-card-hover p-5 text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <h.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="font-semibold text-foreground text-sm mb-1">{h.label}</h3>
                <p className="text-muted-foreground text-xs">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

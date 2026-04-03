import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectCancer from "@/assets/project-cancer.jpg";
import projectHeart from "@/assets/project-heart.jpg";

const projects = [
  {
    title: "AI Healthcare Chatbot",
    desc: "RAG-based system that generates context-aware medical responses using advanced retrieval and generation techniques.",
    tech: ["Mistral LLM", "LangChain", "FAISS", "Python"],
    link: "https://github.com/Salma1612/AI-HEALTHCARE-CHATBOT",
    image: projectHealthcare,
  },
  {
    title: "Breast Cancer Prediction",
    desc: "MLP-based deep learning model achieving 97.2% accuracy and 0.98 AUC for early breast cancer detection.",
    tech: ["Deep Learning", "MLP", "Scikit-learn", "Python"],
    link: "https://github.com/Salma1612/Breast-Cancer-Detection",
    image: projectCancer,
  },
  {
    title: "Heart Disease Prediction",
    desc: "Full ML pipeline for heart disease risk assessment with comprehensive feature engineering, achieving 85% accuracy.",
    tech: ["ML Pipeline", "Pandas", "Scikit-learn", "Python"],
    link: "https://github.com/Salma1612/Heart-Disease-Prediction",
    image: projectHeart,
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured <span className="glow-text">Projects</span></h2>
          <p className="section-subheading">Showcasing impactful AI solutions</p>
        </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {projects.map((p, i) => (
            <div key={i} className="glass-card-hover flex flex-col group overflow-hidden" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="h-44 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={960} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4 w-full inline-flex items-center justify-center gap-2">
                  <Github size={16} /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

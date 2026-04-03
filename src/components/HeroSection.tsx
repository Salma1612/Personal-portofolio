import { useState, useEffect } from "react";
import { ArrowDown, Download, Brain, Cpu, Database, Code, BarChart3, Cog } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["AI Engineer", "Data Scientist", "ML Developer"];

const floatingIcons = [
  { icon: Brain, top: "10%", right: "5%", delay: "0s", size: 22 },
  { icon: Cpu, top: "25%", right: "-5%", delay: "1s", size: 20 },
  { icon: Database, top: "55%", right: "-8%", delay: "2s", size: 18 },
  { icon: Code, top: "75%", right: "0%", delay: "0.5s", size: 20 },
  { icon: BarChart3, top: "15%", right: "35%", delay: "1.5s", size: 18 },
  { icon: Cog, top: "70%", right: "35%", delay: "2.5s", size: 16 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Shaik Salma
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 h-9">
            <span className="text-primary">{text}</span>
            <span className="border-r-2 border-primary ml-1 animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-2 leading-relaxed">
            Building Intelligent Systems with Python & ML
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-sm">
            Computer Science undergraduate specializing in AI & ML with experience in building real-world machine learning and deep learning systems.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-6">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="https://drive.google.com/file/d/1KwcCioAlwYvhYjDA__3yCt31LaVtWI0i/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 animate-fade-in relative" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border border-2 animate-glow-pulse">
              <img src={profileImg} alt="Shaik Salma" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "15s" }} />
          </div>
          {/* Floating skill icons */}
          {floatingIcons.map((item, i) => (
            <div
              key={i}
              className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-card/60 backdrop-blur border border-primary/20 flex items-center justify-center shadow-lg animate-float"
              style={{
                top: item.top,
                right: item.right,
                animationDelay: item.delay,
                animationDuration: "3s",
              }}
            >
              <item.icon size={item.size} className="text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

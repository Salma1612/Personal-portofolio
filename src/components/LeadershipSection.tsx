import { Users, Lightbulb } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const activities = [
  { icon: Users, title: "CSI Club", desc: "Core & Marketing Team – organized events and drove student engagement." },
  { icon: Lightbulb, title: "Entrepreneurship Club", desc: "Wadhwani Ignite Project – developed entrepreneurial and innovation skills." },
];

const LeadershipSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="leadership" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Leadership & <span className="glow-text">Activities</span></h2>
        </div>
        <div className={`grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {activities.map((a, i) => (
            <div key={i} className="glass-card-hover p-6 text-center">
              <a.icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

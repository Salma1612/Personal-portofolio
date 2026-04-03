import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Mail, label: "salma.shaik1612@gmail.com", href: "mailto:salma.shaik1612@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sksalma1612" },
    { icon: Github, label: "GitHub", href: "https://github.com/Salma1612" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In <span className="glow-text">Touch</span></h2>
          <p className="section-subheading">Let's build something amazing together</p>
        </div>
        <div className={`grid md:grid-cols-2 gap-12 max-w-4xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div>
            <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Connect with me</h3>
            <p className="text-muted-foreground text-sm mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="glass-card-hover p-4 flex items-center gap-3 group">
                  <s.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-foreground text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-4">
            <input type="text" placeholder="Your Name"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card/40 backdrop-blur border border-primary/15 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
            <input type="email" placeholder="Your Email"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card/40 backdrop-blur border border-primary/15 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
            <textarea placeholder="Your Message" rows={4}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card/40 backdrop-blur border border-primary/15 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" />
            <button type="submit" className="btn-primary inline-flex items-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

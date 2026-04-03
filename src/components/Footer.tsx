import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-primary/10">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-heading font-semibold text-foreground">Shaik Salma</p>
      </div>
      <div className="flex gap-4">
        {[
          { icon: Mail, href: "mailto:salma.shaik1612@gmail.com" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/sksalma1612" },
          { icon: Github, href: "https://github.com/Salma1612" },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

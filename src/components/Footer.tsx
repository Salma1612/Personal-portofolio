import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-primary/10">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-heading font-semibold text-foreground">Shaik Salma</p>
        <p className="text-muted-foreground text-xs">Built with AI & Passion</p>
      </div>
      <div className="flex gap-4">
        {[
          { icon: Mail, href: "mailto:salma.shaik1612@gmail.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
          { icon: Github, href: "https://github.com" },
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

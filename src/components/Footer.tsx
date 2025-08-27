import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Portfólio", path: "/portfolio" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <img
              src="/lovable-uploads/logo.png"
              alt="Lumen Web"
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lumen Web. Todos os direitos reservados.
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Media Placeholders */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Siga-nos nas redes sociais: <a href="https://www.instagram.com/lumensweb/" target="_blank">Instagram</a> | <a href="https://www.linkedin.com/in/gustavsant/" target="_blank">LinkedIn</a> | <a href="https://www.facebook.com/people/Lumens-Web/61579709764506/" target="_blank">Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
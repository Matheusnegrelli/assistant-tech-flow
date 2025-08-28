import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/4fea8bfb-5eb8-41dd-a1f2-9c40be9dae24.png" 
                alt="Assistant Tecno" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-gradient">Assistant Tecno</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Soluções tecnológicas inovadoras para impulsionar seu negócio com eficiência e segurança.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Rua Edmilson Coutinho, Nº 27, São Silvano</p>
              <p>Telefone: (27) 3121-9410</p>
              <p>Email: contato@assistant.com.br</p>
              <p>Seg-Sex: 8h às 17:30h</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Assistant Tecno. Todos os direitos reservados.</p>
          <p className="mt-2">Site responsivo desenvolvido com tecnologias modernas.</p>
        </div>
      </div>
    </footer>
  );
}
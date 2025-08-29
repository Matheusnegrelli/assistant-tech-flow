import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleWhatsApp = () => {
    window.open("https://wa.me/552731219410?text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.", "_blank");
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4fea8bfb-5eb8-41dd-a1f2-9c40be9dae24.png" 
              alt="Assistant Tecno" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gradient">Assistant Tecno</span>
              <span className="text-xs text-muted-foreground">Soluções em TI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsApp}
              className="btn-hero"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={handleWhatsApp}
                className="btn-hero w-full mt-4"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
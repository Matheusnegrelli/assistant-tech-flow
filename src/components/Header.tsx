import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/552731219410?text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.", "_blank");
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4fea8bfb-5eb8-41dd-a1f2-9c40be9dae24.png" 
              alt="Assistant Tecno" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gradient">Assistant Tecno</span>
              <span className="text-xs text-muted-foreground">Soluções em TI</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div>
            <Button 
              onClick={handleWhatsApp}
              className="btn-hero"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
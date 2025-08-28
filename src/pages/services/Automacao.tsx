import { ArrowLeft, Home, Mic, Lightbulb, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Automacao() {
  const features = [
    {
      icon: Home,
      title: "Cenários Inteligentes",
      description: "Configure cenários personalizados que ativam múltiplos dispositivos com um só comando."
    },
    {
      icon: Smartphone,
      title: "Rotinas Domésticas",
      description: "Automatize tarefas do dia a dia como iluminação, climatização e segurança."
    },
    {
      icon: Mic,
      title: "Controle por Voz",
      description: "Integração com assistentes virtuais para controle total por comandos de voz."
    },
    {
      icon: Lightbulb,
      title: "Iluminação Inteligente",
      description: "Sistema de iluminação automatizada com controle de intensidade e cores."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link to="/servicos" className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos serviços
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-6xl mb-6">🏠</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Automação (IoT)</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transforme sua casa ou empresa em um ambiente inteligente e conectado, 
              onde todos os dispositivos trabalham em harmonia para proporcionar 
              conforto, segurança e eficiência energética.
            </p>
            <a href="/contato" className="btn-hero">
              Solicitar Orçamento
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Benefícios</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Economia de energia de até 30%</li>
                <li>• Maior segurança e monitoramento</li>
                <li>• Conforto e praticidade no dia a dia</li>
                <li>• Controle remoto via smartphone</li>
                <li>• Valorização do imóvel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="service-card text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
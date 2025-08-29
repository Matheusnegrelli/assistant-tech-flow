import { ArrowLeft, Cable, Router, Shield, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

export default function Redes() {
  const services = [
    {
      icon: Cable,
      title: "Cabeamento Estruturado",
      description: "Instalação de infraestrutura de rede com padrões internacionais para máxima performance e confiabilidade."
    },
    {
      icon: Router,
      title: "Configuração de Equipamentos",
      description: "Setup e otimização de switches, roteadores, access points e demais equipamentos de rede."
    },
    {
      icon: Shield,
      title: "Firewalls e Segurança",
      description: "Implementação de soluções de segurança perimetral para proteção contra ameaças externas."
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link to="/servicos" className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos serviços
        </Link>

        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🌐</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Redes Corporativas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Infraestrutura de rede robusta e segura para conectar sua empresa ao futuro digital, 
            garantindo alta performance e disponibilidade para todos os seus processos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Soluções Completas</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Projeto e Instalação</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desenvolvimento de projetos personalizados de rede seguindo normas técnicas 
                  e melhores práticas do mercado.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Redes Wi-Fi Corporativas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Implementação de redes sem fio seguras e de alta performance com 
                  gerenciamento centralizado.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Segmentação de Rede</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Criação de VLANs e segmentação lógica para melhorar segurança 
                  e performance da rede.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Redundância e Backup</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Implementação de sistemas redundantes para garantir alta 
                  disponibilidade da infraestrutura.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Vantagens</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Performance otimizada da rede</li>
                <li>• Segurança avançada contra ameaças</li>
                <li>• Escalabilidade para crescimento futuro</li>
                <li>• Redução de downtime</li>
                <li>• Facilidade de gerenciamento</li>
                <li>• Conformidade com padrões técnicos</li>
                <li>• Suporte técnico especializado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Precisa de uma rede corporativa robusta?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada em redes pode projetar e implementar 
              a infraestrutura ideal para sua empresa, garantindo performance 
              e segurança em todos os níveis.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Solicitar Projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
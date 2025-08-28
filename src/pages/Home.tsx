import { ArrowRight, Shield, Zap, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const handleRequestQuote = () => {
    window.location.href = "/contato";
  };

  const services = [
    {
      id: "automacao",
      icon: "🏠",
      title: "Automação (IoT)",
      description: "Cenários inteligentes, rotinas domésticas e controle por voz para sua casa ou empresa.",
      href: "/servicos/automacao"
    },
    {
      id: "certificado-digital",
      icon: "🔐",
      title: "Certificado Digital",
      description: "e-CPF e e-CNPJ (A1 e A3) para autenticação digital segura.",
      href: "/servicos/certificado-digital"
    },
    {
      id: "consultoria",
      icon: "💡",
      title: "Consultoria em TI",
      description: "Diagnóstico, PDTI, segurança da informação e gestão de projetos.",
      href: "/servicos/consultoria"
    },
    {
      id: "redes",
      icon: "🌐",
      title: "Redes Corporativas",
      description: "Cabeamento estruturado, configuração de equipamentos e monitoramento.",
      href: "/servicos/redes"
    },
    {
      id: "suporte",
      icon: "🛠️",
      title: "Suporte Técnico",
      description: "Help Desk remoto/presencial, manutenção preventiva e corretiva.",
      href: "/servicos/suporte"
    },
    {
      id: "telefonia",
      icon: "📞",
      title: "Telefonia IP (VoIP)",
      description: "Redução de custos, ramais móveis, URA e gravação de chamadas.",
      href: "/servicos/telefonia"
    },
    {
      id: "virtualizacao",
      icon: "☁️",
      title: "Virtualização de Servidores",
      description: "Consolidação, economia, recuperação de desastres e centralização.",
      href: "/servicos/virtualizacao"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Soluções seguras e confiáveis para proteger seus dados"
    },
    {
      icon: Zap,
      title: "Eficiência",
      description: "Otimização de processos para máxima produtividade"
    },
    {
      icon: Users,
      title: "Suporte",
      description: "Atendimento especializado quando você precisar"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background-alt to-background py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Soluções tecnológicas</span><br />
              <span className="text-foreground">inovadoras para impulsionar</span><br />
              <span className="text-gradient-accent">seu negócio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              com eficiência e segurança
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRequestQuote} className="btn-hero">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/servicos">
                <Button variant="outline" className="btn-outline-tech">
                  Conheça nossos serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center tech-glow">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">Nossos Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em TI para impulsionar o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-gradient">Por que escolher</span><br />
                <span className="text-foreground">a Assistant Tecno?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Foco no Cliente</h3>
                    <p className="text-muted-foreground">Priorizamos as necessidades específicas de cada cliente.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Excelência Técnica</h3>
                    <p className="text-muted-foreground">Profissionais qualificados e atualizados com as últimas tecnologias.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Inovação</h3>
                    <p className="text-muted-foreground">Sempre em busca das melhores soluções tecnológicas do mercado.</p>
                  </div>
                </div>
              </div>
              <Link to="/sobre" className="inline-block mt-8">
                <Button className="btn-outline-tech">
                  Saiba mais sobre nós
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 tech-glow">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções tecnológicas inovadoras e personalizadas, 
                  ajudando empresas a alcançar seus objetivos através da tecnologia 
                  da informação com excelência, segurança e eficiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
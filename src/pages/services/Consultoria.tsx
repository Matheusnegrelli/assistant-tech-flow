import { ArrowLeft, Search, FileText, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consultoria() {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico de TI",
      description: "Análise completa da infraestrutura tecnológica atual, identificando pontos de melhoria e oportunidades de otimização."
    },
    {
      icon: FileText,
      title: "PDTI - Plano Diretor de TI",
      description: "Elaboração de planos estratégicos de tecnologia alinhados aos objetivos de negócio da organização."
    },
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Implementação de políticas e procedimentos para proteção de dados e sistemas críticos da empresa."
    },
    {
      icon: Settings,
      title: "Gestão de Projetos",
      description: "Coordenação e execução de projetos de TI com metodologias ágeis e melhores práticas do mercado."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link to="/servicos" className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos serviços
        </Link>

        <div className="text-center mb-16">
          <div className="text-6xl mb-6">💡</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Consultoria em TI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Orientação estratégica especializada para maximizar o potencial tecnológico 
            da sua empresa, com foco em eficiência, segurança e crescimento sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Nossa Metodologia</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base lg:text-lg">Análise Inicial</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">Mapeamento completo do ambiente tecnológico atual</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base lg:text-lg">Diagnóstico</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">Identificação de gargalos, vulnerabilidades e oportunidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base lg:text-lg">Planejamento</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">Elaboração de estratégias e cronograma de implementação</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base lg:text-lg">Execução</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">Implementação das soluções com acompanhamento contínuo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Benefícios</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Otimização de custos com TI</li>
                <li>• Melhoria da segurança da informação</li>
                <li>• Aumento da produtividade</li>
                <li>• Alinhamento estratégico com o negócio</li>
                <li>• Redução de riscos operacionais</li>
                <li>• Planejamento de investimentos em tecnologia</li>
                <li>• Conformidade com regulamentações</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Precisa de uma consultoria especializada?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe de consultores especializados está pronta para analisar 
              sua infraestrutura de TI e propor soluções personalizadas para seu negócio.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Solicitar Consultoria
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ArrowLeft, Headphones, Wrench, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Suporte() {
  const services = [
    {
      icon: Headphones,
      title: "Help Desk",
      description: "Atendimento especializado remoto e presencial para resolução rápida de problemas técnicos."
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Programas de manutenção regular para evitar problemas e garantir performance otimizada."
    },
    {
      icon: Server,
      title: "Gestão de Servidores",
      description: "Administração e monitoramento de servidores para máxima disponibilidade e segurança."
    },
    {
      icon: Shield,
      title: "Proteção Antivírus",
      description: "Implementação e gerenciamento de soluções de segurança endpoint para proteção completa."
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
          <div className="text-6xl mb-6">🛠️</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Suporte Técnico</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Suporte técnico especializado e confiável para manter sua infraestrutura 
            de TI funcionando de forma otimizada, com atendimento ágil e soluções eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            <h2 className="text-3xl font-bold mb-6 text-gradient">Modalidades de Atendimento</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Suporte Remoto</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Acesso remoto seguro aos sistemas</li>
                  <li>• Resolução rápida de problemas de software</li>
                  <li>• Configuração e atualização de aplicativos</li>
                  <li>• Monitoramento proativo</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Suporte Presencial</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Instalação e configuração de equipamentos</li>
                  <li>• Manutenção de hardware</li>
                  <li>• Treinamento de usuários</li>
                  <li>• Diagnóstico físico de problemas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Vantagens</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Redução de downtime</li>
                <li>• Maior produtividade da equipe</li>
                <li>• Segurança aprimorada</li>
                <li>• Economia de custos operacionais</li>
                <li>• Foco no core business</li>
                <li>• Expertise especializada</li>
                <li>• Atendimento personalizado</li>
                <li>• Soluções sob medida</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Precisa de suporte técnico confiável?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe de suporte está pronta para atender suas necessidades 
              com agilidade e eficiência. Escolha o plano ideal para sua empresa.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Contratar Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
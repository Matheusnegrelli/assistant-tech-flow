import { ArrowLeft, Cloud, DollarSign, Shield, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function Virtualizacao() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Economia de Recursos",
      description: "Redução de até 70% nos custos de hardware e energia elétrica através da consolidação de servidores."
    },
    {
      icon: Shield,
      title: "Recuperação de Desastres",
      description: "Backup automático e recuperação rápida de sistemas em caso de falhas ou desastres."
    },
    {
      icon: Cloud,
      title: "Escalabilidade",
      description: "Aumente ou diminua recursos computacionais conforme a demanda, sem interrupções."
    },
    {
      icon: Server,
      title: "Gestão Centralizada",
      description: "Administre todos os servidores virtuais a partir de uma única interface de gerenciamento."
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
          <div className="text-6xl mb-6">☁️</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Virtualização de Servidores</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Otimize sua infraestrutura de TI com virtualização de servidores, 
            reduzindo custos operacionais e aumentando a eficiência e flexibilidade dos seus sistemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="service-card text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Tecnologias Utilizadas</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">VMware vSphere</h3>
                <p className="text-muted-foreground text-sm">
                  Plataforma líder de virtualização empresarial com recursos avançados 
                  de alta disponibilidade e gerenciamento.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Microsoft Hyper-V</h3>
                <p className="text-muted-foreground text-sm">
                  Solução de virtualização nativa do Windows Server com excelente 
                  integração ao ecossistema Microsoft.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Proxmox VE</h3>
                <p className="text-muted-foreground text-sm">
                  Plataforma open-source robusta para virtualização com interface 
                  web intuitiva e recursos empresariais.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Principais Recursos</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Consolidação de múltiplos servidores físicos</li>
                <li>• Snapshots para backup instantâneo</li>
                <li>• Migração de VMs sem downtime</li>
                <li>• Balanceamento automático de carga</li>
                <li>• Monitoramento em tempo real</li>
                <li>• Políticas de segurança granulares</li>
                <li>• Clonagem rápida de ambientes</li>
                <li>• Templates personalizados</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Processo de Virtualização</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Avaliação</h3>
              <p className="text-muted-foreground text-sm">Análise da infraestrutura atual</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Planejamento</h3>
              <p className="text-muted-foreground text-sm">Projeto de virtualização personalizado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Implementação</h3>
              <p className="text-muted-foreground text-sm">Migração gradual dos sistemas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Otimização</h3>
              <p className="text-muted-foreground text-sm">Ajustes finos e treinamento</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Pronto para virtualizar sua infraestrutura?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada pode ajudar você a implementar uma solução 
              de virtualização que atenda perfeitamente às necessidades da sua empresa.
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
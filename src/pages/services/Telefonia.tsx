import { ArrowLeft, Phone, DollarSign, Smartphone, Mic } from "lucide-react";
import { Link } from "react-router-dom";

export default function Telefonia() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Economia de até 60% na conta telefônica com tarifas mais baixas e ligações gratuitas entre ramais."
    },
    {
      icon: Smartphone,
      title: "Ramais Móveis",
      description: "Acesse seu ramal de qualquer lugar do mundo através de aplicativo móvel ou softphone."
    },
    {
      icon: Mic,
      title: "URA Inteligente",
      description: "Sistema de atendimento automático para direcionar chamadas e melhorar a experiência do cliente."
    },
    {
      icon: Phone,
      title: "Gravação de Chamadas",
      description: "Grave e armazene chamadas importantes para treinamento, qualidade e compliance."
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
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Telefonia IP (VoIP)</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Modernize sua comunicação empresarial com telefonia IP de alta qualidade, 
            reduzindo custos e aumentando a produtividade da sua equipe.
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
            <h2 className="text-3xl font-bold mb-6 text-gradient">Recursos Avançados</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Transferência de Chamadas</h3>
                  <p className="text-muted-foreground text-sm">Transfira chamadas facilmente entre ramais e departamentos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Conferência</h3>
                  <p className="text-muted-foreground text-sm">Realize conferências com múltiplos participantes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Caixa Postal</h3>
                  <p className="text-muted-foreground text-sm">Receba mensagens por e-mail quando não atender</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Discagem Automática</h3>
                  <p className="text-muted-foreground text-sm">Agende e realize chamadas automaticamente</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Relatórios Detalhados</h3>
                  <p className="text-muted-foreground text-sm">Analise dados de chamadas e performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Vantagens do VoIP</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Redução drástica de custos telefônicos</li>
                <li>• Escalabilidade ilimitada de ramais</li>
                <li>• Mobilidade total da equipe</li>
                <li>• Integração com sistemas CRM</li>
                <li>• Qualidade HD de áudio</li>
                <li>• Manutenção simplificada</li>
                <li>• Recursos avançados inclusos</li>
                <li>• Facilidade de gerenciamento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Como Funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Análise</h3>
              <p className="text-muted-foreground text-sm">Avaliamos sua necessidade atual de telefonia</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Instalação</h3>
              <p className="text-muted-foreground text-sm">Configuramos todo o sistema de telefonia IP</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Treinamento</h3>
              <p className="text-muted-foreground text-sm">Capacitamos sua equipe para usar todos os recursos</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Pronto para modernizar sua telefonia?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como a telefonia IP 
              pode transformar a comunicação da sua empresa.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Solicitar Demonstração
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
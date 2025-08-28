import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      id: "automacao",
      icon: "🏠",
      title: "Automação (IoT)",
      description: "Transforme sua casa ou empresa em um ambiente inteligente com cenários automatizados, controle por voz e dispositivos conectados.",
      href: "/servicos/automacao"
    },
    {
      id: "certificado-digital",
      icon: "🔐",
      title: "Certificado Digital",
      description: "e-CPF e e-CNPJ (A1 e A3) para autenticação digital segura em documentos e transações eletrônicas.",
      href: "/servicos/certificado-digital"
    },
    {
      id: "consultoria",
      icon: "💡",
      title: "Consultoria em TI",
      description: "Diagnóstico completo, elaboração de PDTI, implementação de políticas de segurança e gestão estratégica de projetos.",
      href: "/servicos/consultoria"
    },
    {
      id: "redes",
      icon: "🌐",
      title: "Redes Corporativas",
      description: "Cabeamento estruturado, configuração de equipamentos, implementação de firewalls e monitoramento contínuo.",
      href: "/servicos/redes"
    },
    {
      id: "suporte",
      icon: "🛠️",
      title: "Suporte Técnico",
      description: "Help Desk especializado remoto e presencial, manutenção preventiva, gestão de servidores e proteção antivírus.",
      href: "/servicos/suporte"
    },
    {
      id: "telefonia",
      icon: "📞",
      title: "Telefonia IP (VoIP)",
      description: "Redução significativa de custos, ramais móveis, URA inteligente, gravação de chamadas e escalabilidade.",
      href: "/servicos/telefonia"
    },
    {
      id: "virtualizacao",
      icon: "☁️",
      title: "Virtualização de Servidores",
      description: "Consolidação de infraestrutura, economia de recursos, recuperação de desastres e gestão centralizada.",
      href: "/servicos/virtualizacao"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Nossos Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de soluções em tecnologia da informação, 
            projetadas para atender às necessidades específicas do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Precisa de uma solução personalizada?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para desenvolver soluções sob medida para seu negócio.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
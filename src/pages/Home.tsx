import { ArrowRight, Shield, Zap, Users, Target, MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleRequestQuote = () => {
    window.location.href = "/contato";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    console.log('=== FORM SUBMISSION STARTED ===');
    console.log('Form submitted with data:', { name, email, phone, message });

    try {
      // Validate required fields
      if (!name || !email || !message) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        return;
      }

      console.log('=== VALIDATION PASSED ===');
      
      // Send email using EmailJS
      console.log('Sending email via EmailJS...');
      const emailResult = await sendEmail({
        from_name: name,
        from_email: email,
        phone: phone || '',
        message: message
      });

      if (emailResult.success) {
        console.log('Email sent successfully via EmailJS');
        toast({
          title: "Mensagem enviada!",
          description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
        });
        form.reset();
      } else {
        console.error('EmailJS error:', emailResult.error);
        toast({
          title: "Erro ao enviar email",
          description: "Ocorreu um erro ao enviar o email. Tente novamente ou entre em contato pelo WhatsApp.",
          variant: "destructive"
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gradient">
              Soluções tecnológicas<br />
              inovadoras para impulsionar<br />
              seu negócio
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

      {/* Contact Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-gradient">Entre em Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar você a encontrar as melhores soluções 
              tecnológicas para o seu negócio. Fale conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gradient">Informações de Contato</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Rua Edmilson Coutinho, Nº 27, São Silvano</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(27) 3121-9410</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@assistant.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário</h4>
                    <p className="text-muted-foreground">Seg-Sex: 8h às 17:30h</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <h4 className="text-xl font-semibold mb-4 text-gradient">Fale conosco pelo WhatsApp</h4>
                <p className="text-muted-foreground mb-6">
                  Para um atendimento mais rápido, entre em contato diretamente pelo WhatsApp.
                </p>
                <Button onClick={() => window.open("https://wa.me/552731219410?text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.", "_blank")} className="btn-hero w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="service-card">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Envie sua Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(27) 99999-9999"
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Descreva como podemos ajudar você..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical disabled:opacity-50"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
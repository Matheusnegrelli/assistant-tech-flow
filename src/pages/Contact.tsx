import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    
    try {
      // Save to database
      console.log('Saving to database...');
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message
          }
        ]);

      if (dbError) {
        console.error('Error saving to database:', dbError);
        toast({
          title: "Erro no banco",
          description: "Erro ao salvar no banco de dados",
          variant: "destructive"
        });
        return;
      } else {
        console.log('Successfully saved to database');
      }

      // Send email
      console.log('Invoking edge function...');
      const { data, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      });

      console.log('Edge function response:', { data, emailError });

      if (emailError) {
        console.error('Error sending email:', emailError);
        toast({
          title: "Mensagem salva!",
          description: "Sua mensagem foi salva, mas houve um problema no envio do email. Entraremos em contato em breve.",
        });
      } else {
        console.log('Email sent successfully:', data);
        toast({
          title: "Mensagem enviada!",
          description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
        });
      }
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/552731219410?text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Edmilson Coutinho, Nº 27, São Silvano"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(27) 3121-9410"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@assistant.com.br"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 8h às 17:30h"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Entre em Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar você a encontrar as melhores soluções 
            tecnológicas para o seu negócio. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gradient">Informações de Contato</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Fale conosco pelo WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Para um atendimento mais rápido, entre em contato diretamente pelo WhatsApp.
              </p>
              <Button onClick={handleWhatsApp} className="btn-hero w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="service-card">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(27) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Descreva como podemos ajudar você..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está preparada para oferecer as melhores soluções em 
              tecnologia da informação. Entre em contato e descubra como podemos 
              impulsionar o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsApp} className="btn-hero">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <a href="tel:+552731219410">
                <Button variant="outline" className="btn-outline-tech">
                  <Phone className="w-5 h-5 mr-2" />
                  (27) 3121-9410
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Target, Users, Lightbulb, Handshake } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Priorizamos as necessidades específicas de cada cliente, oferecendo soluções personalizadas e atendimento diferenciado."
    },
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Nossa equipe é formada por profissionais qualificados e constantemente atualizados com as mais recentes tecnologias do mercado."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Estamos sempre em busca das melhores e mais inovadoras soluções tecnológicas para impulsionar o crescimento dos nossos clientes."
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros, atuando como verdadeiros parceiros no crescimento e sucesso dos nossos clientes."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Sobre a Assistant Tecno</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em soluções de tecnologia da informação, 
            comprometida em fornecer serviços de excelência que impulsionam o crescimento 
            e a eficiência dos nossos clientes.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="service-card text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4 text-gradient">Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer soluções tecnológicas inovadoras e personalizadas, ajudando 
              empresas a alcançar seus objetivos através da tecnologia da informação 
              com excelência, segurança e eficiência.
            </p>
          </div>

          <div className="service-card text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold mb-4 text-gradient">Visão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal referência em soluções de TI na região, 
              sendo a primeira escolha das empresas que buscam inovação, qualidade e 
              resultados consistentes em tecnologia.
            </p>
          </div>

          <div className="service-card text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-2xl font-bold mb-4 text-gradient">Objetivos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Expandir nosso portfólio de serviços, fortalecer parcerias estratégicas, 
              investir em capacitação contínua da equipe e manter a excelência no 
              atendimento e satisfação dos clientes.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="service-card text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Assistant Tecno nasceu da visão de profissionais experientes em TI que 
              identificaram a necessidade de oferecer soluções tecnológicas mais 
              personalizadas e eficientes para empresas de todos os portes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde nossa fundação, temos nos dedicado a compreender profundamente as 
              necessidades de cada cliente, desenvolvendo soluções que não apenas resolvem 
              problemas, mas impulsionam o crescimento e a competitividade dos negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, orgulhamo-nos de ser uma empresa que combina expertise técnica com 
              atendimento humanizado, construindo relacionamentos duradouros baseados 
              na confiança e nos resultados entregues.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Por que nos escolher?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Mais de 5 anos de experiência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Equipe certificada e qualificada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Atendimento 24/7 para urgências</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Soluções personalizadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Suporte técnico especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ArrowLeft, Shield, FileText, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function CertificadoDigital() {
  const types = [
    {
      type: "e-CPF A1",
      price: "R$ 120,00",
      validity: "1 ano"
    },
    {
      type: "e-CPF A3",
      price: "R$ 180,00",
      validity: "3 anos"
    },
    {
      type: "e-CNPJ A1",
      price: "R$ 280,00",
      validity: "1 ano"
    },
    {
      type: "e-CNPJ A3",
      price: "R$ 380,00",
      validity: "3 anos"
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
          <div className="text-6xl mb-6">🔐</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Certificado Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sua identidade digital para assinatura eletrônica de documentos, 
            acesso a sistemas governamentais e transações seguras na internet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gradient">O que é?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Certificado Digital é um documento eletrônico que funciona como uma 
              identidade digital, permitindo autenticação segura em sistemas 
              eletrônicos e assinatura digital de documentos com validade jurídica.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Segurança</h3>
                  <p className="text-sm text-muted-foreground">Criptografia avançada protege suas informações</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Validade Jurídica</h3>
                  <p className="text-sm text-muted-foreground">Mesma validade de uma assinatura no papel</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Agilidade</h3>
                  <p className="text-sm text-muted-foreground">Processos mais rápidos e eficientes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Credibilidade</h3>
                  <p className="text-sm text-muted-foreground">Reconhecido pelo governo brasileiro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Principais Usos</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Receita Federal (IRPF, CNPJ, etc.)</li>
                <li>• FGTS e INSS</li>
                <li>• Nota Fiscal Eletrônica</li>
                <li>• Licitações públicas</li>
                <li>• Assinatura de contratos</li>
                <li>• Procurações eletrônicas</li>
                <li>• Sistemas bancários</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Tabela de Preços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((item, index) => (
              <div key={index} className="service-card text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.type}</h3>
                <div className="text-3xl font-bold mb-2 text-gradient">{item.price}</div>
                <p className="text-sm text-muted-foreground mb-4">Validade: {item.validity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Precisa do seu Certificado Digital?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e solicite o seu certificado digital. 
              Oferecemos suporte completo no processo de emissão e instalação.
            </p>
            <a href="/contato" className="btn-hero inline-flex items-center">
              Solicitar Certificado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
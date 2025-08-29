export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Assistant Tecno</h3>
            <p className="text-slate-300 leading-relaxed">
              Soluções tecnológicas inovadoras para impulsionar seu negócio com eficiência e segurança.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-2 text-slate-300">
              <li>📍 Rua Edmilson Coutinho, Nº 27, São Silvano</li>
              <li>📞 (27) 3121-9410</li>
              <li>✉️ contato@assistant.com.br</li>
              <li>🕒 Seg-Sex: 8h às 17:30h</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Automação</li>
              <li>• Certificado Digital</li>
              <li>• Consultoria em TI</li>
              <li>• Redes Corporativas</li>
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white opacity-0">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Suporte Técnico</li>
              <li>• Telefonia IP</li>
              <li>• Virtualização</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400">
            © 2025 Assistant Tecno. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
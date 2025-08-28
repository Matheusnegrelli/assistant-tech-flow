import { Link } from "react-router-dom";

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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-blue-400 mr-2">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-blue-400 mr-2">›</span>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-blue-400 mr-2">›</span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-blue-400 mr-2">›</span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/automacao" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Automação
                </Link>
              </li>
              <li>
                <Link to="/servicos/certificado-digital" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Certificado Digital
                </Link>
              </li>
              <li>
                <Link to="/servicos/consultoria" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Consultoria em TI
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white opacity-0">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/redes" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Redes Corporativas
                </Link>
              </li>
              <li>
                <Link to="/servicos/suporte" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Suporte Técnico
                </Link>
              </li>
              <li>
                <Link to="/servicos/telefonia" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Telefonia IP
                </Link>
              </li>
              <li>
                <Link to="/servicos/virtualizacao" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center">
                  <span className="text-green-400 mr-2">›</span>
                  Virtualização
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400">
            © 2023 Assistant Tecno. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
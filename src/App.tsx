import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Automacao from "./pages/services/Automacao";
import CertificadoDigital from "./pages/services/CertificadoDigital";
import Consultoria from "./pages/services/Consultoria";
import Redes from "./pages/services/Redes";
import Suporte from "./pages/services/Suporte";
import Telefonia from "./pages/services/Telefonia";
import Virtualizacao from "./pages/services/Virtualizacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/servicos/automacao" element={<Automacao />} />
                <Route path="/servicos/certificado-digital" element={<CertificadoDigital />} />
                <Route path="/servicos/consultoria" element={<Consultoria />} />
                <Route path="/servicos/redes" element={<Redes />} />
                <Route path="/servicos/suporte" element={<Suporte />} />
                <Route path="/servicos/telefonia" element={<Telefonia />} />
                <Route path="/servicos/virtualizacao" element={<Virtualizacao />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

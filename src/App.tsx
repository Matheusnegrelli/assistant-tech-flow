import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
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
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/servicos/automacao" element={<div className="scroll-to-top"><Automacao /></div>} />
                <Route path="/servicos/certificado-digital" element={<div className="scroll-to-top"><CertificadoDigital /></div>} />
                <Route path="/servicos/consultoria" element={<div className="scroll-to-top"><Consultoria /></div>} />
                <Route path="/servicos/redes" element={<div className="scroll-to-top"><Redes /></div>} />
                <Route path="/servicos/suporte" element={<div className="scroll-to-top"><Suporte /></div>} />
                <Route path="/servicos/telefonia" element={<div className="scroll-to-top"><Telefonia /></div>} />
                <Route path="/servicos/virtualizacao" element={<div className="scroll-to-top"><Virtualizacao /></div>} />
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

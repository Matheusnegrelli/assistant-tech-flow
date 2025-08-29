import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

// Imports diretos para páginas principais (carregamento instantâneo)
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

// Apenas NotFound fica lazy (raramente usado)
const NotFound = lazy(() => import("./pages/NotFound"));

// Componente de loading otimizado
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
      <Toaster />
      <Sonner />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;

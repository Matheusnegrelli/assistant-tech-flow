import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading das páginas para melhor performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Automacao = lazy(() => import("./pages/services/Automacao"));
const CertificadoDigital = lazy(() => import("./pages/services/CertificadoDigital"));
const Consultoria = lazy(() => import("./pages/services/Consultoria"));
const Redes = lazy(() => import("./pages/services/Redes"));
const Suporte = lazy(() => import("./pages/services/Suporte"));
const Telefonia = lazy(() => import("./pages/services/Telefonia"));
const Virtualizacao = lazy(() => import("./pages/services/Virtualizacao"));
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

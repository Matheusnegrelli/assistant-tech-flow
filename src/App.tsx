import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Contact from "./pages/Contact";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
    <Toaster />
    <Sonner />
  </div>
);

export default App;

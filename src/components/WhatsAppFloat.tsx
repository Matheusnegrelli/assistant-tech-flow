import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsApp = () => {
    const whatsappUrl = "https://web.whatsapp.com/send?phone=552731219410&text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.";
    window.location.href = whatsappUrl;
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="whatsapp-float"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
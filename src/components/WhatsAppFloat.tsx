import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/552731219410?text=Olá! Gostaria de saber mais sobre os serviços da Assistant Tecno.", "_blank");
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
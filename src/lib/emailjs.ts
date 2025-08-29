import emailjs from '@emailjs/browser';

// Configure EmailJS
export const emailJSConfig = {
  serviceId: 'service_rf9lum5',
  templateId: 'template_a9ttxcl', 
  publicKey: 'i93_efAfAHXsq0DZ_',
};

// Initialize EmailJS
emailjs.init(emailJSConfig.publicKey);

export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
}) => {
  try {
    // Mapeando para as variáveis do seu template EmailJS
    const emailParams = {
      name: templateParams.from_name,
      email: templateParams.from_email,
      phone: templateParams.phone || 'Não informado',
      message: templateParams.message,
      time: new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    const result = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      emailParams,
      emailJSConfig.publicKey
    );
    
    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
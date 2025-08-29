import emailjs from '@emailjs/browser';

// Configure EmailJS
export const emailJSConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Substitua pela sua Service ID
  templateId: 'YOUR_TEMPLATE_ID', // Substitua pela sua Template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Substitua pela sua Public Key
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
    const result = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      templateParams,
      emailJSConfig.publicKey
    );
    
    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
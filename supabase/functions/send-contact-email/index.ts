import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("=== Edge function called ===");
  console.log("Method:", req.method);
  console.log("Headers:", Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS preflight request");
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    });
  }

  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    console.log("=== Starting email processing ===");
    
    // Check if RESEND_API_KEY exists
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY exists:", !!resendApiKey);
    console.log("RESEND_API_KEY length:", resendApiKey?.length || 0);
    console.log("First 10 chars of API key:", resendApiKey?.substring(0, 10) || 'undefined');
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not found!");
      throw new Error("RESEND_API_KEY not found in environment variables");
    }

    console.log("Creating Resend instance...");
    const resend = new Resend(resendApiKey);
    
    console.log("Parsing request body...");
    const { name, email, phone, message }: ContactRequest = await req.json();
    console.log("Received contact form submission:", { name, email, phone: !!phone, messageLength: message?.length });

    // Send email to matheusnegrellim@gmail.com
    console.log("Sending email via Resend...");
    const emailResponse = await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>",
      to: ["matheusnegrellim@gmail.com"],
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <h2>Nova mensagem de contato recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>Esta mensagem foi enviada através do formulário de contato do site Assistant Tecno.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id,
      message: "Email enviado com sucesso!"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("=== Error in send-contact-email function ===");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        type: error.constructor.name
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
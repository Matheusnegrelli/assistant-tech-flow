import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
  console.log("=== Edge function called ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    });
  }

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    console.log("=== Processing POST request ===");
    
    // Check API key first
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("API Key exists:", !!resendApiKey);
    console.log("API Key length:", resendApiKey?.length || 0);
    
    if (!resendApiKey) {
      console.error("No RESEND_API_KEY found");
      return new Response(JSON.stringify({ 
        error: "API key not configured",
        details: "RESEND_API_KEY environment variable not found"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Reading request body...");
    const body = await req.json();
    console.log("Body received:", JSON.stringify(body, null, 2));
    
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(JSON.stringify({ 
        error: "Missing required fields",
        required: ["name", "email", "message"]
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Importing Resend...");
    const { Resend } = await import("npm:resend@2.0.0");
    
    console.log("Creating Resend client...");
    const resend = new Resend(resendApiKey);

    console.log("Preparing email data...");
    const emailData = {
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
    };

    console.log("Sending email...");
    const emailResponse = await resend.emails.send(emailData);
    console.log("Email response:", JSON.stringify(emailResponse, null, 2));

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return new Response(JSON.stringify({ 
        error: "Email service error",
        details: emailResponse.error 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Email sent successfully!");
    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id,
      message: "Email enviado com sucesso!"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("=== CRITICAL ERROR ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Error cause:", error.cause);
    
    return new Response(JSON.stringify({ 
      error: "Internal server error",
      message: error.message,
      type: error.name,
      stack: error.stack
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
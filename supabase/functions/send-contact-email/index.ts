import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
  console.log("=== Function started ===");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    console.log("Processing request...");
    
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("No API key");
      return new Response(JSON.stringify({ error: "No API key" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const body = await req.json();
    const { name, email, message } = body;
    
    console.log("Making HTTP request to Resend API...");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contato Site <onboarding@resend.dev>",
        to: ["matheusnegrellim@gmail.com"],
        subject: `Nova mensagem de contato - ${name}`,
        html: `
          <h2>Nova mensagem de contato recebida</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        `,
      }),
    });

    console.log("Resend API response status:", response.status);
    const responseData = await response.json();
    console.log("Resend API response:", responseData);

    if (!response.ok) {
      console.error("Resend API error:", responseData);
      return new Response(JSON.stringify({ 
        error: "Email service error",
        status: response.status,
        details: responseData 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Email sent successfully!");
    return new Response(JSON.stringify({ 
      success: true,
      message: "Email enviado com sucesso!",
      emailId: responseData.id
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("ERROR:", error);
    return new Response(JSON.stringify({ 
      error: "Server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
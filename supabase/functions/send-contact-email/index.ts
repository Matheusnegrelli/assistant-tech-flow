import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  console.log('🚀 Edge function called - Method:', req.method);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('✅ Handling CORS preflight');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('📝 Processing contact form submission');
    
    const data = await req.json();
    console.log('📊 Received data:', JSON.stringify(data, null, 2));

    // Validate required fields
    const { name, email, message } = data;
    if (!name || !email || !message) {
      console.log('❌ Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Just log the contact attempt for now - we'll add email later
    console.log('📧 Contact form submission logged:', {
      name,
      email,
      phone: data.phone || 'Not provided',
      message: message.substring(0, 100) + '...'
    });

    // Return success for now
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form processed successfully' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('💥 Edge function error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Server error',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Google Sheets API helper to append rows
async function appendToGoogleSheet(values: string[][]) {
  const serviceAccountEmail = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_EMAIL');
  const privateKey = Deno.env.get('GOOGLE_PRIVATE_KEY')?.replace(/\\n/g, '\n');
  const sheetId = Deno.env.get('GOOGLE_SHEET_ID');

  if (!serviceAccountEmail || !privateKey || !sheetId) {
    throw new Error('Missing Google Sheets configuration');
  }

  // Create JWT for Google API authentication
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  // Encode header and payload
  const encoder = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsignedToken = `${headerB64}.${payloadB64}`;

  // Sign the token
  const keyData = privateKey
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(keyData), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    encoder.encode(unsignedToken)
  );

  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${unsignedToken}.${signatureB64}`;

  // Get access token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();
  
  if (!tokenData.access_token) {
    console.error('Token response:', tokenData);
    throw new Error('Failed to get access token');
  }

  // Append to Google Sheet - Leads sheet
  const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Leads!A:Z:append?valueInputOption=USER_ENTERED`;

  const appendResponse = await fetch(sheetsUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenData.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }),
  });

  if (!appendResponse.ok) {
    const errorText = await appendResponse.text();
    console.error('Sheets API error:', errorText);
    throw new Error('Failed to append to sheet');
  }

  return await appendResponse.json();
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, trainingType, message, service } = await req.json();

    console.log('Received lead submission:', { name, email, company, trainingType });

    // Format date as DD/MM/YYYY
    const now = new Date();
    const dateStr = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    // Map trainingType to readable format
    const trainingTypeMap: Record<string, string> = {
      'corporate': 'Corporate Training',
      'individual': 'Individual Training',
      'e-course': 'E-Course',
      'other': 'Other',
    };

    // Build the row according to Google Sheets headers
    // Headers: Lead ID, Date, Lead Name, Email, Mobile, Source, Status, Pipeline Stage, Temperature, Priority, Notes, Company, Training Type, Service Interested
    const leadId = `WEB-${Date.now().toString(36).toUpperCase()}`;
    const row = [
      leadId,                                    // Lead ID
      dateStr,                                   // Date
      name || '',                                // Lead Name
      email || '',                               // Email
      phone || '',                               // Mobile
      'Website Contact Form',                    // Source
      'New',                                     // Status
      'New Lead',                                // Pipeline Stage
      'HOT',                                     // Temperature - always HOT from website
      'High',                                    // Priority - always High from website
      message || '',                             // Notes
      company || '',                             // Company
      trainingTypeMap[trainingType] || trainingType || '', // Training Type
      service || '',                             // Service Interested
    ];

    await appendToGoogleSheet([row]);

    console.log('Lead successfully added to Google Sheets:', leadId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead submitted successfully',
        leadId 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error submitting lead:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

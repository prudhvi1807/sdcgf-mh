import { GoogleGenAI, Type } from "@google/genai";

/**
 * Fetches startup and statutory advice from Gemini.
 * Strictly uses process.env.API_KEY as per system requirements.
 */
export async function getStartupAdvice(userQuery: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ 
          role: m.role === 'user' ? 'user' : 'model', 
          parts: [{ text: m.content }] 
        })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: `You are the Lead Statutory Consultant at Startupwala (GetStatSure). 
        Your expertise covers: Startup India Services, GST Services, Statutory Filings, Payroll, KPI Tracking, and Audits.
        Professional, precise, and authoritative tone. Use Markdown formatting. 
        If a query is outside your scope, politely redirect them to statutory services.`,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Advice Generation Error:", error);
    return "Our advisory systems are currently disconnected. For immediate assistance, please contact our support team directly.";
  }
}

/**
 * Classifies user intent into service categories.
 */
export async function classifyUserIntent(query: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: `Classify this statutory query into a service ID. Query: "${query}"` }] }],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { 
              type: Type.STRING, 
              enum: ['Registration', 'Compliance', 'Management', 'Audit', 'General']
            },
            relevantServiceId: { 
              type: Type.STRING,
              description: 'Service ID must exactly match one of: [startup-india, gst-services, statutory-filings, payroll-management, kpi-tracking, valuation-audits]',
              nullable: true
            }
          },
          required: ['category', 'relevantServiceId']
        }
      }
    });
    
    return JSON.parse(response.text || '{}');
  } catch (e) {
    return { category: 'General', relevantServiceId: null };
  }
}
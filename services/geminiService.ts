import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client using process.env.API_KEY as mandated by the instructions.
// This also resolves the error "Property 'env' does not exist on type 'ImportMeta'".
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStartupAdvice(userQuery: string, history: { role: 'user' | 'assistant', content: string }[]) {
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
      systemInstruction: `You are the Lead Statutory Consultant at GetStatSure. 
      Your expertise covers: Startup India Services, GST Services, Statutory Filings, Payroll, KPI Tracking, and Audits.
      Professional, precise, and authoritative tone. Use Markdown formatting.`,
      thinkingConfig: { thinkingBudget: 0 }
    }
  });

  return response.text;
}

export async function classifyUserIntent(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Classify this statutory query into a service ID. Query: "${query}"`,
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
              description: 'Service ID from: [startup-india, gst-services, statutory-filings, payroll-management, kpi-tracking, valuation-audits]'
            }
          },
          required: ['category', 'relevantServiceId']
        }
      }
    });
    
    // Using response.text directly as a property as per guidelines.
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Intent classification failed", e);
    return null;
  }
}

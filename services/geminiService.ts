
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Lazy factory for the Gemini client.
 * Strictly uses process.env.API_KEY as per system requirements.
 */
let ai: GoogleGenAI | null = null;

function getAI() {
  if (ai) return ai;

  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn('Gemini API key is not available in environment variables.');
    return null;
  }

  try {
    ai = new GoogleGenAI({ apiKey });
    return ai;
  } catch (e) {
    console.warn('Failed to initialize GoogleGenAI client:', e);
    return null;
  }
}

/**
 * Fetches startup and statutory advice from Gemini.
 */
export async function getStartupAdvice(userQuery: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const client = getAI();

  if (!client) {
    return "I'm sorry, I'm currently in offline mode and unable to provide statutory advice. Please try again later or use the 'Talk to Expert' button for direct assistance.";
  }

  try {
    const response = await client.models.generateContent({
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
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    if (!response.text) {
      throw new Error("Empty response from advisor engine.");
    }

    return response.text;
  } catch (error) {
    console.error("Advice Generation Error:", error);
    return "Our advisory systems are currently disconnected. For immediate assistance with Company Registration or GST filings, please contact our support team directly.";
  }
}

/**
 * Classifies user intent into service categories.
 */
export async function classifyUserIntent(query: string) {
  const defaultClassification = {
    category: 'General',
    relevantServiceId: null
  };

  const client = getAI();
  if (!client) return defaultClassification;

  try {
    const response = await client.models.generateContent({
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
              description: 'Service ID must exactly match one of: [startup-india, gst-services, statutory-filings, payroll-management, kpi-tracking, valuation-audits]',
              nullable: true
            }
          },
          required: ['category', 'relevantServiceId']
        }
      }
    });
    
    const text = response.text;
    if (!text) return defaultClassification;

    return JSON.parse(text);
  } catch (e) {
    console.warn("Intent Classification Error - falling back to default:", e);
    return defaultClassification;
  }
}

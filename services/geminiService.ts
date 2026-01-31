import { GoogleGenAI, Type } from "@google/genai";

/**
 * Lazy factory for the Gemini client.
 * Avoids top-level access to 'process' which might cause ReferenceErrors in browser runtimes.
 */
let ai: GoogleGenAI | null = null;

function getAI() {
  if (ai) return ai;

  // The API key should be set in .env as VITE_GOOGLE_API_KEY (for local development)
  // or will be provided by the environment as process.env.API_KEY.
  // Note: VITE_GOOGLE_API_KEY should not be committed to version control.
  const key =
    (typeof process !== 'undefined' && (process as any).env?.API_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GOOGLE_API_KEY);

  if (!key) {
    console.warn('No Gemini API key found. AI features are disabled. Please ensure VITE_GOOGLE_API_KEY is set in your .env file.');
    return null;
  }

  try {
    ai = new GoogleGenAI({ apiKey: key });
    return ai;
  } catch (e) {
    console.warn('Failed to initialize GoogleGenAI client:', e);
    return null;
  }
}

/**
 * Fetches startup and statutory advice from Gemini.
 * Uses getAI() to guard against initialization failures and provides a friendly fallback.
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
 * Returns a default 'General' classification if the API client is unavailable or calls fail.
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

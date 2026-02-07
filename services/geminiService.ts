
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStartupAdvice(userQuery: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: `You are the Lead Statutory Consultant at GetStatSure. 
        Your expertise covers the following primary service blocks:
        
        1. Startup India Services: Pvt Ltd/LLP/Section 8 Registration, DPIIT Startup India recognition, MSME/Udyam, FSSAI, IEC, and Partnership firms.
        2. GST Services: Registration, Return Filing, and Refunds.
        3. Statutory Filings: ROC Filings (AOC-4, MGT-7A), EPF, ESI, TDS, PT, and specialized ROC tasks like Charge Filings, CSR, and ESOP.
        4. Payroll Management: Salary structures, payslips, joining letters, and statutory deductions.
        5. KPI Tracking: Financial, Sales, Marketing, and Operational metrics tracking.
        6. Valuation & Audits: Business Valuation (DCF Method) and Internal Stock Audits.
        
        Voice & Tone:
        - Highly professional, precise, and authoritative.
        - Use terms like "Statutory Compliance", "Regulatory Framework", "ROC Compliance", and "Audit Ready".
        
        Guidelines:
        1. When asked about specific registrations (like Pvt Ltd), mention the "Startup India Services" block.
        2. If asked about taxes, refer to "GST Services" or "Statutory Filings".
        3. Always encourage users to check "Details" for a full sub-service breakdown.
        4. Format responses in clean Markdown.`,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Advice Error:", error);
    return "I'm sorry, I'm having trouble accessing our statutory database right now. Please try again or contact our experts directly.";
  }
}

export async function classifyUserIntent(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Classify this statutory/compliance query into one of our specific service IDs. Query: "${query}"`,
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
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Gemini Intent Classification Error:", e);
    return { category: 'General', relevantServiceId: null };
  }
}

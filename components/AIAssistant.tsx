import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Sparkles, Loader2, ExternalLink, ShieldAlert, ArrowRight } from 'lucide-react';
import { getStartupAdvice, classifyUserIntent } from '../services/geminiService';
import { SERVICES } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to GetStatSure. I am your Lead Statutory Consultant. How can I assist you with Company Registration, GST, ROC Filings, or Payroll Management today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [recommendedService, setRecommendedService] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle pre-fill from booking actions
  useEffect(() => {
    const handlePrefill = (e: any) => {
      if (e.detail) {
        setIsOpen(true);
        setInput(e.detail);
      }
    };

    window.addEventListener('statsure:prefill-ai', handlePrefill);
    return () => window.removeEventListener('statsure:prefill-ai', handlePrefill);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);
    setRecommendedService(null);

    try {
      const [advice, intent] = await Promise.all([
        getStartupAdvice(userMessage, messages.slice(-4)),
        classifyUserIntent(userMessage)
      ]);

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: advice || 'Error connecting to Statutory Database. Please retry.' 
      }]);

      if (intent?.relevantServiceId) {
        setRecommendedService(intent.relevantServiceId);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Compliance link interrupted.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const getServiceData = (id: string) => SERVICES.find(s => s.id === id);

  const handleServiceClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600 text-white shadow-2xl transition-all hover:scale-110 active:scale-95 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles className="animate-pulse text-orange-400" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-3 whitespace-nowrap font-bold text-xs uppercase tracking-widest">
          Compliance AI
        </span>
      </button>

      <div className={`fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] h-[650px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="p-4 border-b bg-blue-600 text-white rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
              <Bot size={22} />
            </div>
            <div>
              <div className="font-bold flex items-center gap-2 text-sm">
                GETSTAT AI
                <span className="bg-orange-500 text-[8px] px-1.5 py-0.5 rounded-full uppercase tracking-tighter">OFFICER</span>
              </div>
              <div className="text-[10px] opacity-80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Instant Statutory Advice
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50/30">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-50 text-[9px] uppercase tracking-widest font-extrabold text-blue-600">
                    <ShieldAlert size={10} /> GetStatSure AI
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-3">
                <Loader2 size={16} className="animate-spin text-blue-600" />
                <span className="text-xs text-gray-400 font-medium italic">Consulting statutory database...</span>
              </div>
            </div>
          )}

          {recommendedService && !isTyping && (
            <div className="mt-8 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-1">
                Recommended Solution:
              </div>
              {(() => {
                const s = getServiceData(recommendedService);
                if (!s) return null;
                return (
                  <div 
                    onClick={() => handleServiceClick(s.id)}
                    className="bg-white border-2 border-orange-100 rounded-2xl p-4 flex items-center justify-between group hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer ring-4 ring-orange-500/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <ExternalLink size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{s.title}</div>
                        <div className="text-[11px] text-orange-600 font-bold uppercase tracking-widest mt-0.5">Starting at {s.price}</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-2xl">
          <div className="relative flex items-center group">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Pvt Ltd, ROC, GST, or Valuation..."
              rows={1}
              style={{ minHeight: '44px', maxHeight: '120px' }}
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm transition-all resize-none overflow-y-auto"
              onInput={(e: any) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as any);
                }
              }}
            />
            <button 
              type="submit"
              disabled={isTyping || !input.trim()}
              className="absolute right-2 bottom-2 p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg active:scale-90"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;

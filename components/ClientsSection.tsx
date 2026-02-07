
import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  services: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Aravind B",
    role: "CTO",
    company: "StarBuzz",
    services: ["GST", "MIS", "Compliance"],
    quote: "Statsure's expertise transformed our financial operations! With their help, we can now focus on growth. StatSure has been a vital strategic partner for Starbuzz, expertly handling GST, MIS reporting, and compliance. Highly recommend their services!"
  },
  {
    name: "Madhulas Babu",
    role: "Founder",
    company: "Edodwaja Foundation",
    services: ["Accounting", "Audit"],
    quote: "A game-changer for our accounting processes. Their structured approach provided much-needed clarity to our financial operations."
  },
  {
    name: "Surya Prakesh",
    role: "Founder",
    company: "Misplaced Minds",
    services: ["Compliance", "Reporting"],
    quote: "StratSure has consistently delivered professional, timely, and efficient service. Their team understands our business needs and responds with precision and care. Working with them has streamlined our operations and given us confidence."
  }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">CLIENTS</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold text-xs uppercase tracking-[0.3em]">What They Say</p>
        </div>

        {/* Testimonials List */}
        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((t, index) => {
            const isFeatured = index === 0;
            return (
              <div 
                key={index} 
                className={`group relative bg-white border border-slate-100 rounded-[2.5rem] transition-all duration-200 ease-out hover:-translate-y-[2px] shadow-sm overflow-hidden border-l-[3px] border-l-transparent hover:border-l-orange-500 hover:bg-blue-50/30 ${
                  isFeatured 
                    ? 'border-t-2 border-t-orange-500 p-10 md:p-14 lg:p-16' 
                    : 'p-10 md:p-12'
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  
                  {/* Left: Quote Content */}
                  <div className="lg:col-span-8">
                    <Quote className={`text-orange-500 transition-opacity duration-200 opacity-20 group-hover:opacity-40 mb-4 ${isFeatured ? 'w-10 h-10' : 'w-7 h-7'}`} />
                    <p className={`text-slate-800 italic leading-relaxed ${
                      isFeatured ? 'text-xl md:text-2xl font-bold' : 'text-lg font-medium'
                    }`}>
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Right: Client Details */}
                  <div className="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-12 flex flex-col justify-center space-y-5">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight transition-colors duration-200">
                        {t.name}
                      </h4>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                        {t.role} <span className="mx-1 text-slate-200">•</span> {t.company}
                      </p>
                    </div>

                    {/* Meta Line: Services Chips */}
                    <div className="flex flex-wrap gap-2">
                      {t.services.map(service => (
                        <span 
                          key={service} 
                          className="px-3 py-1 border border-slate-100 bg-transparent rounded-md text-[9px] font-black text-blue-600/70 uppercase tracking-widest transition-all duration-200 group-hover:border-blue-300 group-hover:text-blue-700"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Bottom Divider */}
        <div className="max-w-4xl mx-auto mt-20 border-t border-slate-50"></div>
      </div>
    </section>
  );
}

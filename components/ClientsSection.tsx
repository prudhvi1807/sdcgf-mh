
import React from 'react';
import { Quote, Building2, Tag, Briefcase, CheckCircle2 } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Aravind B",
      role: "CTO",
      company: "StarBuzz",
      service: "GST & MIS Reporting",
      tag: "Tech Startup",
      quote: "StatSure has been a vital strategic partner for Starbuzz, expertly handling GST, MIS reporting, and compliance. Sarat’s team combines professionalism, precision, and strong branding insight to support growing companies’ needs effectively."
    },
    {
      name: "Madhulas Babu",
      role: "Founder",
      company: "Edodwaja Foundation",
      service: "Accounting Processes",
      tag: "NGO / Foundation",
      quote: "A game-changer for our accounting processes. Their structured approach provided much-needed clarity to our financial operations."
    },
    {
      name: "Surya Prakesh",
      role: "Founder",
      company: "Misplaced Minds",
      service: "Compliance & Reporting",
      tag: "Creative Agency",
      quote: "StratSure has consistently delivered professional, timely, and efficient service. Their team understands our business needs and responds with precision and care. Working with them has streamlined our operations and given us confidence in our compliance and reporting."
    }
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">CLIENTS</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold text-xs uppercase tracking-[0.3em]">What They Say</p>
        </div>

        {/* Main Highlighted Testimonial - Premium Card */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-sm overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <Quote className="text-orange-500 w-16 h-16 opacity-20 mb-6" />
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-10 italic">
                "Statsure's expertise transformed our financial operations! With their help, we can now focus on growth. Highly recommend their services!"
              </p>
              
              <div className="flex items-center gap-5 border-t border-slate-200 pt-8">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-900/20">
                  AB
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Aravind B</h4>
                  <p className="text-orange-500 font-bold text-xs uppercase tracking-widest">CTO, StarBuzz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Grid Layout for Secondary Testimonials */}
        <div className="space-y-10">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                {/* Left Column: The Content (Quote) */}
                <div className="lg:col-span-8 p-10 md:p-12 bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-4 h-4 text-orange-400 fill-current">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Right Column: The Meta Info (Structured Data) */}
                <div className="lg:col-span-4 p-10 md:p-12 bg-slate-50/80 border-l border-slate-100 flex flex-col justify-center">
                  <div className="mb-8">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">{t.name}</h4>
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">{t.role}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 border border-slate-200">
                        <Building2 size={14} />
                      </div>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{t.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 border border-slate-200">
                        <CheckCircle2 size={14} className="text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{t.service}</span>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                        {t.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

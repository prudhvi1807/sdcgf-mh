
import React from 'react';
import { Quote } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Aravind B",
      role: "CTO of StarBuzz",
      quote: "StatSure has been a vital strategic partner for Starbuzz, expertly handling GST, MIS reporting, and compliance. Sarat’s team combines professionalism, precision, and strong branding insight to support growing companies’ needs effectively."
    },
    {
      name: "Madhulas Babu",
      role: "Founder of Edodwaja Foundation",
      quote: "A game-changer for our accounting processes."
    },
    {
      name: "Surya Prakesh",
      role: "Founder of Misplaced Minds",
      quote: "StratSure has consistently delivered professional, timely, and efficient service. Their team understands our business needs and responds with precision and care. Working with them has streamlined our operations and given us confidence in our compliance and reporting."
    }
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching existing design */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">CLIENTS</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">What They Say</p>
        </div>

        {/* Main Highlighted Testimonial */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-10 md:p-14 text-center shadow-sm">
            <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 text-orange-500 w-12 h-12 bg-white p-2 rounded-full border border-slate-100" />
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic">
              "Statsure's expertise transformed our financial operations! With their help, we can now focus on growth. Highly recommend their services!"
            </p>
          </div>
        </div>

        {/* Clean Vertical Layout for Remaining Testimonials */}
        <div className="max-w-3xl mx-auto space-y-12">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start pb-12 border-b border-slate-100 last:border-0">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black">
                  {t.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-600 text-lg leading-relaxed font-medium mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-extrabold text-slate-900 uppercase tracking-tight">{t.name}</h4>
                  <p className="text-orange-500 font-bold text-xs uppercase tracking-widest">{t.role}</p>
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

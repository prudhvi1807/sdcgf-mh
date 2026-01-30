import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Building2, 
  FileText, 
  BarChart3, 
  FileCheck, 
  Scale,
  ArrowRight,
  Rocket,
  Users,
  X,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';
import { ServiceCategory, Service } from '../types';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Zap,
  Building2,
  FileText,
  BarChart3,
  FileCheck,
  Scale,
  Rocket,
  Users
};

const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSubServices, setSelectedSubServices] = useState<Set<string>>(new Set());

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories = ['All', ...Object.values(ServiceCategory)];

  const toggleSubService = (sub: string) => {
    const next = new Set(selectedSubServices);
    if (next.has(sub)) {
      next.delete(sub);
    } else {
      next.add(sub);
    }
    setSelectedSubServices(next);
  };

  const handleBookService = () => {
    if (!selectedService) return;

    const subListText = Array.from(selectedSubServices).length > 0
      ? `\nSelected services:\n- ${Array.from(selectedSubServices).join('\n- ')}`
      : '';

    const aiMessage = `I want to book the package: ${selectedService.title}\nStarting price: ${selectedService.price}${subListText}`;
    
    const whatsappText = `Client enquiry for:\nPackage: ${selectedService.title}\nStarting price: ${selectedService.price}${subListText}`;

    // 1. Dispatch pre-fill event to AI Assistant
    window.dispatchEvent(new CustomEvent('statsure:prefill-ai', { detail: aiMessage }));

    // 2. Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    // 3. Close Modal
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setSelectedSubServices(new Set());
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Our Statutory Solutions</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Comprehensive assurance and certification services designed for regulatory excellence and global standards.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon];
            const Component = Icon || ShieldCheck;
            
            return (
              <div 
                key={service.id} 
                onClick={() => setSelectedService(service)}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-[10px] uppercase font-black px-2.5 py-1 rounded-full tracking-tighter">
                    Priority
                  </span>
                )}
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Component size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <div className="text-orange-500 font-black text-lg">
                    {service.price}
                    <span className="text-[10px] block text-slate-400 font-bold uppercase tracking-tighter">*Starting Price</span>
                  </div>
                  <button className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold text-xs uppercase tracking-widest">
                    Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-blue-600 p-8 text-white relative">
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                  {React.createElement(iconMap[selectedService.icon] || ShieldCheck, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{selectedService.title}</h3>
                  <p className="text-blue-100 text-sm font-medium opacity-80">{selectedService.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-black text-3xl">{selectedService.price}</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Starting Price</span>
              </div>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="mb-6">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Included Services (Select to Customize)</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.subServices.map((sub, idx) => {
                    const isSelected = selectedSubServices.has(sub);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => toggleSubService(sub)}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer border-2 ${
                          isSelected 
                            ? 'bg-blue-50 border-blue-200 shadow-sm' 
                            : 'bg-slate-50 border-transparent hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 transition-colors ${isSelected ? 'text-blue-600' : 'text-slate-300'}`} />
                        <span className={`text-sm font-semibold leading-tight transition-colors ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>{sub}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic mt-8 border-t pt-4">
                * Final pricing depends on business scope and complexity. Contact our statutory auditor for a customized assurance package.
              </p>
            </div>
            
            <div className="p-8 bg-slate-50 border-t border-slate-100 flex gap-4">
              <button 
                onClick={handleBookService}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-900/10 transition-all active:scale-[0.98]"
              >
                Book This Service
              </button>
              <button 
                onClick={handleCloseModal}
                className="px-8 py-4 border-2 border-slate-200 text-slate-500 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;
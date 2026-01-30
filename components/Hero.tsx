import React, { useState } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: SERVICES[0].title
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { fullName, email, phone, interest } = formData;
    
    if (!fullName || !email || !phone || !interest) {
      alert('Please fill in all fields.');
      return;
    }

    const message = `New consultation request

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Interested In: ${interest}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative gradient-bg pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs tracking-wide mb-8 border border-white/20">
              <Zap size={14} className="mr-2 text-orange-400" />
              India's #1 Statutory Compliance Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
              Certify Your <br />
              <span className="text-orange-500">Business</span> with <br />
              Confidence
            </h1>
            <p className="text-lg lg:text-xl text-blue-50 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed opacity-90">
              We handle your ISO certifications, MSME registrations, tax audits, and statutory documents so you can focus on building your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-extrabold text-lg shadow-xl shadow-orange-900/20 transition-all flex items-center justify-center">
                Get Started Now
              </button>
              <button 
                onClick={scrollToServices}
                className="px-10 py-4 bg-blue-400/10 hover:bg-blue-400/20 text-white rounded-xl font-extrabold text-lg border border-white/30 backdrop-blur-sm transition-all"
              >
                View All Services
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center text-white gap-2 font-bold text-sm">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Quick Processing</span>
              </div>
              <div className="flex items-center text-white gap-2 font-bold text-sm">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Secure & Professional</span>
              </div>
              <div className="flex items-center text-white gap-2 font-bold text-sm">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 max-w-md mx-auto relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Free Consultation</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Interested In</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white font-medium"
                    required
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all">
                  Request Callback
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  By clicking, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
            
            {/* Rating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block">
               <div className="font-black text-2xl">4.9/5</div>
               <div className="text-[10px] uppercase font-bold tracking-tighter">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
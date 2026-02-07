
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ClientsSection from './components/ClientsSection';
import Stats from './components/Stats';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { ShieldCheck, BarChart3, FileCheck, Globe } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div id="home" className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      
      <div className="bg-white border-b py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl font-black tracking-widest">ISO-CERTIFIED</span>
          <span className="text-xl font-black tracking-widest text-orange-600">MSME-UDYAM</span>
          <span className="text-xl font-black tracking-widest">GST-COMPLIANT</span>
          <span className="text-xl font-black tracking-widest">NABL-ACCREDITED</span>
        </div>
      </div>

      <Stats />
      
      <section id="about" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-5 tracking-tight uppercase">The Assurance Standard</h2>
            <div className="w-20 h-2 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="group text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all rotate-3 hover:rotate-0 shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Statutory Proof</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">100% legal validity on all documents and certification artifacts issued.</p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all -rotate-3 hover:rotate-0 shadow-lg">
                <BarChart3 size={40} />
              </div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Risk Audit</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">We identify statutory risks before they become legal liabilities for your firm.</p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all rotate-6 hover:rotate-0 shadow-lg">
                <FileCheck size={40} />
              </div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Audit Ready</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Get your business audit-ready for international standards and procurement.</p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all -rotate-6 hover:rotate-0 shadow-lg">
                <Globe size={40} />
              </div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Global Reach</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">International standard recognition for your brand to compete globally.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      <ClientsSection />

      <section className="py-24 bg-[#003d99] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase">Commit to Absolute Compliance.</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
              Join 15,000+ businesses that trust GetStatSure for their annual audits and ISO certifications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-orange-500 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-orange-900/40 uppercase tracking-widest">Start Certification</button>
              <button className="px-12 py-5 bg-white/5 border-2 border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all uppercase tracking-widest">Contact Auditor</button>
            </div>
          </div>
        </div>
      </section>

      <AIAssistant />
      <Footer />
    </div>
  );
};

export default App;

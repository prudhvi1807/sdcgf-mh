import React from 'react';
import { Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001a33] text-blue-100 py-12 font-medium border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-white/5 gap-6">
          <div className="flex items-center gap-4">
            <div className="text-xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <ShieldCheck size={18} />
              </div>
              <div className="flex">
                <span className="text-white">GET</span>
                <span className="text-orange-500">STAT</span>
                <span className="text-white">SURE</span>
              </div>
            </div>
            <div className="h-4 w-px bg-white/20 hidden md:block"></div>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60">
              Statutory & ISO Consulting
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 text-blue-100 hover:bg-orange-500 hover:text-white transition-all"><Linkedin size={16} /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-blue-100 hover:bg-blue-400 hover:text-white transition-all"><Twitter size={16} /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-blue-100 hover:bg-orange-500 hover:text-white transition-all"><Mail size={16} /></a>
          </div>
        </div>

        {/* Middle Section: Addresses (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Head Office</h4>
            <p className="text-xs leading-relaxed opacity-70 max-w-[240px]">
              Plot No-235, BSR TVR Nilayam, Rajarajeshwari Nagar, Kondapur, Hyderabad, Telangana – 500084
            </p>
          </div>
          <div>
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Branch – Kukatpally</h4>
            <p className="text-xs leading-relaxed opacity-70 max-w-[240px]">
              Plot No-201, Srihari Nilayam, Sangeet Nagar, Metro Cash and Carry, Kukatpally, Hyderabad – 500071
            </p>
          </div>
          <div>
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Chennai Office</h4>
            <p className="text-xs leading-relaxed opacity-70 max-w-[240px]">
              Plot No-6/550, Brindawan Colony, 6th Block, Mugappair West, Chennai, Tamil Nadu – 600037
            </p>
          </div>
        </div>

        {/* Bottom Section: Contact & Hours Bar */}
        <div className="bg-white/5 rounded-2xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-orange-500" />
              <span className="text-[11px] font-bold">HYD: 789 389 77 00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-orange-500" />
              <span className="text-[11px] font-bold">CHN: 984 054 68 67</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-orange-500" />
              <span className="text-[11px] font-bold">vcfo@getstatsure.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 opacity-60">
            <div className="flex items-center gap-2">
              <Clock size={12} />
              <span className="text-[10px] uppercase tracking-tighter">Mon–Fri: 10:00 am – 7:00 pm</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={12} />
              <span className="text-[10px] uppercase tracking-tighter">Sat: 10:00 am – 2:00 pm</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={12} />
              <span className="text-[10px] uppercase tracking-tighter font-black text-orange-400">Sun: Holiday</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[9px] font-black uppercase tracking-[0.4em] opacity-30">
          <p>© 2024 GETSTATSURE ASSURANCE PVT LTD. ALL STATUTORY RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
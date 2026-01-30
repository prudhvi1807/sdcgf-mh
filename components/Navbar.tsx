import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-blue-600' : 'bg-white'}`}>
              <img
                src="https://res.cloudinary.com/dwye1ye9z/image/upload/v1769779971/Gemini_Generated_Image_ceukd9ceukd9ceuk_ruebxe.png"
                alt="STATSURE logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="text-2xl font-black tracking-tighter flex items-center">
              <span className="text-orange-500">STAT</span>
              <span className={scrolled ? 'text-slate-900' : 'text-white'}>SURE</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-orange-200'}`}
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-orange-200'}`}
            >
              ABOUT US
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-orange-200'}`}
            >
              SERVICES
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2">
              <Headphones size={18} />
              Book Audit
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-900' : 'text-white'} p-2`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full left-0 animate-in fade-in duration-300 border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="block px-3 py-4 text-base font-bold text-slate-800 border-b border-slate-50"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="block px-3 py-4 text-base font-bold text-slate-800 border-b border-slate-50"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="block px-3 py-4 text-base font-bold text-slate-800 border-b border-slate-50"
            >
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
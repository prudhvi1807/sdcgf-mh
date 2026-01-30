import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">About GetStatSure</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            We are dedicated to providing absolute statutory assurance through expert auditing and regulatory compliance services.
          </p>
          <div className="w-20 h-2 bg-orange-500 mx-auto rounded-full mt-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-600 leading-relaxed font-medium">
              GetStatSure is a leading statutory consulting firm providing high-end assurance services, ISO certifications, and legal compliance management for modern businesses. Our mission is to bridge the gap between complex regulatory requirements and business operational efficiency.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
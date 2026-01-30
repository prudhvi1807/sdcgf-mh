import React, { useState } from 'react';
import { X, User, Briefcase, Award, TrendingUp } from 'lucide-react';

const Team: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-5 tracking-tight uppercase">Meet Our Team</h2>
          <div className="w-20 h-2 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          {/* Profile Card */}
          <div className="group w-full max-w-sm bg-slate-50 border border-slate-100 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
             <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <User size={64} className="text-inherit" />
             </div>
             <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">K Sarat Kumar</h3>
                <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-10">Founder & MD</p>
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/10 transition-all active:scale-[0.98]"
                >
                  Read More
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col border border-white/20">
            {/* Modal Header */}
            <div className="bg-blue-600 p-10 text-white relative shrink-0">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-3">Executive Profile</h3>
              <h2 className="text-3xl font-black uppercase tracking-tight">Get to Know about Sarat Kumar</h2>
            </div>
            
            {/* Modal Content */}
            <div className="p-10 md:p-14 overflow-y-auto space-y-12 bg-white text-left">
              {/* SECTION 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <Briefcase size={20} />
                   </div>
                   <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Professional Journey</h4>
                </div>
                <ul className="space-y-5 text-slate-600 text-[15px] leading-relaxed font-medium">
                  <li className="flex gap-4 items-start">
                    <span className="text-orange-500 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Over 10 years of experience in internal reviews, audit, finance, and corporate leadership.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-orange-500 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Began his career at Shree Ramamurthy & Co and L Sreenivasa & Co, Chennai — gaining deep expertise in statutory audit, financial reporting, and regulatory compliance.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-orange-500 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Served as Internal Audit Review Consultant for KPN Farm Fresh Pvt Ltd, enhancing financial controls and governance.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-orange-500 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Former Chief Financial Officer at Ancient Living Products Pvt Ltd, Hyderabad — led finance operations and strategic planning.</span>
                  </li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                      <Award size={20} />
                   </div>
                   <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Core Expertise</h4>
                </div>
                <ul className="space-y-5 text-slate-600 text-[15px] leading-relaxed font-medium">
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-600 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Mastery in MIS reporting and project report preparation for strategic and operational decision-making.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-600 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Skilled in statutory compliance, financial structuring, and corporate advisory.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-blue-600 font-black mt-1.5 flex-shrink-0">•</span> 
                    <span>Adept at synthesizing complex regulatory frameworks into actionable insights.</span>
                  </li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                      {/* Fixed typo: changed TrendiningUp to TrendingUp */}
                      <TrendingUp size={20} />
                   </div>
                   <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Leadership at StatSure</h4>
                </div>
                <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed font-medium">
                  <p>As Founder & MD of StatSure Consulting Pvt Ltd, Sarat leads a multidisciplinary team delivering:</p>
                  <ul className="pl-6 space-y-3">
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold mt-1.5 flex-shrink-0">›</span> 
                      <span>Full-spectrum advisory services</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold mt-1.5 flex-shrink-0">›</span> 
                      <span>Branding and visual strategy</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold mt-1.5 flex-shrink-0">›</span> 
                      <span>Compliance solutions for startups, manufacturers, and service firms.</span>
                    </li>
                  </ul>
                  <p className="pt-8 italic border-t border-slate-100 text-slate-500">Known for blending precision with creativity, and building trust through structured, client-centric solutions.</p>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-10 bg-slate-50 border-t border-slate-100 shrink-0">
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
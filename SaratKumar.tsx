import React from 'react';
import { Briefcase, Award, TrendingUp, ChevronLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SaratKumar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/about-us')}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest mb-12 transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </button>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-20">
          <div className="w-48 h-48 bg-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-300 border-2 border-slate-50 shrink-0">
            <User size={80} />
          </div>
          <div className="text-center md:text-left pt-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-3">K Sarat Kumar</h1>
            <p className="text-orange-500 font-black text-lg uppercase tracking-[0.2em] mb-6">Founder & MD</p>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="bg-slate-50/50 p-10 md:p-14 rounded-[3rem] border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-10 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center"><User size={20} /></span>
              Get to Know about Sarat Kumar
            </h2>

            <div className="space-y-12">
              {/* Professional Journey */}
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <Briefcase size={14} className="text-blue-600" />
                  Professional Journey
                </h3>
                <div className="space-y-5 text-slate-600 text-lg leading-relaxed font-medium">
                  <p>Over 10 years of experience in internal reviews, audit, finance, and corporate leadership.</p>
                  <p>Began his career at Shree Ramamurthy & Co and L Sreenivasa & Co, Chennai — gaining deep expertise in statutory audit, financial reporting, and regulatory compliance.</p>
                  <p>Served as Internal Audit Review Consultant for KPN Farm Fresh Pvt Ltd, enhancing financial controls and governance.</p>
                  <p>Former Chief Financial Officer at Ancient Living Products Pvt Ltd, Hyderabad — led finance operations and strategic planning.</p>
                </div>
              </section>

              {/* Core Expertise */}
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <Award size={14} className="text-orange-500" />
                  Core Expertise
                </h3>
                <ul className="space-y-5 text-slate-600 text-lg leading-relaxed font-medium">
                  <li className="flex gap-4">
                    <span className="text-orange-500 font-black">•</span>
                    <span>Mastery in MIS reporting and project report preparation for strategic and operational decision-making.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-500 font-black">•</span>
                    <span>Skilled in statutory compliance, financial structuring, and corporate advisory.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-500 font-black">•</span>
                    <span>Adept at synthesizing complex regulatory frameworks into actionable insights.</span>
                  </li>
                </ul>
              </section>

              {/* Leadership at StatSure */}
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <TrendingUp size={14} className="text-green-600" />
                  Leadership at StatSure
                </h3>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                  <p>As Founder & MD of StatSure Consulting Pvt Ltd, Sarat leads a multidisciplinary team delivering:</p>
                  <ul className="pl-6 space-y-3">
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Full-spectrum advisory services</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Branding and visual strategy</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Compliance solutions for startups, manufacturers, and service firms.</span>
                    </li>
                  </ul>
                  <p className="pt-8 italic text-slate-500 border-t border-slate-200">
                    Known for blending precision with creativity, and building trust through structured, client-centric solutions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaratKumar;
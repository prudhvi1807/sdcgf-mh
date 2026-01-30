
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="bg-[#003d99] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-blue-100 font-bold opacity-80 uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

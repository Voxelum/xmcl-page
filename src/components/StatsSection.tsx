import React from 'react';
import { Users, Code, Lightning, Globe } from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';

export const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: Code,
      number: "50K+",
      label: t('stats.linesOfCode'),
      color: "bg-[#1c1c1c]",
      iconColor: "text-[#ea4c3c]"
    },
    {
      icon: Users,
      number: "25K+",
      label: t('stats.activeUsers'),
      color: "bg-[#1c1c1c]",
      iconColor: "text-[#ea4c3c]"
    },
    {
      icon: Globe,
      number: "45+",
      label: t('stats.countries'),
      color: "bg-[#1c1c1c]",
      iconColor: "text-[#ea4c3c]"
    },
    {
      icon: Lightning,
      number: "99.9%",
      label: t('stats.uptime'),
      color: "bg-[#1c1c1c]",
      iconColor: "text-[#ea4c3c]"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#121212]">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #2d2d2d 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#ea4c3c]/10 border border-[#ea4c3c]/20 rounded-full text-[#ea4c3c] font-medium text-sm mb-6">
            Project Statistics
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Numbers That Matter
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our commitment to excellence and community impact reflected in real metrics
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-4 md:p-8 bg-[#1c1c1c] rounded-3xl border border-[#2d2d2d] shadow-none hover:border-[#ea4c3c] transition-all duration-300 text-center overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="flex justify-center mb-3 md:mb-6">
                  <div className="p-3 md:p-4 bg-[#121212] border border-[#2d2d2d] rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor}`} />
                  </div>
                </div>
                <div className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



import React from 'react';
import { DownloadSimple, Users, Code, Lightning, Globe, Lightning as LightningIcon } from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';

export const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: Code,
      number: "50K+",
      label: t('stats.linesOfCode'),
      color: "bg-blue-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Users,
      number: "25K+",
      label: t('stats.activeUsers'),
      color: "bg-green-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: Globe,
      number: "45+",
      label: t('stats.countries'),
      color: "bg-purple-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Lightning,
      number: "99.9%",
      label: t('stats.uptime'),
      color: "bg-orange-500/20",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-muted/20"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary-foreground font-medium text-sm mb-6">
            📊 Project Statistics
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Numbers That Matter
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Our commitment to excellence and community impact reflected in real metrics
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative p-4 md:p-8 ${stat.color} rounded-3xl border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 text-center overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-3 md:mb-6">
                  <div className="p-3 md:p-4 bg-card/50 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor}`} />
                  </div>
                </div>
                <div className="text-2xl md:text-4xl font-black text-foreground mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-xs md:text-sm">
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

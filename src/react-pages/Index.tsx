import React from 'react';
import { PageTransition } from '@/components/PageTransition';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import { Lightning, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { AppShell } from '@/components/AppShell';

const IndexContent = () => {
  const { t } = useTranslation();

  const handleDownloadClick = () => {
    const featuresSection = document.querySelector('#features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        {/* Hero Section with real GitHub stats */}
        <HeroSection onDownloadClick={handleDownloadClick} />

        {/* Features Section with real screenshots */}
        <section id="features-section" className="relative">
          <FeaturesSection />
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-blue-600">
                  {t('home.readyToStart')}
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                {t('home.readyToStartDesc')}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/download">
                  <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg">
                    <span className="flex items-center gap-2">
                      <Lightning weight="fill" className="w-5 h-5" />
                      {t('home.tryNow')}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default function Index() {
  return (
    <AppShell>
      <IndexContent />
    </AppShell>
  );
}

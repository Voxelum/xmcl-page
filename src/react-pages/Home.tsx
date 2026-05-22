import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DownloadSimple, GithubLogo, Star, Users, Code, Lightning, MonitorPlay, Palette, ArrowClockwise, ArrowRight, ShieldCheck, RocketLaunch, GlobeSimple } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';
import InteractiveDownloadSection from '@/components/InteractiveDownloadSection';
import { PageTransition } from '@/components/PageTransition';

const Home = () => {
  const { t } = useTranslation();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const features = [
    {
      icon: <Code className="w-10 h-10" />,
      title: t('home.feature1Title'),
      description: t('home.feature1Description'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      icon: <MonitorPlay className="w-10 h-10" />,
      title: t('home.feature2Title'),
      description: t('home.feature2Description'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: t('home.feature3Title'),
      description: t('home.feature3Description'),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    },
    {
      icon: <Lightning className="w-10 h-10" />,
      title: t('home.feature4Title'),
      description: t('home.feature4Description'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30'
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, regularly updated and tested by community',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30'
    },
    {
      icon: <RocketLaunch className="w-10 h-10" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with fast launch times and minimal resource usage',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-950/30'
    }
  ];

  const stats = [
    { icon: <Star className="w-5 h-5" />, label: 'GitHub Stars', value: t('githubStars') || '5K+' },
    { icon: <Users className="w-5 h-5" />, label: 'Active Users', value: '50K+' },
    { icon: <DownloadSimple className="w-5 h-5" />, label: 'Downloads', value: '200K+' },
    { icon: <GlobeSimple className="w-5 h-5" />, label: 'Languages', value: '20+' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Subtle Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
            }}
            transition={{
              duration: 30,
              ease: "easeInOut"
            }}
            style={{ top: '-10%', left: '-10%' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 100, -50, 0],
            }}
            transition={{
              duration: 25,
              ease: "easeInOut",
              delay: 5
            }}
            style={{ top: '40%', right: '-10%' }}
          />
        </div>

        <Navigation />

        <main className="container mx-auto px-4 pt-12 md:pt-20 pb-12 relative z-10">
          {/* Hero Section */}
          <motion.section
            className="text-center py-16 md:py-24 mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-blue-50 dark:bg-blue-950/30 rounded-full border border-blue-200 dark:border-blue-800 shadow-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" weight="fill" />
              <span className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400">
                {t('home.openSourceStatus')}
              </span>
              <GithubLogo className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 bg-blue-600 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('home.heroTitle')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('home.heroSubtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  onClick={() => setIsDownloadOpen(true)}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  <DownloadSimple className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" weight="bold" />
                  {t('downloadXMCL')}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" weight="bold" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher', '_blank')}
                  className="w-full sm:w-auto bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <GithubLogo className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" weight="fill" />
                  {t('home.viewOnGitHub')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 md:p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="py-16 md:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12 md:mb-20">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-blue-600"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t('home.featuresTitle')}
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('home.comprehensiveSolution')}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="p-6 md:p-8 h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-white dark:bg-slate-800/90 border-2 border-slate-200 dark:border-slate-700 rounded-2xl group-hover:border-blue-300 dark:group-hover:border-blue-700">
                    <div className="relative z-10">
                      <motion.div
                        className={`inline-flex items-center justify-center p-4 md:p-5 ${feature.bgColor} rounded-xl text-blue-600 dark:text-blue-400 mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {feature.icon}
                      </motion.div>

                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-slate-100">
                        {feature.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            className="py-16 md:py-24 mt-16 md:mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Enhance Your Minecraft Experience?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of players who trust XMCL for their Minecraft journey
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsDownloadOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-12 py-5 md:py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  <DownloadSimple className="w-5 h-5 md:w-6 md:h-6 mr-2" weight="bold" />
                  Download XMCL Now
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <Footer onDownloadClick={() => setIsDownloadOpen(true)} />
        {isDownloadOpen && <InteractiveDownloadSection />}
      </div>
    </PageTransition>
  );
};

export default Home;

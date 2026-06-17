import { motion, useScroll, useSpring } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import PerformanceSection from './components/PerformanceSection';
import SoulSection from './components/SoulSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-viper-500 via-viper-400 to-viper-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        {/* Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-viper-500/10 blur-[120px] animate-glow" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-viper-600/8 blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full bg-viper-400/8 blur-[120px] animate-glow" style={{ animationDelay: '4s' }} />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PerformanceSection />
        <SoulSection />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;

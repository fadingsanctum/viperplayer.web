import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const features: Feature[] = [
  {
    title: 'Lightning Fast Playback',
    description: 'Engineered for zero-latency playback. Viper Player launches instantly and handles even the largest media libraries with effortless speed.',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Modern Interface',
    description: 'A clean, intuitive interface that puts your media front and center. Every pixel is meticulously crafted for clarity and delight.',
    gradient: 'from-purple-500/20 to-pink-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Subtitle Support',
    description: 'Comprehensive subtitle engine supporting SRT, ASS, SSA, and VTT formats. Customize every aspect of your subtitle experience.',
    gradient: 'from-amber-500/20 to-orange-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Playlist Management',
    description: 'Organize your media with intelligent playlists, smart folders, and drag-and-drop simplicity. Your library, your way.',
    gradient: 'from-green-500/20 to-emerald-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Hardware Accelerated',
    description: 'Leverages GPU decoding and rendering for silky-smooth 4K and 8K playback with minimal CPU usage.',
    gradient: 'from-rose-500/20 to-red-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Seamless Experience',
    description: 'From install to playback, every interaction is smooth and thoughtful. Automatic updates, cloud sync, and zero configuration needed.',
    gradient: 'from-indigo-500/20 to-violet-500/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <div className="relative h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent">
        <div className="relative h-full bg-[#0d0d1a]/80 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-viper-400 group-hover:bg-viper-500/20 group-hover:text-viper-300 transition-all duration-300 mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  return (
    <section ref={ref} className="section-padding relative" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-viper-400 mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Everything you need.
            <br />
            <span className="text-white/40">Nothing you don't.</span>
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">
            Thoughtfully crafted features that work together seamlessly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

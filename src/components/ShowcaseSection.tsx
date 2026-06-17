import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden" id="showcase">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-viper-400 mb-4">
            Showcase
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Experience the <span className="gradient-text">difference</span>
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">
            See Viper Player in action. Every detail designed for immersion.
          </p>
        </motion.div>

        {/* Showcase Items */}
        <div className="space-y-24 md:space-y-32">
          {/* Item 1 */}
          <motion.div
            style={{ y: y1, opacity }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl overflow-hidden group cursor-default">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-xs text-white/20 ml-2">Now Playing — Full Screen</span>
                </div>

                {/* Large Screen Mockup */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-900 via-[#0d0d1a] to-gray-900 overflow-hidden">
                  {/* Video player overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Simulated video content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-viper-500/20 border border-viper-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-viper-400 ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white/50 text-sm">Midnight Waves — Album Preview</p>
                    </div>
                  </div>

                  {/* Bottom controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-viper-500 to-viper-400 rounded-full"
                        animate={{ width: ['20%', '45%', '35%', '55%', '40%'] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Midnight Waves</span>
                      <div className="flex items-center gap-4">
                        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20L9 12l10-8v16z" transform="rotate(180, 14, 12)" /></svg>
                        <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l10 8-10 8V4z" /></svg>
                      </div>
                      <span className="text-xs text-white/40">-2:34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass rounded-xl px-4 py-2 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs font-semibold text-viper-300">4K HDR</span>
            </motion.div>
          </motion.div>

          {/* Item 2 - Side by side */}
          <motion.div
            style={{ y: y2, opacity }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <div className="glass-strong rounded-2xl p-5 group cursor-default hover:border-viper-500/20 transition-all duration-300">
              <span className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3 block">Playlist View</span>
              <div className="space-y-2">
                {[
                  { title: 'Chill Vibes', duration: '3:42', artist: 'Luna Eclipse' },
                  { title: 'Neon Nights', duration: '4:15', artist: 'Cyber Drift' },
                  { title: 'Ocean Drive', duration: '5:01', artist: 'Wave Runner' },
                  { title: 'Starlight', duration: '3:28', artist: 'Aurora' },
                ].map((track, i) => (
                  <motion.div
                    key={track.title}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    initial={false}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs text-white/20 w-5">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-viper-500/20 to-viper-700/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-viper-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80 truncate">{track.title}</p>
                      <p className="text-xs text-white/30 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-white/20">{track.duration}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-5 group cursor-default hover:border-viper-500/20 transition-all duration-300">
              <span className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3 block">Equalizer</span>
              <div className="flex items-end justify-center gap-1.5 h-40">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-full"
                    style={{
                      background: `linear-gradient(to top, rgba(92, 124, 250, 0.4), rgba(92, 124, 250, 0.8))`,
                    }}
                    animate={{
                      height: [`${15 + Math.sin(i * 0.8) * 10}%`, `${15 + Math.sin(i * 0.5) * 25}%`, `${15 + Math.sin(i * 0.8) * 10}%`],
                    }}
                    transition={{
                      duration: 1.5 + Math.random(),
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            style={{ y: y3, opacity }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl overflow-hidden p-6 md:p-8 group cursor-default">
              <span className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-4 block">Subtitle Engine</span>
              <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-gray-900 via-[#0d0d1a] to-gray-900 relative flex items-center justify-center overflow-hidden">
                {/* Simulated video scene */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-t from-viper-950/50 to-transparent" />
                </div>

                {/* Subtitle text */}
                <motion.div
                  className="relative z-10 max-w-lg text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    <span className="bg-black/50 px-2 py-1 rounded">In a world without boundaries,</span>
                  </p>
                  <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mt-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    <span className="bg-black/50 px-2 py-1 rounded">every story finds its voice.</span>
                  </p>
                  <motion.div
                    className="mt-6 flex items-center justify-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-viper-400 animate-pulse" />
                    <span className="text-xs text-white/30 ml-2">ASS Subtitle — Custom Styling</span>
                  </motion.div>
                </motion.div>

                {/* Subtitle controls */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded glass text-white/50">SRT</span>
                    <span className="text-[10px] px-2 py-0.5 rounded glass text-viper-300 border border-viper-500/20">ASS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded glass text-white/50">VTT</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;

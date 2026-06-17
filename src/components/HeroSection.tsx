import { motion } from 'framer-motion';

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-viper-950/30 via-transparent to-[#0a0a0f] z-[1]" />

      <motion.div
        className="relative z-[2] max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-viper-300 border border-viper-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-viper-400 animate-pulse" />
            Version 1.0 — Now Available
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
        >
          <span className="gradient-text">Media,</span>
          <br />
          <span className="text-white">Reimagined.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Built for speed. Designed for immersion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="https://github.com/fadingsanctum/viper-player/releases/download/v1.0.0/Viper.Player.Setup.1.0.0.exe" className="btn-primary group">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download for Windows
            <span className="text-white/50 text-xs ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a href="https://github.com/fadingsanctum/viper-player" className="btn-secondary group">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
            <svg className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </motion.div>

        {/* Player Mockup */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-viper-500/10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Mockup Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-white/30 font-medium tracking-wide">Viper Player</span>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-black/20 p-4 border-r border-white/5">
                <div className="space-y-2">
                  {['Now Playing', 'Music', 'Videos', 'Playlists', 'Recently Added'].map((item) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        item === 'Now Playing'
                          ? 'bg-viper-500/15 text-viper-300 border border-viper-500/20'
                          : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                      } transition-colors cursor-default`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4">
                {/* Album Art Placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-viper-500/30 to-viper-700/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-viper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="M2 12h4" />
                      <path d="M18 12h4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Midnight Waves</p>
                    <p className="text-white/40 text-xs">Album • 2024</p>
                  </div>
                </div>

                {/* Waveform Visualization */}
                <div className="flex items-end gap-[3px] h-24 mb-4">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-full bg-viper-500/60"
                      animate={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + Math.sin(i * 0.8) * 15}%`,
                        opacity: 0.3 + Math.sin(i * 0.3) * 0.3 + 0.2,
                      }}
                      transition={{
                        duration: 1.2 + Math.sin(i * 0.3) * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.03,
                      }}
                    />
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6">
                  <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-default" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 20L9 12l10-8v16z" transform="rotate(180, 14, 12)" />
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-viper-500 flex items-center justify-center cursor-default shadow-lg shadow-viper-500/30">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-default" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 4l10 8-10 8V4z" />
                  </svg>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-viper-500 to-viper-400 rounded-full"
                      animate={{ width: ['30%', '45%', '35%', '50%', '40%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[10px] text-white/30">1:24</span>
                    <span className="text-[10px] text-white/30">3:42</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow behind mockup */}
          <div className="absolute -inset-10 bg-gradient-to-r from-viper-500/10 via-transparent to-viper-400/10 rounded-[40px] blur-[60px] -z-10" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

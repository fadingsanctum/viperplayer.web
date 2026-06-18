import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function DownloadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="section-padding relative" id="download">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute -inset-20 bg-gradient-to-b from-viper-500/10 via-transparent to-transparent blur-[80px] rounded-[100px]" />

          {/* Download Card */}
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border border-viper-500/5 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border border-viper-400/5 rounded-full animate-spin-slow" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-viper-500 to-viper-600 flex items-center justify-center shadow-xl shadow-viper-500/20"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Ready for a new <span className="gradient-text">experience</span>?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-white/40 md:text-lg mb-8 max-w-md mx-auto"
              >
                Download Viper Player and rediscover what desktop media should feel like.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="https://github.com/fadingsanctum/viper-player/releases/download/v1.0.1/Viper.Player.Setup.1.0.1.exe"
                  className="btn-primary text-lg px-8 py-4 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Viper Player
                  <span className="text-white/40 text-xs ml-1">v1.0</span>
                </motion.a>

                <a href="https://github.com/fadingsanctum/viper-player" className="btn-secondary group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source on GitHub
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </motion.div>

              {/* Supported platforms */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex items-center justify-center gap-6 text-xs text-white/20"
              >
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="20" x2="15" y2="20"/></svg>
                  Windows 10+
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
                  macOS 12+
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  Linux
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DownloadSection;

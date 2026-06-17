import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function SoulSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="section-padding relative" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-viper-400 mb-6">
            The Vision
          </span>

          {/* Signature mark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-viper-500 to-viper-700 flex items-center justify-center shadow-2xl shadow-viper-500/20">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full bg-viper-500/5 blur-[60px]" />
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto text-balance">
              Viper Player began as a personal vision — a pursuit of the perfect desktop media experience.
            </p>

            <div className="h-8" />

            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-xl mx-auto text-balance">
              Every line of code, every pixel, every micro-interaction was crafted with a singular purpose:
              to create something that feels less like software and more like an extension of the senses.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px bg-gradient-to-r from-transparent via-viper-500/30 to-transparent my-12 max-w-xs mx-auto"
          />

          {/* SOUL attribution */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xs text-white/20 tracking-[0.3em] uppercase mb-3">Created by</p>
            <span className="text-2xl md:text-3xl font-bold gradient-text tracking-tight">
              SOUL
            </span>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-viper-500/20" />
              <span className="text-xs text-white/20 italic">with relentless dedication</span>
              <span className="w-8 h-[1px] bg-viper-500/20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SoulSection;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const benchmarks = [
  { to: 0.3, suffix: 's', label: 'Startup Time', decimals: 1 },
  { to: 60, suffix: 'fps', label: 'Playback Smoothness', decimals: 0 },
  { to: 12, suffix: 'MB', label: 'Memory Usage', decimals: 0 },
  { to: 99.9, suffix: '%', label: 'Uptime Reliability', decimals: 1 },
];

const performanceMetrics = [
  {
    label: 'CPU Usage',
    value: 4.2,
    unit: '%',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    label: 'GPU Acceleration',
    value: 98,
    unit: '%',
    gradient: 'from-viper-500 to-blue-500',
  },
  {
    label: 'Frame Drop Rate',
    value: 0.02,
    unit: '%',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    label: 'Peak Memory',
    value: 45,
    unit: 'MB',
    gradient: 'from-rose-500 to-pink-500',
  },
];

function PerformanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="section-padding relative" id="performance">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-viper-400 mb-4">
            Performance
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Engineered for <span className="gradient-text">speed</span>
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">
            Built from the ground up with performance as the primary feature.
          </p>
        </motion.div>

        {/* Benchmark Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {benchmarks.map((benchmark, index) => (
            <motion.div
              key={benchmark.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <AnimatedCounter
                to={benchmark.to}
                suffix={benchmark.suffix}
                label={benchmark.label}
                decimals={benchmark.decimals}
              />
            </motion.div>
          ))}
        </div>

        {/* Performance Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-strong rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Live Performance Monitor</h3>
              <p className="text-sm text-white/30">Real-time system metrics</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/30">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-4 hover:border-viper-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-white/40">{metric.label}</span>
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${metric.gradient}`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                <div className="text-2xl font-bold text-white mb-3">
                  {metric.value}
                  <span className="text-sm font-normal text-white/30 ml-0.5">{metric.unit}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.gradient}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${metric.value > 100 ? 100 : metric.value}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architectural highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Zero-Copy Architecture',
                description: 'Direct memory access eliminates buffer overhead for near-zero latency.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
              },
              {
                title: 'Multi-Threaded Core',
                description: 'Parallel decoding across all available cores for maximum throughput.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                  </svg>
                ),
              },
              {
                title: 'Hardware Decoding',
                description: 'DXVA, VAAPI, and VideoToolbox support for GPU-accelerated playback.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:bg-white/[0.06] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-viper-500/10 flex items-center justify-center text-viper-400 flex-shrink-0 group-hover:bg-viper-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-white/30 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PerformanceSection;

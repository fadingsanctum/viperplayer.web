import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  label: string;
}

function AnimatedCounter({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 2000,
  decimals = 0,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const difference = to - from;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + difference * eased;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 tracking-tight">
        {prefix}
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <div className="text-sm text-white/30 font-medium">{label}</div>
    </div>
  );
}

export default AnimatedCounter;

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export const CountUp = ({ end, suffix = "", duration = 2, decimals = 0 }: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = end * easeOutQuart;
      
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};
















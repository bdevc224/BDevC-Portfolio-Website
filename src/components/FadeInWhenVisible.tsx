// src/FadeInWhenVisible.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, type ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  const controls = useAnimation(); // TypeScript infers the correct type
  const [ref, inView] = useInView({
    triggerOnce: false, // triggers every time it enters viewport
    threshold: 0.2,     // adjust sensitivity
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.9, ease: "easeIn" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;

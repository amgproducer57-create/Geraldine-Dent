import React from 'react';
import { motion } from 'motion/react';

interface RevealSideProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'scale';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const RevealSide: React.FC<RevealSideProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.75,
  distance = 70,
  className = "",
}) => {
  let initialX = 0;
  let initialY = 0;
  let initialScale = 1;

  if (direction === 'left') {
    initialX = -distance;
  } else if (direction === 'right') {
    initialX = distance;
  } else if (direction === 'up') {
    initialY = distance;
  } else if (direction === 'scale') {
    initialScale = 0.92;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, type FC } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
}

export const AnimatedComponent: FC<AnimatedComponentProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 50, opacity: 0, rotateY: 60 }}
        animate={{ x: 0, opacity: 1, rotateY: 0 }}
        exit={{ x: -50, opacity: 0, rotateY: -60 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

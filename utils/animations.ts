export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.5,
    },
  },
};

export const childrenVariants = {
  hidden: {
    y: '100vw',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      mass: 0.5,
    },
  },
};

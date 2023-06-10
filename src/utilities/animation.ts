export const commonAnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { stiffness: 50, type: 'spring' },
  },
};

export const dividerAnimationVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    transition: { stiffness: 50, type: 'spring' },
    scaleX: 1,
  },
};

export const navbarVariants = {
  hidden: { opacity: 0, x: 0, y: '-84px' },
  visible: {
    opacity: 1,
    transition: { stiffness: 50, type: 'spring' },
    x: 0,
    y: 0,
  },
};

export const contentVariants = {
  ...commonAnimationVariants,
  visible: {
    ...commonAnimationVariants.visible,
    opacity: 0.8,
  },
};

export const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    ...commonAnimationVariants.visible,
    opacity: 0.8,
    scaleX: 1,
  },
};

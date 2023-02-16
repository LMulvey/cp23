import { motion } from 'framer-motion';
import { styled } from '@/stitches';

export const CommonGradient = styled(motion.span, {
  color: '$blue1',
  '@supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent)':
    {
      '-webkit-text-fill-color': 'transparent',
      background: '$pinkGradient',
      backgroundClip: 'text',
    },
});

import { motion } from 'framer-motion';
import { styled } from '@/stitches';

export const CommonGradient = styled(motion.span, {
  '-webkit-text-fill-color': 'transparent',
  background: '$pinkGradient',
  backgroundClip: 'text',
});

import { motion } from 'framer-motion';
import { styled } from '@/stitches';

export const HeadingLink = styled(motion.a, {
  fontSize: '$32',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  textAlign: 'center',
  textShadow: '$blue40',
  // eslint-disable-next-line canonical/sort-keys
  '@bp2': {
    textAlign: 'left',
  },
});

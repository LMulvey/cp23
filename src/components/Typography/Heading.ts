import { motion } from 'framer-motion';
import { styled } from '@/stitches';

export const Heading = styled(motion.h1, {
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

export const HeadingMid = styled(motion.h3, {
  alignSelf: 'start',
  color: '#333',
  fontSize: '$24',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  textAlign: 'left',
  textShadow: '$blue40',
});

export const HeadingLink = styled(motion.a, {
  fontSize: '$26',
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

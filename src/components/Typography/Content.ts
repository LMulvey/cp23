import { motion } from 'framer-motion';
import { styled } from '@/stitches';

export const Content = styled(motion.p, {
  color: '#333',
  fontSize: '$20',
  fontWeight: '400',
  lineHeight: 1.34,
  marginBottom: '$48',
  textAlign: 'center',
  variants: {
    footer: {
      true: {
        fontSize: '$14',
        fontStyle: 'italic',
        marginBottom: 0,
      },
    },
    small: {
      true: {
        fontSize: '$18',
      },
    },
  },
});

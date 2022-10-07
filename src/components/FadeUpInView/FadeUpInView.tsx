import type { CSS } from '@stitches/react';
import { Children, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@/stitches';

const spanVariants = {
  hidden: { opacity: 0, x: '-10px', y: '10px' },
  visible: {
    opacity: 1,
    transition: { stiffness: 50, type: 'spring' },
    x: 0,
    y: 0,
  },
};

const Container = styled(motion.span, {
  position: 'relative',
  willChange: 'transform',
});

const MotionSpan = styled(motion.span, {
  position: 'relative',
  width: '100%',
  willChange: 'transform',
});

export const FadeUpInView = ({
  children,
  delay = 0.2,
  stagger = 0.15,
  viewport = { once: true },
  css = {},
  spanCss = {},
}: {
  children: ReactNode;
  css?: CSS;
  delay?: number;
  spanCss?: CSS;
  stagger?: number;
  viewport?: { once: boolean };
}) => {
  const arrayChildren = Children.toArray(children);

  return (
    <Container
      animate="animate"
      css={css}
      initial="hidden"
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
      viewport={viewport}
      whileInView="visible"
    >
      {Children.map(arrayChildren, (child) => {
        return (
          <MotionSpan css={spanCss} variants={spanVariants}>
            {child}
          </MotionSpan>
        );
      })}
    </Container>
  );
};

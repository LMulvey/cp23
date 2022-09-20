import { PageTitle } from '@/components/PageTitle';
import { styled } from '@/stitches';
import { keyframes } from '@stitches/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';

const fadeUpAndIn = keyframes({
  from: {
    transform: 'translate(-18px, 24px)',
    opacity: 0,
  },
  to: {
    transform: 'translate(0, 0)',
    opacity: 1,
  },
});

const Container = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8',
  '& > *': {
    transform: 'translate(-18px, 24px)',
    opacity: 0,
    animation: `${fadeUpAndIn} 1s forwards ease-out`,
  },
});

const Heading = styled('h2', {
  textShadow: '$blue40',
  fontSize: '$24',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1.2,
  opacity: 0,
  transform: 'translate(-18px, 24px)',
  animationDelay: '250ms',
});

const Home: NextPage = () => {
  return (
    <Container>
      <PageTitle />

      <Image
        alt="Console-ing Passions logo"
        src="/images/cp-logo.png"
        width="427px"
        height="115px"
        priority
      />
      <Heading>2023 @ University of Calgary</Heading>
    </Container>
  );
};

export default Home;

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
  display: 'flex',
  flexFlow: 'column nowrap',
  padding: '$24 $36',
  alignItems: 'center',
  gap: '$8',
  '& > *': {
    transform: 'translate(-18px, 24px)',
    opacity: 0,
    animation: `${fadeUpAndIn} 1s forwards ease-out`,
  },
  '@bp2': {
    padding: '$48 $124',
  },
});

const Heading = styled('h1', {
  textShadow: '$blue40',
  fontSize: '$48',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  opacity: 0,
  transform: 'translate(-18px, 24px)',
  animationDelay: '250ms',
  '&:first-of-type': {
    marginTop: '$16',
  },
  textAlign: 'center',
  '@bp2': {
    fontSize: '$54',
    textAlign: 'left',
  },
});

const Links = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$16',
  margin: '$48 0',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  padding: '$36 0',
  background: '$pinkGradient2',
  boxShadow: '$blue40',
  '@bp2': {
    flexFlow: 'row nowrap',
    gap: '$36',
    padding: '$36 0',
  },
});

const LinkDivider = styled('div', {
  width: '4px',
  height: '100%',
  borderRadius: '6px',
  background: '$pinkGradient',
});

const Link = styled('a', {
  color: '$white',
  textShadow: '$blue40',
  fontSize: '$24',
  fontWeight: '600',
  letterSpacing: '-$1',
  lineHeight: 1,
  marginTop: '-$4',
  position: 'relative',
  textDecoration: 'none',
  '&:hover': {
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
  '&:after': {
    content: '',
    position: 'absolute',
    bottom: '-$12',
    left: 0,
    height: '$4',
    transformOrigin: 'center center',
    background: '$yellow',
    borderRadius: '$8',
    boxShadow: '$blue100',
    transform: 'scaleX(1)',
    transition: 'transform 0.2s ease-out',
    width: 'calc(100% + $24)',
  },
  '@bp2': {
    fontSize: '$28',
    textAlign: 'left',
    '&:after': {
      transform: 'scaleX(0)',
    },
  },
});

const Gradient = styled('span', {
  background: '$pinkGradient',
  backgroundClip: 'text',
  '-webkit-text-fill-color': 'transparent',
});

const Content = styled('p', {
  color: '#333',
  fontSize: '$20',
  fontWeight: '400',
  marginBottom: '$48',
  lineHeight: 1.34,
  opacity: '0.8 !important',
  textAlign: 'center',
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
      <Heading>
        June 2023<Gradient>.</Gradient>
      </Heading>
      <Heading>
        <Gradient>University of Calgary</Gradient>.
      </Heading>
      <Links>
        <Link>🔖 Call for Papers</Link>
        <LinkDivider />
        <Link>🤔 FAQ</Link>
      </Links>
      <Content>
        <strong>Console-ing Passions</strong> is an international group of
        feminist and queer scholars whose interests converge around the study of
        television, video, audio, and new media. The group was founded in 1989
        and has been hosting conferences since 1992. CP conferences present
        opportunities for scholars at all levels of their careers to engage with
        feminism, media, and social change.
      </Content>
      <Content>
        <strong>Console-ing Passions 2023</strong>, to be held at the University
        of Calgary (UofC) Summer 2023, is organized by a team of feminist media
        scholars coordinated by{' '}
        <a
          href="https://twitter.com/alorapm"
          aria-label="Console-ing Passions 2023 coordinator Alora Paulsen Mulvey"
        >
          Alora Paulsen Mulvey
        </a>
        . The live conference will be held on Zoom and in-person simultaneously.
        For the detailed program and participants guides, visit the conference
        repository.
      </Content>
    </Container>
  );
};

export default Home;

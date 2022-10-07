import { PageTitle } from '@/components/PageTitle';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { styled } from '@/stitches';
import { minWidthMediaQueries } from '@/stitches/media';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';

const Container = styled(motion.div, {
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  padding: '$24 $36',
  alignItems: 'center',
  gap: '$8',
  '@bp2': {
    padding: '$48 $124',
  },
});

const Heading = styled(motion.h1, {
  textShadow: '$blue40',
  fontSize: '$48',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  '&:first-of-type': {
    marginTop: '$16',
  },
  textAlign: 'center',
  '@bp2': {
    fontSize: '$54',
    textAlign: 'left',
  },
});

const Links = styled(motion.div, {
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

const LinkDivider = styled(motion.div, {
  width: '4px',
  height: '100%',
  borderRadius: '6px',
  background: '$pinkGradient',
});

const Link = styled(motion.a, {
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

const Gradient = styled(motion.span, {
  background: '$pinkGradient',
  backgroundClip: 'text',
  '-webkit-text-fill-color': 'transparent',
});

const Content = styled(motion.p, {
  color: '#333',
  fontSize: '$20',
  fontWeight: '400',
  marginBottom: '$48',
  lineHeight: 1.34,
  textAlign: 'center',
});

const animationVariants = {
  hidden: { opacity: 0, x: '-10px', y: '10px' },
  visible: {
    opacity: 1,
    transition: { stiffness: 50, type: 'spring' },
    x: 0,
    y: 0,
  },
};

const contentVariants = {
  ...animationVariants,
  visible: {
    ...animationVariants.visible,
    opacity: 0.8,
  },
};

const Home: NextPage = () => {
  const isBp2 = useMatchMedia(minWidthMediaQueries.bp2);

  return (
    <Container
      animate="animate"
      initial="hidden"
      variants={{
        visible: {
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.15,
          },
        },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <PageTitle />
      <motion.div variants={animationVariants}>
        <Image
          alt="Console-ing Passions logo"
          src="/images/cp-logo.png"
          width={isBp2 ? '427px' : '214px'}
          height={isBp2 ? '115px' : '58px'}
          layout="fixed"
          priority
        />
      </motion.div>
      <Heading variants={animationVariants}>
        June 2023<Gradient>.</Gradient>
      </Heading>
      <Heading variants={animationVariants}>
        <Gradient>University of Calgary</Gradient>.
      </Heading>
      <Links variants={animationVariants}>
        <Link
          aria-label="Console-ing Passions 2023 Call for Papers Submission"
          href="https://www.openconf.org/consoleingpassions2023/"
          rel="noopener noreferrer"
          target="_blank"
        >
          🔖 Call for Papers
        </Link>
        <LinkDivider />
        <Link>🤔 FAQ</Link>
      </Links>
      <Content variants={contentVariants}>
        <strong>Console-ing Passions</strong> is an international group of
        feminist and queer scholars whose interests converge around the study of
        television, video, audio, and new media. The group was founded in 1989
        and has been hosting conferences since 1992. CP conferences present
        opportunities for scholars at all levels of their careers to engage with
        feminism, media, and social change.
      </Content>
      <Content variants={contentVariants}>
        <strong>Console-ing Passions 2023</strong>, to be held at the University
        of Calgary (UofC) Summer 2023, is organized by a team of feminist media
        scholars coordinated by{' '}
        <a
          href="https://twitter.com/alorapm"
          aria-label="Console-ing Passions 2023 coordinator Alora Paulsen Mulvey"
          target="_blank"
          rel="noopener noreferrer"
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

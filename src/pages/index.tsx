import { PageTitle } from '@/components/PageTitle';
import { styled } from '@/stitches';
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
  fontSize: '$32',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  textAlign: 'center',
  '@bp2': {
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

// const LinkDivider = styled(motion.div, {
//   width: '4px',
//   height: '100%',
//   borderRadius: '6px',
//   background: '$pinkGradient',
// });

const Link = styled(motion.a, {
  color: '$white',
  textShadow: '$blue40',
  fontSize: '$24',
  fontWeight: '600',
  textAlign: 'center',
  letterSpacing: '-$1',
  lineHeight: 1.2,
  marginTop: '-$12',
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
    left: '50%',
    height: '$4',
    transformOrigin: 'center center',
    background: '$yellow',
    borderRadius: '$8',
    boxShadow: '$blue100',
    transform: 'scaleX(1) translateX(-50%)',
    transition: 'transform 0.2s ease-out',
    width: '80%',
  },
  '@bp2': {
    fontSize: '$28',
    textAlign: 'left',
    marginTop: '-$4',
    '&:after': {
      width: 'calc(100% + $24)',
      left: 0,
      transform: 'scaleX(0)',
    },
  },
});

const ImageContainer = styled(motion.div, {});

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
  variants: {
    small: {
      true: {
        fontSize: '$18',
      },
    },
    footer: {
      true: {
        fontSize: '$14',
        fontStyle: 'italic',
        marginBottom: 0,
      },
    },
  },
});

const Divider = styled(motion.div, {
  height: '$2',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  width: '100%',
  marginBottom: '$48',
});

const Navbar = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  padding: '0 $8',
  gap: '$32',
  '@bp2': {
    gap: '$8',
    padding: '0 $32',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
  },
});

const Footer = styled('div', {
  borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  marginTop: '$32',
  paddingTop: '$32',
});

const NavbarInfo = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
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

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    ...animationVariants.visible,
    scaleX: 1,
    opacity: 0.8,
  },
};

const Home: NextPage = () => {
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

      <Navbar>
        <ImageContainer variants={animationVariants}>
          <Image
            alt="Console-ing Passions logo"
            src="/images/cp-logo.png"
            width="427px"
            height="115px"
            layout="intrinsic"
            priority
          />
        </ImageContainer>
        <NavbarInfo>
          <Heading variants={animationVariants}>
            June 22 - 24, 2023<Gradient>.</Gradient>
          </Heading>
          <Heading variants={animationVariants}>
            Univers<Gradient>ity of Calgary</Gradient>.
          </Heading>
        </NavbarInfo>
      </Navbar>
      <Links variants={animationVariants}>
        <Link
          aria-label="Console-ing Passions 2023 Call for Papers Submission"
          href="https://www.openconf.org/consoleingpassions2023/"
          rel="noopener noreferrer"
          target="_blank"
        >
          🔖 The Call for Papers opens on October 17, 2022
        </Link>
        {/* <LinkDivider />
        <Link>🤔 FAQ</Link> */}
      </Links>
      <Content small variants={contentVariants}>
        The organizing committee invites proposals for individual papers,
        pre-constituted panels, pre-constituted roundtables, and creative works
        that explore media cultures from an intersectional feminist perspective.
        We are particularly interested in research proposals that address the
        crises of our current moment, including sexism, racism, and ableism in
        media; gendered media production cultures; resistance to the alt-right;
        platformed misogyny and racism; mediated activism post-Roe; Indigenous
        media cultures, and queer and trans representation. We are committed to
        making our field more inclusive and enthusiastically welcome proposals
        addressing Indigenous and non-Western media cultures and contexts.
      </Content>
      <Divider variants={dividerVariants} />
      <Content variants={contentVariants}>
        <strong>
          The 2023 Console-ing Passions: International Conference on Television,
          Video, Audio, New Media and Feminism
        </strong>{' '}
        will be held in person at the University of Calgary, Canada on{' '}
        <strong>
          <time dateTime="2023-06-22">June 22 - 24, 2023</time>
        </strong>
        .
      </Content>
      <Content variants={contentVariants}>
        <strong>Console-ing Passions 2023</strong> is organized by Jessalynn
        Keller, Dawn Johnston, Alora Paulsen Mulvey, Annie Rudd, Tamara Shepherd
        and Samantha Thrift from the Department of Communication, Media and Film
        at the University of Calgary.
      </Content>
      <Heading variants={animationVariants}>
        We look forward <Gradient>to seeing you next June!</Gradient>
      </Heading>

      <Footer>
        <Content footer variants={contentVariants}>
          Calgary is located in the traditional territories of the people of the
          Treaty 7 region in Southern Alberta, which includes the Blackfoot
          Confederacy (comprising the Siksika, Piikani, and Kainai First
          Nations), as well as the Tsuut’ina First Nation, and the Stoney Nakoda
          (including the Chiniki, Bearspaw, and Wesley First Nations). The city
          of Calgary is also home to the Métis Nation of Alberta, Region 3.
        </Content>
      </Footer>
    </Container>
  );
};

export default Home;

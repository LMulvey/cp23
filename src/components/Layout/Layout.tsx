import { styled } from '@/stitches';
import NextLink from 'next/link';
import {
  commonAnimationVariants,
  contentVariants,
} from '@/utilities/animation';
import { HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { PageTitle } from '../PageTitle';
import { Content } from '../Typography';
import { BookOpenCheck, Plane, Star } from 'lucide-react';

const Container = styled(motion.div, {
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  padding: '0 $36',
  gap: '$8',
  '@bp2': {
    padding: '0 $124',
  },
});

const Heading = styled(motion.h1, {
  textShadow: '$blue40',
  fontSize: '$18',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1,
  textAlign: 'center',
  '@bp2': {
    textAlign: 'left',
  },
});

const Gradient = styled(motion.span, {
  background: '$pinkGradient',
  backgroundClip: 'text',
  '-webkit-text-fill-color': 'transparent',
});

const Links = styled(motion.div, {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$16',
  justifyContent: 'center',
  alignItems: 'center',
  '@bp2': {
    justifyContent: 'start',
  },
  '@bp3': {
    gap: '$18',
  },
  '@bp4': {
    gap: '$32',
  },
  variants: {
    hasDisabledLinks: {
      true: {
        marginBottom: '$8',
      },
    },
  },
});

const Link = styled(motion.a, {
  color: '#967275',
  textShadow: '$blue40',
  fontSize: '$18',
  fontWeight: '600',
  textAlign: 'center',
  letterSpacing: '-$1',
  lineHeight: 1.2,
  marginTop: '-$12',
  position: 'relative',
  textDecoration: 'none',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  '& svg': {
    marginRight: '$8',
  },

  '&[aria-disabled="true"]': {
    textDecoration: 'line-through',
    position: 'relative',
    color: 'rgba(150, 114, 117, 0.3)',
    pointerEvents: 'none',
    marginBottom: '$8',
    paddingTop: '$8',
  },

  variants: {
    isActive: {
      true: {
        color: '#e18a92',
      },
    },
  },
  '@bp2': {
    textAlign: 'left',
    marginTop: '-$4',
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
    '&:after': {
      left: 0,
      transform: 'scaleX(0)',
      content: '',
      position: 'absolute',
      bottom: '-$8',
      height: '$4',
      transformOrigin: 'center center',
      background: '$yellow',
      boxShadow: '$blue100',
      transition: 'transform 125ms ease-out',
      width: '100%',
    },
  },
});

const LinkDisabled = styled('p', {
  position: 'absolute',
  bottom: '-$16',
  right: 0,
  background: '$pinkGradient2',
  boxShadow: '$blue20',
  color: '$white',
  opacity: 0.8,
  fontSize: '$8',
  textTransform: 'uppercase',
  fontWeight: 700,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$8',
  padding: '$4 $8',
  whiteSpace: 'nowrap',
  '-webkit-backdrop-filter': 'blur(8px)',
  backDropFilter: 'blur(8px)',
});

const ImageContainer = styled(motion.div, {
  '&:hover': {
    cursor: 'pointer',
  },
});

const Navbar = styled(motion.div, {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  padding: '$24 $8',
  height: '100%',
  gap: '$16',
  boxShadow: '$blue40',
  background: '#fdf9df',
  marginBottom: '$32',
  position: 'relative',
  '@bp3': {
    gap: '$8',
    height: '$124',
    padding: '0 $32',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
  },
  '&::before': {
    content: '',
    width: '100vw',
    height: '$8',
    position: 'absolute',
    left: 0,
    bottom: 0,
    background: '$pinkGradient2',
  },
});

const LogoAndLinks = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$24',
  '@bp3': {
    gap: '$72',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
  },
});

const Footer = styled(motion.div, {
  borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  marginTop: '$32',
  paddingTop: '$32',
});

const NavbarInfo = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
});

export const Layout = ({
  title,
  children,
  ...props
}: HTMLMotionProps<'div'> & { title?: string; children: ReactNode }) => {
  const { pathname } = useRouter();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Container {...props}>
      <PageTitle title={title} />

      <Navbar variants={commonAnimationVariants}>
        <LogoAndLinks>
          <NextLink href="/">
            <ImageContainer>
              <Image
                alt="Console-ing Passions logo"
                src="/images/cp-logo.png"
                width="213px"
                height="57px"
                layout="intrinsic"
                priority
              />
            </ImageContainer>
          </NextLink>

          <Links hasDisabledLinks>
            <NextLink href="/" passHref>
              <Link
                aria-label="Console-ing Passions 2023 Homepage"
                isActive={isActive('/')}
                href="/"
              >
                Home
              </Link>
            </NextLink>
            <NextLink href="/plan" passHref>
              <Link
                aria-disabled="true"
                aria-label="Plan Your Trip to Console-ing Passions 2023"
                isActive={isActive('/call')}
                href="/plan"
              >
                <LinkDisabled>Coming Soon</LinkDisabled>
                <Plane />
                Plan Your Trip
              </Link>
            </NextLink>
            <NextLink href="/keynotes" passHref>
              <Link
                aria-disabled="true"
                aria-label="Keynotes attending Console-ing Passions 2023"
                isActive={isActive('/keynotes')}
                href="/keynotes"
              >
                <LinkDisabled>Coming Soon</LinkDisabled>
                <Star />
                Keynotes
              </Link>
            </NextLink>
            <NextLink href="/call-for-papers" passHref>
              <Link
                aria-disabled="true"
                aria-label="Console-ing Passions 2023 Call for Papers Submission"
                isActive={isActive('/call-for-papers')}
                href="/call-for-papers"
              >
                <LinkDisabled>Now Closed</LinkDisabled>
                <BookOpenCheck />
                Call for Papers
              </Link>
            </NextLink>
          </Links>
        </LogoAndLinks>
        <NavbarInfo>
          <Heading css={{ fontSize: '$24' }}>June 22 - 24, 2023</Heading>
          <Heading
            as={motion.a}
            css={{
              textDecoration: 'none',
            }}
            href="https://ucalgary.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gradient>@ University of Calgary</Gradient>
          </Heading>
        </NavbarInfo>
      </Navbar>

      {children}

      <Footer variants={commonAnimationVariants}>
        {/* cSpell:disable */}
        <Content footer variants={contentVariants}>
          Calgary is located in the traditional territories of the people of the
          Treaty 7 region in Southern Alberta, which includes the Blackfoot
          Confederacy (comprising the Siksika, Piikani, and Kainai First
          Nations), as well as the Tsuut&apos;ina First Nation, and the Stoney
          Nakoda (including the Chiniki, Bearspaw, and Wesley First Nations).
          The city of Calgary is also home to the Métis Nation of Alberta,
          Region 3.
        </Content>
        {/* cSpell:enable */}
      </Footer>
    </Container>
  );
};

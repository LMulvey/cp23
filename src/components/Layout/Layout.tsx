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

const Gradient = styled(motion.span, {
  background: '$pinkGradient',
  backgroundClip: 'text',
  '-webkit-text-fill-color': 'transparent',
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
  variants: {
    $isActive: {
      true: {
        '&:after': {
          transform: 'scaleX(1)',
          background: '$white',
        },
        '@bp2': {
          transform: 'scaleX(1)',
          background: '$white',
        },
      },
    },
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

const ImageContainer = styled(motion.div, {
  '&:hover': {
    cursor: 'pointer',
  },
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

      <Navbar>
        <ImageContainer variants={commonAnimationVariants}>
          <NextLink href="/">
            <Image
              alt="Console-ing Passions logo"
              src="/images/cp-logo.png"
              width="427px"
              height="115px"
              layout="intrinsic"
              priority
            />
          </NextLink>
        </ImageContainer>
        <NavbarInfo>
          <Heading variants={commonAnimationVariants}>
            June 22 - 24, 2023<Gradient>.</Gradient>
          </Heading>
          <Heading variants={commonAnimationVariants}>
            Univers<Gradient>ity of Calgary</Gradient>.
          </Heading>
        </NavbarInfo>
      </Navbar>
      <Links variants={commonAnimationVariants}>
        <NextLink href="/call-for-papers" passHref>
          <Link
            aria-label="Console-ing Passions 2023 Call for Papers Submission"
            $isActive={isActive('/call-for-papers')}
            href="/call-for-papers"
          >
            🔖 The Call for Papers opens on October 17, 2022
          </Link>
        </NextLink>
        {/* <LinkDivider />
        <Link>🤔 FAQ</Link> */}
      </Links>
      {children}
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

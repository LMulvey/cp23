import { keyframes, styled } from '@/stitches';
import NextLink from 'next/link';
import {
  commonAnimationVariants,
  contentVariants,
  navbarVariants,
} from '@/utilities/animation';
import { HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, ReactNode } from 'react';
import { PageTitle } from '../PageTitle';
import { Content } from '../Typography';
import { Component as ConferenceIcon, Plane, UserCheck } from 'lucide-react';
import { pxToRem } from '@/utilities/pxToRem';

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
  fontSize: '$14',
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

const LinkTag = styled('p', {
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
  marginLeft: '$8',
});

const ImageContainer = styled(motion.div, {
  position: 'relative',
  width: pxToRem(250),
  height: pxToRem(94),
  '&:hover': {
    cursor: 'pointer',
  },
});

const NavbarGradient = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
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
  marginBottom: '$24',
  position: 'relative',
  '@bp3': {
    marginBottom: '$72',
    gap: '$8',
    height: '$124',
    padding: '0 $32',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
  },

  '& svg': {
    height: '$24',
    width: '$24',
  },
});

const NavbarBorder = styled(motion.div, {
  width: '100vw',
  height: '$8',
  position: 'absolute',
  left: 0,
  bottom: 0,
  backgroundSize: '400% 400% !important',
  background: '$white',
  backgroundImage: '$pinkGradient2',
  animation: `${NavbarGradient} 4s ease infinite`,
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
  margin: '$32 0',
  paddingTop: '$32',
});

const NavbarInfo = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
});

const Breadcrumbs = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: '0',
  fontSize: '$14',
  marginBottom: '$32',
  textAlign: 'left',
  width: '100%',
  color: '$pink2',
  '& a': {
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  '@bp2': {
    gap: '$4',
    fontSize: '$16',
  },
});

const BreadcrumbDivider = styled('span', {
  margin: '0 $8',
  color: '$defaultFont',
});

type Segment = {
  title: string;
  href: string;
};

const getSegments = (pathname: string) => {
  const segments = pathname.split('/').filter((segment) => segment !== '');
  const titleCaseSegments = segments.reduce((acc, segment) => {
    const href =
      acc.length === 0
        ? `/${segment}`
        : `${acc?.[acc.length - 1]?.href}/${segment}`;

    return [
      ...acc,
      {
        title: segment
          .split('-')
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join(' '),
        href,
      },
    ];
  }, [] as Segment[]);

  return titleCaseSegments;
};

export const Layout = ({
  title,
  children,
  ...props
}: HTMLMotionProps<'div'> & { title?: string; children: ReactNode }) => {
  const { pathname } = useRouter();
  const segments = getSegments(pathname);
  const isActive = (path: string) => {
    return path.length > 1 ? pathname.includes(path) : pathname === path;
  };

  return (
    <Container {...props}>
      <PageTitle title={title} />
      <Navbar variants={navbarVariants}>
        <LogoAndLinks>
          <NextLink href="/">
            <ImageContainer>
              <Image
                alt="Console-ing Passions logo"
                src="/images/cp-logo-2023.svg"
                layout="fill"
                objectFit="contain"
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
            <NextLink href="/plan-your-trip" passHref>
              <Link
                aria-label="Plan Your Trip to Console-ing Passions 2023"
                isActive={isActive('/plan-your-trip')}
                href="/plan-your-trip"
              >
                <Plane />
                Plan Your Trip
                <LinkTag>UPDATED!</LinkTag>
              </Link>
            </NextLink>
            <NextLink href="/conference" passHref>
              <Link
                aria-label="Console-ing Passions 2023 Conference Info"
                isActive={isActive('/conference')}
                href="/conference"
              >
                <ConferenceIcon />
                Conference Information
                <LinkTag>NEW!</LinkTag>
              </Link>
            </NextLink>

            <Link
              as="a"
              aria-label="Console-ing Passions 2023 Registration via CVent"
              href="https://eur.cvent.me/mnQQa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserCheck />
              Register
              <LinkTag>Closes June 11th!</LinkTag>
            </Link>
          </Links>
        </LogoAndLinks>
        <NavbarInfo>
          <Heading css={{ fontSize: '$22' }}>June 22 - 24, 2023</Heading>
          <Heading
            as={motion.a}
            css={{
              textDecoration: 'none',
            }}
            href="https://ucalgary.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gradient>University of Calgary</Gradient>
          </Heading>
        </NavbarInfo>
        <NavbarBorder />
      </Navbar>

      {pathname === '/' ? null : (
        <Breadcrumbs>
          {[{ title: 'Home', href: '/' }, ...segments].map(
            ({ title, href }, index) => (
              <Fragment key={`breadcrumb-link-${title}`}>
                {index === segments.length ? (
                  <p>{title}</p>
                ) : (
                  <NextLink href={href}>{title}</NextLink>
                )}
                {index < segments.length && (
                  <BreadcrumbDivider>/</BreadcrumbDivider>
                )}
              </Fragment>
            )
          )}
        </Breadcrumbs>
      )}

      {children}
      <Footer variants={commonAnimationVariants}>
        {/* cSpell:disable */}
        <Content footer variants={contentVariants}>
          The University of Calgary, located in the heart of Southern Alberta,
          both acknowledges and pays tribute to the traditional territories of
          the peoples of Treaty 7, which include the Blackfoot Confederacy
          (comprised of the Siksika, the Piikani, and the Kainai First Nations),
          the Tsuut&apos;ina First Nation, and the Stoney Nakoda (including
          Chiniki, Bearspaw, and Goodstoney First Nations). The City of Calgary
          is also home to the Métis Nation of Alberta Region 3.
        </Content>
        {/* cSpell:enable */}
      </Footer>
    </Container>
  );
};

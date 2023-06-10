import { Layout } from '@/components/Layout';
import { Content, Heading } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import { FileHeart, Film, Star } from 'lucide-react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Grid = styled('div', {
  display: 'flex',
  gap: '$8',
  width: '100%',
  '@bp0': {
    flexFlow: 'row wrap',
    padding: '0',
  },
  '@bp2': {
    flexFlow: 'row nowrap',
    padding: '0 $48',
  },
});

const GridItem = styled('a', {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  gap: '$32',
  textAlign: 'center',
  borderRadius: '$8',
  boxShadow: 'none',
  background: 'rgba(255, 255, 255, 0.44)',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 175ms ease-in',
  transitionProperty: 'box-shadow, transform, background, color',
  fontWeight: 700,
  textDecoration: 'none',

  '@bp0': {
    width: ' 100%',
    padding: '$8',
    fontSize: '$18',
  },

  '@bp2': {
    padding: '$16 $32',
    fontSize: '$24',
  },

  '&:hover': {
    boxShadow: '$basic10',
    transform: 'scale(1.002)',
  },
  '@supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent)':
    {
      '& p': {
        background: '$pinkGradient',
        '-webkit-text-fill-color': 'transparent',
        backgroundSize: '400% 400%',
        backgroundClip: 'text',
      },
    },
});

const Conference: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Conference Information"
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
      <Heading
        css={{ textAlign: 'left', width: '100%' }}
        variants={commonAnimationVariants}
      >
        Console-ing Passions 2023 Conference Information
      </Heading>
      <Content css={{ textAlign: 'left' }}>
        We are excited to welcome you to Calgary, Alberta, Canada for{' '}
        <strong>Console-ing Passions 2023</strong>. Below, you can find
        information on the conference&apos;s program, keynotes, and additional
        events!
      </Content>
      <Grid>
        <GridItem
          aria-label="Console-ing Passions 2023 Program"
          href="https://www.openconf.org/consoleingpassions2023/openconf.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileHeart size={48} />
          <p>Program</p>
        </GridItem>
        <Link
          aria-label="Keynotes attending Console-ing Passions 2023"
          href="/keynotes"
        >
          <GridItem>
            <Star size={48} />
            <p>Keynotes</p>
          </GridItem>
        </Link>
        <GridItem
          aria-label="Analogue Revolution Screening"
          href="/files/analogue-revolution-screening-v1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Film size={48} />
          <p>Analogue Revolution</p>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Conference;

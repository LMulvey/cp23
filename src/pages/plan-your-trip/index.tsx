import { Layout } from '@/components/Layout';
import { Content, Heading } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import { BedDouble } from 'lucide-react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$8',
});

const GridItem = styled('a', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$8',
  textAlign: 'center',
  padding: '$32 $16',
  borderRadius: '$8',
  boxShadow: '$basic10',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 120ms ease-in',
  transitionProperty: 'box-shadow, transform, background, color',
  fontSize: '$24',
  fontWeight: 700,
  textDecoration: 'none',
  '@supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent)':
    {
      background: '$pinkGradient',
      '-webkit-text-fill-color': 'transparent',
      backgroundSize: '400% 400%',
      backgroundClip: 'text',
    },
  '&:hover': {
    color: '#f981b5',
    boxShadow: '$basic24',
    transform: 'scale(1.009)',
    backgroundPosition: '0% 100%',
  },
});

const Plan: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Plan Your Trip"
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
        Attending Console-ing Passions 2023?
      </Heading>
      <Content css={{ textAlign: 'left' }}>
        We are excited to welcome you to Calgary, Alberta, Canada for{' '}
        <strong>Console-ing Passions 2023</strong>. We are currently working on
        the details of the conference and will update this page with more
        information as it becomes available.
      </Content>
      <Grid>
        <Link href="/plan-your-trip/accommodations" passHref>
          <GridItem>
            <BedDouble />
            Accommodations
          </GridItem>
        </Link>
      </Grid>
    </Layout>
  );
};

export default Plan;

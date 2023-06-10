import { Layout } from '@/components/Layout';
import { Content, Heading } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import { BedDouble, Building2, Car, DollarSign } from 'lucide-react';
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
        <Link href="/plan-your-trip/campus" passHref>
          <GridItem>
            <Building2 size={48} />
            <p>Campus</p>
          </GridItem>
        </Link>
        <Link href="/plan-your-trip/student-travel-grants" passHref>
          <GridItem>
            <DollarSign size={48} />
            <p>Travel Grants</p>
          </GridItem>
        </Link>
        <Link href="/plan-your-trip/accommodations" passHref>
          <GridItem>
            <BedDouble size={48} />
            <p>Accommodations</p>
          </GridItem>
        </Link>
        <Link href="/plan-your-trip/transportation" passHref>
          <GridItem>
            <Car size={48} />
            <p>Transportation</p>
          </GridItem>
        </Link>
      </Grid>
    </Layout>
  );
};

export default Plan;

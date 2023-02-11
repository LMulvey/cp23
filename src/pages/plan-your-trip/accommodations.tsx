import { Layout } from '@/components/Layout';
import { Content, HeadingMid, Heading } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';

const ComingSoon = styled('span', {
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
  width: '100%',
  '@bp2': {
    flexFlow: 'row nowrap',
    padding: '$8 $16',
    width: 'auto',
  },
});

const ModifiedHeadingMid = styled(HeadingMid, {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$8',
  '@bp2': {
    flexFlow: 'row nowrap',
  },
});

const Accommodations: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Accommodations"
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
        Booking accommodation for Console-ing Passions 2023
      </Heading>
      <Content css={{ textAlign: 'left' }}>
        Calgary is a large city with many hotels and other accommodation
        options. We have gathered a wide-variety of accommodation options for
        you to choose from.
      </Content>

      <ModifiedHeadingMid variants={commonAnimationVariants}>
        On-Campus Accommodations <ComingSoon>More Info Coming Soon</ComingSoon>
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left' }}>
        There are limited on-campus accommodations available for Console-ing
        Passions 2023 within walking distance to the conference venue.{' '}
        <strong>
          These special reservation rates cut off <u>May 19th, 2023</u>. There
          is a minimum of two night stay required.
        </strong>
      </Content>

      <ModifiedHeadingMid variants={commonAnimationVariants}>
        Nearby Campus Budget Hotels{' '}
        <ComingSoon>More Info Coming Soon</ComingSoon>
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left' }}>
        These hotels are located in the “hotel village” near the university
        campus. They are basic and budget friendly, with many serving
        complimentary breakfast. They are located right across from the Banff
        Trail C-Train (LRT) station, which you can take to campus.
      </Content>

      <ModifiedHeadingMid variants={commonAnimationVariants}>
        Boutique Hotels/B&Bs <ComingSoon>More Info Coming Soon</ComingSoon>
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left' }}>
        These hotels are the “hip” hotels in Calgary, located in trendy
        neighbourhoods and close to restaurants, bars, and craft breweries. Many
        of them are also very close to the Bow River, which offers great cycling
        and walking trails. With the exception of Hotel Arts Kensington, you
        will need a car to get to campus (10-15 minute drive).
      </Content>
    </Layout>
  );
};

export default Accommodations;

import { Layout } from '@/components/Layout';
import {
  Content,
  HeadingMid,
  Heading,
  HeadingSm,
} from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';
import Image from 'next/image';

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
  '@bp3': {
    flexFlow: 'row nowrap',
    padding: '$8 $16',
    width: 'auto',
  },
});

const ModifiedHeadingMid = styled(HeadingMid, {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$8',
  '@bp3': {
    flexFlow: 'row nowrap',
  },
});

const AccommodationColumn = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$8',
  width: '100%',
  marginBottom: '$32',
  padding: 0,
});

const AccommodationGrid = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$16',
  marginBottom: '$32',
});

const MiniAccommodationCard = styled('a', {
  position: 'relative',
  width: '320px',
  height: '220px',
  background:
    'linear-gradient($pageBackground, $pageBackground) padding-box, $pinkGradient2 border-box',
  borderRadius: '$8',
  border: '2px solid transparent',
  transition: 'transform 0.2s ease-in-out',
  transitionProperty: 'transform, box-shadow',
  '& > *': {
    borderRadius: '6px',
  },
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '$blue20',
  },

  '@bp3': {
    width: '400px',
    height: '276px',
  },
});

const AccommodationCardDetails = styled('div', {
  color: '$white',
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0, 0.6)',
  padding: '$8',
  fontSize: '$18',
  fontWeight: 700,
  width: '100%',
  zIndex: 1,
});

const AccommodationDetailCard = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  background:
    'linear-gradient($pageBackground, $pageBackground) padding-box, $pinkGradient2 border-box',
  borderRadius: '$8',
  border: '2px solid transparent',
  height: '100%',
  '@bp3': {
    height: '250px',
    flexFlow: 'row nowrap',
  },
});

const AccommodationDetails = styled('div', {
  flexGrow: 1,
  padding: '$8',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$8',
  justifyContent: 'center',
  '@bp3': {
    padding: '$32',
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  height: '244px',
  borderRadius: '6px 6px 0 0',
  '@bp3': {
    height: 'auto',
    width: '30%',
    borderRadius: '6px 0 0 6px',
  },
});

const Divider = styled('div', {
  width: '100%',
  height: '2px',
  borderRadius: '$8',
  background: '$defaultFont',
  marginBottom: '$40',
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
        On-Campus Accommodations
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left', marginBottom: '$32' }}>
        There are limited on-campus accommodations available for Console-ing
        Passions 2023 within walking distance to the conference venue.{' '}
        <strong>
          These special reservation rates cut off <u>May 19th, 2023</u>. There
          is a minimum two night stay required.
        </strong>
      </Content>

      <AccommodationColumn>
        <AccommodationDetailCard>
          <ImageContainer>
            <Image
              alt="International House"
              src="/images/hotel-alma.jpg"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <AccommodationDetails>
            <a
              href="https://ucalgary.starrezhousing.com/StarRezConferenceX/"
              target="_blank"
              rel="noreferrer"
            >
              <HeadingSm>International House</HeadingSm>
            </a>

            <Content
              css={{
                textAlign: 'left',
                marginBottom: '0',
                fontSize: '$14',
                '& em': { fontSize: '0.95rem' },
                '@bp2': {
                  fontSize: '$18',
                },
              }}
            >
              Single Standard Rooms, International House -{' '}
              <strong>$89 per night</strong>, single/double
              <br />
              One-bedroom Suite, International House -{' '}
              <strong>$129 per night</strong>, single/double
              <br />
              Two-bedroom Suite, International House -{' '}
              <strong>$93 per night</strong>, single/double
              <br />
              <em>
                Rates are subject to 3% Room Fee, 4% Alberta Tourism Levy and 5%
                Goods and Services Tax (total 12.27%).
              </em>
            </Content>
          </AccommodationDetails>
        </AccommodationDetailCard>
      </AccommodationColumn>

      <Content css={{ textAlign: 'left' }}>
        <strong>To book your stay, use</strong>{' '}
        <a
          href="https://ucalgary.starrezhousing.com/StarRezConferenceX/"
          target="_blank"
          rel="noreferrer"
        >
          the University of Calgary&apos;s Conference StarRez Portal
        </a>
        .
        <br />
        <br />
        Please select the <strong>BOOK YOUR STAY - Accommodations</strong> tab
        and enter Booking Code <strong>CONSOLP23</strong> and{' '}
        <strong>Apply Code</strong> in order to book these special rates.
        <br />
        <br />
        <strong>
          First night room and tax deposit due at time of booking.
        </strong>
        <br />
        <br />
        For any questions, changes or cancellations, please contact{' '}
        <a href="mailto:stay@ucalgary.ca?subject=CP23 Accommodations Questions">
          stay@ucalgary.ca
        </a>
        .<br />
        <br />
        For detailed room descriptions and additional information, please{' '}
        <a
          href="/files/cp-2023-international-house-booking-information.pdf"
          target="_blank"
        >
          click here
        </a>
        .
      </Content>

      <Divider />

      <ModifiedHeadingMid variants={commonAnimationVariants}>
        Nearby Campus Budget Hotels
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left' }}>
        These hotels are located in the “hotel village” near the university
        campus. They are basic and budget friendly, with many serving
        complimentary breakfast. They are located right across from the{' '}
        <strong>Banff Trail C-Train (LRT) station</strong>, which you can take
        to campus.
      </Content>

      <AccommodationGrid>
        <MiniAccommodationCard
          href="https://www.marriott.com/en-us/hotels/yycul-aloft-calgary-university/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Aloft Calgary University
          </AccommodationCardDetails>
          <Image
            alt="Aloft Calgary University"
            src="/images/hotel-aloft.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>
        <MiniAccommodationCard
          href="https://www.hilton.com/en/hotels/yychshx-hampton-suites-calgary-university-northwest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Hampton Inn & Suites Calgary University
          </AccommodationCardDetails>
          <Image
            alt="Hampton Inn & Suites Calgary University"
            src="/images/hotel-hampton.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>
        <MiniAccommodationCard
          href="https://www.hilton.com/en/hotels/yychshx-hampton-suites-calgary-university-northwest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Holiday Inn Express and Suites
          </AccommodationCardDetails>
          <Image
            alt="Holiday Inn Express and Suites"
            src="/images/hotel-holiday.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>
      </AccommodationGrid>

      <Divider />

      <ModifiedHeadingMid variants={commonAnimationVariants}>
        Boutique Hotels/B&Bs
      </ModifiedHeadingMid>
      <Content css={{ textAlign: 'left' }}>
        These hotels are the “hip” hotels in Calgary, located in trendy
        neighbourhoods and close to restaurants, bars, and craft breweries. Many
        of them are also very close to the Bow River, which offers great cycling
        and walking trails. With the exception of Hotel Arts Kensington, you
        will need a car to get to campus (10-15 minute drive).
      </Content>
      <AccommodationGrid>
        <MiniAccommodationCard
          href="https://www.hotelartskensington.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Hotel Arts Kensington
          </AccommodationCardDetails>
          <Image
            alt="Hotel Arts Kensington"
            src="/images/hotel-arts-kensington.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>

        <MiniAccommodationCard
          href="https://www.hotelarts.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Hotel Arts Downtown
          </AccommodationCardDetails>
          <Image
            alt="Hotel Arts Downtown"
            src="/images/hotel-arts-downtown.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>

        <MiniAccommodationCard
          href="https://www.germainhotels.com/en/alt-hotel/calgary-east-village"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Alt Hotel East Village
          </AccommodationCardDetails>
          <Image
            alt="Alt Hotel East Village"
            src="/images/hotel-alt.jpg"
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>

        <MiniAccommodationCard
          href="https://www.inglewoodbedandbreakfast.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AccommodationCardDetails>
            Inglewood Bed & Breakfast
          </AccommodationCardDetails>
          <Image
            alt="Inglewood Bed & Breakfast"
            // cSpell:disable
            src="/images/hotel-bedandbreakfast.jpg"
            // cSpell:enable
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>

        <MiniAccommodationCard
          href="https://westmountriverinn.hotelsalberta.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* cSpell:disable */}
          <AccommodationCardDetails>
            Westmount River Inn
          </AccommodationCardDetails>
          <Image
            alt="Westmount River Inn"
            src="/images/hotel-riverinn.jpg"
            // cSpell:enable
            layout="fill"
            objectFit="cover"
          />
        </MiniAccommodationCard>
      </AccommodationGrid>
    </Layout>
  );
};

export default Accommodations;

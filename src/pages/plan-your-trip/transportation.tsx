import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';
import Link from 'next/link';

const Transportation: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Transportation"
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
        css={{ textAlign: 'left', width: '100%', marginBottom: '$32' }}
        variants={commonAnimationVariants}
      >
        Transportation options for Console-ing Passions 2023
      </Heading>

      <Link href="#arriving-in-calgary">
        <HeadingMid
          id="arriving-in-calgary"
          css={{ textAlign: 'left', '&:hover': { cursor: 'pointer' } }}
        >
          🛬 Arriving in Calgary
        </HeadingMid>
      </Link>
      <Content css={{ textAlign: 'left' }}>
        Most conference participants will arrive through Calgary International
        Airport (YYC), which is located in the northeastern part of the city.
        International visitors will most likely clear Canadian customs in the
        Calgary airport. Please be sure to check the{' '}
        <a
          aria-label="View the latest Government of Canada Entry Requirements"
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Government of Canada entry requirements
        </a>{' '}
        before your trip in order to be prepared with the necessary information
        if you&apos;re coming from outside of Canada.
      </Content>
      <Content css={{ textAlign: 'left' }}>
        We recommend taking a cab or an Uber from the airport to your
        accommodation. A taxi into central Calgary will generally be between $30
        - $40 CAD, with an Uber usually being slightly less. Taxi stands can be
        found outside of both domestic and international arrival terminals.
        While there is bus service that connects the airport to parts of
        Calgary, it will be a slow process and we don&apos;t recommend it.
      </Content>
      <Link href="#getting-around-calgary">
        <HeadingMid
          id="getting-around-calgary"
          css={{ textAlign: 'left', '&:hover': { cursor: 'pointer' } }}
        >
          🚶‍♀️ Getting around Calgary
        </HeadingMid>
      </Link>
      <Content css={{ textAlign: 'left' }}>
        The easiest way to get around Calgary is by car &mdash; either a rented
        one or a taxi/Uber. There are some{' '}
        <a
          aria-label="View Calgary's Public Transportation Options"
          href="https://www.calgarytransit.com/home.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          public transportation options
        </a>{' '}
        too, the most convenient option being the LRT (“C-train”) which has a
        stop at the UCalgary campus (Red Line &mdash; University Station), as
        well as stops in trendy neighbourhoods such as Kensington/Sunnyside (Red
        Line &mdash; Sunnyside Station) and the East Village (Red Line/Blue Line
        &mdash; Centre Street Station). Please note that the C-train does not go
        to the airport.
      </Content>
      <Content css={{ textAlign: 'left' }}>
        Calgary has a large network of{' '}
        <a
          aria-label="View Calgary's Extensive Walking & Biking Pathway System"
          href="https://www.calgary.ca/bike-walk-roll/pathways.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          walking and biking trails
        </a>
        . If you have the time we recommend using the Bow River Pathway as a
        great way to see the city. The pathway runs through (or close to)
        several central Calgary neighbourhoods that line the Bow River,
        including Kensington/Sunnyside, Bridgeland, East Village, and Inglewood.
        All of these neighbourhoods have fantastic restaurants, bars, and shops
        to explore.
      </Content>
      <Link href="#beyond-calgary">
        <HeadingMid
          id="beyond-calgary"
          css={{ textAlign: 'left', '&:hover': { cursor: 'pointer' } }}
        >
          🏔️ Beyond Calgary
        </HeadingMid>
      </Link>
      <Content css={{ textAlign: 'left' }}>
        There are several shuttle options that connect Calgary to Banff,
        Kananaskis, and Lake Louise. These offer the convenience of not having
        to worry about parking in these very popular resorts, which is extremely
        limited. However, for any other trips outside of the city, you&apos;ll
        need to rent a car.
      </Content>
    </Layout>
  );
};

export default Transportation;

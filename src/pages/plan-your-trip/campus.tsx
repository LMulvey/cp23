import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';

const Campus: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Student Travel Grants"
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
        📍 Conference Location
      </Heading>

      <Content css={{ textAlign: 'left' }}>
        All conference panels and keynotes will be held at the{' '}
        <a
          href="https://www.google.com/maps/place/Taylor+Institute+for+Teaching+and+Learning/@51.0786384,-114.1318703,18.61z/data=!4m6!3m5!1s0x53716f0933088fa3:0xdd5524b44a9010a7!8m2!3d51.0790518!4d-114.1315614!16s%2Fg%2F11c54gbc3h?entry=ttu"
          rel="noreferrer noopener"
          target="_blank"
        >
          Taylor Institute for Teaching and Learning
        </a>{' '}
        (TI) at the University of Calgary.{' '}
        <em>Analogue Revolution: How Feminist Media Changed the World</em> will
        screen in the Gallery Hall on the main floor of the{' '}
        <a
          href="https://ucalgary-gs.maps.arcgis.com/apps/webappviewer/index.html?id=2e1817b41cb64815a50f617593aabf4e"
          target="_blank"
          rel="noreferrer noopener"
        >
          Taylor Family Digital Library
        </a>
        . The University of Calgary&apos;s interactive map is a great resource
        for finding amenities around campus. Over the summer, some businesses
        and vendors are operating on reduced hours.
      </Content>

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
        }}
      >
        ☕️ Coffee
      </HeadingMid>
      <Content css={{ textAlign: 'left', marginBottom: '$24' }}>
        If you are looking for a morning (afternoon) coffee, we recommend:
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>Good Earth Coffee, Taylor Family Digital Library</strong>
        <br />
        Monday to Friday, 8:00 am to 4:00 pm
        <br />
        Weekends, 10:30 am to 4:00 pm
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>Good Earth Coffee, ICT Building</strong>
        <br />
        Monday to Friday, 7:00 am to 4:00 pm
        <br />
        <u>Closed weekends</u>
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>Starbucks, MacEwan Hall</strong>
        <br />
        Monday to Friday, 8:00 am to 4:00 pm
        <br />
        <u>Closed weekends</u>
      </Content>

      <HeadingMid
        css={{
          textAlign: 'left',
          marginTop: '$40',
          '&:hover': { cursor: 'pointer' },
        }}
      >
        🍽️ Dining
      </HeadingMid>
      <Content css={{ textAlign: 'left', marginBottom: '$24' }}>
        The{' '}
        <a
          href="https://ucalgary-gs.maps.arcgis.com/apps/webappviewer/index.html?id=2e1817b41cb64815a50f617593aabf4e"
          target="blank"
          rel="noreferrer noopener"
        >
          MacEwan Student Centre (Mac Hall)
        </a>{' '}
        is situated opposite the Taylor Institute. It offers a variety of
        quick-service, take-out dining choices. There are two on-campus bars
        that offer sit-down dining options, including patios!
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>Last Defence Lounge, MacEwan Student Centre</strong> (3rd floor)
        <br />
        Monday to Wednesday, 11:30 am to 3:00 pm
        <br />
        Thursday and Friday, 11:30 am to 7:00 pm
        <br />
        <u>Closed weekends</u>
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>The Den and Black Lounge, MacEwan Student Centre</strong> (lower
        level)
        <br />
        Monday to Friday, 11:00 am to 3:00 pm
        <br />
        <u>Closed weekends</u>
      </Content>
    </Layout>
  );
};

export default Campus;

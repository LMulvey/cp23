import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';
import '@typeform/embed/build/css/widget.css';

const Coffee = [
  { title: 'Analog (Beltline)', url: 'https://www.analogcoffee.ca' },
  {
    title: 'Black Sheep Patisserie (Beltline)',
    url: 'https://www.black-sheep.ca',
  },
  { title: 'Deville Coffee (Kensington)', url: 'https://www.devillecoffee.ca' },
  {
    title: 'Oolong Tea Shop (Kensington)',
    url: 'https://www.oolongteashop.ca',
  },
  {
    title: 'Sidewalk Citizen Bakery (East Village)',
    url: 'https://www.sidewalkcitizenbakery.com',
  },
  {
    title: 'Phil & Sebastian (East Village, Bridgeland, Mission, etc)',
    url: 'https://philsebastian.com',
  },
  {
    title: 'Monogram Coffee (University District, Downtown, etc)',
    url: 'https://monogramcoffee.com',
  },
];

const Restaurants = [
  { title: 'Ari Sushi (Inglewood)', url: 'https://arisushi.ca' },
  { title: 'Bridgette Bar (Beltline)', url: 'https://www.bridgettebar.com' },
  {
    title: 'Calcutta Cricket Club (Beltline)',
    url: 'https://www.calcuttacricketclub.com',
  },
  { title: 'Charbar (East Village)', url: 'https://www.charbar.ca' },
  { title: 'Hayden Block (Kensington)', url: 'https://www.haydenblockyyc.com' },
  {
    title: "Juree's Thai Place Restaurant (16th Ave near 'hotel village')",
    url: 'https://www.jureesthaiplace.com/juree-s-thai-place-restaurant',
  },
  {
    title: 'OEB Breakfast Co. (University District, Bridgeland)',
    url: 'https://eatoeb.com',
  },
  { title: 'Ten Foot Henry (Beltline)', url: 'https://www.tenfoothenry.com' },
  {
    title: "The Artist Lounge (Capitol Hill, near 'hotel village')",
    url: 'https://www.theartistlounge.ca',
  },
  {
    title: 'Una Pizza + Wine (Bridgeland, Beltline)',
    url: 'https://unapizzeria.com',
  },
  {
    title: 'Wine Bar Kensington (Kensington)',
    url: 'https://www.winebarkensington.com',
  },
];

const FoodHalls = [
  { title: 'First Street Market (Beltline)', url: 'https://fsmyyc.com' },
  {
    title: 'The District at Beltline (Beltline)',
    url: 'https://thedistrictbeltline.com/food-and-drink/',
  },
];

const IceCream = [
  {
    title: 'Made By Marcus (Beltline, Bridgeland Hillhurst, etc)',
    url: 'https://madebymarcus.ca',
  },
  {
    title: 'Village Ice Cream (University District, Bridgeland, etc)',
    url: 'https://villageicecream.com',
  },
];

const Vegan = [
  {
    title: 'Greenfish (in The District at Beltline)',
    url: 'https://www.greenfishsushi.com',
  },
  {
    title: 'Tamarind Vietnamese Grill & Noodle House (Beltline)',
    url: 'https://www.tamarindyyc.ca',
  },
  { title: 'The Coup (Beltline)', url: 'https://thecoup.ca' },
  { title: 'Vegan Street (Inglewood)', url: 'https://www.veganstreet.ca' },
];

const CalgaryDining: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Calgary Dining"
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
        Calgary Eats & Drinks
      </Heading>

      <Content css={{ textAlign: 'left' }}>
        See the below list for some of our favorite places to eat and drink
        around the city. Most of the below are very central, with the
        neighbourhood in brackets. Enjoy!
      </Content>

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
        }}
      >
        ☕️ Coffee/Bakery/Causal
      </HeadingMid>
      {Coffee.map(({ url, title }) => (
        <Content
          small
          css={{ textAlign: 'left', marginBottom: '$4', marginLeft: '$8' }}
        >
          {title}:{' '}
          <a aria-label={title} href={url}>
            {url}
          </a>
        </Content>
      ))}

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
          marginTop: '$24',
        }}
      >
        🍽️ Restaurants
      </HeadingMid>
      {Restaurants.map(({ url, title }) => (
        <Content
          small
          css={{ textAlign: 'left', marginBottom: '$4', marginLeft: '$8' }}
        >
          {title}:{' '}
          <a aria-label={title} href={url}>
            {url}
          </a>
        </Content>
      ))}

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
          marginTop: '$24',
        }}
      >
        🍱 Food Halls
      </HeadingMid>
      {FoodHalls.map(({ url, title }) => (
        <Content
          small
          css={{ textAlign: 'left', marginBottom: '$4', marginLeft: '$8' }}
        >
          {title}:{' '}
          <a aria-label={title} href={url}>
            {url}
          </a>
        </Content>
      ))}

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
          marginTop: '$24',
        }}
      >
        🍦 Ice Cream
      </HeadingMid>
      {IceCream.map(({ url, title }) => (
        <Content
          small
          css={{ textAlign: 'left', marginBottom: '$4', marginLeft: '$8' }}
        >
          {title}:{' '}
          <a aria-label={title} href={url}>
            {url}
          </a>
        </Content>
      ))}

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
          marginTop: '$24',
        }}
      >
        🍃 Vegan
      </HeadingMid>
      {Vegan.map(({ url, title }) => (
        <Content
          small
          css={{ textAlign: 'left', marginBottom: '$4', marginLeft: '$8' }}
        >
          {title}:{' '}
          <a aria-label={title} href={url}>
            {url}
          </a>
        </Content>
      ))}
    </Layout>
  );
};

export default CalgaryDining;

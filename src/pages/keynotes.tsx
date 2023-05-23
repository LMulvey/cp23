import { Layout } from '@/components/Layout';
import { Content, Heading } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';
import Image from 'next/image';

const Grid = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$32',
  width: '100%',
});

const GridItem = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'start',
  gap: '$32',
  textAlign: 'center',
  padding: '$16 $32',
  borderRadius: '$8',
  boxShadow: 'none',
  transition: 'box-shadow 175ms ease-in',
  transitionProperty: 'box-shadow, transform, background, color',
  fontSize: '$24',
  fontWeight: 700,
  textDecoration: 'none',
  width: '100%',
  '@bp3': {
    flexFlow: 'row nowrap',
  },

  variants: {
    flipOnMobile: {
      true: {
        flexFlow: 'column-reverse nowrap',
        '@bp3': {
          flexFlow: 'row nowrap',
        },
      },
    },
  },
});

const NameAndBio = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  width: '100%',
  gap: '$8',
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  height: '$264',
  borderRadius: '$8',
  '@bp3': {
    width: '50%',
  },
});

const Talk = styled('div', {
  '@bp0': {
    width: '100%',
  },
  '@bp2': {
    width: '80%',
  },
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '$8',
  padding: '$16',
  margin: '-$72 auto $32 auto',

  '& h2': {
    fontWeight: 700,
    fontSize: '$24',
    marginBottom: '$8',
  },

  '& > *': {
    textAlign: 'left',
    padding: 0,
    margin: 0,
  },
});

const Keynotes: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Keynotes"
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
        Keynotes
      </Heading>
      <Content css={{ textAlign: 'left', width: '100%' }}>
        We are pleased to announce our keynote speakers for 2023! We are excited
        to have them join us for this year&apos;s conference.
      </Content>
      <Grid>
        <GridItem>
          <ImageContainer>
            <Image
              alt="Dr. Sarah Sharma"
              src="/images/keynotes/sarah.webp"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <NameAndBio>
            <Heading css={{ textAlign: 'left', color: '$pink2' }}>
              Dr. Sarah Sharma
            </Heading>
            <Content css={{ textAlign: 'left' }} small>
              Sarah Sharma is Associate Professor of Media Theory and Director
              of the Institute of Communication, Culture, Information and
              Technology (ICCIT) at the University of Toronto. She is the author
              of <em>In the Meantime: Temporality and Cultural Politics</em>{' '}
              (Duke UP, 2014). This book challenges the popular sentiment that
              the world is &ldquo;speeding up&rdquo; and locates instead how
              temporality operates as a key relation of power structured at the
              intersection of a range of social differences and technologies.
              Her edited volume (with Rianka Singh){' '}
              <em>
                Re-Understanding Media: Feminist Extensions of Marshall McLuhan
              </em>{' '}
              (Duke UP 2022) highlights her time as director of the McLuhan
              Centre between 2017-2022 and retrieves a feminist version of
              &ldquo;the medium is the message.&rdquo; Sarah is currently
              working on a new book (tentatively titled To Be Determined) which
              advances a techno-feminist media theory to account for Big Tech
              and the gendered politics of utility, exit and repair.
            </Content>
          </NameAndBio>
        </GridItem>
        <Talk>
          <Content>
            <h2>Title & Abstract TBD</h2>
            {/* <Content css={{ textAlign: 'left' }} small>
                ABSTRACT
              </Content> */}
            <strong>
              Thursday, June 22
              <br />
              10:30 am - 12:00 pm
            </strong>
            <br />
            The Forum, Taylor Institute for Teaching and Learning
          </Content>
        </Talk>
        <GridItem flipOnMobile>
          <NameAndBio>
            <Heading css={{ textAlign: 'left', color: '$pink2' }}>
              Dr. Simidele Dosekun
            </Heading>
            <Content css={{ textAlign: 'left' }} small>
              Simidele Dosekun is Assistant Professor in Media and
              Communications in the Department of Media and Communications at
              the London School of Economics and Political Science. Her research
              centres black African women, and their participation in popular,
              media and consumer cultures, to explore questions of subjectivity,
              inequality and power in the context of globalisation. She is the
              author of Fashioning Postfeminism: Spectacular Femininity and
              Transnational Culture (University of Illinois Press, 2020), and
              co-editor of African Luxury: Aesthetics and Politics (Intellect
              Books, 2019). She is currently researching a burgeoning, women-led
              and -centered Nigerian Pentecostal self-help scene. She has a PhD
              in Gender and Cultural Studies from King&apos;s College London.
            </Content>
          </NameAndBio>
          <ImageContainer>
            <Image
              alt="Dr. Simidele Dosekun"
              src="/images/keynotes/simidele.webp"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        </GridItem>
        <Talk>
          <Content>
            <h2>
              Beyond &lsquo;Reifying Whiteness&rsquo; in Feminist Media Studies
            </h2>
            <Content css={{ textAlign: 'left' }} small>
              In this talk, I turn a black and transnational feminist reflexive
              eye on the field of feminist media studies, to surface for
              critical consideration a certain &lsquo;story that we tell&rsquo;
              (Hemmings, 2005) about race, more specifically about the visibly
              dominant whiteness, in the global North, of the kinds of media
              texts and cultures that commonly comprise our objects of analysis.
              I show that there is a repeated critical claim to the effect that
              the texts and cultures &lsquo;reify whiteness.&rsquo;
              Interrogating and faulting some of the variously methodological,
              epistemological and ontological premises and effects of the claim,
              I argue that it is itself performative: it contributes to the very
              reification that it decries, not least by seemingly serving to
              explain and justify why, in a given piece of scholarship, further
              questions about race cannot really be attended to. I suggest some
              of the ways in which we might go beyond &lsquo;reifying
              whiteness&rsquo; in feminist media studies, so that we can attempt
              to offer more complete and rigorous consideration of the racial
              politics of what we study and how, and indeed who we are, our
              various positionalities, as not only scholars of media but also at
              the same time, necessarily, consumers and users too.
            </Content>
            <strong>
              Friday, June 23
              <br />
              11:00 am - 12:30 pm
            </strong>
            <br />
            The Forum, Taylor Institute for Teaching and Learning
          </Content>
        </Talk>

        <GridItem>
          <ImageContainer>
            <Image
              alt="Vivek Shraya"
              src="/images/keynotes/vivek.webp"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <NameAndBio>
            <Heading css={{ textAlign: 'left', color: '$pink2' }}>
              Vivek Shraya
            </Heading>
            <Content css={{ textAlign: 'left' }} small>
              <aside>
                Vivek Shraya is an artist whose body of work crosses the
                boundaries of music, literature, visual art, theatre, and film.
                Her album Part-Time Woman was nominated for the Polaris Music
                Prize, and her best-selling book I&apos;m Afraid of Men was
                heralded by Vanity Fair as &ldquo;cultural rocket fuel.&rdquo;
                She is also the founder of the award-winning publishing imprint{' '}
                <a href="https://vsbooks.ca/" target="_blank" rel="noreferrer">
                  VS Books
                </a>
                , which supports emerging BIPOC writers. A seven-time Lambda
                Literary Award finalist, Vivek was a Pride Toronto Grand Marshal
                and has been a brand ambassador for MAC Cosmetics and Pantene.
                She is a director on the board of the{' '}
                <a
                  href="https://www.teganandsarafoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tegan and Sara Foundation
                </a>
                , and is currently adapting her debut play,{' '}
                <em>How to Fail as a Popstar</em>, for television with the
                support of CBC.
              </aside>
            </Content>
          </NameAndBio>
        </GridItem>
        <Talk>
          <Content>
            <h2>Vivek Shraya&apos;s Feminist Lens</h2>
            <Content css={{ textAlign: 'left' }} small>
              Vivek Shraya journeys through her 20+ multi disciplinary practice
              to highlight her approach to creating art that reclaims and
              centers femininity, and the challenges and joys of making work
              from and for the female gaze.
            </Content>
            <strong>
              Saturday, June 24
              <br />
              2:15 pm - 3:45 pm
            </strong>
            <br />
            The Forum, Taylor Institute for Teaching and Learning
          </Content>
        </Talk>
      </Grid>
    </Layout>
  );
};

export default Keynotes;

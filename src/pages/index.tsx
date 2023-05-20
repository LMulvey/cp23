import { Layout } from '@/components/Layout';
import {
  CommonGradient,
  Content,
  Heading,
  HeadingMid,
} from '@/components/Typography';
import { styled } from '@/stitches';
import {
  commonAnimationVariants,
  contentVariants,
} from '@/utilities/animation';
import { useReducedMotion, motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import type { NextPage } from 'next';
import Image from 'next/image';

const LogoContainer = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '$32',
  width: '100%',
});

const Home: NextPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout
      animate="animate"
      initial={shouldReduceMotion ? 'animate' : 'hidden'}
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
      <Content variants={contentVariants}>
        <strong>
          The 2023 Console-ing Passions: International Conference on Television,
          Video, Audio, New Media and Feminism
        </strong>{' '}
        will be held in person at the{' '}
        <a
          href="https://ucalgary.ca/"
          aria-label="University of Calgary"
          rel="noreferrer noopener"
          target="_blank"
        >
          University of Calgary
        </a>
        , Canada on{' '}
        <strong>
          <time dateTime="2023-06-22">June 22 - 24, 2023</time>
        </strong>
        .
      </Content>
      <Content variants={contentVariants}>
        <strong>Console-ing Passions 2023</strong> is organized by Jessalynn
        Keller, Alora Paulsen Mulvey, Tamara Shepherd and Samantha Thrift from
        the Department of Communication, Media and Film at the University of
        Calgary.
      </Content>
      <Heading variants={commonAnimationVariants}>
        <CommonGradient>
          Registration for our conference is now open!
        </CommonGradient>
      </Heading>
      <HeadingMid
        css={{
          '& > *': { color: '$defaultFont' },
          textAlign: 'center',
          marginTop: '$16',
          width: '100%',
        }}
        variants={commonAnimationVariants}
      >
        <a
          aria-label="Console-ing Passions 2023 Registration via CVent"
          href="https://eur.cvent.me/mnQQa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserCheck /> Click here to register!
        </a>
      </HeadingMid>
      <Content
        small
        css={{
          fontStyle: 'italic',
          marginTop: '$44',
          paddingTop: '$44',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        We are grateful for the support of our UCalgary sponsors: Calgary
        Institute for the Humanities, Department of Communication, Media and
        Film, Department of English, Department of Sociology, Environmental
        Media Lab, Faculty of Arts, Faculty of Graduate Studies, and the Taylor
        Institute for Teaching and Learning. Console-ing Passions 2023 is
        supported in part by funding from the Social Sciences and Humanities
        Research Council.
      </Content>
      <LogoContainer variants={commonAnimationVariants}>
        <Image
          src="/images/sshrc-logo.png"
          width={431}
          height={54}
          layout="intrinsic"
          alt="SSHRC Logo"
        />
      </LogoContainer>
    </Layout>
  );
};

export default Home;

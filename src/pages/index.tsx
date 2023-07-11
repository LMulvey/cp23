import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { styled } from '@/stitches';
import {
  commonAnimationVariants,
  contentVariants,
  dividerAnimationVariants,
} from '@/utilities/animation';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import type { NextPage } from 'next';
import Image from 'next/image';

const LogoContainer = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '$32',
  width: '100%',
});

const Divider = styled(motion.div, {
  height: '$1',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.2)',
  margin: '$16 0',
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading>Looking for the Travel Funding information?</Heading>
      <Content css={{ marginBottom: 0 }} variants={contentVariants}>
        <strong>
          Use the following Google Documents link to apply for Student Travel
          Funding
        </strong>
        :{' '}
        <a
          href="https://forms.gle/sWygjLxJzret5UhM7"
          aria-label="Apply for 2023 Console-ing Passions Student Travel Funding"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here <Link />
        </a>
      </Content>

      <HeadingMid
        css={{
          color: '$pink1',
          boxShadow: '$blue40',
          textAlign: 'center',
          margin: '$24 auto 0 auto',
          padding: '$16',
          background: 'rgba(255, 255, 255, 0.45)',
          border: '$sizes$1 solid #333',
          borderRadius: '$10',
        }}
      >
        Deadline to apply is <u>August 1st</u>
      </HeadingMid>
      <Divider
        css={{ marginTop: '$140' }}
        variants={dividerAnimationVariants}
      />
      <Content variants={contentVariants}>
        <strong>Console-ing Passions 2023</strong> is organized by Jessalynn
        Keller, Alora Paulsen Mulvey, Tamara Shepherd and Samantha Thrift from
        the Department of Communication, Media and Film at the University of
        Calgary.
      </Content>

      <Heading
        css={{
          fontSize: '$24',
        }}
        variants={commonAnimationVariants}
      >
        The CP2023 UCalgary committee would like to thank the following UCalgary
        financial sponsors:
      </Heading>

      <Content
        small
        css={{
          fontStyle: 'italic',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        Calgary Institute for the Humanities, Department of Communication, Media
        and Film, Department of English, Department of Sociology, Environmental
        Media Lab, Faculty of Arts, Faculty of Graduate Studies, and Taylor
        Institute for Teaching and Learning.
      </Content>
      <Content
        small
        css={{
          fontStyle: 'italic',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        We are also very grateful for the financial support we received from the
        Social Sciences and Humanities Research Council of Canada. Thank you!
      </Content>
      <LogoContainer variants={commonAnimationVariants}>
        <Image
          src="/images/sshrc-logo-2.png"
          width={431}
          height={54}
          layout="intrinsic"
          alt="SSHRC Logo"
        />
      </LogoContainer>

      <Heading
        css={{
          marginTop: '$16',
          fontSize: '$24',
          color: '$defaultFont',
        }}
        variants={commonAnimationVariants}
      >
        Huge thanks to our fab team of reviewers:
      </Heading>

      <Content
        small
        css={{
          fontStyle: 'italic',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        Julia Chan, Melissa Click, Hunter Hargraves, Julia Himberg, Charlotte
        Howell, Jessalynn Keller, Deborah Jermyn, Amanda Ann Klein, Al Martin,
        Alora Paulsen Mulvey, Andrew Owens, Tamara Shepherd, Samantha Thrift,
        Jacqueline Vickery
      </Content>

      <Heading
        css={{
          marginTop: '$16',
          fontSize: '$24',
          color: '$defaultFont',
        }}
        variants={commonAnimationVariants}
      >
        And thank you to our UCalgary volunteer team:
      </Heading>

      <Content
        small
        css={{
          fontStyle: 'italic',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        Leslie Salgado Arzuaga, Asma Bernier, Emilie Charette, Crystal Chokshi,
        Shena Kaul, Mary Keller, Claire O&apos;Brien, J Overholser, Pamela Pan,
        Rebecca Wissink, Amanda Zanco.
      </Content>
      <Content
        small
        css={{
          fontStyle: 'italic',
          marginBottom: 0,
        }}
        variants={contentVariants}
      >
        A special thanks to Dr Charles Tepperman, CMF Dept. Head, for his
        steadfast support of the conference, and the CMF admin team for
        providing administrative assistance.
      </Content>
    </Layout>
  );
};

export default Home;

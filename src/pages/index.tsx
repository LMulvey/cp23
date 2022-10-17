import { Layout } from '@/components/Layout';
import { CommonGradient, Content, Heading } from '@/components/Typography';
import {
  commonAnimationVariants,
  contentVariants,
} from '@/utilities/animation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="hidden"
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
        will be held in person at the University of Calgary, Canada on{' '}
        <strong>
          <time dateTime="2023-06-22">June 22 - 24, 2023</time>
        </strong>
        .
      </Content>
      <Content variants={contentVariants}>
        <strong>Console-ing Passions 2023</strong> is organized by Jessalynn
        Keller, Dawn Johnston, Alora Paulsen Mulvey, Annie Rudd, Tamara Shepherd
        and Samantha Thrift from the Department of Communication, Media and Film
        at the University of Calgary.
      </Content>
      <Heading variants={commonAnimationVariants}>
        We look forward{' '}
        <CommonGradient>to seeing you next June!</CommonGradient>
      </Heading>
    </Layout>
  );
};

export default Home;

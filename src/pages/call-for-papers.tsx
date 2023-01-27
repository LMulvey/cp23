import { Layout } from '@/components/Layout';
import { HeadingMid } from '@/components/Typography';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';

const CallForPapers: NextPage = () => {
  return (
    <Layout
      animate="animate"
      initial="animate"
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
      <HeadingMid css={{ margin: '0 auto' }} variants={commonAnimationVariants}>
        Submissions are now closed. See you in June 2023 ✌🏻!
      </HeadingMid>
    </Layout>
  );
};

export default CallForPapers;

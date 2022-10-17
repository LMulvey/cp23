import { Layout } from '@/components/Layout';
import { Content } from '@/components/Typography';
import { HeadingLink } from '@/components/Typography/HeadingLink';
import { styled } from '@/stitches';
import {
  commonAnimationVariants,
  contentVariants,
  dividerVariants,
} from '@/utilities/animation';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const Divider = styled(motion.div, {
  height: '$2',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  width: '100%',
  marginBottom: '$48',
});

const CallForPapers: NextPage = () => {
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
      <Content small variants={contentVariants}>
        The organizing committee invites proposals for individual papers,
        pre-constituted panels, pre-constituted roundtables, and creative works
        that explore media cultures from an intersectional feminist perspective.
        We are particularly interested in research proposals that address the
        crises of our current moment, including sexism, racism, and ableism in
        media; gendered media production cultures; resistance to the alt-right;
        platformed misogyny and racism; mediated activism post-Roe; Indigenous
        media cultures, and queer and trans representation. We are committed to
        making our field more inclusive and enthusiastically welcome proposals
        addressing Indigenous and non-Western media cultures and contexts.
      </Content>
      <Divider variants={dividerVariants} />
      <HeadingLink
        aria-label="Console-ing Passions 2023 Call for Papers Submission"
        href="https://www.openconf.org/consoleingpassions2023/"
        rel="noopener noreferrer"
        target="_blank"
        variants={commonAnimationVariants}
      >
        OpenConf Submission Link!
      </HeadingLink>
    </Layout>
  );
};

export default CallForPapers;

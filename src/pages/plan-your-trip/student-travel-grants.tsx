import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { styled } from '@/stitches';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';

const List = styled('ol', {
  marginTop: '$8',
  '& li': {
    paddingLeft: '$8',
    margin: '$16 0',
  },
});

const StudentTravelGrants: NextPage = () => {
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
        Student Travel Grants for Console-ing Passions 2023
      </Heading>

      <Content css={{ textAlign: 'left' }}>
        The local CP2023 organizing committee is pleased to offer travel grants
        to students attending the 2023 Console-ing Passions Conference. Grants
        will be distributed{' '}
        <strong>
          <u>after</u>
        </strong>{' '}
        the conference, and the grant amount will depend on the number of
        applicants.
      </Content>

      <HeadingMid css={{ textAlign: 'left', '&:hover': { cursor: 'pointer' } }}>
        Application Process
      </HeadingMid>
      <Content css={{ textAlign: 'left' }}>
        Please keep all relevant receipts from your conference expenditures
        (accommodation, flight, transport, meals).
        <List type="1">
          <li>
            1. After the conference, fill out the Google Form, which will be
            posted here (Student Travel Grant tab). The form will require basic
            personal information (name, where you study, paper title), uploaded
            receipts, and banking information (to receive grant deposit).
          </li>
          <li>
            2. Deadline to apply is <strong>July 15, 2023</strong>.
          </li>
          <li>
            3. After the deadline, the travel grants funds will be divided
            equally amongst all applicants and money will be paid out to each
            applicant. It will likely take several weeks for you to receive your
            grant money via bank deposit.
          </li>
        </List>
      </Content>

      <Content small css={{ textAlign: 'left', fontWeight: 700 }}>
        In order to offer funding to as many students as possible, winners of
        the 2023 Jane Feuer Travel Grants are ineligible to apply for the local
        travel grants. Thanks for understanding!
      </Content>
    </Layout>
  );
};

export default StudentTravelGrants;

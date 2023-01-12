import { Layout } from '@/components/Layout';
import { Content, HeadingMid } from '@/components/Typography';
import { HeadingLink } from '@/components/Typography';
import { styled } from '@/stitches';
import {
  commonAnimationVariants,
  contentVariants,
  dividerVariants,
} from '@/utilities/animation';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { isCFPOpen } from '@/utilities/isCFPOpen';

const Divider = styled(motion.div, {
  height: '$2',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  width: '100%',
  marginBottom: '$48',
});

const List = styled(motion.ul, {
  marginTop: '-$16',
  display: 'flex',
  flexFlow: 'column nowrap',
  textAlign: 'center',
  gap: '$16',
  color: '#333',
  fontSize: '$20',
  fontWeight: '400',
  lineHeight: 1.34,
  marginBottom: '$48',
  '@bp2': {
    textAlign: 'left',
  },
});

const CallForPapers: NextPage = () => {
  const isOpen = isCFPOpen();

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
      {isOpen ? (
        <>
          <HeadingLink
            aria-label="Console-ing Passions 2023 Call for Papers Submission"
            css={{ marginBottom: '$24' }}
            href="https://www.openconf.org/consoleingpassions2023/"
            rel="noopener noreferrer"
            target="_blank"
            variants={commonAnimationVariants}
          >
            🔗 OpenConf Submission Form
          </HeadingLink>
          <HeadingLink
            aria-label="Console-ing Passions 2023 Call for Papers PDF (updated January 12, 2023)"
            css={{ marginBottom: '$48' }}
            href="/files/cp-2023-cfp-updated-jan12-2023.pdf"
            rel="noopener noreferrer"
            target="_blank"
            variants={commonAnimationVariants}
          >
            📑 Call for Papers PDF
          </HeadingLink>
          <Divider variants={dividerVariants} />
          <Content css={{ fontWeight: '700' }} variants={contentVariants}>
            2023 Console-ing Passions: International Conference on Television,
            Video, Audio, New Media and Feminism
            <br />
            University of Calgary, Canada
            <br />
            June 22-24, 2023
            <br />
            Call for Papers
            <br />
          </Content>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            The{' '}
            <strong>
              2023 Console-ing Passions: International Conference on Television,
              Video, Audio, New Media and Feminism
            </strong>{' '}
            will be held at the{' '}
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
            . The organizing committee invites proposals for individual papers,
            pre-constituted panels, pre-constituted roundtables, and creative
            works that explore media cultures from an intersectional feminist
            perspective. We are particularly interested in research proposals
            that address the crises of our current moment, including sexism,
            racism, and ableism in media; gendered media production cultures;
            resistance to the alt-right; platformed misogyny and racism;
            mediated activism post-Roe; Indigenous media cultures, and queer and
            trans representation. We are committed to making our field more
            inclusive and therefore enthusiastically welcome proposals that
            address Indigenous and non-Western media cultures and contexts.{' '}
            <u>We look forward to seeing you in Calgary next June</u>!
          </Content>
          <HeadingMid variants={commonAnimationVariants}>
            Confirmed Keynotes
          </HeadingMid>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            <a
              href="https://www.lse.ac.uk/media-and-communications/people/academic-staff/simidele-dosekun"
              target="_blank"
              rel="noreferrer noopener"
            >
              Simidele Dosekun
            </a>{' '}
            (London School of Economics, UK) ,{' '}
            <a
              href="https://sarahsharma.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Sarah Sharma
            </a>{' '}
            (University of Toronto, Canada) , and multidisciplinary artist{' '}
            <a
              href="https://vivekshraya.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vivek Shraya
            </a>{' '}
            (University of Calgary)
          </Content>
          <HeadingMid variants={commonAnimationVariants}>Format</HeadingMid>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            Due to budgetary constraints and committee workload, this conference
            is running as a <strong>primarily in-person event</strong>. However,
            we will have a limited number of online panels (between 3 - 5
            panels) in order to make the conference accessible to those unable
            to travel. If you are interested in participating virtually, follow
            the submission directions below. Please note that you will not be
            able to switch your modality once you make your submission and that
            mixed modality pre-constituted panels or roundtables will not be
            accepted. In other words, pre-constituted panels/roundtables must
            consist of all in-person or all virtual papers. Registration fees
            for online participation will be the same as in-person fees.
          </Content>
          <HeadingMid variants={commonAnimationVariants}>
            Proposal Guidelines
          </HeadingMid>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            If you would like your submission to be considered for one of our
            virtual slots, please state this in the proposal. All submissions
            will be considered in-person, unless otherwise stated.
          </Content>
          <List variants={contentVariants}>
            <li>
              <u>Individual Papers:</u> Individuals submitting paper proposals
              should provide a title, abstract of 250 words, short bio, and
              contact information. Co-authored papers are acceptable.
            </li>
            <li>
              <u>Pre-constituted Panels:</u> For scheduling purposes, panel
              coordinators must first submit a panel proposal using OpenConf
              (link found below). The proposal should include a 250-word panel
              rationale and the names of all panel participants. Once the panel
              proposal is submitted, each panel participant (including the
              coordinator) must also submit a separate paper proposal. The
              individual participant submissions must include a 250-word
              abstract, a short bio, and the panel&apos;s title and
              corresponding OpenConf submission number. Panels should include
              3-4 papers. Co-authored papers are acceptable. Panels that include
              a diversity of panelist affiliations and experience levels are
              strongly encouraged.
            </li>
            <li>
              <u>Pre-constituted Roundtables:</u> Pre-constituted roundtables
              should focus either on scholarly topics in the field or matters of
              professional interest. We are especially interested in roundtables
              that are likely to engage wide participation by conference
              attendees and which reflect our field&apos;s diversity of cultural
              identities, institutions, methodologies, and professional rank or
              employment status. A convener will submit one proposal, who will
              propose a question (&lt;100 words) and solicit brief (&lt;200
              words) responses from 4-6 respondents (to be included in the
              Abstract section of your OpenConf submission). Proposals should
              also include a brief bio and contact information for the convener
              and each participant. Please add each participant as an “Author”
              to ensure they receive communications regarding decision
              notifications and other CP23 correspondence.
            </li>
            <li>
              <u>Creative Works:</u> We invite proposals for video, audio, or
              new media screenings or exhibits. Each proposal should consist of
              a 250-word description (including the length and format of the
              work), a short bio of the creator/producer/director, and contact
              information. If the work is viewable online, please submit a URL.
            </li>
          </List>

          <HeadingMid variants={commonAnimationVariants}>
            Submission Guidelines
          </HeadingMid>

          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            The deadline for submission is{' '}
            <strong>
              <time dateTime="2023-01-16">January 16, 2023 at 11:59PM MST</time>
            </strong>
            . Proposals must be submitted through the{' '}
            <a
              aria-label="Console-ing Passions 2023 OpenConf Call for Papers Submission Form"
              href="https://www.openconf.org/consoleingpassions2023/openconf.php"
              target="_blank"
              rel="noreferrer noopener"
            >
              OpenConf portal
            </a>
            .
          </Content>

          <HeadingMid variants={commonAnimationVariants}>
            Further Information
          </HeadingMid>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            Please{' '}
            <a
              aria-label="Console-ing Passions 2023"
              href="https://www.consoleingpassions2023.ca"
            >
              visit our website
            </a>{' '}
            for ongoing updates or email{' '}
            <a
              aria-label="Contact Dr. Jessalynn Keller"
              href="mailto:jessalynn.keller@ucalgary.ca"
            >
              Dr. Jessalynn Keller at jessalynn.keller@ucalgary.ca
            </a>
            . Proposals must be submitted through the{' '}
            <a
              aria-label="Console-ing Passions 2023 OpenConf Call for Papers Submission Form"
              href="https://www.openconf.org/consoleingpassions2023/openconf.php"
              target="_blank"
              rel="noreferrer noopener"
            >
              OpenConf portal
            </a>
            .
          </Content>

          <HeadingMid variants={commonAnimationVariants}>
            CP Calgary 2023 Conference Committee
          </HeadingMid>
          <Content
            css={{
              '@bp2': {
                textAlign: 'left',
                alignSelf: 'start',
              },
            }}
            variants={contentVariants}
          >
            Jessalynn Keller, Dawn Johnston, Alora Paulsen Mulvey, Annie Rudd,
            Tamara Shepherd, Samantha Thrift, Department of Communication, Media
            and Film, University of Calgary
          </Content>
        </>
      ) : (
        <HeadingMid
          css={{ margin: '0 auto' }}
          variants={commonAnimationVariants}
        >
          Submissions are now closed. See you in June 2023 ✌🏻!
        </HeadingMid>
      )}
    </Layout>
  );
};

export default CallForPapers;

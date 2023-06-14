import { Layout } from '@/components/Layout';
import { Content, Heading, HeadingMid } from '@/components/Typography';
import { commonAnimationVariants } from '@/utilities/animation';
import type { NextPage } from 'next';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
import { useLayoutEffect, useRef } from 'react';
import { styled } from '@/stitches';

const TypeformContainer = styled('div', {
  width: '100%',
  height: '500px',
  marginBottom: '$40',
});

const VirtualPanels: NextPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current === null) return;

    createWidget('AMxzsZly', {
      container: containerRef.current,
    });
  }, [containerRef]);

  return (
    <Layout
      animate="animate"
      initial="animate"
      title="Virtual Panels"
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
        Virtual Panels
      </Heading>

      <Content css={{ textAlign: 'left' }}>
        We are offering a limited number of online panels on{' '}
        <strong>
          <time dateTime="2023-06-23">Friday, June 23rd</time>
        </strong>{' '}
        for folks in the CP community who can&apos;t make it to Calgary. These
        are free to attend and will be held on Zoom. If you&apos;re interested
        in registering for the online portion of the conference, please fill out
        the registration form below. A Zoom link will be sent to you next week.
      </Content>

      <TypeformContainer id="typeform" ref={containerRef} />

      <HeadingMid
        css={{
          textAlign: 'left',
          '&:hover': { cursor: 'pointer' },
        }}
      >
        Online panel schedule (all times in MST):
      </HeadingMid>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>
          Online Panel 1: Representational and Production Politics Across TV and
          Celebrity Culture
        </strong>
        <br />
        <strong>9:30AM - 10:50AM</strong>
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        Chair: Al Marin, University of Miami
        <br />
        Britta Hanson: “The Humor of History: Queer Representation in Period
        Comedy Series”
        <br />
        Stephanie Herold: “&apos;You Can&apos;t Tell This Story Without
        Abortion:&apos; Television Creators on Narrative Intention and
        Development of Abortion Stories on their Shows”
        <br />
        Danielle Hipkins: “A Girls&apos; Eye-View: Exploring Italian Girlhood TV
        Representation Through the Lens of Italian Female Adolescence
        <br />
        Mairead Casey: “&apos;Hammer Horror!:&apos; Cannibal Capitalism, False
        Meritocracy, and the Star Persona of Armie Hammer”
      </Content>

      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>
          Online Panel 2: Sovereign Storytelling & Agential Representations
        </strong>
        <br />
        <strong>2:00PM - 3:20PM</strong>
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        Chair: Alora Paulsen Mulvey, University of Calgary
        <br />
        Ian Reilly, Suzanne McCullagh and Michele Forrest: “Exploring the
        Decolonial through Feminist Reading Group Collaboration”
        <br />
        Cynthia Baron: “Sydney Freeland&apos;s Award-Winning Drunktown&apos;s
        Finest (2014): Recognition of Trans Navajo Women On Screen and Off”
        <br />
        Swapnil Rai: “Soap Operas, Populism and Women&apos;s Agency: The Case of
        Indo-Turkey TV Flows”
        <br />
        Victoria Sands: “&apos;It&apos;s Brutal Out Here:&apos; Olivia Rodrigo,
        Tik Tok, and the Emergent Value of a Sour Girlhood”
      </Content>

      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        <strong>
          Online Panel 3: Bad Men and “She-Devils:” Problematizing Gendered Tech
          and Reactionary Digital Cultures
        </strong>
        <br />
        <strong>3:45PM - 5:05PM</strong>
      </Content>
      <Content small css={{ textAlign: 'left', marginBottom: '$16' }}>
        Chair: Jacqueline Vickery, University of North Texas
        <br />
        Louise Hill: “&apos;What Colour is Your Bugatti?&apos; Impending the
        Newest Branch of the Manosphere”
        <br />
        Michael Reinhard: “Parenting a New Moral Panic: Anti-Queer Digital
        Activism and Reactionary Media Ecologies”
        <br />
        Kathryn Claire Higgins: “Who&apos;s Afraid of Trial by Media?
        Believability, Sexual Violence, and the Digitalization of Doubt”
        <br />
        Milly Gunn: “Voice of the Fembot: An Analysis of the Subservient and
        Sinister Vocal Depictions of the Gynoid in Sci-Fi Games”
      </Content>
    </Layout>
  );
};

export default VirtualPanels;

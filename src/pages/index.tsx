import { PageTitle } from '@/components/PageTitle';
import { styled } from '@/stitches';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8',
});

const Heading = styled('h2', {
  fontSize: '$36',
  fontWeight: '700',
  letterSpacing: '-$1',
  lineHeight: 1.2,
});

const Home: NextPage = () => {
  return (
    <Container>
      <PageTitle />

      <Image src="/images/cp-logo.png" width="427px" height="115px" />
      <Heading>2023 @ University of Calgary</Heading>
    </Container>
  );
};

export default Home;

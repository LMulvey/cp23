import { styled } from '@/stitches';
import Image from 'next/image';

const ImageContainer = styled('div', {
  marginTop: '-$44',
});

const Container = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  gap: '$16',
  boxShadow: '$blue40',
  background: '#fdf9df',
  marginBottom: '$24',
  position: 'relative',
});

const Border = styled('div', {
  width: '100vw',
  height: '$44',
  position: 'absolute',
  left: 0,
  bottom: 0,
  backgroundSize: '400% 400% !important',
  background: '$white',
  backgroundImage: '$pinkGradient2',
});

const UofC = styled('p', {
  background: '$pinkGradient',
  boxShadow: '$blue20',
  color: '$white',
  opacity: 0.8,
  fontSize: '$86',
  fontWeight: 700,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$8',
  padding: '$16 $24',
  marginTop: '$24',
  whiteSpace: 'nowrap',
  '-webkit-backdrop-filter': 'blur(8px)',
  backDropFilter: 'blur(8px)',
});

const OG = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="Console-ing Passions logo"
          src="/images/cp-logo-2023.svg"
          width="1704px"
          height="456px"
          layout="intrinsic"
          priority
        />
      </ImageContainer>
      <UofC>@ University of Calgary</UofC>
      <Border />
    </Container>
  );
};

export default OG;

import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: 'calc(var(--vh, 1vh) * 100)',
  background: '#C4CDD4',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  color: '#000000',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  fontWeight: '300',
});

const ImageLayout = styled('div', {
  width: '100%',
  background: '#C4CDD4',
  textAlign: 'center',
  position: 'absolute',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '30%',
});

type TitleProps = {
  config: ConfigsType;
};

const Title = ({ config }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        gravity={0.1}
        colors={['#FFCDD2', '#F8BBD0', '#BBE4F8']}
        recycle={false}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout>
          <SubTitleLayout>WEDDING INVITATION</SubTitleLayout>
          <TitleLayout>
            {config.groom.name} &amp; {config.bride.name}
          </TitleLayout>
          <SubTitleLayout>
            {config.weddingDate}
            <br />
            {config.weddingLocation}
          </SubTitleLayout>
          <ImageLayout>
            <Image src={config.titleImage} alt="Wedding Invitation Title Picutre" />
          </ImageLayout>
        </Layout>
      </Section>
    </>
  );
};

export default Title;

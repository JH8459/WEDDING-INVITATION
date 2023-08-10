import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>오시는 길</Title>
        <SubTitle>
          서울특별시 영등포구 은행로 30
          <br />
          <br />
          국회의사당역 3번 출구로 나오셔서
          <br />
          도보로 6분 거리입니다.
          <br />
          <br />
          <img
            style={{ width: isPortrait ? '90%' : '60%' }}
            src={config.locationMapImage}
            alt="Wedding Invitation Title Picutre"
          />
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;

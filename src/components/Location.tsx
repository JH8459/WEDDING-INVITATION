import { useEffect, useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import { kakao } from './kakao';

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

  useEffect(() => {
    const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		const map = new kakao.maps.Map(container, options);
  }, [])

  return (
    <Section ref={ref}>
      <Layout>
        <Title>오시는 길</Title>
        <SubTitle>
          서울특별시 강남구 언주로 508
          <br />
          <br />
          2호선, 분당선 “선릉역” 5번 출구 도보 5분 거리입니다. 
          <br />
          (셔틀버스 : 2호선 선릉역 5번 출구에서 셔틀버스 운행)
          <br />
          <br />
          {/* <img
            style={{ width: isPortrait ? '90%' : '60%' }}
            src={config.locationMapImage}
            alt="Wedding Invitation Title Picutre"
          /> */}
          <div id = "map" style={{ width: isPortrait ? '90%' : '60%' }}></div>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;

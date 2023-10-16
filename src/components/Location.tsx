import { useEffect, useRef, useState } from 'react';
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

declare global {
  interface Window {
    kakao: any;
  }
}

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapPosition = new window.kakao.maps.LatLng(37.505734, 127.043147)
      const markerPosition = new window.kakao.maps.LatLng(37.503917, 127.042969)
      const mapOptions = {
        center: markerPosition,
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOptions);
      const marker = new kakao.maps.Marker({ map, position: markerPosition });

      // 지도의 중심을 결과값으로 받은 위치로 이동
      marker.setMap(map);
    });
  }, []);



  return (
    <Section ref={ref}>
      <Layout>
        <Title>오시는 길</Title>
        <SubTitle>
          서울특별시 강남구 언주로 508
          <br />
          <br />
          2호선, 분당선 “선릉역” 5번 출구
          <br />
          도보 5분 거리입니다.
          <br />
          <br />
          (2호선 선릉역 5번 출구에서 셔틀버스 운행)
          <br />
          <br />
          <div id="map" style={{ width: isPortrait ? '95%' : '60%', height: '300px' }}></div>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;

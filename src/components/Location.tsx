import { useEffect, useRef, useState } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import { kakao } from './kakao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#C4CDD4',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#000000',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#000000',
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
  const [level, setLevel] = useState();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const markerImgSrc = 'https://github.com/JH8459/WEDDING-INVITATION-LETTER/assets/83164003/74c29a07-3111-4dc9-b251-c75b9ceb59e0';
      const markerImgSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기
      const markerImgOption = { offset: new kakao.maps.Point(25, 50) }; // 마커이미지의 옵션
      const markerImg = new kakao.maps.MarkerImage(markerImgSrc, markerImgSize, markerImgOption);
      const mapPosition = new window.kakao.maps.LatLng(37.503917, 127.042969);
      // 맵 컨트롤러 (지도/스카이뷰)
      const mapTypeControl = new kakao.maps.MapTypeControl();
      // 줌 컨트롤러
      const zoomControl = new kakao.maps.ZoomControl();
      const mapOptions = {
        center: mapPosition,
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOptions);
      const marker = new kakao.maps.Marker({ map, position: mapPosition, image: markerImg, clickable: true });
      // 맵 애드온(컨트롤러 & 줌) 추가
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      // 지도의 중심을 결과값으로 받은 위치로 이동
      marker.setMap(map);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open('https://map.kakao.com/?urlX=509460&urlY=1112355&urlLevel=3&itemId=2009675378&q=%EC%83%81%EB%A1%9D%EC%95%84%ED%8A%B8%ED%99%80&srcid=2009675378&map_type=TYPE_MAP');
      });
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

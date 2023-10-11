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
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.503917, 127.042969),
        level: 4,
      };
      
      const map = new window.kakao.maps.Map(container, options);
      
      const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(37.503917, 127.042969),
      });

      var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            카카오 스페이스닷원' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()       
      });

      kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
      });
      // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
      function closeOverlay() {
        overlay.setMap(null);     
      }
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
          {/* <img
            style={{ width: isPortrait ? '90%' : '60%' }}
            src={config.locationMapImage}
            alt="Wedding Invitation Title Picutre"
          /> */}
          <div id = "map" style={{ width: isPortrait ? '95%' : '60%' , height: '300px' }}></div>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;

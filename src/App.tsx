import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import Share from './components/Share';
import { Layout } from 'antd';
import { useEffect } from 'react';

const { Footer } = Layout;

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
      <Footer
        style={{
          background: '#C4CDD4',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2023 JeongHyun Kim
      </Footer>
    </main>
  );
}

export default App;

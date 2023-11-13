import { useRef } from 'react';
import { styled } from '@stitches/react';
import ImageGallery from 'react-image-gallery'
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '7.5% 0% 7.5% 0%' : '5% 0% 5% 0%',
});

const Title = styled('p', {
  color: '#FFFFFF',
  width: '100%',
  textAlign: 'center',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: 'calc(var(--vh, 1vh) * 120)',
        background: '#000000',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        {/* <Title>ㅤ</Title> */}
      </Layout>
      <ImageGallery items={config.galleryImages} />
    </section>
  );
};

export default Gallery;

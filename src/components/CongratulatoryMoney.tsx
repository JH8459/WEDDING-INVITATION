import { styled } from '@stitches/react';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBaoGroom from './HongBaoGroom';
import HongBaoBride from './HongBaoBride';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#C4CDD4',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  textAlign: 'center',
  padding: isPortrait ? '10% 0% 10% 0%' : '5% 0% 5% 0%',
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

const GridLayout = styled('div', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '50% 50%',
});

const Description = styled('p', {
  textAlign: 'center',
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>축하의 마음을 전하세요</Title>
        <SubTitle>축하의 마음을 담아 축의금을 전달해 보세요.</SubTitle>
      </Layout>
      <GridLayout>
        <HongBaoGroom title="신랑측" subTitle="계좌번호 확인" onClick={() => setGroomVisible(true)} />
        <HongBaoBride title="신부측" subTitle="계좌번호 확인" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.</Description>]}
      >
        <div>
          <b>부) {config.groom.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.groom.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모) {config.groom.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.groom.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {config.groom.name}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.groom.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.</Description>]}
      >
        <div style={{ marginBottom: 24 }}>
          <b>부) {config.bride.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.bride.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        {/* <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모) {config.bride.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.bride.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div> */}
        <div>
          <b>신부 {config.bride.name}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.bride.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;

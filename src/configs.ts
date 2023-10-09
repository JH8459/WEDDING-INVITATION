import { ReactImageGalleryItem } from 'react-image-gallery';

const Configs: ConfigsType = {
  url: 'http://wedding.jh8459.com',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: 'https://user-images.githubusercontent.com/83164003/273562281-f22e4d70-a584-438a-914b-e3e15483cd5d.jpg',
  weddingDate: '2023년 11월 26일, 일요일 오전 11시 00분',
  weddingLocation: '상록아트홀 웨딩컨벤션, B1층 그랜드볼룸홀',
  groom: {
    name: '김정현',
    accountNumber: '우리은행 1002-547-671831',
    fatherName: '김중만',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '박용옥',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '한수지',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '한원엽',
    fatherAccountNumber: '○○은행 ***-***-******',
    // motherName: '○○○',
    // motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: 'https://user-images.githubusercontent.com/83164003/273562281-f22e4d70-a584-438a-914b-e3e15483cd5d.jpg',
  locationMapImage: 'https://user-images.githubusercontent.com/83164003/273564624-6ea7c6fb-08b7-4ebb-ab24-f3018560ce4b.jpg',
  galleryImages: [
    {original: 'https://user-images.githubusercontent.com/83164003/273608847-e5ab3f35-f1d8-4434-8f2b-a3948b46e3db.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273567772-0ff619b2-e774-4b9c-9f2e-c49f66076f45.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273608889-bfec1acc-c4e6-4d41-bcc5-f851a6b83928.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273567964-b185689c-b292-4fd5-9632-182570d53437.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609008-c484b52e-b4aa-45c3-af13-bc1831d13e28.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273567987-a9f08285-b085-40e8-924c-6f19c5cd1d77.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609104-0b6dcb06-0b77-4b72-bb72-1a3931dc17fa.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568018-01e27673-8bfa-46a2-bb1c-261fb57f0785.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609227-d438408f-17fa-432a-9998-58cc1862e873.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568042-20508e36-0e92-4a85-bbeb-d2850fea839d.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609304-240d0a48-e964-4f0c-a630-8710c6abe261.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568079-86aae1b8-1f4b-43df-ba2e-8e09235de9c2.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609404-00590e9c-3d03-4520-b209-452cecb07f7e.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568164-bec1b4f5-1f36-4125-bebf-e847f88cc8ce.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609533-3bb35313-86ca-4ad4-9477-5001cef6c348.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568195-8a6c56e6-a54b-4076-9c48-eb8494f62ba3.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609625-9bd91dda-0f0d-4af9-9bba-0287590f7f3f.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568225-d4e62e7b-979a-48ec-9dc4-476eba695bd9.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609700-3fc5fda8-b956-448e-b354-3248c9af4f87.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568266-b27cd890-51ff-42b1-b64d-fec35c8a4ad3.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609772-8e6db334-c0a7-4d8d-9836-43c7cc5d71e0.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568298-eb760e5c-bff3-44bb-893d-3c66501a5779.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273609831-25d74a46-626c-4960-9903-e388caeca43c.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273568365-08aaa7dd-4ab1-4261-81b2-c3bfa7e03568.jpg'},
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: ReactImageGalleryItem[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;

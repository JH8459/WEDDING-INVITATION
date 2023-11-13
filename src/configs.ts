import { ReactImageGalleryItem } from 'react-image-gallery';

const Configs: ConfigsType = {
  url: 'https://wedding.jh8459.com',
  kakaoToken: '카카오 API 토큰',
  kakaoImage: '카카오 공유하기 대표 이미지 URL',
  weddingDate: '2023년 11월 26일, 일요일 오전 11시 00분',
  weddingLocation: '상록아트홀 웨딩컨벤션, L층 그랜드볼룸홀',
  groom: {
    middleName: '정현',
    name: '김정현',
    accountNumber: 'oo은행 123-123-123',
    fatherName: 'ooo',
    fatherAccountNumber: 'oo은행 123-123-123',
    motherName: 'ooo',
    motherAccountNumber: 'oo은행 123-123-123',
  },
  bride: {
    middleName: '수지',
    name: '한수지',
    accountNumber: 'oo은행 123-123-123',
    fatherName: 'ooo',
    fatherAccountNumber: 'oo은행 123-123-123',
    motherName: 'ooo',
    motherAccountNumber: 'oo은행 123-123-123',
  },
  titleImage: 'https://user-images.githubusercontent.com/83164003/273562281-f22e4d70-a584-438a-914b-e3e15483cd5d.jpg',
  locationMapImage: 'https://user-images.githubusercontent.com/83164003/273564624-6ea7c6fb-08b7-4ebb-ab24-f3018560ce4b.jpg',
  galleryImages: [
    { original: 'https://user-images.githubusercontent.com/83164003/273609831-25d74a46-626c-4960-9903-e388caeca43c.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614600-2cff6ae7-857b-4596-a917-82458ab6705d.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609700-3fc5fda8-b956-448e-b354-3248c9af4f87.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614504-91f63fcb-fa5d-48dc-adec-b9fbaa85f112.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/278811555-1391d2d0-6c07-4672-b476-c89ed283ce8e.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/278811558-bc44cf93-65f6-445f-b2c8-43cc93370c7e.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609227-d438408f-17fa-432a-9998-58cc1862e873.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614258-1d0369eb-536b-4235-88c4-28caf190c865.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609008-c484b52e-b4aa-45c3-af13-bc1831d13e28.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614129-e5730d5d-6ea7-4c1c-bc06-a6d231906d11.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609104-0b6dcb06-0b77-4b72-bb72-1a3931dc17fa.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614198-44cacd7d-2816-4025-8351-8fed243b6308.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609533-3bb35313-86ca-4ad4-9477-5001cef6c348.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614412-0d7ca85f-c2c1-4205-b8f7-a4583e4cae4f.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/278811472-62e5e6bc-c0d7-424c-888a-fcd6e115de81.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/278811458-e7e035c9-38dd-4cb3-bd89-68894e858e80.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609404-00590e9c-3d03-4520-b209-452cecb07f7e.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614369-40c623ee-fb38-4383-8c2e-d09132ecf980.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/278812348-e9b36187-aa3d-4193-a542-b805bddcc277.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/278812347-b252c17c-d230-4f37-ad4a-2e381eb2339f.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/278811617-98527dc4-a672-4a75-be50-999cda32ef98.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/278811616-1b8eb00f-7a2f-40bc-9700-a96679ff281e.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273608847-e5ab3f35-f1d8-4434-8f2b-a3948b46e3db.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614005-8b232828-05bc-4eb7-80e3-cef019b67b36.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609772-8e6db334-c0a7-4d8d-9836-43c7cc5d71e0.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614556-59699aa6-e868-40ad-9db1-bcf2646f5958.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609625-9bd91dda-0f0d-4af9-9bba-0287590f7f3f.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614463-5b22d7a8-48e1-44c9-b6ee-4ae386166036.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273608889-bfec1acc-c4e6-4d41-bcc5-f851a6b83928.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614063-c7be7152-e657-4365-b064-ae597e784ad9.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/278811601-64fdfa3a-19af-4ca6-a841-526320679d5b.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/278811603-f89bac53-69c6-44e0-acea-99e70fc438f9.jpg' },
    { original: 'https://user-images.githubusercontent.com/83164003/273609304-240d0a48-e964-4f0c-a630-8710c6abe261.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273614324-7fa9c421-3447-434f-9ffa-dbfa0abafbb9.jpg' },
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
  middleName: string;
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;

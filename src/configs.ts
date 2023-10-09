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
    {original: 'https://user-images.githubusercontent.com/83164003/273562318-327ea922-0a71-49b3-9905-6ddcad070e18.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562318-327ea922-0a71-49b3-9905-6ddcad070e18.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562368-6a8d41a2-0b42-4efd-9ef0-2645124ba7e4.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562368-6a8d41a2-0b42-4efd-9ef0-2645124ba7e4.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562467-5970b5fc-b94b-47c3-9f79-32fd459cca88.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562467-5970b5fc-b94b-47c3-9f79-32fd459cca88.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562560-cf760047-5b3e-4e7b-aa51-3b7ce657c66d.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562560-cf760047-5b3e-4e7b-aa51-3b7ce657c66d.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562636-4ed04ea9-9a61-40f3-8655-b28153bebc8f.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562636-4ed04ea9-9a61-40f3-8655-b28153bebc8f.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562710-dc496863-a1a7-4d09-8fe9-045f67b018a1.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562710-dc496863-a1a7-4d09-8fe9-045f67b018a1.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562765-028efcd8-d895-46d4-9ae0-8eb0626aaeab.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562765-028efcd8-d895-46d4-9ae0-8eb0626aaeab.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562841-cf2d67e8-a74e-476c-89a2-ce99841777de.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562841-cf2d67e8-a74e-476c-89a2-ce99841777de.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562888-d3797e95-3d94-4b53-9f85-f727ba4982ff.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562888-d3797e95-3d94-4b53-9f85-f727ba4982ff.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273562977-8737d48d-7439-41cd-ab4f-1cc848045429.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273562977-8737d48d-7439-41cd-ab4f-1cc848045429.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273563037-ea9cc49e-a9e5-451f-b447-459223856ac2.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273563037-ea9cc49e-a9e5-451f-b447-459223856ac2.jpg'},
    {original: 'https://user-images.githubusercontent.com/83164003/273563119-546b0348-5e71-4e85-8f94-35867d5f3c0a.jpg', thumbnail: 'https://user-images.githubusercontent.com/83164003/273563119-546b0348-5e71-4e85-8f94-35867d5f3c0a.jpg'},
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

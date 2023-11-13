# Wedding Invitation React.js Template

결혼식 초대를 위한 청첩장 템플릿입니다.  
이 저장소가 마음에 들거나 사용하게 되신다면, Star와 Fork 부탁드리겠습니다😉

## Template Preview

### Wedding Invitation

## 템플릿에 포함하고 있는 내용 및 기능

- 결혼식 날짜, 위치, 인사말 출력
- 사진첩(react-image-gallery 라이브러리)
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능

## Wedding Invitation 수정 방법

`./public/index.html`의 `<head>` 부분을 알맞게 수정해 주세요.

```html
<meta content="○○○❤○○○ 결혼식에 초대합니다" name="Title" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Description" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ 결혼식에 초대합니다" />
<meta property="og:description" content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" />
<meta property="og:url" content="https://wedding.jh8459.com" />
<meta name="theme-color" content="#BCAAA4" />
```

`./src/configs.ts`를 수정하여 사용합니다.

```typescript
const Configs: ConfigsType = {
  url: 'https://wedding.jh8459.com',
  kakaoToken: '카카오톡 API 토큰',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL',
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
  titleImage: 'TitleImageURL',
  locationMapImage: 'LocationMapImageURL',
  galleryImages: [
    {
      original: '첫번째 갤러리 이미지 URL',
      thumbnail: '첫번째 갤러리 썸네일 이미지 URL',
    },
    {
      original: '두번째 갤러리 이미지 URL',
      thumbnail: '두번째 갤러리 썸네일 이미지 URL',
    },
    ...
  ],
};
```

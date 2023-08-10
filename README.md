# Wedding Invitation React.js Template

결혼식 초대를 위한 청첩장 템플릿입니다.  
이 저장소가 마음에 들거나 사용하게 되신다면, Star와 Fork 부탁드리겠습니다😉

## Template Preview

### Wedding Invitation v1
![Preview v1](./Preview_v1.gif)

### Wedding Invitation v2
![Preview v2](./Preview_v2.gif)

## 템플릿에 포함하고 있는 내용 및 기능
- 결혼식 날짜, 위치, 인사말 출력
- 사진첩
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능

## Wedding Invitation v1 사용 방법

`./v1/public/index.html`의 `<head>` 부분을 알맞게 수정해 주세요.  
```html
<meta content="○○○❤○○○ 결혼식에 초대합니다" name="Title" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Description" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ 결혼식에 초대합니다" />
<meta property="og:description" content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" />
<meta property="og:url" content="https://kyuhyuk.kr/wedding-invitation" />
<meta name="theme-color" content="#BCAAA4" />
```

`./v1/src/Config.ts`를 수정하여 사용합니다.  
```typescript
export const WEDDING_INVITATION_URL = 'http://localhost:8080';
export const KAKAOTALK_API_TOKEN = '카카오톡 API 토큰을 입력해주세요!';
export const KAKAOTALK_SHARE_IMAGE = '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!';

export const WEDDING_DATE = '1970년 01월 01일, 목요일 오전 12시 00분';
export const WEDDING_LOCATION = '○○○웨딩, ○층 ○○홀';

export const GROOM_NAME = '○○○';
export const GROOM_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GROOM_FATHER_NAME = '○○○';
export const GROOM_FATHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GROOM_MOTHER_NAME = '○○○';
export const GROOM_MOTHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';

export const BRIDE_NAME = '○○○';
export const BRIDE_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const BRIDE_FATHER_NAME = '○○○';
export const BRIDE_FATHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const BRIDE_MOTHER_NAME = '○○○';
export const BRIDE_MOTHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
```


## Wedding Invitation v2 사용 방법

`./v2/public/index.html`의 `<head>` 부분을 알맞게 수정해 주세요.  
```html
<meta content="○○○❤○○○ 결혼식에 초대합니다" name="Title" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Description" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ 결혼식에 초대합니다" />
<meta property="og:description" content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" />
<meta property="og:url" content="https://kyuhyuk.kr/wedding-invitation" />
<meta name="theme-color" content="#BCAAA4" />
```

`./v2/src/configs.ts`를 수정하여 사용합니다.  
```typescript
const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: '1970년 01월 01일, 목요일 오전 12시 00분',
  weddingLocation: '○○○웨딩, ○층 ○○홀',
  groom: {
    name: '○○○',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '○○○',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
  ],
};
```

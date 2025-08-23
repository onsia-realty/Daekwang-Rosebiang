# 🚀 부동산 웹사이트 복제 자동화 가이드

## 목적
기존 클러스터용인 경남아너스빌 웹사이트의 **핵심 기능**을 유지하면서, 다른 부동산 사이트의 디자인과 콘텐츠를 빠르게 복제하여 새로운 사이트를 생성합니다.

---

## 🔒 보존해야 할 핵심 기능

### 1. 관심고객 등록 시스템
```javascript
// 현재 시스템 정보
const CORE_FEATURES = {
  // Google Sheets 연동
  googleSheets: {
    scriptUrl: 'https://script.google.com/macros/s/AKfycbxz7twzCnPcTloLXdZ2umJVWyRd5uh88eIHn7W5P39dO5b4NLeD6Vm4COv5JpMTulDO/exec',
    enabled: true
  },
  
  // SMS 알림 (알리고 API)
  sms: {
    endpoint: '/api/send-notification',
    provider: 'aligo',
    sender: '1668-5257'
  },
  
  // 대표 전화번호
  mainPhone: '1668-5257',
  
  // 카카오톡 채널
  kakaoChat: 'https://open.kakao.com/o/sen4dWJh'
}
```

### 2. 스마트로그 추적
```javascript
// layout.tsx에 이미 적용됨
const TRACKING = {
  smartlog: {
    account: 'UHPT-32957',
    server: 'a29'
  }
}
```

---

## 📋 새 사이트 복제 단계별 가이드

### STEP 1: 타겟 사이트 정보 수집
```yaml
target_site:
  name: "용인 고진역 대광로제비앙"
  url: "https://용인고진역대광로제비앙.com"
  phone: "1551-3300"
  
  location:
    site: "경기도 용인시 처인구 고진역 인근"
    model_house: "경기도 용인시 처인구 김량장동"
  
  images_to_collect:
    - 메인 비주얼 이미지
    - 로고
    - 조감도
    - 평면도
    - 위치도
    - 프리미엄 이미지
```

### STEP 2: 자동 변환 명령어

```bash
# 1. 프로젝트 복사
cp -r Yongin_Honorsville-main New_Project_Name
cd New_Project_Name

# 2. 기본 정보 업데이트 스크립트 실행
node update-site-info.js --config=new-site-config.json
```

### STEP 3: 설정 파일 (new-site-config.json)
```json
{
  "siteName": "용인 고진역 대광로제비앙",
  "domain": "https://yongin-gojin.vercel.app",
  "phone": "1551-3300",
  "address": {
    "site": "경기도 용인시 처인구 고진역 인근",
    "modelHouse": "경기도 용인시 처인구 김량장동"
  },
  "preserveFeatures": {
    "googleSheets": true,
    "smsNotification": true,
    "kakaoChat": false,
    "smartLog": true
  },
  "replaceContent": {
    "heroTitle": "용인 고진역 역세권 프리미엄",
    "heroSubtitle": "대광로제비앙이 만드는 특별한 주거공간",
    "features": [
      "고진역 도보 5분",
      "대단지 프리미엄",
      "녹지율 40%",
      "스마트홈 시스템"
    ]
  }
}
```

---

## 🤖 자동화 스크립트

### update-site-info.js
```javascript
const fs = require('fs');
const path = require('path');

// 설정 파일 읽기
const config = JSON.parse(fs.readFileSync(process.argv[3].split('=')[1]));

// 1. layout.tsx 업데이트 - 메타데이터
function updateMetadata() {
  const layoutPath = './app/layout.tsx';
  let content = fs.readFileSync(layoutPath, 'utf8');
  
  // 사이트명 변경
  content = content.replace(/클러스터용인 경남아너스빌/g, config.siteName);
  
  // 전화번호 변경 (중요: 대표번호만 변경, SMS 발신번호는 유지)
  content = content.replace(/1668-5257/g, config.phone);
  
  fs.writeFileSync(layoutPath, content);
}

// 2. 페이지 콘텐츠 업데이트
function updatePages() {
  const pagePath = './app/page.tsx';
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Hero 섹션 텍스트 변경
  content = content.replace(
    /서울~세종고속도로 더 가깝게/g,
    config.replaceContent.heroTitle
  );
  
  content = content.replace(
    /삼성,SK하이닉스 10분대로 더 빠르게/g,
    config.replaceContent.heroSubtitle
  );
  
  fs.writeFileSync(pagePath, content);
}

// 3. 환경변수 생성 (.env.local)
function createEnvFile() {
  const envContent = `
# 대표 전화번호
NEXT_PUBLIC_PHONE=${config.phone}

# SMS 알림 설정 (기존 유지)
ALIGO_API_KEY=YOUR_EXISTING_KEY
ALIGO_USER_ID=YOUR_EXISTING_ID
ALIGO_SENDER=1668-5257

# Google Sheets (기존 유지)
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_EXISTING_URL/exec
`;
  
  fs.writeFileSync('.env.local', envContent);
}

// 실행
updateMetadata();
updatePages();
createEnvFile();

console.log('✅ 사이트 정보가 업데이트되었습니다!');
```

---

## 🎨 디자인 복제 가이드

### 1. 이미지 수집 스크립트
```javascript
// collect-images.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');

async function collectImages(targetUrl) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(targetUrl);
  
  // 모든 이미지 URL 수집
  const images = await page.evaluate(() => {
    return Array.from(document.images).map(img => img.src);
  });
  
  // 이미지 다운로드
  images.forEach((url, index) => {
    const filename = `./public/collected_${index}.jpg`;
    // 다운로드 로직
  });
  
  await browser.close();
}
```

### 2. 스타일 추출
```javascript
// 타겟 사이트의 주요 색상 추출
const TARGET_COLORS = {
  primary: '#1a5490',    // 대광로제비앙 메인 색상
  secondary: '#f7941d',  // 포인트 색상
  text: '#333333'
};

// tailwind.config.ts 업데이트
```

---

## 📝 체크리스트

### 변경해야 할 항목
- [ ] 사이트명
- [ ] 대표 전화번호 (UI 표시용)
- [ ] 주소 정보
- [ ] 이미지 파일들
- [ ] Hero 텍스트
- [ ] 특장점 내용
- [ ] SEO 메타데이터

### 유지해야 할 항목
- [x] Google Sheets 연동 (관심고객 DB)
- [x] SMS 발신 시스템 (알리고 API)
- [x] SMS 발신번호 (1668-5257)
- [x] 스마트로그 추적 코드
- [x] 기본 페이지 구조
- [x] 반응형 레이아웃

---

## 🚀 빠른 실행 명령어

```bash
# 1. 새 프로젝트 생성
./create-new-site.sh "용인 고진역 대광로제비앙"

# 2. 이미지 수집
node collect-images.js --url="https://용인고진역대광로제비앙.com"

# 3. 설정 적용
node update-site-info.js --config=gojin-config.json

# 4. 개발 서버 실행
pnpm run dev

# 5. 빌드 및 배포
pnpm run build
vercel --prod
```

---

## ⚠️ 주의사항

1. **SMS 발신번호는 변경하지 마세요**
   - 인증된 발신번호(1668-5257)만 사용 가능
   - UI에 표시되는 번호만 변경

2. **Google Sheets API는 재사용**
   - 같은 시트에 프로젝트명 컬럼 추가로 구분
   - 또는 새 시트 생성 후 API URL 변경

3. **이미지 저작권 확인**
   - 수집한 이미지 사용 전 라이선스 확인
   - 필요시 유사 무료 이미지로 대체

4. **도메인 설정**
   - Vercel 배포 후 커스텀 도메인 연결
   - SSL 인증서 자동 적용

---

## 💡 프로 팁

### 1. 일괄 처리 스크립트
```bash
#!/bin/bash
# batch-create-sites.sh

sites=("site1" "site2" "site3")

for site in "${sites[@]}"
do
  echo "Creating $site..."
  cp -r template-site $site
  cd $site
  node update-site-info.js --config=configs/$site.json
  pnpm install
  pnpm run build
  cd ..
done
```

### 2. 컨텐츠 매핑 테이블
```csv
원본 텍스트,대체 텍스트
클러스터용인 경남아너스빌,용인 고진역 대광로제비앙
반도체 프리미엄 직접 영향권,고진역 역세권 프리미엄
1668-5257,1551-3300
```

---

## 📞 문제 해결

### 자주 발생하는 이슈
1. **SMS 발송 실패**: API 키 확인, 발신번호 인증 확인
2. **이미지 깨짐**: 파일명 한글 인코딩 문제 → 영문 변경
3. **빌드 에러**: Node 버전 확인 (18.x 이상)

### 지원
- GitHub Issues: [프로젝트 저장소]/issues
- 기술 문서: CLAUDE.md 참조
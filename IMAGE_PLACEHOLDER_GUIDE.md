# 이미지 플레이스홀더 가이드

본 프로젝트의 모든 이미지는 현재 플레이스홀더로 대체되어 있습니다.
실제 이미지를 `public` 폴더에 추가하여 사용하세요.

## 폴더 구조

```
public/
├── assets/
│   ├── images/
│   │   ├── common/           # 공통 이미지
│   │   │   ├── img_logo.png      # 로고
│   │   │   ├── img_tel.png       # 전화 아이콘
│   │   │   ├── img_open.png      # 메뉴 오픈 버튼
│   │   │   └── img_footer.png    # 푸터 이미지
│   │   │
│   │   ├── main/             # 메인 페이지 이미지
│   │   │   ├── video_intro.mp4   # 인트로 비디오
│   │   │   ├── img_intro_*.png   # 인트로 텍스트 이미지
│   │   │   ├── img_visual_*.png  # 비주얼 섹션 이미지
│   │   │   ├── img_sec1_*.png    # 섹션 1 이미지
│   │   │   ├── img_sec2_*.png    # 섹션 2 이미지
│   │   │   ├── img_sec3_*.png    # 섹션 3 이미지
│   │   │   ├── img_sec4_*.png    # 섹션 4 이미지
│   │   │   └── img_sec5_*.png    # 섹션 5 이미지
│   │   │
│   │   └── popup/            # 팝업 이미지
│   │       ├── popup_250812.png
│   │       └── popup_250721.png
│   │
└── favicon/
    ├── favicon.ico
    └── link_logo.jpg
```

## 주요 이미지 목록

### 필수 이미지 (최우선 교체)

1. **로고 이미지**
   - `img_logo.png` - 헤더 로고
   - `link_logo.jpg` - OG 이미지용 로고

2. **메인 비주얼**
   - `img_visual_si1.png` - 메인 슬라이드 1
   - `img_visual_si2.png` - 메인 슬라이드 2
   - `img_visual_si3.png` - 메인 슬라이드 3

3. **조감도 및 평면도**
   - `img_sec1_si1.png` - 조감도
   - `img_sec1_si2.png` - 59㎡ 평면도
   - `img_sec1_si3.png` - 74㎡ 평면도
   - `img_sec1_si4.png` - 84㎡A 평면도
   - `img_sec1_si5.png` - 84㎡B 평면도

### 텍스트 이미지 (필요시 텍스트로 대체 가능)

- `img_visual_st*.png` - 비주얼 텍스트
- `img_sec*_t*.png` - 각 섹션 타이틀 텍스트

### 아이콘 및 버튼

- `img_visual_arrow_*.png` - 화살표 버튼
- `img_visual_person_*.png` - 고객등록 아이콘
- `img_visual_tel_*.png` - 전화 아이콘
- `img_sec5_btn_*.png` - 네이버/카카오 버튼

## 이미지 교체 방법

1. 해당 경로에 이미지 파일 배치
2. 파일명을 동일하게 유지
3. 필요시 HTML 파일에서 경로 수정

## 비디오 파일

- `video_intro.mp4` - 인트로 배경 비디오
  - 권장 크기: 1920x1080
  - 권장 형식: MP4 (H.264)
  - 권장 용량: 10MB 이하

## 참고사항

- 모든 이미지는 웹 최적화를 위해 압축 권장
- 레티나 디스플레이를 위해 2x 버전 준비 권장
- 이미지 파일명은 영문 사용 권장
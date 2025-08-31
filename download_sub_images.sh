#!/bin/bash

# 기본 URL
BASE_URL="https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final"

echo "서브 페이지 이미지 다운로드 시작..."

# sub 폴더 생성
mkdir -p images/sub

# common active 이미지들
echo "Common Active 이미지들 다운로드 중..."
curl -o "images/common/img_logo_active.png" "$BASE_URL/assets/images/common/img_logo_active.png"
curl -o "images/common/img_tel_active.png" "$BASE_URL/assets/images/common/img_tel_active.png"
curl -o "images/common/img_open_active.png" "$BASE_URL/assets/images/common/img_open_active.png"

# sub 페이지 이미지들
echo "Sub 페이지 이미지들 다운로드 중..."
curl -o "images/sub/img_top_summary.png" "$BASE_URL/assets/images/sub/img_top_summary.png"
curl -o "images/sub/img_open1.png" "$BASE_URL/assets/images/sub/img_open1.png"
curl -o "images/sub/img_open2.png" "$BASE_URL/assets/images/sub/img_open2.png"
curl -o "images/sub/img_summary.png" "$BASE_URL/assets/images/sub/img_summary.png"
curl -o "images/sub/img_rt.png" "$BASE_URL/assets/images/sub/img_rt.png"

# 다른 주요 서브 페이지들의 top 이미지들 예상
echo "기타 서브 페이지 Top 이미지들 다운로드 시도 중..."
curl -o "images/sub/img_top_location.png" "$BASE_URL/assets/images/sub/img_top_location.png"
curl -o "images/sub/img_top_premium.png" "$BASE_URL/assets/images/sub/img_top_premium.png"  
curl -o "images/sub/img_top_brand.png" "$BASE_URL/assets/images/sub/img_top_brand.png"
curl -o "images/sub/img_top_direction.png" "$BASE_URL/assets/images/sub/img_top_direction.png"
curl -o "images/sub/img_top_chart.png" "$BASE_URL/assets/images/sub/img_top_chart.png"
curl -o "images/sub/img_top_community.png" "$BASE_URL/assets/images/sub/img_top_community.png"
curl -o "images/sub/img_top_unit.png" "$BASE_URL/assets/images/sub/img_top_unit.png"
curl -o "images/sub/img_top_emodelhouse.png" "$BASE_URL/assets/images/sub/img_top_emodelhouse.png"
curl -o "images/sub/img_top_materials.png" "$BASE_URL/assets/images/sub/img_top_materials.png"
curl -o "images/sub/img_top_schedule.png" "$BASE_URL/assets/images/sub/img_top_schedule.png"
curl -o "images/sub/img_top_guide1.png" "$BASE_URL/assets/images/sub/img_top_guide1.png"
curl -o "images/sub/img_top_customer.png" "$BASE_URL/assets/images/sub/img_top_customer.png"

# 컨텐츠 이미지들
echo "컨텐츠 이미지들 다운로드 시도 중..."
curl -o "images/sub/img_location.png" "$BASE_URL/assets/images/sub/img_location.png"
curl -o "images/sub/img_premium.png" "$BASE_URL/assets/images/sub/img_premium.png"
curl -o "images/sub/img_brand.png" "$BASE_URL/assets/images/sub/img_brand.png"
curl -o "images/sub/img_direction.png" "$BASE_URL/assets/images/sub/img_direction.png"
curl -o "images/sub/img_chart.png" "$BASE_URL/assets/images/sub/img_chart.png"
curl -o "images/sub/img_community.png" "$BASE_URL/assets/images/sub/img_community.png"
curl -o "images/sub/img_unit.png" "$BASE_URL/assets/images/sub/img_unit.png"
curl -o "images/sub/img_emodelhouse.png" "$BASE_URL/assets/images/sub/img_emodelhouse.png"
curl -o "images/sub/img_materials.png" "$BASE_URL/assets/images/sub/img_materials.png"
curl -o "images/sub/img_schedule.png" "$BASE_URL/assets/images/sub/img_schedule.png"
curl -o "images/sub/img_guide1.png" "$BASE_URL/assets/images/sub/img_guide1.png"
curl -o "images/sub/img_guide2.png" "$BASE_URL/assets/images/sub/img_guide2.png"
curl -o "images/sub/img_guide3.png" "$BASE_URL/assets/images/sub/img_guide3.png"
curl -o "images/sub/img_guide4.png" "$BASE_URL/assets/images/sub/img_guide4.png"
curl -o "images/sub/img_guide5.png" "$BASE_URL/assets/images/sub/img_guide5.png"
curl -o "images/sub/img_customer.png" "$BASE_URL/assets/images/sub/img_customer.png"
curl -o "images/sub/img_video.png" "$BASE_URL/assets/images/sub/img_video.png"
curl -o "images/sub/img_announcement.png" "$BASE_URL/assets/images/sub/img_announcement.png"

echo "서브 페이지 이미지 다운로드 완료!"
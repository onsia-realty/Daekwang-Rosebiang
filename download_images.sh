#!/bin/bash

# 기본 URL
BASE_URL="https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final"

echo "이미지 다운로드 시작..."

# common 폴더 이미지들
echo "Common 이미지들 다운로드 중..."
curl -o "images/common/img_logo.png" "$BASE_URL/assets/images/common/img_logo.png"
curl -o "images/common/img_tel.png" "$BASE_URL/assets/images/common/img_tel.png"
curl -o "images/common/img_open.png" "$BASE_URL/assets/images/common/img_open.png"
curl -o "images/common/img_footer.png" "$BASE_URL/assets/images/common/img_footer.png"
curl -o "images/common/img_popup_close_btn.png" "$BASE_URL/images/common/img_popup_close_btn.png"

# popup 폴더 이미지들
echo "Popup 이미지들 다운로드 중..."
curl -o "images/popup/popup_250812.png" "$BASE_URL/assets/images/popup/popup_250812.png?V1"
curl -o "images/popup/popup_250827.png" "$BASE_URL/assets/images/popup/popup_250827.png?V1"
curl -o "images/popup/popup_250829.png" "$BASE_URL/assets/images/popup/popup_250829.png?V1"

# main 폴더 이미지들 - intro
echo "Main/Intro 이미지들 다운로드 중..."
curl -o "images/main/img_intro_i1.png" "$BASE_URL/assets/images/main/img_intro_i1.png"
curl -o "images/main/img_intro_i2.png" "$BASE_URL/assets/images/main/img_intro_i2.png"
curl -o "images/main/img_intro_i3.png" "$BASE_URL/assets/images/main/img_intro_i3.png"
curl -o "images/main/img_intro_skip1.png" "$BASE_URL/assets/images/main/img_intro_skip1.png"
curl -o "images/main/img_intro_skip2.png" "$BASE_URL/assets/images/main/img_intro_skip2.png"

# main 폴더 이미지들 - visual
echo "Main/Visual 이미지들 다운로드 중..."
curl -o "images/main/img_visual_scroll.png" "$BASE_URL/assets/images/main/img_visual_scroll.png"
curl -o "images/main/img_visual_person_t.png" "$BASE_URL/assets/images/main/img_visual_person_t.png"
curl -o "images/main/img_visual_person_i.png" "$BASE_URL/assets/images/main/img_visual_person_i.png"
curl -o "images/main/img_visual_tel_t.png" "$BASE_URL/assets/images/main/img_visual_tel_t.png"
curl -o "images/main/img_visual_tel_i.png" "$BASE_URL/assets/images/main/img_visual_tel_i.png"
curl -o "images/main/img_visual_top_i.png" "$BASE_URL/assets/images/main/img_visual_top_i.png"
curl -o "images/main/img_visual_si1.png" "$BASE_URL/assets/images/main/img_visual_si1.png"
curl -o "images/main/img_visual_si2.png" "$BASE_URL/assets/images/main/img_visual_si2.png"
curl -o "images/main/img_visual_si3.png" "$BASE_URL/assets/images/main/img_visual_si3.png"
curl -o "images/main/img_visual_st1.png" "$BASE_URL/assets/images/main/img_visual_st1.png"
curl -o "images/main/img_visual_st22.png" "$BASE_URL/assets/images/main/img_visual_st22.png"
curl -o "images/main/img_visual_st3.png" "$BASE_URL/assets/images/main/img_visual_st3.png"
curl -o "images/main/img_visual_arrow_left.png" "$BASE_URL/assets/images/main/img_visual_arrow_left.png"
curl -o "images/main/img_visual_arrow_right.png" "$BASE_URL/assets/images/main/img_visual_arrow_right.png"
curl -o "images/main/img_visual_partner.png" "$BASE_URL/assets/images/main/img_visual_partner.png"

# main 폴더 이미지들 - sec1
echo "Main/Sec1 이미지들 다운로드 중..."
curl -o "images/main/img_sec1_t1.png" "$BASE_URL/assets/images/main/img_sec1_t1.png"
curl -o "images/main/img_sec1_t2.png" "$BASE_URL/assets/images/main/img_sec1_t2.png"
curl -o "images/main/img_sec1_i1.png" "$BASE_URL/assets/images/main/img_sec1_i1.png"
curl -o "images/main/img_sec1_i2.png" "$BASE_URL/assets/images/main/img_sec1_i2.png"
curl -o "images/main/img_sec1_si1.png" "$BASE_URL/assets/images/main/img_sec1_si1.png"
curl -o "images/main/img_sec1_si2.png" "$BASE_URL/assets/images/main/img_sec1_si2.png"
curl -o "images/main/img_sec1_si3.png" "$BASE_URL/assets/images/main/img_sec1_si3.png"
curl -o "images/main/img_sec1_si4.png" "$BASE_URL/assets/images/main/img_sec1_si4.png"
curl -o "images/main/img_sec1_si5.png" "$BASE_URL/assets/images/main/img_sec1_si5.png"
curl -o "images/main/img_sec1_st1_1.png" "$BASE_URL/assets/images/main/img_sec1_st1_1.png"
curl -o "images/main/img_sec1_st1_2.png" "$BASE_URL/assets/images/main/img_sec1_st1_2.png"
curl -o "images/main/img_sec1_st2_1.png" "$BASE_URL/assets/images/main/img_sec1_st2_1.png"
curl -o "images/main/img_sec1_st2_2.png" "$BASE_URL/assets/images/main/img_sec1_st2_2.png"
curl -o "images/main/img_sec1_st3_1.png" "$BASE_URL/assets/images/main/img_sec1_st3_1.png"
curl -o "images/main/img_sec1_st3_2.png" "$BASE_URL/assets/images/main/img_sec1_st3_2.png"
curl -o "images/main/img_sec1_st4_1.png" "$BASE_URL/assets/images/main/img_sec1_st4_1.png"
curl -o "images/main/img_sec1_st4_2.png" "$BASE_URL/assets/images/main/img_sec1_st4_2.png"
curl -o "images/main/img_sec1_st5_1.png" "$BASE_URL/assets/images/main/img_sec1_st5_1.png"
curl -o "images/main/img_sec1_st5_2.png" "$BASE_URL/assets/images/main/img_sec1_st5_2.png"

# main 폴더 이미지들 - sec2
echo "Main/Sec2 이미지들 다운로드 중..."
curl -o "images/main/img_sec2_t1.png" "$BASE_URL/assets/images/main/img_sec2_t1.png"
curl -o "images/main/img_sec2_i1.png" "$BASE_URL/assets/images/main/img_sec2_i1.png"

# main 폴더 이미지들 - sec3
echo "Main/Sec3 이미지들 다운로드 중..."
curl -o "images/main/img_sec3_t1.png" "$BASE_URL/assets/images/main/img_sec3_t1.png"
curl -o "images/main/img_sec3_arrow_left.png" "$BASE_URL/assets/images/main/img_sec3_arrow_left.png"
curl -o "images/main/img_sec3_arrow_right.png" "$BASE_URL/assets/images/main/img_sec3_arrow_right.png"
curl -o "images/main/img_sec3_i1.png" "$BASE_URL/assets/images/main/img_sec3_i1.png"
curl -o "images/main/img_sec3_i2.png" "$BASE_URL/assets/images/main/img_sec3_i2.png"
curl -o "images/main/img_sec3_i3.png" "$BASE_URL/assets/images/main/img_sec3_i3.png"
curl -o "images/main/img_sec3_i4.png" "$BASE_URL/assets/images/main/img_sec3_i4.png"
curl -o "images/main/img_sec3_i5.png" "$BASE_URL/assets/images/main/img_sec3_i5.png"

# main 폴더 이미지들 - sec4
echo "Main/Sec4 이미지들 다운로드 중..."
curl -o "images/main/img_sec4_t1.png" "$BASE_URL/assets/images/main/img_sec4_t1.png"
curl -o "images/main/img_sec4_b1.png" "$BASE_URL/assets/images/main/img_sec4_b1.png"
curl -o "images/main/img_sec4_b2.png" "$BASE_URL/assets/images/main/img_sec4_b2.png"

# main 폴더 이미지들 - sec5
echo "Main/Sec5 이미지들 다운로드 중..."
curl -o "images/main/img_sec5_t1.png" "$BASE_URL/assets/images/main/img_sec5_t1.png"
curl -o "images/main/img_sec5_t2.png" "$BASE_URL/assets/images/main/img_sec5_t2.png"
curl -o "images/main/img_sec5_t3.png" "$BASE_URL/assets/images/main/img_sec5_t3.png"
curl -o "images/main/img_sec5_t4.png" "$BASE_URL/assets/images/main/img_sec5_t4.png"
curl -o "images/main/img_sec5_t5.png" "$BASE_URL/assets/images/main/img_sec5_t5.png"
curl -o "images/main/img_sec5_t6.png" "$BASE_URL/assets/images/main/img_sec5_t6.png"
curl -o "images/main/img_sec5_i1.png" "$BASE_URL/assets/images/main/img_sec5_i1.png"
curl -o "images/main/img_sec5_i2.png" "$BASE_URL/assets/images/main/img_sec5_i2.png"
curl -o "images/main/img_sec5_btn_naver1.png" "$BASE_URL/assets/images/main/img_sec5_btn_naver1.png"
curl -o "images/main/img_sec5_btn_kakao1.png" "$BASE_URL/assets/images/main/img_sec5_btn_kakao1.png"
curl -o "images/main/img_sec5_btn_naver2.png" "$BASE_URL/assets/images/main/img_sec5_btn_naver2.png"
curl -o "images/main/img_sec5_btn_kakao2.png" "$BASE_URL/assets/images/main/img_sec5_btn_kakao2.png"

# background 이미지들
echo "Background 이미지들 다운로드 중..."
curl -o "images/main/bg_sec3.png" "$BASE_URL/assets/images/main/bg_sec3.png"
curl -o "images/main/bg_sec4.png" "$BASE_URL/assets/images/main/bg_sec4.png"
curl -o "images/main/bg_sec5.png" "$BASE_URL/assets/images/main/bg_sec5.png"

echo "메인 페이지 이미지 다운로드 완료!"
echo "저장 위치: images/ 폴더"
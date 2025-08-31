import requests
import os
from urllib.parse import urlparse
import time

# 이미지 URL 리스트
image_urls = [
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_logo.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_tel.png", 
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_open.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/popup/popup_250812.png?V1",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/popup/popup_250827.png?V1",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/popup/popup_250829.png?V1",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_intro_i1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_intro_i2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_intro_i3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_intro_skip1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_intro_skip2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec4_b1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec4_b2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_scroll.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_person_t.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_person_i.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_tel_t.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_tel_i.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_top_i.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_si3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_si1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_si2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_st3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_st1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_st22.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_arrow_left.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_arrow_right.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_visual_partner.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_t1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_si1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st1_1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st1_2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_si2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st2_1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st2_2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_si3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st3_1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st3_2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_si4.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st4_1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st4_2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_si5.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st5_1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_st5_2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_i2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_t2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec1_i1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec2_i1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec2_t1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_t1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_arrow_left.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_arrow_right.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_i1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_i2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_i3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_i4.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec3_i5.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec4_t1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t4.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_i1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_i2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t5.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_btn_naver1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_btn_kakao1.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_t6.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_btn_naver2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_btn_kakao2.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_footer.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/images/common/img_popup_close_btn.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/bg_sec3.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/bg_sec4.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/bg_sec5.png"
]

def download_image(url, folder_path):
    try:
        # URL에서 파일명 추출 (쿼리 스트링 제거)
        filename = os.path.basename(urlparse(url).path)
        if '?' in filename:
            filename = filename.split('?')[0]
        
        # 폴더별로 구분
        if '/common/' in url:
            subfolder = 'common'
        elif '/main/' in url:
            subfolder = 'main'
        elif '/popup/' in url:
            subfolder = 'popup'
        else:
            subfolder = 'other'
            
        # 하위 폴더 생성
        target_folder = os.path.join(folder_path, subfolder)
        os.makedirs(target_folder, exist_ok=True)
        
        # 파일 경로
        file_path = os.path.join(target_folder, filename)
        
        # 이미 존재하면 건너뛰기
        if os.path.exists(file_path):
            print(f"건너뛰기: {filename} (이미 존재)")
            return True
        
        # 이미지 다운로드
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        # 파일 저장
        with open(file_path, 'wb') as f:
            f.write(response.content)
            
        print(f"다운로드 완료: {subfolder}/{filename}")
        return True
        
    except Exception as e:
        print(f"다운로드 실패 {url}: {e}")
        return False

def main():
    folder_path = "images"
    os.makedirs(folder_path, exist_ok=True)
    
    print(f"총 {len(image_urls)}개의 이미지 다운로드 시작...")
    
    success_count = 0
    fail_count = 0
    
    for i, url in enumerate(image_urls, 1):
        print(f"\n[{i}/{len(image_urls)}] 다운로드 중...")
        
        if download_image(url, folder_path):
            success_count += 1
        else:
            fail_count += 1
            
        # 서버 부하 방지를 위한 짧은 대기
        time.sleep(0.5)
    
    print(f"\n=== 다운로드 완료 ===")
    print(f"성공: {success_count}개")
    print(f"실패: {fail_count}개")
    print(f"저장 위치: {os.path.abspath(folder_path)}")

if __name__ == "__main__":
    main()
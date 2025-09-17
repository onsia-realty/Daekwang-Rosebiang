import requests
import os
from urllib.parse import urlparse
import time

# 누락된 이미지 URL 리스트
missing_image_urls = [
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/main/img_sec5_brand.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_popup_btn.png",
    "https://xn--299ardz1r3mg9pi2nlq3a66bi1c95be9h.com/final/assets/images/common/img_popup_close_btn.png",
]

# 이미지 저장 디렉토리 생성
def create_dir_if_not_exists(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"[OK] Directory created: {path}")

# 이미지 다운로드 함수
def download_image(url, save_path):
    try:
        print(f"[DOWNLOADING] {url}")

        # HTTP 요청 헤더 설정
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }

        response = requests.get(url, headers=headers, timeout=10)

        if response.status_code == 200:
            # 파일 저장
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"[SUCCESS] Saved: {save_path}")
            return True
        else:
            print(f"[FAIL] Download failed (status: {response.status_code}): {url}")
            return False

    except Exception as e:
        print(f"[ERROR] Exception occurred: {e}")
        return False

# 메인 실행
def main():
    # 기본 디렉토리 설정
    base_dir = os.path.dirname(os.path.abspath(__file__))

    success_count = 0
    fail_count = 0

    for url in missing_image_urls:
        # URL에서 파일 경로 추출
        parsed = urlparse(url)
        path_parts = parsed.path.split('/')

        # assets/images 이후의 경로 찾기
        if 'assets' in path_parts:
            idx = path_parts.index('assets')
            relative_path = '/'.join(path_parts[idx+1:])  # images/... 부분
        else:
            relative_path = parsed.path.lstrip('/')

        # 파일명에서 쿼리 파라미터 제거
        if '?' in relative_path:
            relative_path = relative_path.split('?')[0]

        # 저장 경로 생성
        save_path = os.path.join(base_dir, relative_path)
        save_dir = os.path.dirname(save_path)

        # 디렉토리 생성
        create_dir_if_not_exists(save_dir)

        # 이미지 다운로드
        if download_image(url, save_path):
            success_count += 1
        else:
            fail_count += 1

        # 서버 부하 방지를 위한 대기
        time.sleep(0.5)

    print("\n" + "="*50)
    print(f"[COMPLETE] Download finished!")
    print(f"[SUCCESS] {success_count} files")
    print(f"[FAILED] {fail_count} files")
    print("="*50)

if __name__ == "__main__":
    main()
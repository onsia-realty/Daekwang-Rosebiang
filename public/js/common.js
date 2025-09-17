// Common JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 팝업 토글
    const popupWrap = document.getElementById('popupWrap');
    const popupBtn = document.querySelector('.popupWrap .btnsWrap');
    
    if (popupBtn) {
        // 초기 팝업 열기 (3초 후)
        setTimeout(function() {
            popupWrap.classList.add('active');
        }, 3000);
        
        // 팝업 버튼 클릭
        popupBtn.addEventListener('click', function() {
            popupWrap.classList.toggle('active');
        });
    }
    
    // 헤더 스크롤 효과
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255,255,255,0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        // 스크롤 방향에 따른 헤더 숨김/표시
        if (currentScroll > lastScroll && currentScroll > 300) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // 탑 버튼 부드러운 스크롤
    const topBtn = document.querySelector('.topBtn');
    if (topBtn) {
        topBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 메뉴 버튼 (모바일)
    const menuBtn = document.getElementById('menuBtn');
    const gnb = document.querySelector('.gnb');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            // 모바일 메뉴 토글 로직
            if (window.innerWidth <= 991) {
                gnb.style.display = gnb.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
    
    // 윈도우 리사이즈 처리
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            if (gnb) {
                gnb.style.display = '';
            }
        }
    });
    
    // 부드러운 앵커 스크롤
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#0') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 이미지 레이지 로딩
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // 페이지 로드 애니메이션
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window) {
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(el => animateObserver.observe(el));
    }
});

// 비디오 팝업 열기
function openVideo(num) {
    const videoPopup = document.getElementById('videoPopWrap' + num);
    if (videoPopup) {
        videoPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 닫기 버튼 이벤트
        const closeBtn = videoPopup.querySelector('.closeBtn');
        if (closeBtn) {
            closeBtn.onclick = function() {
                closeVideo(num);
            };
        }
        
        // 배경 클릭시 닫기
        videoPopup.onclick = function(e) {
            if (e.target === videoPopup) {
                closeVideo(num);
            }
        };
    }
}

// 비디오 팝업 닫기
function closeVideo(num) {
    const videoPopup = document.getElementById('videoPopWrap' + num);
    if (videoPopup) {
        videoPopup.style.display = 'none';
        document.body.style.overflow = '';
        
        // 비디오 정지
        const iframe = videoPopup.querySelector('iframe');
        if (iframe) {
            const src = iframe.src;
            iframe.src = '';
            iframe.src = src;
        }
    }
}

// ESC 키로 팝업 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // 비디오 팝업 닫기
        const videoPopups = document.querySelectorAll('.videoPopWrap');
        videoPopups.forEach((popup, index) => {
            if (popup.style.display === 'flex') {
                closeVideo(index + 1);
            }
        });
    }
});
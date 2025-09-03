// Main Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 메인 비주얼 슬라이더
    const visualSlider = new Swiper('.visualSlider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.visualSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.visualSlider .swiper-button-next',
            prevEl: '.visualSlider .swiper-button-prev',
        },
        on: {
            slideChange: function() {
                // 슬라이드 변경시 텍스트 애니메이션
                const activeSlide = this.slides[this.activeIndex];
                const textWrap = activeSlide.querySelector('.textWrap');
                if (textWrap) {
                    textWrap.style.animation = 'none';
                    setTimeout(() => {
                        textWrap.style.animation = 'fadeInUp 1s ease';
                    }, 100);
                }
            }
        }
    });
    
    // 갤러리 슬라이더
    const gallerySlider = new Swiper('.gallerySlider', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
            nextEl: '.gallerySlider .swiper-button-next',
            prevEl: '.gallerySlider .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3.5,
                spaceBetween: 40,
            }
        },
        on: {
            init: function() {
                updateSlideScale(this);
            },
            slideChange: function() {
                updateSlideScale(this);
            }
        }
    });
    
    // 갤러리 슬라이드 스케일 업데이트
    function updateSlideScale(swiper) {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
                slide.style.transform = 'scale(1)';
                slide.style.opacity = '1';
            } else {
                slide.style.transform = 'scale(0.85)';
                slide.style.opacity = '0.7';
            }
            slide.style.transition = 'all 0.5s ease';
        });
    }
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 섹션별 애니메이션
                if (entry.target.classList.contains('sec1Wrap')) {
                    animateSection1();
                } else if (entry.target.classList.contains('sec2Wrap')) {
                    animateSection2();
                } else if (entry.target.classList.contains('sec3Wrap')) {
                    animateSection3();
                } else if (entry.target.classList.contains('sec4Wrap')) {
                    animateSection4();
                } else if (entry.target.classList.contains('sec5Wrap')) {
                    animateSection5();
                }
            }
        });
    }, observerOptions);
    
    // 섹션 관찰 시작
    const sections = document.querySelectorAll('.sec');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 섹션1 애니메이션
    function animateSection1() {
        const gridItems = document.querySelectorAll('.sec1Wrap .gridItem');
        gridItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    }
    
    // 섹션2 애니메이션
    function animateSection2() {
        const mainImg = document.querySelector('.sec2Wrap .mainImg');
        if (mainImg) {
            mainImg.style.opacity = '0';
            mainImg.style.transform = 'scale(0.9)';
            mainImg.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                mainImg.style.opacity = '1';
                mainImg.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    // 섹션3 애니메이션
    function animateSection3() {
        const title = document.querySelector('.sec3Wrap .titleWrap');
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-20px)';
            title.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 200);
        }
    }
    
    // 섹션4 애니메이션
    function animateSection4() {
        const videoBtns = document.querySelectorAll('.videoBtn');
        videoBtns.forEach((btn, index) => {
            setTimeout(() => {
                btn.style.opacity = '0';
                btn.style.transform = 'scale(0.8)';
                btn.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    btn.style.opacity = '1';
                    btn.style.transform = 'scale(1)';
                }, 100);
            }, index * 200);
        });
    }
    
    // 섹션5 애니메이션
    function animateSection5() {
        const leftWrap = document.querySelector('.sec5Wrap .leftWrap');
        const rightWrap = document.querySelector('.sec5Wrap .rightWrap');
        
        if (leftWrap) {
            leftWrap.style.opacity = '0';
            leftWrap.style.transform = 'translateX(-30px)';
            leftWrap.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                leftWrap.style.opacity = '1';
                leftWrap.style.transform = 'translateX(0)';
            }, 200);
        }
        
        if (rightWrap) {
            rightWrap.style.opacity = '0';
            rightWrap.style.transform = 'translateX(30px)';
            rightWrap.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                rightWrap.style.opacity = '1';
                rightWrap.style.transform = 'translateX(0)';
            }, 400);
        }
    }
    
    // 패럴랙스 효과
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // 배경 이미지 패럴랙스
        const bgImages = document.querySelectorAll('.bgImages img');
        bgImages.forEach((img, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            img.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // 마우스 호버 효과
    const hoverElements = document.querySelectorAll('.gridItem, .videoBtn, .registerBtn');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // 모바일 터치 이벤트
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // 터치 디바이스에서 호버 효과 대체
        const touchElements = document.querySelectorAll('.floatBtn');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touched');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touched');
                }, 300);
            });
        });
    }
    
    // 페이지 로드 완료 후 초기 애니메이션
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // 비주얼 텍스트 초기 애니메이션
        const visualText = document.querySelector('.visualSlider .swiper-slide-active .textWrap');
        if (visualText) {
            visualText.style.animation = 'fadeInUp 1s ease';
        }
        
        // 스크롤 아이콘 애니메이션
        const scrollIcon = document.querySelector('.scrollIcon');
        if (scrollIcon) {
            scrollIcon.style.animation = 'bounce 2s infinite';
        }
    });
});
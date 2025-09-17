import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
    useEffect(() => {
        // DOM이 로드된 후 스크립트 실행
        const initializeScripts = () => {
            // Swiper가 로드되었는지 확인
            if (typeof window !== 'undefined' && window.Swiper) {
                // 메인 비주얼 슬라이더
                new window.Swiper('.visualSlider', {
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
                });

                // 갤러리 슬라이더
                new window.Swiper('.gallerySlider', {
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
                    }
                });
            }
        };

        // Swiper 로드 후 초기화
        const timer = setTimeout(() => {
            initializeScripts();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="용인 고진역 대광로제비앙 - 경기도 용인시 처인구 양지면의 프리미엄 아파트" />
                <meta name="keywords" content="용인고진역,대광로제비앙,용인아파트,처인구아파트,분양" />
                <meta property="og:title" content="|용인 고진역| 대광로제비앙" />
                <meta property="og:description" content="용인 고진역 대광로제비앙 공식 홈페이지" />
                <meta property="og:image" content="/images/common/img_logo.png" />
                <title>|용인 고진역| 대광로제비앙</title>
            </Head>

            {/* Swiper JS */}
            <Script
                src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // Swiper 로드 완료 후 초기화
                    if (typeof window !== 'undefined' && window.Swiper) {
                        // 메인 비주얼 슬라이더
                        new window.Swiper('.visualSlider', {
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
                        });

                        // 갤러리 슬라이더
                        new window.Swiper('.gallerySlider', {
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
                            }
                        });
                    }
                }}
            />

            {/* 공통 스크립트 */}
            <Script src="/js/common.js" strategy="afterInteractive" />
            <Script src="/js/main.js" strategy="afterInteractive" />

            {/* 전체 HTML 구조 그대로 가져오기 */}
            <div dangerouslySetInnerHTML={{ __html: `
                <!-- 헤더 -->
                <header id="header">
                    <div class="headerWrap">
                        <h1 class="logo">
                            <a href="/">
                                <img src="/images/common/img_logo.png" alt="용인 고진역 대광로제비앙">
                            </a>
                        </h1>

                        <nav class="gnb">
                            <ul>
                                <li>
                                    <a href="/sub/summary.html">사업개요</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/summary.html">사업개요</a></li>
                                        <li><a href="/sub/location.html">입지환경</a></li>
                                        <li><a href="/sub/premium.html">프리미엄</a></li>
                                        <li><a href="/sub/brand.html">브랜드 소개</a></li>
                                        <li><a href="/sub/direction.html">오시는길</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/chart.html">단지안내</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/chart.html">단지/동·호배치도</a></li>
                                        <li><a href="/sub/community.html">커뮤니티</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/unit.html">세대안내</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/unit.html">유니트 안내</a></li>
                                        <li><a href="/sub/emodelhouse.html">E-모델하우스</a></li>
                                        <li><a href="/sub/materials.html">마감재 리스트</a></li>
                                        <li><a href="/sub/guide4.html">이동통신설비설치안내</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/schedule.html">분양안내</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/schedule.html">분양일정</a></li>
                                        <li><a href="/sub/guide5.html">분양안내</a></li>
                                        <li><a href="/sub/announcement.html">입주자모집공고</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/guide1.html">청약안내</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/guide1.html">청약체크리스트</a></li>
                                        <li><a href="/sub/guide2.html">일반공급 신청자격</a></li>
                                        <li><a href="/sub/guide3.html">특별공급 안내</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/customer.html">홍보센터</a>
                                    <ul class="depth2">
                                        <li><a href="/sub/customer.html">관심고객등록</a></li>
                                        <li><a href="/sub/video.html">홍보영상</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/sub/partner.html">협력업체등록</a>
                                </li>
                            </ul>
                        </nav>

                        <div class="headerInfo">
                            <a href="tel:1668-5257" class="tel">
                                <img src="/images/common/img_tel.png" alt="전화문의">
                                <span>1668-5257</span>
                            </a>
                            <button class="menuBtn" id="menuBtn">
                                <img src="/images/common/img_open.png" alt="메뉴열기">
                                <span>MENU</span>
                            </button>
                        </div>
                    </div>
                </header>

                <!-- 플로팅 버튼 -->
                <div class="floatingBtns">
                    <a href="/sub/customer.html" class="floatBtn">
                        <img src="/images/main/img_visual_person_i.png" alt="">
                        <img src="/images/main/img_visual_person_t.png" alt="관심고객등록" class="text">
                    </a>
                    <a href="tel:1668-5257" class="floatBtn">
                        <img src="/images/main/img_visual_tel_i.png" alt="">
                        <img src="/images/main/img_visual_tel_t.png" alt="전화문의" class="text">
                    </a>
                    <a href="#header" class="floatBtn topBtn">
                        <img src="/images/main/img_visual_top_i.png" alt="맨위로">
                    </a>
                </div>

                <!-- 메인 비주얼 -->
                <section class="visualWrap">
                    <div class="visualSlider swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="/images/main/img_visual1.png" alt="용인 고진역 대광로제비앙">
                                <div class="textWrap">
                                    <h2>용인 고진역 대광로제비앙</h2>
                                    <p>새로운 미래가 시작되는 곳</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/main/img_visual2.png" alt="프리미엄 입지">
                                <div class="textWrap">
                                    <h2>프리미엄 입지</h2>
                                    <p>고진역 초역세권의 특별함</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img src="/images/main/img_visual3.png" alt="자연과 함께하는 삶">
                                <div class="textWrap">
                                    <h2>자연과 함께하는 삶</h2>
                                    <p>숲세권 프리미엄 라이프</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </section>

                <!-- 섹션2: 프리미엄 -->
                <section class="sec2Wrap sec">
                    <div class="inner">
                        <div class="titleWrap">
                            <img src="/images/main/img_sec2_ti.png" alt="PREMIUM">
                        </div>
                        <div class="contentWrap">
                            <img src="/images/main/img_sec2.png" alt="프리미엄 이미지">
                        </div>
                    </div>
                </section>

                <!-- 섹션3: 갤러리 -->
                <section class="sec3Wrap sec" style="background-image: url(/images/main/img_sec3_bg.png);">
                    <div class="inner">
                        <div class="titleWrap">
                            <img src="/images/main/img_sec3_ti.png" alt="GALLERY">
                        </div>
                        <div class="gallerySlider swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="/images/main/img_gallery1.png" alt="갤러리 이미지1">
                                </div>
                                <div class="swiper-slide">
                                    <img src="/images/main/img_gallery2.png" alt="갤러리 이미지2">
                                </div>
                                <div class="swiper-slide">
                                    <img src="/images/main/img_gallery3.png" alt="갤러리 이미지3">
                                </div>
                                <div class="swiper-slide">
                                    <img src="/images/main/img_gallery4.png" alt="갤러리 이미지4">
                                </div>
                                <div class="swiper-slide">
                                    <img src="/images/main/img_gallery5.png" alt="갤러리 이미지5">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </section>

                <!-- 섹션4: 비디오 -->
                <section class="sec4Wrap sec" style="background-image: url(/images/main/img_sec4_bg.png);">
                    <div class="inner">
                        <div class="titleWrap">
                            <img src="/images/main/img_sec4_ti.png" alt="VIDEO">
                        </div>
                        <div class="videoButtons">
                            <button class="videoBtn" data-video="L9vvhQ8CTPI">
                                <img src="/images/main/img_sec4_btn1.png" alt="입지홍보영상">
                            </button>
                            <button class="videoBtn" data-video="R4QqOUvCQxs">
                                <img src="/images/main/img_sec4_btn2.png" alt="3D홍보영상">
                            </button>
                        </div>
                    </div>
                </section>

                <!-- 섹션5: 위치 -->
                <section class="sec5Wrap sec">
                    <div class="inner">
                        <div class="titleWrap">
                            <img src="/images/main/img_sec5_ti.png" alt="LOCATION">
                        </div>
                        <div class="contentWrap">
                            <img src="/images/main/img_sec5.png" alt="위치 안내">
                            <div class="mapButtons">
                                <a href="https://naver.me/5OHXqQVP" target="_blank" rel="noopener noreferrer" class="mapBtn">
                                    <img src="/images/main/img_sec5_btn1.png" alt="네이버지도">
                                </a>
                                <a href="https://kko.to/Ri-OhzJqPp" target="_blank" rel="noopener noreferrer" class="mapBtn">
                                    <img src="/images/main/img_sec5_btn2.png" alt="카카오맵">
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 푸터 -->
                <footer id="footer">
                    <div class="footerWrap">
                        <div class="footerContent">
                            <p class="footerText">
                                <strong>용인 고진역 대광로제비앙</strong><br>
                                경기도 용인시 처인구 양지면 양지리 697번지 일원<br>
                                시행사: 대광건영(주) | 시공사: 대광건영(주)<br>
                                분양문의: <strong class="telNumber">1668-5257</strong>
                            </p>
                            <p class="copyright">
                                Copyright © 2024 Daekwang Rosebiang. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>

                <!-- 비디오 팝업 -->
                <div class="popupWrap videoPopup" id="videoPopup">
                    <div class="popupContent">
                        <button class="popupClose">×</button>
                        <div class="videoWrapper">
                            <iframe id="popupVideo" src="" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <!-- 사이드 팝업들 -->
                <div class="sidePopup popup1" data-popup="1">
                    <img src="/images/popup/img_popup1.png" alt="팝업1">
                    <button class="closeBtn">닫기</button>
                </div>
                <div class="sidePopup popup2" data-popup="2">
                    <img src="/images/popup/img_popup2.png" alt="팝업2">
                    <button class="closeBtn">닫기</button>
                </div>
                <div class="sidePopup popup3" data-popup="3">
                    <img src="/images/popup/img_popup3.png" alt="팝업3">
                    <button class="closeBtn">닫기</button>
                </div>
            ` }} />
        </>
    );
}
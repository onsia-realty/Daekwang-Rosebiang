import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
    const [videoPopup, setVideoPopup] = useState(null);

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

    const openVideoPopup = (videoId) => {
        setVideoPopup(`https://www.youtube.com/embed/${videoId}`);
    };

    const closeVideoPopup = () => {
        setVideoPopup(null);
    };

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

            {/* Swiper CSS */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

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

            {/* 메인 비주얼 */}
            <section className="visualWrap">
                <div className="visualSlider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/img_visual_si1.png" alt="용인 고진역 대광로제비앙" />
                            <div className="textWrap">
                                <h2>용인 고진역 대광로제비앙</h2>
                                <p>새로운 미래가 시작되는 곳</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/img_visual_si3.png" alt="프리미엄 입지" />
                            <div className="textWrap">
                                <h2>프리미엄 입지</h2>
                                <p>고진역 초역세권의 특별함</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/img_sec1_si3.png" alt="자연과 함께하는 삶" />
                            <div className="textWrap">
                                <h2>자연과 함께하는 삶</h2>
                                <p>숲세권 프리미엄 라이프</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>

            {/* 섹션1: 사업개요 */}
            <section className="sec1Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>용인 고진역 대광로제비앙</h2>
                        <p>고진역 도보 5분, 용인의 새로운 중심</p>
                    </div>
                    <div className="contentWrap">
                        <img src="/img_top_summary.png" alt="조감도" />
                    </div>
                </div>
            </section>

            {/* 섹션2: 프리미엄 */}
            <section className="sec2Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>PREMIUM</h2>
                        <p>특별한 가치가 있는 곳</p>
                    </div>
                    <div className="premiumGrid">
                        <div className="premiumItem">
                            <img src="/img_sec1_si1.png" alt="교통" />
                            <h3>교통의 중심</h3>
                            <p>고진역 도보 5분<br />GTX-A 용인역 인접</p>
                        </div>
                        <div className="premiumItem">
                            <img src="/img_sec1_si2.png" alt="교육" />
                            <h3>교육 프리미엄</h3>
                            <p>도보권 초·중·고<br />명문학군 진입</p>
                        </div>
                        <div className="premiumItem">
                            <img src="/img_sec1_si23.png" alt="생활" />
                            <h3>편리한 생활</h3>
                            <p>대형마트, 백화점<br />생활인프라 완비</p>
                        </div>
                        <div className="premiumItem">
                            <img src="/img_sec1_si31.png" alt="자연" />
                            <h3>자연과 함께</h3>
                            <p>공원, 산책로<br />녹지공간 풍부</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션3: 유니트 */}
            <section className="sec3Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>UNIT</h2>
                        <p>라이프스타일에 맞는 다양한 평형</p>
                    </div>
                    <div className="unitGrid">
                        <div className="unitItem">
                            <img src="/img_unit1.png" alt="59㎡A" />
                            <h3>59㎡A</h3>
                            <p>265세대</p>
                        </div>
                        <div className="unitItem">
                            <img src="/img_unit2.png" alt="59㎡B" />
                            <h3>59㎡B</h3>
                            <p>97세대</p>
                        </div>
                        <div className="unitItem">
                            <img src="/img_unit3.png" alt="73㎡" />
                            <h3>73㎡</h3>
                            <p>108세대</p>
                        </div>
                        <div className="unitItem">
                            <img src="/img_unit4.png" alt="84㎡" />
                            <h3>84㎡A/B</h3>
                            <p>309세대</p>
                        </div>
                    </div>
                    <Link href="/unit" className="moreBtn">
                        유니트 자세히 보기
                    </Link>
                </div>
            </section>

            {/* 섹션4: 커뮤니티 */}
            <section className="sec4Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>COMMUNITY</h2>
                        <p>품격있는 라이프스타일</p>
                    </div>
                    <div className="communitySlider">
                        <img src="/img_community.png" alt="커뮤니티 시설" />
                    </div>
                    <Link href="/complex/community" className="moreBtn">
                        커뮤니티 시설 보기
                    </Link>
                </div>
            </section>

            {/* 섹션5: 비디오 */}
            <section className="sec5Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>VIDEO</h2>
                        <p>영상으로 만나는 대광로제비앙</p>
                    </div>
                    <div className="videoButtons">
                        <button className="videoBtn" onClick={() => openVideoPopup('L9vvhQ8CTPI')}>
                            <span>📍 입지홍보영상</span>
                        </button>
                        <button className="videoBtn" onClick={() => openVideoPopup('R4QqOUvCQxs')}>
                            <span>🏠 3D홍보영상</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 섹션6: 위치 */}
            <section className="sec6Wrap sec">
                <div className="inner">
                    <div className="titleWrap">
                        <h2>LOCATION</h2>
                        <p>홍보관 위치 안내</p>
                    </div>
                    <div className="locationInfo">
                        <img src="/img_location.png" alt="위치 안내" />
                        <div className="addressBox">
                            <h3>홍보관</h3>
                            <p>경기도 용인시 처인구 유림로 154번길 32</p>
                            <p className="tel">1668-5257</p>
                            <div className="btnGroup">
                                <a href="https://naver.me/용인고진역대광로제비앙" target="_blank" rel="noopener noreferrer" className="mapBtn">
                                    네이버 지도
                                </a>
                                <a href="https://map.kakao.com/용인고진역대광로제비앙" target="_blank" rel="noopener noreferrer" className="mapBtn">
                                    카카오맵
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube 비디오 팝업 */}
            {videoPopup && (
                <div className="videoPopupOverlay" onClick={closeVideoPopup}>
                    <div className="videoPopupContent" onClick={(e) => e.stopPropagation()}>
                        <button className="videoCloseBtn" onClick={closeVideoPopup}>×</button>
                        <iframe
                            src={`${videoPopup}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}
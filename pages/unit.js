import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Unit() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        // 마퀴 효과 구현
        const marquee = document.querySelector('.node-marquee');
        const marqueeContent = document.querySelector('.marquee-content');

        if (marquee && marqueeContent) {
            let position = 0;
            const speed = 1;

            function animate() {
                position -= speed;

                if (Math.abs(position) >= marqueeContent.scrollWidth / 4) {
                    position = 0;
                }

                marqueeContent.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(animate);
            }

            animate();
        }
    }, []);

    const tabData = [
        {
            title: "75㎡ A",
            image: "/images/sub/img_unit1.png",
            info: {
                type: "75㎡ A타입",
                exclusive: "75.64㎡",
                supply: "105.32㎡",
                rooms: "3룸 2바스",
                features: "신혼부부 최적형, 효율적 공간활용"
            }
        },
        {
            title: "84㎡ A, A-1",
            image: "/images/sub/img_unit2.png",
            info: {
                type: "84㎡ A, A-1타입",
                exclusive: "84.92㎡",
                supply: "118.48㎡",
                rooms: "3룸 2바스",
                features: "중소형 가족 선호형, 넓은 거실"
            }
        },
        {
            title: "84㎡ B",
            image: "/images/sub/img_unit3.png",
            info: {
                type: "84㎡ B타입",
                exclusive: "84.75㎡",
                supply: "118.71㎡",
                rooms: "3룸 2바스",
                features: "가족형 인기형, 팬트리 공간"
            }
        },
        {
            title: "110㎡ A",
            image: "/images/sub/img_unit4.png",
            info: {
                type: "110㎡ A타입",
                exclusive: "110.33㎡",
                supply: "153.25㎡",
                rooms: "4룸 3바스",
                features: "프리미엄형, 드레스룸 완비"
            }
        }
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="용인 고진역 대광로제비앙 - 유니트 안내" />
                <meta name="keywords" content="용인고진역,대광로제비앙,유니트,평면도,타입별안내" />
                <meta property="og:title" content="유니트 안내 - 용인 고진역 대광로제비앙" />
                <meta property="og:description" content="용인 고진역 대광로제비앙 유니트 안내 페이지" />
                <meta property="og:image" content="/images/common/img_logo.png" />
                <title>유니트 안내 - 용인 고진역 대광로제비앙</title>

            </Head>

            <div>
                {/* 헤더 */}
                <header id="header">
                    <div className="headerWrap">
                        <h1 className="logo">
                            <Link href="/">
                                <Image src="/images/common/img_logo.png" alt="용인 고진역 대광로제비앙" width={200} height={60} />
                            </Link>
                        </h1>

                        <nav className="gnb">
                            <ul>
                                <li>
                                    <Link href="/summary">사업개요</Link>
                                    <ul className="depth2">
                                        <li><Link href="/summary">사업개요</Link></li>
                                        <li><Link href="/location">입지환경</Link></li>
                                        <li><Link href="/premium">프리미엄</Link></li>
                                        <li><Link href="/brand">브랜드 소개</Link></li>
                                        <li><Link href="/direction">오시는길</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/chart">단지안내</Link>
                                    <ul className="depth2">
                                        <li><Link href="/chart">단지/동·호배치도</Link></li>
                                        <li><Link href="/community">커뮤니티</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/unit">세대안내</Link>
                                    <ul className="depth2">
                                        <li><Link href="/unit">유니트 안내</Link></li>
                                        <li><Link href="/emodelhouse">E-모델하우스</Link></li>
                                        <li><Link href="/materials">마감재 리스트</Link></li>
                                        <li><Link href="/guide4">이동통신설비설치안내</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/schedule">분양안내</Link>
                                    <ul className="depth2">
                                        <li><Link href="/schedule">분양일정</Link></li>
                                        <li><Link href="/guide5">분양안내</Link></li>
                                        <li><Link href="/announcement">입주자모집공고</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/guide1">청약안내</Link>
                                    <ul className="depth2">
                                        <li><Link href="/guide1">청약체크리스트</Link></li>
                                        <li><Link href="/guide2">일반공급 신청자격</Link></li>
                                        <li><Link href="/guide3">특별공급 안내</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/customer">홍보센터</Link>
                                    <ul className="depth2">
                                        <li><Link href="/customer">관심고객등록</Link></li>
                                        <li><Link href="/video">홍보영상</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/partner">협력업체등록</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="headerInfo">
                            <a href="tel:1668-5257" className="tel">
                                <Image src="/images/common/img_tel.png" alt="전화문의" width={24} height={24} />
                                <span>1668-5257</span>
                            </a>
                            <button className="menuBtn" id="menuBtn">
                                <Image src="/images/common/img_open.png" alt="메뉴열기" width={24} height={24} />
                                <span>MENU</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* 플로팅 버튼 */}
                <div className="floatingBtns">
                    <Link href="/customer" className="floatBtn">
                        <Image src="/images/main/img_visual_person_i.png" alt="" width={50} height={50} />
                        <Image src="/images/main/img_visual_person_t.png" alt="관심고객등록" className="text" width={100} height={30} />
                    </Link>
                    <a href="tel:1668-5257" className="floatBtn">
                        <Image src="/images/main/img_visual_tel_i.png" alt="" width={50} height={50} />
                        <Image src="/images/main/img_visual_tel_t.png" alt="전화문의" className="text" width={100} height={30} />
                    </a>
                    <a href="#header" className="floatBtn topBtn">
                        <Image src="/images/main/img_visual_top_i.png" alt="맨위로" width={50} height={50} />
                    </a>
                </div>

                {/* 메인 컨테이너 */}
                <main id="container">
                    {/* 브레드크럼 */}
                    <section className="breadcrumb">
                        <div className="inner">
                            <Link href="/">홈</Link> &gt;
                            <Link href="/unit">세대안내</Link> &gt;
                            <span className="current">유니트 안내</span>
                        </div>
                    </section>

                    {/* 서브 비주얼 */}
                    <section className="subVisual">
                        <div className="inner">
                            <h2>유니트 안내</h2>
                        </div>
                    </section>

                    {/* 서브 컨텐츠 */}
                    <section className="subContent">
                        <div className="inner">
                            {/* 유니트 안내 */}
                            <div className="unitWrap subContWrap">
                                <ul className="tab_wrap">
                                    {tabData.map((tab, index) => (
                                        <li key={index} className="list1">
                                            <a
                                                href="#"
                                                className={activeTab === index ? "on" : ""}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick(index);
                                                }}
                                            >
                                                {tab.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="tab_content_area">
                                    {tabData.map((tab, index) => (
                                        <div key={index} className={`tab_box ${activeTab === index ? 'active' : ''}`}>
                                            <div className="unit_image_container">
                                                <Image
                                                    src={tab.image}
                                                    alt={`${tab.info.type} 평면도`}
                                                    className="unit_plan"
                                                    width={800}
                                                    height={600}
                                                    priority={index === 0}
                                                />
                                            </div>
                                            <div className="unit_info">
                                                <h4>{tab.info.type}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* 움직이는 로고 영역 */}
                                <div className="rtWrap">
                                    <div className="node-marquee" id="subRT">
                                        <div className="marquee-content">
                                            <Image src="/images/sub/img_rt.png" alt="대광로제비앙 로고" width={200} height={60} />
                                            <Image src="/images/sub/img_rt.png" alt="대광로제비앙 로고" width={200} height={60} />
                                            <Image src="/images/sub/img_rt.png" alt="대광로제비앙 로고" width={200} height={60} />
                                            <Image src="/images/sub/img_rt.png" alt="대광로제비앙 로고" width={200} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* 푸터 */}
                <footer id="footer">
                    <div className="footerWrap">
                        <div className="footerContent">
                            <p className="footerText">
                                <strong>용인 고진역 대광로제비앙</strong><br />
                                경기도 용인시 처인구 양지면 양지리 697번지 일원<br />
                                시행사: 대광건영(주) | 시공사: 대광건영(주)<br />
                                분양문의: <strong className="telNumber">1668-5257</strong>
                            </p>
                            <p className="copyright">
                                Copyright © 2024 Daekwang Rosebiang. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}
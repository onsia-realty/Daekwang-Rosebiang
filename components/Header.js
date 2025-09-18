import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        {
            title: '사업개요',
            path: '/business',
            subMenu: [
                { title: '사업개요', path: '/business/summary' },
                { title: '입지환경', path: '/business/location' },
                { title: '프리미엄', path: '/business/premium' },
                { title: '브랜드 소개', path: '/business/brand' },
                { title: '오시는길', path: '/business/direction' }
            ]
        },
        {
            title: '단지안내',
            path: '/complex',
            subMenu: [
                { title: '단지/동·호배치도', path: '/complex/chart' },
                { title: '커뮤니티', path: '/complex/community' }
            ]
        },
        {
            title: '세대안내',
            path: '/unit',
            subMenu: [
                { title: '유니트 안내', path: '/unit' },
                { title: 'E-모델하우스', path: '/unit/emodelhouse' },
                { title: '마감재 리스트', path: '/unit/materials' },
                { title: '이동통신설비설치안내', path: '/unit/guide' }
            ]
        },
        {
            title: '분양안내',
            path: '/sale',
            subMenu: [
                { title: '분양일정', path: '/sale/schedule' },
                { title: '분양안내', path: '/sale/guide' },
                { title: '입주자모집공고', path: '/sale/announcement' },
                { title: '사전 서류제출안내', path: '/sale/documents' }
            ]
        },
        {
            title: '청약안내',
            path: '/subscription',
            subMenu: [
                { title: '청약체크리스트', path: '/subscription/checklist' },
                { title: '일반공급 신청자격', path: '/subscription/general' },
                { title: '특별공급 안내', path: '/subscription/special' }
            ]
        },
        {
            title: '홍보센터',
            path: '/pr',
            subMenu: [
                { title: '관심고객등록', path: '/pr/customer' },
                { title: '홍보영상', path: '/pr/video' }
            ]
        },
        {
            title: '협력업체등록',
            path: 'https://reg-용인고진역대광로제비앙.com/',
            external: true
        }
    ];

    useEffect(() => {
        const path = router.pathname;
        const activeIndex = menuItems.findIndex(item =>
            path.startsWith(item.path.replace('https://', ''))
        );
        setActiveMenu(activeIndex);
    }, [router.pathname]);

    const isSubPage = router.pathname !== '/';

    return (
        <header id="header" className={isSubPage ? 'sub' : ''}>
            <div className="headerWrap">
                <h1 className="logo">
                    <Link href="/">
                        <img
                            src={isSubPage ? "/images/common/img_logo_active.png" : "/images/common/img_logo.png"}
                            alt="용인 고진역 대광로제비앙"
                        />
                    </Link>
                </h1>

                <nav className="gnb">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className={activeMenu === index ? 'active' : ''}>
                                {item.external ? (
                                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                ) : (
                                    <>
                                        <Link href={item.subMenu ? item.subMenu[0].path : item.path}>
                                            {item.title}
                                        </Link>
                                        {item.subMenu && (
                                            <ul className="depth2">
                                                {item.subMenu.map((sub, subIndex) => (
                                                    <li key={subIndex} className={router.pathname === sub.path ? 'active' : ''}>
                                                        <Link href={sub.path}>
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="headerInfo">
                    <a href="tel:1668-5257" className="tel">
                        <img
                            src={isSubPage ? "/images/common/img_tel_active.png" : "/images/common/img_tel.png"}
                            alt="전화문의"
                        />
                        <span>1668-5257</span>
                    </a>
                    <button
                        className="menuBtn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img
                            src={isSubPage ? "/images/common/img_open_active.png" : "/images/common/img_open.png"}
                            alt="메뉴열기"
                        />
                        <span>MENU</span>
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <div className="mobileMenu">
                    <div className="mobileMenuWrap">
                        <button className="closeBtn" onClick={() => setMenuOpen(false)}>
                            <span>×</span>
                        </button>
                        <nav>
                            {menuItems.map((item, index) => (
                                <div key={index} className="menuGroup">
                                    {item.external ? (
                                        <a href={item.path} target="_blank" rel="noopener noreferrer" className="menuTitle">
                                            {item.title}
                                        </a>
                                    ) : (
                                        <>
                                            <div className="menuTitle">{item.title}</div>
                                            {item.subMenu && (
                                                <div className="subMenuWrap">
                                                    {item.subMenu.map((sub, subIndex) => (
                                                        <Link key={subIndex} href={sub.path}>
                                                            <span onClick={() => setMenuOpen(false)}>{sub.title}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
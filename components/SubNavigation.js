import Link from 'next/link';
import { useRouter } from 'next/router';

const SubNavigation = ({ category }) => {
    const router = useRouter();

    const navigationItems = {
        business: [
            { title: '사업개요', path: '/business/summary' },
            { title: '입지환경', path: '/business/location' },
            { title: '프리미엄', path: '/business/premium' },
            { title: '브랜드 소개', path: '/business/brand' },
            { title: '오시는길', path: '/business/direction' }
        ],
        complex: [
            { title: '단지/동·호배치도', path: '/complex/chart' },
            { title: '커뮤니티', path: '/complex/community' }
        ],
        unit: [
            { title: '유니트 안내', path: '/unit' },
            { title: 'E-모델하우스', path: '/unit/emodelhouse' },
            { title: '마감재 리스트', path: '/unit/materials' },
            { title: '이동통신설비설치안내', path: '/unit/guide' }
        ],
        sale: [
            { title: '분양일정', path: '/sale/schedule' },
            { title: '분양안내', path: '/sale/guide' },
            { title: '입주자모집공고', path: '/sale/announcement' },
            { title: '사전 서류제출안내', path: '/sale/documents' }
        ],
        subscription: [
            { title: '청약체크리스트', path: '/subscription/checklist' },
            { title: '일반공급 신청자격', path: '/subscription/general' },
            { title: '특별공급 안내', path: '/subscription/special' }
        ],
        pr: [
            { title: '관심고객등록', path: '/pr/customer' },
            { title: '홍보영상', path: '/pr/video' }
        ]
    };

    const items = navigationItems[category] || [];

    if (items.length === 0) return null;

    return (
        <div className="subNavigation">
            <div className="container">
                <ul className="subNavList">
                    {items.map((item, index) => (
                        <li key={index} className={router.pathname === item.path ? 'active' : ''}>
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
                .subNavigation {
                    background: #f8f9fa;
                    border-bottom: 1px solid #e0e0e0;
                    padding: 20px 0;
                }

                .subNavList {
                    display: flex;
                    gap: 30px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .subNavList li {
                    position: relative;
                }

                .subNavList li a {
                    display: block;
                    padding: 12px 20px;
                    text-decoration: none;
                    color: #666;
                    font-weight: 500;
                    border-radius: 25px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .subNavList li a:hover {
                    color: #c8986b;
                    background: rgba(200, 152, 107, 0.1);
                }

                .subNavList li.active a {
                    color: #fff;
                    background: #c8986b;
                    box-shadow: 0 2px 10px rgba(200, 152, 107, 0.3);
                }

                @media (max-width: 768px) {
                    .subNavList {
                        gap: 15px;
                        padding: 0 20px;
                    }

                    .subNavList li a {
                        padding: 10px 15px;
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    .subNavList {
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                    }

                    .subNavList li a {
                        width: 200px;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default SubNavigation;
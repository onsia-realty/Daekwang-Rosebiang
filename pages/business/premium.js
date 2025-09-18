import Head from 'next/head';
import SubNavigation from '../../components/SubNavigation';

export default function Premium() {
    const premiumFeatures = [
        {
            title: '교통의 중심',
            subtitle: 'TRANSPORTATION HUB',
            description: '고진역 도보 5분, GTX-A 용인역 인접으로 수도권 30분대 생활권',
            details: [
                '고진역 도보 5분 거리',
                'GTX-A 용인역 차량 10분',
                '경부고속도로 용인IC 15분',
                '판교, 강남 30분대 접근'
            ],
            icon: '🚊'
        },
        {
            title: '교육 프리미엄',
            subtitle: 'EDUCATION PREMIUM',
            description: '도보권 초·중·고 배치와 용인 명문학군으로의 진입',
            details: [
                '마평초등학교 도보 10분',
                '용인중학교 도보 15분',
                '용인고등학교 도보 15분',
                '단국대학교 차량 15분'
            ],
            icon: '🎓'
        },
        {
            title: '생활 인프라',
            subtitle: 'LIFE INFRASTRUCTURE',
            description: '대형마트, 백화점, 의료시설 등 완벽한 생활 인프라',
            details: [
                '이마트 용인점 차량 5분',
                '롯데마트 차량 10분',
                '용인세브란스병원 15분',
                '용인시청 차량 10분'
            ],
            icon: '🏪'
        },
        {
            title: '투자가치',
            subtitle: 'INVESTMENT VALUE',
            description: '용인 플랫폼시티 개발과 함께하는 미래가치 상승',
            details: [
                '용인 플랫폼시티 개발',
                'GTX-A 노선 확정',
                '수도권 광역교통망 확충',
                '지역 개발 호재 집중'
            ],
            icon: '📈'
        }
    ];

    return (
        <>
            <Head>
                <title>프리미엄 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙의 특별한 프리미엄 가치" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_premium.png" alt="프리미엄" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">PREMIUM</span>
                        <span className="ko">프리미엄</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="business" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="contentTitle">
                        <h3>특별한 가치가 있는 곳</h3>
                        <p>용인 고진역 대광로제비앙만의 프리미엄 라이프를 경험하세요</p>
                    </div>

                    {/* 메인 프리미엄 이미지 */}
                    <div className="premiumMainImage">
                        <img src="/img_premium.png" alt="용인 고진역 대광로제비앙 프리미엄" style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '15px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            marginBottom: '60px'
                        }} />
                    </div>

                    {/* 프리미엄 특징 */}
                    <div className="premiumFeatures">
                        {premiumFeatures.map((feature, index) => (
                            <div key={index} className="premiumCard">
                                <div className="premiumIcon">
                                    <span style={{ fontSize: '60px' }}>{feature.icon}</span>
                                </div>
                                <div className="premiumContent">
                                    <div className="premiumHeader">
                                        <h4>{feature.title}</h4>
                                        <p className="subtitle">{feature.subtitle}</p>
                                    </div>
                                    <p className="description">{feature.description}</p>
                                    <ul className="detailList">
                                        {feature.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* 개발 호재 */}
                    <div className="developmentBenefits">
                        <h4>주변 개발 호재</h4>
                        <div className="benefitsList">
                            <div className="benefitCard">
                                <div className="benefitIcon">🏗️</div>
                                <div className="benefitInfo">
                                    <h5>용인 플랫폼시티</h5>
                                    <p>대규모 복합개발사업으로 지역가치 상승</p>
                                    <span className="status">진행중</span>
                                </div>
                            </div>
                            <div className="benefitCard">
                                <div className="benefitIcon">🚄</div>
                                <div className="benefitInfo">
                                    <h5>GTX-A 노선</h5>
                                    <p>강남 20분, 서울역 30분 초고속 연결</p>
                                    <span className="status">확정</span>
                                </div>
                            </div>
                            <div className="benefitCard">
                                <div className="benefitIcon">🛣️</div>
                                <div className="benefitInfo">
                                    <h5>광역교통망 확충</h5>
                                    <p>수도권 전역 30분대 교통망 구축</p>
                                    <span className="status">계획중</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .premiumFeatures {
                    display: grid;
                    gap: 40px;
                    margin: 60px 0;
                }

                .premiumCard {
                    display: flex;
                    align-items: flex-start;
                    gap: 40px;
                    padding: 40px;
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease;
                }

                .premiumCard:hover {
                    transform: translateY(-5px);
                }

                .premiumCard:nth-child(even) {
                    flex-direction: row-reverse;
                }

                .premiumIcon {
                    flex-shrink: 0;
                    width: 120px;
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    border-radius: 50%;
                }

                .premiumContent {
                    flex: 1;
                }

                .premiumHeader h4 {
                    font-size: 2rem;
                    color: #c8986b;
                    margin-bottom: 5px;
                    font-weight: bold;
                }

                .subtitle {
                    color: #666;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    margin-bottom: 20px;
                    font-weight: 500;
                }

                .description {
                    font-size: 1.2rem;
                    color: #333;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .detailList {
                    list-style: none;
                    padding: 0;
                }

                .detailList li {
                    padding: 8px 0;
                    color: #666;
                    position: relative;
                    padding-left: 20px;
                }

                .detailList li:before {
                    content: '•';
                    color: #c8986b;
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                }


                .benefitsList {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }

                .benefitCard {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 30px;
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                }

                .benefitIcon {
                    font-size: 40px;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f0f0f0;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .benefitInfo h5 {
                    font-size: 1.2rem;
                    margin-bottom: 8px;
                    color: #333;
                }

                .benefitInfo p {
                    color: #666;
                    margin-bottom: 10px;
                    line-height: 1.5;
                }

                .status {
                    display: inline-block;
                    padding: 4px 12px;
                    background: #c8986b;
                    color: #fff;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .premiumCard {
                        flex-direction: column !important;
                        text-align: center;
                        gap: 20px;
                        padding: 30px 20px;
                    }

                    .premiumIcon {
                        width: 100px;
                        height: 100px;
                        margin: 0 auto;
                    }

                    .premiumHeader h4 {
                        font-size: 1.5rem;
                    }


                    .benefitsList {
                        grid-template-columns: 1fr;
                    }

                    .benefitCard {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </>
    );
}
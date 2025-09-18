import Head from 'next/head';
import SubNavigation from '../../components/SubNavigation';

export default function Community() {
    const communityItems = [
        { name: '휘트니스 센터', image: '/휘트니스 센터.png' },
        { name: '스크린 골프연습장', image: '/스크린 골프연습장.png' },
        { name: '실내 골프연습장', image: '/실내 골프연스장.png' },
        { name: 'GX룸', image: '/GX룸.png' },
        { name: '작은 도서관', image: '/작은 도서관.png' },
        { name: '주민카페', image: '/주민카페.png' }
    ];

    return (
        <>
            <Head>
                <title>커뮤니티 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 커뮤니티 시설" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/img_community.png" alt="커뮤니티" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">COMMUNITY</span>
                        <span className="ko">커뮤니티</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="complex" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="contentTitle">
                        <h3>품격있는 라이프스타일을 완성하는 커뮤니티</h3>
                        <p>입주민의 건강하고 활기찬 생활을 위한 다양한 커뮤니티 시설</p>
                    </div>

                    <div className="communityWrap">
                        <div className="communityGrid">
                            {communityItems.map((item, index) => (
                                <div key={index} className="communityItem">
                                    <div className="communityImage">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="communityInfo">
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
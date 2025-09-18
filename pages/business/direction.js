import Head from 'next/head';
import SubNavigation from '../../components/SubNavigation';

export default function Direction() {
    return (
        <>
            <Head>
                <title>오시는길 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 오시는길" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_direction.png" alt="오시는길" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">DIRECTIONS</span>
                        <span className="ko">오시는길</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="business" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="directionImage">
                        <img src="/img_direction (2).png" alt="용인 고진역 대광로제비앙 오시는길" style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '15px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }} />
                    </div>
                </div>
            </section>
        </>
    );
}
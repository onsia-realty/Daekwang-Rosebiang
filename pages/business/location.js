import Head from 'next/head';
import SubNavigation from '../../components/SubNavigation';

export default function Location() {
    return (
        <>
            <Head>
                <title>입지환경 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 입지환경" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_location.png" alt="입지환경" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">LOCATION</span>
                        <span className="ko">입지환경</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="business" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="locationImage">
                        <img src="/img_location.png" alt="입지환경도" style={{
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
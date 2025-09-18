import Head from 'next/head';
import SubNavigation from '../../components/SubNavigation';

export default function Brand() {
    return (
        <>
            <Head>
                <title>브랜드 소개 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 브랜드 소개" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_brand.png" alt="브랜드 소개" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">BRAND</span>
                        <span className="ko">브랜드 소개</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="business" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="brandImage">
                        <img src="/img_brand.png" alt="대광로제비앙 브랜드 소개" style={{
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
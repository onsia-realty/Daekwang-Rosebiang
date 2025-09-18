import Head from 'next/head';
import Image from 'next/image';
import SubNavigation from '../../components/SubNavigation';

export default function Summary() {
    return (
        <>
            <Head>
                <title>사업개요 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 사업개요" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_summary.png" alt="사업개요" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">BUSINESS OVERVIEW</span>
                        <span className="ko">사업개요</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="business" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="summaryImage">
                        <img src="/img_summary (1).png" alt="용인 고진역 대광로제비앙 사업개요" style={{
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
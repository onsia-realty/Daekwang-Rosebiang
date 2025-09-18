import Head from 'next/head';
import { useState } from 'react';
import SubNavigation from '../../components/SubNavigation';

export default function Chart() {
    const [selectedChart, setSelectedChart] = useState('complex');

    const chartTypes = [
        { id: 'complex', title: '단지배치도', description: '전체 단지의 동 배치 현황' },
        { id: 'floor', title: '동·호배치도', description: '각 동별 세대 배치 현황' },
        { id: 'landscape', title: '조경계획도', description: '단지 내 조경 및 시설 배치' }
    ];

    const complexFeatures = [
        {
            title: '최적의 단지 배치',
            description: '9개동 779세대의 효율적인 배치로 쾌적한 주거환경 조성',
            icon: '🏢'
        },
        {
            title: '충분한 주차공간',
            description: '총 1,169대 주차 (세대당 1.5대)로 주차 걱정 없는 편리함',
            icon: '🚗'
        },
        {
            title: '커뮤니티 시설',
            description: '휘트니스, 골프연습장, 카페 등 다양한 부대시설 완비',
            icon: '🏋️‍♂️'
        },
        {
            title: '조경 및 공원',
            description: '아름다운 조경과 어린이놀이터, 산책로 등 휴식공간 마련',
            icon: '🌳'
        }
    ];

    const buildingInfo = [
        { dong: '101동', floors: '지하2층~지상29층', units: '84세대', types: '59A, 59B, 84A' },
        { dong: '102동', floors: '지하2층~지상29층', units: '84세대', types: '59A, 73, 84A, 84B' },
        { dong: '103동', floors: '지하2층~지상29층', units: '84세대', types: '59A, 59B, 84A' },
        { dong: '104동', floors: '지하2층~지상29층', units: '91세대', types: '59A, 73, 84A, 84B' },
        { dong: '105동', floors: '지하2층~지상29층', units: '91세대', types: '59A, 59B, 84A' },
        { dong: '106동', floors: '지하2층~지상29층', units: '91세대', types: '59A, 73, 84A, 84B' },
        { dong: '107동', floors: '지하2층~지상29층', units: '86세대', types: '59A, 59B, 84A' },
        { dong: '108동', floors: '지하2층~지상29층', units: '84세대', types: '59A, 73, 84A, 84B' },
        { dong: '109동', floors: '지하2층~지상29층', units: '84세대', types: '59A, 59B, 84A' }
    ];

    return (
        <>
            <Head>
                <title>단지/동·호배치도 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 단지/동·호배치도 - 단지 전체 배치도 및 동별 호수 배치 안내" />
                <meta name="keywords" content="용인고진역,대광로제비앙,단지배치도,동호배치도,아파트배치" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_chart.png" alt="단지/동·호배치도" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">COMPLEX LAYOUT</span>
                        <span className="ko">단지/동·호배치도</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="complex" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="contentTitle">
                        <h3>체계적으로 설계된 단지 배치</h3>
                        <p>9개동 779세대의 최적화된 배치로 쾌적하고 편리한 주거환경을 제공합니다</p>
                    </div>

                    {/* 차트 탭 메뉴 */}
                    <div className="chartTabs">
                        {chartTypes.map((chart) => (
                            <button
                                key={chart.id}
                                className={`chartTab ${selectedChart === chart.id ? 'active' : ''}`}
                                onClick={() => setSelectedChart(chart.id)}
                            >
                                <h4>{chart.title}</h4>
                                <p>{chart.description}</p>
                            </button>
                        ))}
                    </div>

                    {/* 선택된 차트 표시 */}
                    <div className="chartContent">
                        {selectedChart === 'complex' && (
                            <div className="chartSection">
                                <div className="chartImage">
                                    <img src="/img_chart.png" alt="단지배치도" style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                    }} />
                                </div>
                                <div className="chartDescription">
                                    <h4>단지 배치 특징</h4>
                                    <ul>
                                        <li>• 9개동 효율적 배치로 최적의 채광과 통풍 확보</li>
                                        <li>• 중앙 커뮤니티 시설 배치로 접근성 극대화</li>
                                        <li>• 충분한 조경공간과 산책로 조성</li>
                                        <li>• 지하 2층 전체 주차장으로 편리한 주차환경</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {selectedChart === 'floor' && (
                            <div className="chartSection">
                                <div className="chartImage">
                                    <div style={{
                                        width: '100%',
                                        height: '500px',
                                        backgroundColor: '#f8f9fa',
                                        border: '2px dashed #ddd',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '10px'
                                    }}>
                                        <h3 style={{ color: '#666', marginBottom: '30px' }}>동·호 배치도</h3>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: '30px',
                                            width: '80%'
                                        }}>
                                            <div style={{
                                                backgroundColor: '#fff',
                                                padding: '20px',
                                                borderRadius: '10px',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                textAlign: 'center'
                                            }}>
                                                <h4 style={{ color: '#c8986b', marginBottom: '15px' }}>101동 표준층 배치</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#e8f4f8', borderRadius: '5px', fontSize: '12px' }}>1001호</span>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#f0e8f8', borderRadius: '5px', fontSize: '12px' }}>1002호</span>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#e8f4f8', borderRadius: '5px', fontSize: '12px' }}>1003호</span>
                                                </div>
                                                <p style={{ fontSize: '12px', color: '#666' }}>59㎡A, 59㎡B, 84㎡A</p>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#fff',
                                                padding: '20px',
                                                borderRadius: '10px',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                textAlign: 'center'
                                            }}>
                                                <h4 style={{ color: '#c8986b', marginBottom: '15px' }}>102동 표준층 배치</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#e8f4f8', borderRadius: '5px', fontSize: '12px' }}>1001호</span>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#f8e8e8', borderRadius: '5px', fontSize: '12px' }}>1002호</span>
                                                    <span style={{ padding: '8px 12px', backgroundColor: '#e8f8e8', borderRadius: '5px', fontSize: '12px' }}>1003호</span>
                                                </div>
                                                <p style={{ fontSize: '12px', color: '#666' }}>59㎡A, 73㎡, 84㎡B</p>
                                            </div>
                                        </div>
                                        <p style={{ marginTop: '30px', color: '#888', fontSize: '14px' }}>
                                            각 동별 층별 세대 배치는 동일한 패턴으로 구성됩니다
                                        </p>
                                    </div>
                                </div>
                                <div className="floorPlanInfo">
                                    <h4>동별 세대 구성</h4>
                                    <div className="buildingGrid">
                                        {buildingInfo.map((building, index) => (
                                            <div key={index} className="buildingCard">
                                                <h5>{building.dong}</h5>
                                                <div className="buildingDetails">
                                                    <p><span>층수:</span> {building.floors}</p>
                                                    <p><span>세대수:</span> {building.units}</p>
                                                    <p><span>평형:</span> {building.types}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedChart === 'landscape' && (
                            <div className="chartSection">
                                <div className="chartImage">
                                    <div style={{
                                        width: '100%',
                                        height: '500px',
                                        backgroundColor: '#f0f8f0',
                                        border: '2px dashed #90EE90',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '10px'
                                    }}>
                                        <h3 style={{ color: '#666', marginBottom: '30px' }}>조경 계획도</h3>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '20px',
                                            width: '90%'
                                        }}>
                                            <div style={{
                                                backgroundColor: '#e8f8e8',
                                                padding: '15px',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                border: '2px solid #90EE90'
                                            }}>
                                                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🌳</div>
                                                <strong>중앙정원</strong>
                                                <p style={{ fontSize: '12px', margin: '5px 0' }}>사계절 조경</p>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#fff8e8',
                                                padding: '15px',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                border: '2px solid #FFD700'
                                            }}>
                                                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏃‍♂️</div>
                                                <strong>산책로</strong>
                                                <p style={{ fontSize: '12px', margin: '5px 0' }}>조깅트랙</p>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#e8e8f8',
                                                padding: '15px',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                border: '2px solid #9370DB'
                                            }}>
                                                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🛝</div>
                                                <strong>놀이터</strong>
                                                <p style={{ fontSize: '12px', margin: '5px 0' }}>어린이 시설</p>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#f8e8e8',
                                                padding: '15px',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                border: '2px solid #FF6B6B'
                                            }}>
                                                <div style={{ fontSize: '24px', marginBottom: '10px' }}>🪑</div>
                                                <strong>휴게시설</strong>
                                                <p style={{ fontSize: '12px', margin: '5px 0' }}>벤치, 파고라</p>
                                            </div>
                                        </div>
                                        <div style={{
                                            marginTop: '30px',
                                            padding: '15px',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            width: '80%'
                                        }}>
                                            <strong style={{ color: '#2E8B57' }}>조경률 30% 이상</strong>
                                            <p style={{ fontSize: '14px', color: '#666', margin: '10px 0' }}>
                                                녹지공간과 휴식공간이 조화롭게 배치된 친환경 단지
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="landscapeFeatures">
                                    <h4>조경 시설 안내</h4>
                                    <div className="landscapeGrid">
                                        <div className="landscapeItem">
                                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🛝</div>
                                            <h5>어린이놀이터</h5>
                                            <p>안전하고 다양한 놀이시설</p>
                                        </div>
                                        <div className="landscapeItem">
                                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏃‍♂️</div>
                                            <h5>산책로</h5>
                                            <p>단지 전체를 연결하는 산책로</p>
                                        </div>
                                        <div className="landscapeItem">
                                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🌳</div>
                                            <h5>중앙정원</h5>
                                            <p>사계절 아름다운 조경정원</p>
                                        </div>
                                        <div className="landscapeItem">
                                            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🪑</div>
                                            <h5>휴게시설</h5>
                                            <p>벤치, 파고라 등 휴식공간</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 단지 특징 */}
                    <div className="complexFeatures">
                        <h4>단지 배치의 특장점</h4>
                        <div className="featureGrid">
                            {complexFeatures.map((feature, index) => (
                                <div key={index} className="featureCard">
                                    <div className="featureIcon">
                                        <span style={{ fontSize: '40px' }}>{feature.icon}</span>
                                    </div>
                                    <div className="featureContent">
                                        <h5>{feature.title}</h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 단지 개요 */}
                    <div className="complexOverview">
                        <h4>단지 개요</h4>
                        <div className="overviewTable">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>전체 세대수</th>
                                        <td>779세대 (59㎡A: 265세대, 59㎡B: 97세대, 73㎡: 108세대, 84㎡A: 207세대, 84㎡B: 102세대)</td>
                                    </tr>
                                    <tr>
                                        <th>동 구성</th>
                                        <td>지하 2층 ~ 지상 29층, 9개동</td>
                                    </tr>
                                    <tr>
                                        <th>주차대수</th>
                                        <td>1,169대 (세대당 1.5대)</td>
                                    </tr>
                                    <tr>
                                        <th>용적율</th>
                                        <td>316.78%</td>
                                    </tr>
                                    <tr>
                                        <th>건폐율</th>
                                        <td>14.23%</td>
                                    </tr>
                                    <tr>
                                        <th>조경률</th>
                                        <td>30% 이상</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 주의사항 */}
                    <div className="chartNotice">
                        <h4>유의사항</h4>
                        <div className="noticeBox">
                            <ul>
                                <li>• 상기 배치도는 계획도면으로 실제 시공 시 현장 여건에 따라 변경될 수 있습니다.</li>
                                <li>• 단지 내 시설물의 위치 및 규모는 실시설계 및 시공 과정에서 변경될 수 있습니다.</li>
                                <li>• 커뮤니티 시설의 운영 및 관리는 입주민의 부담으로 진행됩니다.</li>
                                <li>• 단지 배치 및 동호수는 분양계약서 및 도면을 우선으로 합니다.</li>
                                <li>• 조경시설물의 위치 및 규모는 실제 시공 시 변경될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .chartTabs {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 50px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .chartTab {
                    padding: 20px 30px;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    background: #fff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    min-width: 180px;
                }

                .chartTab:hover {
                    border-color: #c8986b;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(200, 152, 107, 0.2);
                }

                .chartTab.active {
                    border-color: #c8986b;
                    background: #c8986b;
                    color: #fff;
                }

                .chartTab h4 {
                    font-size: 1.2rem;
                    margin-bottom: 5px;
                    font-weight: bold;
                }

                .chartTab p {
                    font-size: 0.9rem;
                    opacity: 0.8;
                }

                .chartContent {
                    background: #fff;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    margin-bottom: 60px;
                }

                .chartImage {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .chartImage img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                }

                .buildingGrid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }

                .buildingCard {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    border-left: 4px solid #c8986b;
                }

                .buildingCard h5 {
                    font-size: 1.3rem;
                    color: #c8986b;
                    margin-bottom: 15px;
                    font-weight: bold;
                }

                .buildingDetails p {
                    margin-bottom: 8px;
                    font-size: 0.95rem;
                }

                .buildingDetails span {
                    font-weight: bold;
                    color: #333;
                    min-width: 60px;
                    display: inline-block;
                }

                .landscapeGrid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                    margin-top: 30px;
                }

                .landscapeItem {
                    text-align: center;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 10px;
                }

                .landscapeItem img {
                    width: 60px;
                    height: 60px;
                    margin-bottom: 15px;
                }

                .landscapeItem h5 {
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                    color: #333;
                }

                .landscapeItem p {
                    font-size: 0.9rem;
                    color: #666;
                }

                .featureGrid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }

                .featureCard {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 30px;
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                }

                .featureCard:hover {
                    transform: translateY(-5px);
                }

                .featureIcon img {
                    width: 60px;
                    height: 60px;
                }

                .featureContent h5 {
                    font-size: 1.2rem;
                    margin-bottom: 8px;
                    color: #333;
                }

                .featureContent p {
                    font-size: 0.95rem;
                    color: #666;
                    line-height: 1.5;
                }

                .overviewTable table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 30px;
                }

                .overviewTable th,
                .overviewTable td {
                    padding: 20px;
                    border: 1px solid #e0e0e0;
                    text-align: left;
                }

                .overviewTable th {
                    background: #f8f9fa;
                    font-weight: bold;
                    color: #333;
                    width: 200px;
                }

                .noticeBox {
                    background: #f8f9fa;
                    padding: 30px;
                    border-radius: 10px;
                    border-left: 4px solid #ff6b6b;
                    margin-top: 20px;
                }

                .noticeBox ul {
                    list-style: none;
                    padding: 0;
                }

                .noticeBox li {
                    margin-bottom: 10px;
                    font-size: 0.95rem;
                    color: #666;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .chartTabs {
                        flex-direction: column;
                        align-items: center;
                    }

                    .chartTab {
                        width: 100%;
                        max-width: 300px;
                    }

                    .buildingGrid {
                        grid-template-columns: 1fr;
                    }

                    .featureCard {
                        flex-direction: column;
                        text-align: center;
                    }

                    .overviewTable th {
                        width: auto;
                    }
                }
            `}</style>
        </>
    );
}
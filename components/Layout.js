import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
    const [popups, setPopups] = useState([]);
    const [videoPopup, setVideoPopup] = useState(null);

    useEffect(() => {
        // 페이지 로드 시 팝업 표시
        const savedPopupState = localStorage.getItem('hidePopups');
        const today = new Date().toDateString();

        // 팝업 임시 비활성화
        // if (savedPopupState !== today) {
        //     setPopups([
        //         {
        //             id: 1,
        //             image: '/images/popup/popup1.jpg',
        //             link: '/sale/documents',
        //             title: '사전 서류제출 안내'
        //         },
        //         {
        //             id: 2,
        //             image: '/images/popup/popup2.jpg',
        //             link: null,
        //             title: '공지사항'
        //         }
        //     ]);
        // }

        // 모바일 감지 및 리다이렉트
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                document.body.classList.add('mobile');
            }
        };

        checkMobile();
    }, []);

    const closePopup = (popupId, dontShowToday) => {
        setPopups(popups.filter(p => p.id !== popupId));

        if (dontShowToday) {
            const today = new Date().toDateString();
            localStorage.setItem('hidePopups', today);
        }
    };

    const openVideoPopup = (videoUrl) => {
        setVideoPopup(videoUrl);
    };

    const closeVideoPopup = () => {
        setVideoPopup(null);
    };

    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />

            {/* 일반 팝업 */}
            {popups.map(popup => (
                <div key={popup.id} className="popup" style={{
                    position: 'fixed',
                    top: `${50 + popup.id * 30}px`,
                    left: `${50 + popup.id * 30}px`,
                    zIndex: 9999,
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}>
                    <div className="popupContent">
                        {popup.link ? (
                            <a href={popup.link}>
                                <img src={popup.image} alt={popup.title} style={{ width: '400px', height: 'auto' }} />
                            </a>
                        ) : (
                            <img src={popup.image} alt={popup.title} style={{ width: '400px', height: 'auto' }} />
                        )}
                    </div>
                    <div className="popupFooter" style={{
                        padding: '10px',
                        backgroundColor: '#f5f5f5',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <input type="checkbox" onChange={(e) => closePopup(popup.id, e.target.checked)} />
                            <span style={{ fontSize: '12px' }}>오늘 하루 보지 않기</span>
                        </label>
                        <button
                            onClick={() => closePopup(popup.id, false)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            닫기
                        </button>
                    </div>
                </div>
            ))}

            {/* YouTube 비디오 팝업 */}
            {videoPopup && (
                <div className="videoPopup" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 10000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div className="videoWrapper" style={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '800px',
                        backgroundColor: '#000'
                    }}>
                        <button
                            onClick={closeVideoPopup}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: '#fff',
                                fontSize: '30px',
                                cursor: 'pointer'
                            }}
                        >
                            ×
                        </button>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src={`${videoPopup}?autoplay=1`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* 플로팅 버튼 */}
            <div className="floatingButtons" style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 9998,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <a href="tel:1668-5257" style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#007AFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textDecoration: 'none',
                    color: '#fff',
                    fontSize: '20px'
                }}>
                    📞
                </a>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#fff',
                        fontSize: '20px'
                    }}
                >
                    ↑
                </button>
            </div>
        </>
    );
};

export default Layout;
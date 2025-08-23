import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [popupActive, setPopupActive] = useState(false);
  const [videoPopup, setVideoPopup] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());
      
      // Skip intro after 3 seconds
      setTimeout(() => {
        setShowIntro(false);
      }, 3000);
      
      // Initialize AOS if available
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="|용인 고진역| 대광로제비앙" />
        <meta name="keywords" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="|용인 고진역| 대광로제비앙" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicon/link_logo.jpg" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="125" />
        <title>|용인 고진역| 대광로제비앙</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>

      <div onContextMenu={() => false}>
        {/* Header */}
        <div className="header">
          <div className="topWrap">
            <div className="leftWrap">
              <a href="#" className="logo" onClick={() => setShowIntro(false)}>
                <img src="/assets/images/common/img_logo.png" alt="용인 고진역 대광로제비앙" />
              </a>
            </div>
            <div className="rightWrap">
              <ul className="menu">
                <li>
                  <a href="#business">사업개요</a>
                  <ul className="depth2">
                    <li><a href="#summary">사업개요</a></li>
                    <li><a href="#location">입지환경</a></li>
                    <li><a href="#premium">프리미엄</a></li>
                    <li><a href="#brand">브랜드 소개</a></li>
                  </ul>
                </li>
                <li><a href="#direction">오시는길</a></li>
                <li>
                  <a href="#guide">청약안내</a>
                  <ul className="depth2">
                    <li><a href="#guide1">청약체크리스트</a></li>
                    <li><a href="#guide2">일반공급 신청자격</a></li>
                    <li><a href="#guide3">특별공급 안내</a></li>
                  </ul>
                </li>
                <li><a href="#customer">관심고객등록</a></li>
                <li><a href="https://reg-용인고진역대광로제비앙.com/" target="_blank">협력업체등록</a></li>
              </ul>
              <a href="tel:1551-3300" className="telBtn">
                <img src="/assets/images/common/img_tel.png" alt="전화" />
              </a>
              <a href="#" className="openBtn">
                <img src="/assets/images/common/img_open.png" alt="메뉴" />
              </a>
            </div>
          </div>
          <div className="bottomWrap"></div>
        </div>

        {/* Popup Wrap */}
        <div className={`popupWrap clearfix ${popupActive ? 'active' : ''}`}>
          <div className="contWrap clearfix">
            <div className="popup_box">
              <img src="/assets/images/popup/popup_250812.png" alt="팝업" />
            </div>
            <div className="popup_box">
              <img src="/assets/images/popup/popup_250721.png" alt="팝업" />
              <a href="#customer" style={{width: '100%', height: '9%', display: 'block', background: 'rgba(0,0,0,0)', position: 'absolute', top: '82%', left: '0%', textIndent: '-1000000px'}}>관심고객등록</a>
              <a href="#event" style={{width: '100%', height: '9%', display: 'block', background: 'rgba(0,0,0,0)', position: 'absolute', top: '91%', left: '0%', textIndent: '-1000000px'}}>이벤트</a>
            </div>
          </div>
          <div className="btnsWrap" onClick={() => setPopupActive(!popupActive)}>
            <p>POPUP</p>
            <span></span>
          </div>
        </div>

        {/* Video Popup */}
        {videoPopup && (
          <div className="videoPopWrap" style={{display: 'block'}}>
            <div className="videoWrap">
              <iframe 
                src={videoPopup} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
              <a href="#" className="closeBtn" onClick={() => setVideoPopup('')}>CLOSE X</a>
            </div>
          </div>
        )}

        {/* Intro */}
        {showIntro && (
          <div className="introWrap">
            <div className="bgWrap objectFit">
              <video preload="metadata" playsInline loop autoPlay muted>
                <source src="/assets/images/main/video_intro.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="txtWrap">
              <img src="/assets/images/main/img_intro_i1.png" alt="" className="t1" />
              <hr />
              <img src="/assets/images/main/img_intro_i2.png" alt="" className="t2" />
              <hr />
              <img src="/assets/images/main/img_intro_i3.png" alt="" className="t3" />
            </div>
            <div className="csWrap">
              <img src="/assets/images/main/img_intro_skip1.png" alt="" className="c1" />
              <img src="/assets/images/main/img_intro_skip2.png" alt="" className="c2" onClick={() => setShowIntro(false)} />
            </div>
          </div>
        )}

        {/* Quick Menu */}
        <div className="qkWrap">
          <img src="/assets/images/main/img_visual_scroll.png" alt="" className="scroll" />
          <div className="btnsWrap">
            <a href="#customer">
              <p>
                <span><img src="/assets/images/main/img_visual_person_t.png" alt="" /></span>
                <span><img src="/assets/images/main/img_visual_person_i.png" alt="" /></span>
              </p>
            </a>
            <a href="tel:1551-3300">
              <p>
                <span><img src="/assets/images/main/img_visual_tel_t.png" alt="" /></span>
                <span><img src="/assets/images/main/img_visual_tel_i.png" alt="" /></span>
              </p>
            </a>
            <a href="#" className="noHover" onClick={() => window.scrollTo(0, 0)}>
              <p>
                <span><img src="/assets/images/main/img_visual_top_i.png" alt="" /></span>
              </p>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="mainWrap">
          {/* Visual Section */}
          <div className="section">
            <div className="sec visualWrap">
              <div className="bgWrap">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.visualWrap .arrow.left',
                    nextEl: '.visualWrap .arrow.right'
                  }}
                  pagination={{
                    el: '.visualWrap .posWrap',
                    clickable: true
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                  }}
                  loop={true}
                >
                  <SwiperSlide className="objectFit">
                    <img src="/assets/images/main/img_visual_si1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="objectFit">
                    <img src="/assets/images/main/img_visual_si2.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="objectFit">
                    <img src="/assets/images/main/img_visual_si3.png" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="textWrap">
                <Swiper
                  modules={[]}
                  slidesPerView={1}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <img src="/assets/images/main/img_visual_st1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="t2">
                    <img src="/assets/images/main/img_visual_st22.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/images/main/img_visual_st3.png" alt="" style={{position: 'relative', top: '-50px', left: '-120px'}} />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="ctrWrap">
                <div className="arrowsWrap">
                  <a href="#" className="arrow left">
                    <img src="/assets/images/main/img_visual_arrow_left.png" alt="" />
                  </a>
                  <a href="#" className="arrow right">
                    <img src="/assets/images/main/img_visual_arrow_right.png" alt="" />
                  </a>
                </div>
                <div className="posWrap"></div>
              </div>
              <a href="https://xn--reg--ee4pgjs08awxk2ln9hrnpbowd5zd03cu2j.com/" target="_blank" className="ptBtn">
                <img src="/assets/images/main/img_visual_partner.png" alt="" />
              </a>
            </div>
          </div>

          {/* Section 1 */}
          <div className="section">
            <div className="sec sec1Wrap">
              <div className="leftWrap">
                <img src="/assets/images/main/img_sec1_t1.png" alt="" className="tt" />
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.sec1Wrap .arrow.left',
                    nextEl: '.sec1Wrap .arrow.right'
                  }}
                  pagination={{
                    el: '.sec1Wrap .posWrap',
                    clickable: true
                  }}
                >
                  <SwiperSlide>
                    <div className="bgWrap objectFit">
                      <img src="/assets/images/main/img_sec1_si1.png" alt="" />
                    </div>
                    <img src="/assets/images/main/img_sec1_st1_1.png" alt="" className="t1 noAOS" />
                    <img src="/assets/images/main/img_sec1_st1_2.png" alt="" className="t2 noAOS" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bgWrap objectFit">
                      <img src="/assets/images/main/img_sec1_si2.png" alt="" />
                    </div>
                    <img src="/assets/images/main/img_sec1_st2_1.png" alt="" className="t1 noAOS" />
                    <img src="/assets/images/main/img_sec1_st2_2.png" alt="" className="t2 noAOS" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bgWrap objectFit">
                      <img src="/assets/images/main/img_sec1_si3.png" alt="" />
                    </div>
                    <img src="/assets/images/main/img_sec1_st3_1.png" alt="" className="t1 noAOS" />
                    <img src="/assets/images/main/img_sec1_st3_2.png" alt="" className="t2 noAOS" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bgWrap objectFit">
                      <img src="/assets/images/main/img_sec1_si4.png" alt="" />
                    </div>
                    <img src="/assets/images/main/img_sec1_st4_1.png" alt="" className="t1 noAOS" />
                    <img src="/assets/images/main/img_sec1_st4_2.png" alt="" className="t2 noAOS" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bgWrap objectFit">
                      <img src="/assets/images/main/img_sec1_si5.png" alt="" />
                    </div>
                    <img src="/assets/images/main/img_sec1_st5_1.png" alt="" className="t1 noAOS" />
                    <img src="/assets/images/main/img_sec1_st5_2.png" alt="" className="t2 noAOS" />
                  </SwiperSlide>
                </Swiper>
                <div className="posWrap"></div>
              </div>
              <div className="rightWrap objectFit">
                <img src="/assets/images/main/img_sec1_i2.png" alt="" className="bg" />
                <img src="/assets/images/main/img_sec1_t2.png" alt="" className="t none" />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section">
            <div className="sec sec2Wrap">
              <div className="leftWrap objectFit">
                <img src="/assets/images/main/img_sec1_i1.png" alt="" className="bg" />
                <img src="/assets/images/main/img_sec1_t1.png" alt="" className="tt none" />
              </div>
              <div className="rightWrap objectFit">
                <img src="/assets/images/main/img_sec2_i1.png" alt="" className="bg" />
                <img src="/assets/images/main/img_sec1_t2.png" alt="" className="tt none" />
                <img src="/assets/images/main/img_sec2_t1.png" alt="" className="t none" />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section">
            <div className="sec sec3Wrap">
              <div className="leftWrap">
                <img src="/assets/images/main/img_sec3_t1.png" alt="" className="t1" />
                <div className="arrowsWrap">
                  <a href="#" className="arrow left">
                    <img src="/assets/images/main/img_sec3_arrow_left.png" alt="" />
                  </a>
                  <a href="#" className="arrow right">
                    <img src="/assets/images/main/img_sec3_arrow_right.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="rightWrap">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.sec3Wrap .arrow.left',
                    nextEl: '.sec3Wrap .arrow.right'
                  }}
                >
                  <SwiperSlide><img src="/assets/images/main/img_sec3_i1.png" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/assets/images/main/img_sec3_i2.png" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/assets/images/main/img_sec3_i3.png" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/assets/images/main/img_sec3_i4.png" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/assets/images/main/img_sec3_i5.png" alt="" /></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="section">
            <div className="sec sec4Wrap">
              <a href="#brand">
                <img src="/assets/images/main/img_sec4_t1.png" alt="" className="t1" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <div className="section">
            <div className="sec sec5Wrap">
              <div className="leftWrap">
                <img src="/assets/images/main/img_sec5_t1.png" alt="" className="t1" />
                <a href="#customer">
                  <img src="/assets/images/main/img_sec5_t2.png" alt="" />
                </a>
                <img src="/assets/images/main/img_sec5_t3.png" alt="" />
              </div>
              <div className="rightWrap">
                <div className="contWrap">
                  <img src="/assets/images/main/img_sec5_t4.png" alt="" className="t4" />
                  <div className="imageWrap">
                    <img src="/assets/images/main/img_sec5_i1.png" alt="" />
                    <img src="/assets/images/main/img_sec5_i2.png" alt="" />
                  </div>
                  <div className="rowWrap">
                    <img src="/assets/images/main/img_sec5_t5.png" alt="" />
                    <div className="btnsWrap">
                      <a href="https://naver.me/GhStJ9T7" target="_blank">
                        <img src="/assets/images/main/img_sec5_btn_naver1.png" alt="" />
                      </a>
                      <a href="https://kko.kakao.com/1B71zH31yj" target="_blank">
                        <img src="/assets/images/main/img_sec5_btn_kakao1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="rowWrap">
                    <img src="/assets/images/main/img_sec5_t6.png" alt="" />
                    <div className="btnsWrap">
                      <a href="https://naver.me/FAP6dHyl" target="_blank">
                        <img src="/assets/images/main/img_sec5_btn_naver2.png" alt="" />
                      </a>
                      <a href="https://kko.kakao.com/sGcVFuhFU9" target="_blank">
                        <img src="/assets/images/main/img_sec5_btn_kakao2.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="section fp-auto-height foot">
            <div className="footer">
              <img src="/assets/images/common/img_footer.png" alt="" />
            </div>
          </div>
        </div>

        {/* CSS Styles */}
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Noto Sans KR', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
          }

          .clearfix::after {
            content: '';
            display: table;
            clear: both;
          }

          .objectFit {
            position: relative;
            overflow: hidden;
          }

          .objectFit img,
          .objectFit video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hide {
            display: none;
          }

          /* Header */
          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
          }

          .topWrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .leftWrap .logo img {
            height: 40px;
          }

          .rightWrap {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .menu {
            display: flex;
            list-style: none;
            gap: 2rem;
          }

          .menu li {
            position: relative;
          }

          .menu > li > a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            padding: 1rem 0;
            display: block;
          }

          .depth2 {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            min-width: 200px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            list-style: none;
          }

          .menu li:hover .depth2 {
            opacity: 1;
            visibility: visible;
          }

          .depth2 li a {
            text-decoration: none;
            color: #333;
            padding: 0.8rem 1rem;
            display: block;
            border-bottom: 1px solid #eee;
          }

          .depth2 li a:hover {
            background: #f8f9fa;
            color: #2c5aa0;
          }

          .telBtn,
          .openBtn {
            display: flex;
            align-items: center;
            padding: 0.5rem;
          }

          .telBtn img,
          .openBtn img {
            height: 30px;
          }

          /* Popup */
          .popupWrap {
            position: fixed;
            top: 50%;
            right: -300px;
            transform: translateY(-50%);
            transition: right 0.3s ease;
            z-index: 1100;
          }

          .popupWrap.active {
            right: 0;
          }

          .contWrap {
            background: white;
            border-radius: 10px 0 0 10px;
            padding: 1rem;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
          }

          .popup_box {
            position: relative;
            margin-bottom: 1rem;
          }

          .popup_box img {
            width: 250px;
            height: auto;
            border-radius: 5px;
          }

          .btnsWrap {
            background: #2c5aa0;
            color: white;
            padding: 1rem;
            border-radius: 10px 0 0 10px;
            cursor: pointer;
            text-align: center;
            margin-left: -1rem;
          }

          .btnsWrap p {
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .btnsWrap span {
            display: block;
            width: 20px;
            height: 2px;
            background: white;
            margin: 3px auto;
            transition: transform 0.3s ease;
          }

          .popupWrap.active .btnsWrap span:first-child {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .popupWrap.active .btnsWrap span:last-child {
            transform: rotate(-45deg) translate(7px, -6px);
          }

          /* Video Popup */
          .videoPopWrap {
            position: fixed;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            z-index: 10001;
          }

          .videoPopWrap .videoWrap {
            position: absolute;
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 20px 0;
          }

          .videoPopWrap .videoWrap iframe {
            width: 1067px;
            height: 600px;
          }

          .videoPopWrap .videoWrap a {
            width: 200px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            font-size: 16px;
            color: #fff;
            background: rgba(0, 0, 0, .7);
            text-decoration: none;
          }

          .videoPopWrap .videoWrap a:hover {
            background: rgba(0, 0, 0, .9);
          }

          @media (max-width: 1200px) {
            .videoPopWrap .videoWrap iframe {
              width: 90vw;
              height: 50.6vw;
            }
          }

          @media (max-width: 768px) {
            .videoPopWrap .videoWrap iframe {
              width: 95vw;
              height: 53.4vw;
            }
            
            .videoPopWrap .videoWrap a {
              width: 150px;
              height: 40px;
              font-size: 14px;
            }
          }

          /* Intro */
          .introWrap {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3000;
            background: #000;
          }

          .introWrap .bgWrap {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .txtWrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 2;
          }

          .txtWrap img {
            max-width: 80%;
            height: auto;
            margin: 1rem 0;
          }

          .txtWrap hr {
            width: 100px;
            height: 2px;
            background: white;
            border: none;
            margin: 2rem auto;
          }

          .csWrap {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            z-index: 2;
          }

          .csWrap img {
            height: 40px;
            margin-left: 1rem;
            cursor: pointer;
          }

          /* Quick Menu */
          .qkWrap {
            position: fixed;
            right: 2rem;
            bottom: 50%;
            transform: translateY(50%);
            z-index: 900;
          }

          .qkWrap .scroll {
            display: block;
            margin: 0 auto 2rem;
            height: 60px;
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          .qkWrap .btnsWrap a {
            display: block;
            margin-bottom: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
          }

          .qkWrap .btnsWrap a:hover {
            transform: scale(1.1);
          }

          .qkWrap .btnsWrap img {
            height: 30px;
            display: block;
          }

          /* Main Content */
          .mainWrap {
            margin-top: 80px;
          }

          .section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sec {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          /* Visual Section */
          .visualWrap {
            position: relative;
            height: 100vh;
          }

          .visualWrap .bgWrap {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }

          .textWrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            text-align: center;
          }

          .textWrap img {
            max-width: 80%;
            height: auto;
          }

          .ctrWrap {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .arrowsWrap {
            display: flex;
            gap: 1rem;
          }

          .arrow {
            display: block;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            transition: background 0.3s ease;
          }

          .arrow:hover {
            background: rgba(255, 255, 255, 1);
          }

          .arrow img {
            height: 20px;
          }

          .posWrap {
            display: flex;
            gap: 0.5rem;
          }

          .ptBtn {
            position: absolute;
            top: 2rem;
            right: 2rem;
            z-index: 3;
          }

          .ptBtn img {
            height: 50px;
          }

          /* Sections */
          .sec1Wrap,
          .sec2Wrap {
            display: flex;
            align-items: center;
            gap: 4rem;
            min-height: 100vh;
          }

          .sec1Wrap .leftWrap,
          .sec1Wrap .rightWrap,
          .sec2Wrap .leftWrap,
          .sec2Wrap .rightWrap {
            flex: 1;
            position: relative;
          }

          .sec1Wrap .tt,
          .sec2Wrap .tt {
            position: absolute;
            top: 2rem;
            left: 2rem;
            z-index: 2;
            max-width: 300px;
          }

          .sec3Wrap {
            display: flex;
            align-items: center;
            gap: 4rem;
            min-height: 100vh;
          }

          .sec3Wrap .leftWrap {
            flex: 1;
            text-align: center;
          }

          .sec3Wrap .rightWrap {
            flex: 2;
          }

          .sec3Wrap .t1 {
            max-width: 100%;
            margin-bottom: 2rem;
          }

          .sec4Wrap {
            text-align: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sec4Wrap .t1 {
            max-width: 100%;
          }

          .sec5Wrap {
            display: flex;
            align-items: center;
            gap: 4rem;
            min-height: 100vh;
          }

          .sec5Wrap .leftWrap {
            flex: 1;
            text-align: center;
          }

          .sec5Wrap .rightWrap {
            flex: 1;
          }

          .sec5Wrap .leftWrap img {
            max-width: 100%;
            margin-bottom: 2rem;
          }

          .sec5Wrap .contWrap {
            padding: 2rem;
          }

          .sec5Wrap .t4 {
            max-width: 100%;
            margin-bottom: 2rem;
          }

          .imageWrap {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .imageWrap img {
            flex: 1;
            max-width: 100%;
          }

          .rowWrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 10px;
          }

          .rowWrap img {
            max-width: 200px;
          }

          .btnsWrap {
            display: flex;
            gap: 1rem;
          }

          .btnsWrap img {
            height: 40px;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .btnsWrap img:hover {
            transform: scale(1.1);
          }

          /* Footer */
          .footer {
            padding: 2rem;
            text-align: center;
          }

          .footer img {
            max-width: 100%;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .topWrap {
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
            }

            .menu {
              flex-wrap: wrap;
              justify-content: center;
              gap: 1rem;
            }

            .qkWrap {
              right: 1rem;
            }

            .sec1Wrap,
            .sec2Wrap,
            .sec3Wrap,
            .sec5Wrap {
              flex-direction: column;
              gap: 2rem;
              padding: 2rem 1rem;
            }

            .textWrap img {
              max-width: 90%;
            }

            .ctrWrap {
              flex-direction: column;
              gap: 1rem;
            }

            .imageWrap {
              flex-direction: column;
            }

            .rowWrap {
              flex-direction: column;
              gap: 1rem;
              text-align: center;
            }
          }

          /* Swiper Custom Styles */
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.7);
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: white;
          }

          .swiper-button-prev,
          .swiper-button-next {
            color: white;
            background: rgba(255, 255, 255, 0.2);
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 16px;
          }
        `}</style>
      </div>
    </>
  );
}

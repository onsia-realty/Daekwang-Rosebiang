import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footerWrap">
                <div className="footerTop">
                    <div className="footerLogo">
                        <img src="/images/common/img_footer.png" alt="대광건영" />
                    </div>
                    <div className="footerInfo">
                        <div className="companyInfo">
                            <span>시행수탁: ㈜무궁화신탁</span>
                            <span className="divider">|</span>
                            <span>시행위탁: 효산제4차 지역주택조합</span>
                            <span className="divider">|</span>
                            <span>시공: 대광건영(주)</span>
                        </div>
                        <div className="contactInfo">
                            <span>홍보관: 경기도 용인시 처인구 유림로 154번길 32</span>
                            <span className="divider">|</span>
                            <span>대표번호: 1668-5257</span>
                        </div>
                        <div className="businessInfo">
                            <span>시행수탁 ㈜무궁화신탁 사업자등록번호: 120-86-58362</span>
                            <span className="divider">|</span>
                            <span>시행위탁 효산제4차 지역주택조합 사업자등록번호: 214-82-02831</span>
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2024 용인 고진역 대광로제비앙. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <div className="footerLinks">
                        <Link href="/terms">이용약관</Link>
                        <span className="divider">|</span>
                        <Link href="/privacy">개인정보처리방침</Link>
                        <span className="divider">|</span>
                        <Link href="/sitemap">사이트맵</Link>
                    </div>
                    <div className="snsLinks">
                        <a href="https://blog.naver.com/용인고진역대광로제비앙" target="_blank" rel="noopener noreferrer">
                            <span>N</span>
                        </a>
                        <a href="https://pf.kakao.com/_용인고진역" target="_blank" rel="noopener noreferrer">
                            <span>K</span>
                        </a>
                    </div>
                </div>

                <div className="footerNotice">
                    <p>※ 본 홍보물은 편집 및 인쇄과정상 오류가 있을 수 있으므로 의문사항에 대해서는 홍보관 및 사업주체에 확인하시기 바랍니다.</p>
                    <p>※ 본 홍보물의 내용은 사업계획승인 변경 및 신고, 수정 등에 따라 일부 변경될 수 있으며, 기재사항의 오류가 있을 시 관계법령이 우선합니다.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
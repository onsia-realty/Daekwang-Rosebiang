import Head from 'next/head';
import { useState } from 'react';
import SubNavigation from '../../components/SubNavigation';

export default function Customer() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        interestType: '59A',
        marketingAgree: false,
        privacyAgree: false,
        thirdPartyAgree: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 필수 동의 확인
        if (!formData.privacyAgree) {
            alert('개인정보 수집 및 이용에 동의해 주세요.');
            return;
        }

        if (!formData.name || !formData.phone) {
            alert('이름과 연락처는 필수 입력 항목입니다.');
            return;
        }

        // 전화번호 형식 확인
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(formData.phone.replace(/-/g, ''))) {
            alert('올바른 전화번호를 입력해 주세요.');
            return;
        }

        try {
            // API 호출 (실제 구현 시)
            // const response = await fetch('/api/customer', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            alert('관심고객 등록이 완료되었습니다.\n빠른 시일 내에 연락드리겠습니다.');

            // 폼 초기화
            setFormData({
                name: '',
                phone: '',
                email: '',
                address: '',
                interestType: '59A',
                marketingAgree: false,
                privacyAgree: false,
                thirdPartyAgree: false
            });
        } catch (error) {
            alert('등록 중 오류가 발생했습니다. 다시 시도해 주세요.');
        }
    };

    return (
        <>
            <Head>
                <title>관심고객등록 | 용인 고진역 대광로제비앙</title>
                <meta name="description" content="용인 고진역 대광로제비앙 관심고객등록" />
            </Head>

            {/* 서브 비주얼 */}
            <section className="subVisual">
                <div className="visualImg">
                    <img src="/images/sub/img_top_customer.png" alt="관심고객등록" />
                </div>
                <div className="visualText">
                    <h2>
                        <span className="en">CUSTOMER REGISTRATION</span>
                        <span className="ko">관심고객등록</span>
                    </h2>
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <SubNavigation category="pr" />

            {/* 컨텐츠 영역 */}
            <section className="subContent">
                <div className="container">
                    <div className="contentTitle">
                        <h3>관심고객 등록</h3>
                    </div>

                    <form className="customerForm" onSubmit={handleSubmit}>
                        <div className="formSection">
                            <h4>고객정보 입력</h4>

                            <div className="formGroup">
                                <label htmlFor="name" className="required">이름</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="이름을 입력해 주세요"
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="phone" className="required">연락처</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="'-' 없이 숫자만 입력해 주세요"
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="email">이메일</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="이메일 주소를 입력해 주세요"
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="address">거주지역</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="예) 경기도 용인시"
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="interestType">관심평형</label>
                                <select
                                    id="interestType"
                                    name="interestType"
                                    value={formData.interestType}
                                    onChange={handleInputChange}
                                >
                                    <option value="59A">59㎡A</option>
                                    <option value="59B">59㎡B</option>
                                    <option value="73">73㎡</option>
                                    <option value="84A">84㎡A</option>
                                    <option value="84B">84㎡B</option>
                                    <option value="미정">미정</option>
                                </select>
                            </div>
                        </div>

                        <div className="formSection">
                            <h4>개인정보 수집 및 이용 동의</h4>

                            <div className="agreementBox">
                                <div className="agreementContent">
                                    <p>분양 관련 정보 제공 및 상담을 위해 개인정보를 수집합니다.</p>
                                </div>
                            </div>

                            <div className="agreementCheck">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="privacyAgree"
                                        checked={formData.privacyAgree}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="required">개인정보 수집 및 이용에 동의합니다.</span>
                                </label>
                            </div>

                            <div className="agreementCheck">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="thirdPartyAgree"
                                        checked={formData.thirdPartyAgree}
                                        onChange={handleInputChange}
                                    />
                                    <span>개인정보 제3자 제공에 동의합니다. (선택)</span>
                                </label>
                            </div>

                            <div className="agreementCheck">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="marketingAgree"
                                        checked={formData.marketingAgree}
                                        onChange={handleInputChange}
                                    />
                                    <span>마케팅 정보 수신에 동의합니다. (선택)</span>
                                </label>
                            </div>
                        </div>

                        <div className="formButton">
                            <button type="submit" className="btnSubmit">
                                관심고객 등록하기
                            </button>
                        </div>
                    </form>

                    {/* 문의 안내 */}
                    <div className="contactInfo">
                        <div className="contactBox">
                            <div className="contactItem">
                                <img src="/images/common/ico_phone.png" alt="전화" />
                                <div>
                                    <h5>전화 문의</h5>
                                    <p className="contactNumber">1668-5257</p>
                                    <p>평일 09:00 ~ 18:00 / 주말 10:00 ~ 17:00</p>
                                </div>
                            </div>
                            <div className="contactItem">
                                <img src="/images/common/ico_location.png" alt="위치" />
                                <div>
                                    <h5>홍보관 위치</h5>
                                    <p>경기도 용인시 처인구 유림로 154번길 32</p>
                                    <p>운영시간: 10:00 ~ 18:00 (연중무휴)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
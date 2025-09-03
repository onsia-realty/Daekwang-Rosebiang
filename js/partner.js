// 협력업체 등록 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const partnerForm = document.getElementById('partnerForm');
    const agreeAll = document.getElementById('agreeAll');
    const agreeItems = document.querySelectorAll('.agreeItem');
    
    // 전체 동의 체크박스
    if (agreeAll) {
        agreeAll.addEventListener('change', function() {
            agreeItems.forEach(item => {
                item.checked = this.checked;
            });
        });
        
        // 개별 체크박스 변경시 전체 동의 체크박스 상태 업데이트
        agreeItems.forEach(item => {
            item.addEventListener('change', function() {
                const allChecked = Array.from(agreeItems).every(checkbox => checkbox.checked);
                agreeAll.checked = allChecked;
            });
        });
    }
    
    // 폼 제출
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 유효성 검사
            if (!validateForm()) {
                return;
            }
            
            // 폼 데이터 수집
            const formData = new FormData(partnerForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // 등록 일시 추가
            data.registDate = new Date().toISOString();
            data.status = 'waiting'; // 대기 상태로 설정
            
            // 로컬 스토리지에 저장
            savePartnerData(data);
            
            // 완료 메시지
            alert('협력업체 등록이 완료되었습니다.\n담당자 검토 후 연락드리겠습니다.');
            
            // 폼 초기화
            partnerForm.reset();
            agreeAll.checked = false;
        });
    }
});

// 유효성 검사
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    // 사업자등록번호 형식 검사
    const businessNumber = document.getElementById('businessNumber');
    if (businessNumber && businessNumber.value) {
        const pattern = /^\d{3}-\d{2}-\d{5}$/;
        if (!pattern.test(businessNumber.value)) {
            alert('사업자등록번호 형식이 올바르지 않습니다. (예: 000-00-00000)');
            businessNumber.focus();
            return false;
        }
    }
    
    // 이메일 형식 검사
    const email = document.getElementById('contactEmail');
    if (email && email.value) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email.value)) {
            alert('이메일 형식이 올바르지 않습니다.');
            email.focus();
            return false;
        }
    }
    
    // 전화번호 형식 검사
    const phone = document.getElementById('contactPhone');
    if (phone && phone.value) {
        const pattern = /^010-\d{4}-\d{4}$/;
        if (!pattern.test(phone.value)) {
            alert('연락처 형식이 올바르지 않습니다. (예: 010-0000-0000)');
            phone.focus();
            return false;
        }
    }
    
    // 필수 동의 체크
    const agreeItems = document.querySelectorAll('.agreeItem[required]');
    const allAgreed = Array.from(agreeItems).every(item => item.checked);
    
    if (!allAgreed) {
        alert('필수 약관에 모두 동의해주세요.');
        return false;
    }
    
    if (!isValid) {
        alert('필수 입력 항목을 모두 입력해주세요.');
        return false;
    }
    
    return true;
}

// 데이터 저장
function savePartnerData(data) {
    let partners = JSON.parse(localStorage.getItem('partners')) || [];
    
    // ID 생성
    data.id = 'P' + Date.now();
    
    partners.push(data);
    localStorage.setItem('partners', JSON.stringify(partners));
}

// 폼 초기화
function resetForm() {
    if (confirm('작성한 내용이 모두 삭제됩니다. 계속하시겠습니까?')) {
        document.getElementById('partnerForm').reset();
        document.getElementById('agreeAll').checked = false;
    }
}

// 개인정보처리방침 보기
function showPrivacyPolicy() {
    const content = `
        <h3>개인정보 수집 및 이용 동의</h3>
        <br>
        <p><strong>1. 수집하는 개인정보 항목</strong></p>
        <p>- 필수항목: 업체명, 사업자등록번호, 대표자명, 담당자명, 연락처, 이메일, 주소</p>
        <p>- 선택항목: 팩스번호, 주요실적, 기타사항</p>
        <br>
        <p><strong>2. 개인정보의 수집 및 이용목적</strong></p>
        <p>- 협력업체 등록 및 관리</p>
        <p>- 계약 체결 및 이행</p>
        <p>- 서비스 제공에 관한 업무 처리</p>
        <br>
        <p><strong>3. 개인정보의 보유 및 이용기간</strong></p>
        <p>- 협력관계 종료 후 5년</p>
        <p>- 관계 법령에 따른 보존 필요시 해당 기간</p>
        <br>
        <p><strong>4. 동의 거부권 및 불이익</strong></p>
        <p>- 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.</p>
        <p>- 다만, 필수항목에 대한 동의 거부시 협력업체 등록이 제한될 수 있습니다.</p>
    `;
    
    showModal('개인정보처리방침', content);
}

// 협력업체 등록 약관 보기
function showTerms() {
    const content = `
        <h3>협력업체 등록 약관</h3>
        <br>
        <p><strong>제1조 (목적)</strong></p>
        <p>본 약관은 용인 고진역 대광로제비앙(이하 "회사")과 협력업체 간의 등록 및 거래에 관한 제반 사항을 규정함을 목적으로 합니다.</p>
        <br>
        <p><strong>제2조 (협력업체의 자격)</strong></p>
        <p>1. 사업자등록증을 보유한 법인 또는 개인사업자</p>
        <p>2. 해당 업종의 면허 및 자격을 보유한 업체</p>
        <p>3. 최근 3년간 부도, 화의, 법정관리 등의 사실이 없는 업체</p>
        <br>
        <p><strong>제3조 (등록 절차)</strong></p>
        <p>1. 온라인 등록 신청</p>
        <p>2. 제출 서류 검토</p>
        <p>3. 실사 및 평가</p>
        <p>4. 최종 승인 및 계약 체결</p>
        <br>
        <p><strong>제4조 (협력업체의 의무)</strong></p>
        <p>1. 품질 기준 준수</p>
        <p>2. 납기 준수</p>
        <p>3. 관련 법규 준수</p>
        <p>4. 기밀 유지</p>
        <br>
        <p><strong>제5조 (계약 해지)</strong></p>
        <p>다음 각 호의 경우 회사는 협력업체 등록을 취소할 수 있습니다.</p>
        <p>1. 허위 정보 제공</p>
        <p>2. 품질 기준 미달</p>
        <p>3. 계약 위반</p>
        <p>4. 기타 신뢰관계 훼손</p>
    `;
    
    showModal('협력업체 등록 약관', content);
}

// 모달 창 표시
function showModal(title, content) {
    // 기존 모달 제거
    const existingModal = document.getElementById('modalPopup');
    if (existingModal) {
        existingModal.remove();
    }
    
    // 모달 생성
    const modal = document.createElement('div');
    modal.id = 'modalPopup';
    modal.className = 'modalPopup';
    modal.innerHTML = `
        <div class="modalContent">
            <div class="modalHeader">
                <h3>${title}</h3>
                <button class="modalClose" onclick="closeModal()">×</button>
            </div>
            <div class="modalBody">
                ${content}
            </div>
            <div class="modalFooter">
                <button class="btnConfirm" onclick="closeModal()">확인</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('modalPopup');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}
// Sub Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 서브 네비게이션 스크롤 효과
    const subNav = document.querySelector('.subNav');
    if (subNav) {
        let isScrolling = false;
        
        window.addEventListener('scroll', function() {
            if (!isScrolling) {
                requestAnimationFrame(function() {
                    const scrollTop = window.pageYOffset;
                    const headerHeight = document.getElementById('header').offsetHeight;
                    
                    if (scrollTop > headerHeight + 100) {
                        subNav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    } else {
                        subNav.style.boxShadow = 'none';
                    }
                    
                    isScrolling = false;
                });
                
                isScrolling = true;
            }
        });
    }
    
    // 테이블 반응형 처리
    const tables = document.querySelectorAll('.summaryTable table');
    tables.forEach(table => {
        const wrapper = table.parentNode;
        let startX, scrollLeft;
        
        wrapper.addEventListener('mousedown', function(e) {
            startX = e.pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
            wrapper.style.cursor = 'grabbing';
        });
        
        wrapper.addEventListener('mouseleave', function() {
            wrapper.style.cursor = 'default';
        });
        
        wrapper.addEventListener('mouseup', function() {
            wrapper.style.cursor = 'default';
        });
        
        wrapper.addEventListener('mousemove', function(e) {
            if (startX) {
                e.preventDefault();
                const x = e.pageX - wrapper.offsetLeft;
                const walk = (x - startX) * 2;
                wrapper.scrollLeft = scrollLeft - walk;
            }
        });
        
        // 터치 이벤트
        let startTouchX, scrollTouchLeft;
        
        wrapper.addEventListener('touchstart', function(e) {
            startTouchX = e.touches[0].pageX - wrapper.offsetLeft;
            scrollTouchLeft = wrapper.scrollLeft;
        });
        
        wrapper.addEventListener('touchmove', function(e) {
            if (startTouchX) {
                const x = e.touches[0].pageX - wrapper.offsetLeft;
                const walk = (x - startTouchX) * 2;
                wrapper.scrollLeft = scrollTouchLeft - walk;
            }
        });
    });
    
    // 이미지 로드 애니메이션
    const images = document.querySelectorAll('.subContent img');
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'all 0.6s ease';
        
        if (img.complete) {
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            }, index * 100);
        } else {
            img.onload = function() {
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'translateY(0)';
                }, index * 100);
            };
        }
    });
    
    // 테이블 행 호버 효과
    const tableRows = document.querySelectorAll('.summaryTable tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.transition = 'background-color 0.3s';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // 컨텐츠 애니메이션
    const contentElements = document.querySelectorAll('.contentHead, .openInfo, .summaryImg, .summaryTable');
    
    if ('IntersectionObserver' in window) {
        const contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    contentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        contentElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.8s ease ${index * 0.1}s`;
            contentObserver.observe(element);
        });
    }
    
    // 서브 네비게이션 클릭 효과
    const subNavLinks = document.querySelectorAll('.subNav a');
    subNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 현재 페이지와 같은 링크인지 확인
            const currentPath = window.location.pathname;
            const linkPath = this.getAttribute('href');
            
            if (currentPath.endsWith(linkPath)) {
                e.preventDefault();
                // 페이지 상단으로 부드럽게 스크롤
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // 페이지 전환 효과
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s';
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
    
    // 페이지 로드 애니메이션
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // 브레드크럼 또는 페이지 위치 표시
    const currentPage = document.querySelector('.subNav .active a');
    if (currentPage) {
        // 페이지 타이틀에 현재 메뉴명 표시
        const pageTitle = currentPage.textContent;
        if (document.title.indexOf(pageTitle) === -1) {
            document.title = pageTitle + ' | ' + document.title;
        }
    }
    
    // 모바일에서 서브 네비게이션 접기/펼치기
    if (window.innerWidth <= 768) {
        const subNavToggle = document.createElement('button');
        subNavToggle.className = 'subNavToggle';
        subNavToggle.innerHTML = '<span>메뉴</span><i></i>';
        subNavToggle.style.cssText = `
            display: block;
            width: 100%;
            padding: 15px;
            background: #333;
            color: #fff;
            border: none;
            font-size: 16px;
            cursor: pointer;
            position: relative;
        `;
        
        const subNavUl = document.querySelector('.subNav ul');
        if (subNavUl) {
            subNav.insertBefore(subNavToggle, subNavUl);
            subNavUl.style.display = 'none';
            
            subNavToggle.addEventListener('click', function() {
                if (subNavUl.style.display === 'none') {
                    subNavUl.style.display = 'flex';
                    this.classList.add('active');
                } else {
                    subNavUl.style.display = 'none';
                    this.classList.remove('active');
                }
            });
        }
    }
});
// Main Page JavaScript
$(document).ready(function() {
    
    // Check intro session
    if (sessionStorage.getItem('intro') !== 'false') {
        $('.introWrap').removeClass('hide');
        setTimeout(function() {
            $('.introWrap').fadeOut(1000);
            sessionStorage.setItem('intro', 'false');
        }, 3000);
    }
    
    // Skip intro button
    $('.introWrap .csWrap img').click(function() {
        $('.introWrap').fadeOut(500);
        sessionStorage.setItem('intro', 'false');
    });
    
    // Initialize main visual swiper
    if ($('[data-sw="visual"]').length) {
        var visualSwiper = new Swiper('[data-sw="visual"]', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.posWrap[data-sw="visual"]',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });
        
        // Visual swiper navigation
        $('.visualWrap .arrow.left').click(function(e) {
            e.preventDefault();
            visualSwiper.slidePrev();
        });
        
        $('.visualWrap .arrow.right').click(function(e) {
            e.preventDefault();
            visualSwiper.slideNext();
        });
        
        // Sync text swiper with visual swiper
        var textSwiper = new Swiper('.visualWrap .textWrap .swiper-container', {
            allowTouchMove: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
        
        visualSwiper.on('slideChange', function() {
            textSwiper.slideTo(visualSwiper.realIndex);
        });
    }
    
    // Initialize section 1 swiper
    if ($('[data-sw="sec1"]').length) {
        var sec1Swiper = new Swiper('[data-sw="sec1"]', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'slide',
            pagination: {
                el: '.posWrap[data-sw="sec1"]',
                clickable: true,
            },
            on: {
                slideChange: function() {
                    // Trigger AOS animations on slide change
                    $('.sec1Wrap .swiper-slide-active .noAOS').each(function() {
                        $(this).removeClass('noAOS');
                        AOS.refresh();
                    });
                }
            }
        });
    }
    
    // Initialize section 3 swiper
    if ($('.sec3Wrap .swiper-container').length) {
        var sec3Swiper = new Swiper('.sec3Wrap .swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
        
        $('.sec3Wrap .arrow.left').click(function(e) {
            e.preventDefault();
            sec3Swiper.slidePrev();
        });
        
        $('.sec3Wrap .arrow.right').click(function(e) {
            e.preventDefault();
            sec3Swiper.slideNext();
        });
    }
    
    // Initialize fullpage if exists
    if ($('#fullpage').length && typeof $.fn.fullpage !== 'undefined') {
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            scrollBar: false,
            keyboardScrolling: true,
            touchSensitivity: 15,
            animateAnchor: true,
            recordHistory: true,
            afterLoad: function(origin, destination, direction) {
                // Trigger animations when section is loaded
                var loadedSection = $(destination.item);
                loadedSection.find('[data-aos]').each(function() {
                    $(this).addClass('aos-animate');
                });
            },
            onLeave: function(origin, destination, direction) {
                // Pause videos when leaving section
                var leavingSection = $(origin.item);
                leavingSection.find('video').each(function() {
                    this.pause();
                });
                
                // Play videos when entering section
                var enteringSection = $(destination.item);
                enteringSection.find('video').each(function() {
                    this.play();
                });
            }
        });
    }
    
    // Scroll animations using ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Parallax effect for sections
        gsap.utils.toArray('.section').forEach((section, i) => {
            var bg = section.querySelector('.bgWrap');
            if (bg) {
                gsap.to(bg, {
                    y: '20%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }
        });
        
        // Fade in animations
        gsap.utils.toArray('.fade-in').forEach(element => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    once: true
                }
            });
        });
    }
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Quick menu visibility
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 200) {
            $('.qkWrap').addClass('hide-menu');
        } else {
            $('.qkWrap').removeClass('hide-menu');
        }
        lastScrollTop = st;
    });
});

// Window load events
$(window).on('load', function() {
    // Remove loader if exists
    $('.loader').fadeOut();
    
    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});
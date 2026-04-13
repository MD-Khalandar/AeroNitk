// Slider
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let index = 0;
let autoSlideInterval;

function slideshow(i) {
    slides.forEach((s) => {
        s.classList.remove('active');
        slides[i].classList.add('active');
    });
    dots.forEach((d) => {
        d.classList.remove('active');
        dots[i].classList.add('active');
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    slideshow(index);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    slideshow(index);
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    slideshow(index);
    stopAutoSlide();
    startAutoSlide();
});

const sliderEl = document.querySelector('.slider');
if (sliderEl) {
    sliderEl.addEventListener('mouseenter', stopAutoSlide);
    sliderEl.addEventListener('mouseleave', startAutoSlide);
}
startAutoSlide();

// Header scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector(".Header");
    if (window.scrollY > 120) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Video crossfade
const vid1 = document.querySelector('.vid1');
const vid2 = document.querySelector('.vid2');

function fadeToVideo(hideEl, showEl) {
    hideEl.style.opacity = '0';
    setTimeout(() => {
        hideEl.style.display = 'none';
        hideEl.style.opacity = '1';
        showEl.style.display = 'block';
        showEl.style.opacity = '0';
        showEl.play();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                showEl.style.opacity = '1';
            });
        });
    }, 800);
}

vid1.addEventListener('ended', () => fadeToVideo(vid1, vid2));
vid2.addEventListener('ended', () => fadeToVideo(vid2, vid1));

// About section — reveal on scroll into view (once)
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.about-text').classList.add('about-text-transition');
                document.querySelector('.drone-img').classList.add('drone-img-transition');
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutSection);
}

// Timeline items — reveal individually as they scroll into view
const timelineItems = document.querySelectorAll('.timeline-component');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('tl-visible');
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
timelineItems.forEach(item => timelineObserver.observe(item));

// Slider section — fade up on scroll into view
const sliderSection = document.querySelector('.slider-flex-box');
if (sliderSection) {
    const sliderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('sfb-visible');
                sliderObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sliderObserver.observe(sliderSection);
}

// Contact section — fade up on scroll into view
const contactSection = document.querySelector('.contact-section');
if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cs-visible');
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    contactObserver.observe(contactSection);
}

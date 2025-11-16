
// LOADING SCREEN
(function() {
    const loader = document.getElementById('loader');
    const body = document.body;
    
    // Prevent body scrolling during loading
    body.classList.add('loading');
    
    // Wait 5 seconds, then fade out and remove loader
    setTimeout(function() {
        loader.classList.add('fade-out');
        
        // Remove loader after fade-out animation completes (0.5s)
        setTimeout(function() {
            loader.remove();
            body.classList.remove('loading');
            startBgmAutoplay();
            attachBgmGestureFallback();
        }, 500); // Match the CSS transition duration
    }, 3000); // 5 seconds loading duration
})();
// LOADING SCREEN

const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.body;

// Logo click to home
const logoContainer = document.querySelector('.logo-container');
if (logoContainer) {
    logoContainer.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        updateActiveNav();
    });
}

// navbar muncul dan hilang
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul.nav-links');
    if (navigationBar) {
        navigationBar.classList.toggle('ul-active');
    }

    const menuNavigationBar = document.querySelectorAll('header ul.nav-links li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            if (navigationBar) {
                navigationBar.classList.remove('ul-active');
            }
        })
    })
})

// Update active nav link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 'home'; // Default to home
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // If at the very top, set to home
    if (scrollY < 100) {
        current = 'home';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-link, .hire-me-btn').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update active state after scroll
                setTimeout(updateActiveNav, 100);
            }
        }
    })
})

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);
// Initial active state
updateActiveNav();

// efek scroll smooth
// navbar
document.querySelectorAll('.home a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    })
})
// swipe up

// animation show image certificate
const spanCertificate = document.querySelectorAll('.icon-eye');
const overlayCertificate = document.querySelectorAll('.overlay-image-certificate');
const fieldOverlayCertificate = document.querySelectorAll('.field-overlay-certificate')
const buttonCloseOverlay = document.querySelectorAll('.overlay-image-certificate button');
const slideBeforeCertificate = document.querySelectorAll('.slide-before-image-certificate')
const slideAfterCertificate = document.querySelectorAll('.slide-after-image-certificate');
const imageCertificate = document.querySelectorAll('.img-certificate');



spanCertificate.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(1)';
    });
})

buttonCloseOverlay.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
    });
})

for (let i = 0; i < slideAfterCertificate.length; i++) {
    slideAfterCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i + 1].style.transform = 'scale(1)';
    })
}

for (let i = 0; i < slideBeforeCertificate.length; i++) {
    slideBeforeCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i - 1].style.transform = 'scale(1)';
    })
}


// ANIMATION SECTION SKILL
const fieldSkill = document.querySelectorAll('.field-image-skill');
for (let i = 0; i < fieldSkill.length; i++) {
    if (i % 2 === 0) {
        // Index genap
        fieldSkill[i].setAttribute('data-aos', 'flip-right');
    }
    if (i % 2 === 1) {
        // Index ganjil
        fieldSkill[i].setAttribute('data-aos', 'flip-left');
    }
    if (window.innerWidth > 768) {
        if (i == 0) {
            fieldSkill[i].setAttribute('data-aos-duration', '300');
        }
        else {
            fieldSkill[i].setAttribute('data-aos-delay', `${i * 300}`);
        }
    }
}

// ALERT SECTION PROJECT
const linkToProject = document.querySelectorAll('.link-to-project');
linkToProject.forEach(function (project) {
    project.addEventListener('click', function (e) {
        e.preventDefault();

        let atributLinkProject = project.getAttribute('href');

        Swal.fire({
            title: "Are you sure?",
            text: "This action will bring you to project",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, go there"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = atributLinkProject;
            }
        });
    })
})



// // ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll('.field-project');
for (let i = 0; i < fieldProject.length; i++) {
    if (window.innerWidth > 768) {
        fieldProject[i].setAttribute('data-aos-duration', '1000');
        if (i % 2 === 0) {
            fieldProject[i].setAttribute('data-aos', 'fade-up-right');
        }
        else {
            fieldProject[i].setAttribute('data-aos', 'fade-up-left');
        }
    }

    else {
        fieldProject[i].setAttribute('data-aos', 'fade-up');
        fieldProject[i].setAttribute('data-aos-duration', '700')
    }
};



// ANIMATION SECTION CONTACT
const formMessage = document.querySelector('.form-message');
if (window.innerWidth > 768) {
    const fieldMap = document.querySelector('.sosmed-and-maps');
    fieldMap.setAttribute('data-aos', 'fade-right');
    formMessage.setAttribute('data-aos', 'fade-left');
}
else {
    const sosmedAndMaps = document.querySelector('.sosmed-and-maps');
    sosmedAndMaps.setAttribute('data-aos', 'zoom-in-up');
    formMessage.setAttribute('data-aos', 'zoom-in-down');
}


// ALERTSECTION CONTACT
const formContact = document.querySelector('.form-message');
formContact.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');

    if (inputName.value == '' || inputEmail.value == '' || inputMessage.value == '') {
        Swal.fire({
            icon: "error",
            title: "Form Validation",
            text: "Please fill in the form correctly"
        });
    }
    else {
        Swal.fire({
            title: "Thank you! your message has been sent",
            color: 'black'
        });
        inputName.value = '';
        inputEmail.value = '';
        inputMessage.value = '';
    }
})

AOS.init({
    once: false
})

const bgmToggle = document.getElementById('bgmToggle');
const bgmEl = document.getElementById('bgm');
let bgmStarted = false;
function startBgmAutoplay() {
    const audio = bgmEl;
    if (!audio || bgmStarted) return;
    audio.muted = true;
    audio.volume = 0;
    const p = audio.play();
    if (p && typeof p.then === 'function') {
        p.then(function() {
            bgmStarted = true;
            setTimeout(function() {
                audio.muted = false;
                const d = 2000;
                let s = null;
                function f(t) {
                    if (!s) s = t;
                    const e = t - s;
                    const v = Math.min(e / d, 1);
                    audio.volume = v;
                    if (e < d) requestAnimationFrame(f);
                    else updateBgmToggleIcon();
                }
                requestAnimationFrame(f);
            }, 500);
        }).catch(function(err) {
            console.warn('Autoplay blocked', err);
        });
    } else {
        bgmStarted = true;
        setTimeout(function() {
            audio.muted = false;
            audio.volume = 1;
            updateBgmToggleIcon();
        }, 500);
    }
}
const gestureEvents = ['click', 'touchstart', 'keydown'];
let gestureHandler = null;
function attachBgmGestureFallback() {
    if (gestureHandler) return;
    gestureHandler = function() {
        startBgmAutoplay();
        if (bgmStarted) {
            gestureEvents.forEach(function(ev) { document.removeEventListener(ev, gestureHandler); });
            gestureHandler = null;
        }
    };
    gestureEvents.forEach(function(ev) { document.addEventListener(ev, gestureHandler, { passive: true }); });
}
function updateBgmToggleIcon() {
    if (!bgmToggle || !bgmEl) return;
    const icon = bgmToggle.querySelector('i');
    if (!icon) return;
    if (bgmEl.muted || bgmEl.volume === 0) icon.className = 'fa-solid fa-volume-xmark';
    else icon.className = 'fa-solid fa-volume-high';
}
updateBgmToggleIcon();
if (bgmToggle) {
    bgmToggle.addEventListener('click', function () {
        if (!bgmEl) return;
        if (bgmEl.muted || bgmEl.volume === 0) {
            const p = bgmEl.play();
            if (p && typeof p.then === 'function') {
                p.then(function () {
                    bgmEl.muted = false;
                    let v = bgmEl.volume;
                    const target = 1;
                    const step = 0.1;
                    const interval = setInterval(function () {
                        v = Math.min(target, v + step);
                        bgmEl.volume = v;
                        if (v >= target) { clearInterval(interval); updateBgmToggleIcon(); }
                    }, 100);
                }).catch(function (err) { console.warn('Play failed', err); });
            } else {
                bgmEl.muted = false;
                bgmEl.volume = 1;
                updateBgmToggleIcon();
            }
        } else {
            bgmEl.muted = true;
            updateBgmToggleIcon();
        }
    });
}

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        startBgmAutoplay();
    }
});
window.addEventListener('focus', startBgmAutoplay);














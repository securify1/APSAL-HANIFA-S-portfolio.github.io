/*====================================================

script.js
Portfolio 2026

====================================================*/

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    gsap.to("#loader", {
        opacity: 0,
        duration: 1,
        delay: 2,
        pointerEvents: "none",
        onComplete: () => {
            document.getElementById("loader").style.display = "none";
        }
    });
});

// ===============================
// Lucide Icons
// ===============================

lucide.createIcons();

// ===============================
// Typed JS
// ===============================

new Typed("#typing", {
    strings: [
        "Frontend Developer",
        "IoT Engineer",
        "Python Programmer",
        "UI / UX Designer",
        "Freelancer"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1800,
    loop: true
});

// ===============================
// Lenis Smooth Scroll
// ===============================

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===============================
// Cursor
// ===============================

const cursor = document.getElementById("cursor");
const blur = document.getElementById("cursor-blur");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";
});

// ===============================
// Navbar Scroll
// ===============================

const nav = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(5,8,22,.75)";
        nav.style.backdropFilter = "blur(20px)";
    } else {
        nav.style.background = "transparent";
    }
});

// ===============================
// Hero Animation
// ===============================

gsap.from(".status", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero-title", { y: 80, opacity: 0, duration: 1, delay: .2 });
gsap.from(".hero-typing", { y: 60, opacity: 0, duration: 1, delay: .4 });
gsap.from(".hero-description", { y: 60, opacity: 0, duration: 1, delay: .6 });
gsap.from(".hero-buttons", { y: 60, opacity: 0, duration: 1, delay: .8 });
gsap.from(".profile-wrapper", { scale: .7, opacity: 0, duration: 1.2, delay: .6 });

// ===============================
// Scroll Animations
// ===============================

gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },
        y: 80,
        opacity: 0,
        duration: 1
    });
});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
    const update = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update, 10);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(".fade-up,.zoom");
window.addEventListener("scroll", reveal);

function reveal() {
    revealElements.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
}
reveal();

// ===============================
// Vanilla Tilt
// ===============================

VanillaTilt.init(document.querySelectorAll(".glass-card"), {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": .15
});

// ===============================
// Floating Animation
// ===============================

gsap.to(".floating-card", {
    y: -15,
    duration: 2,
    stagger: .3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// ===============================
// Theme Toggle
// ===============================

const themeBtn = document.getElementById("theme-toggle");
themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// ===============================
// Scroll Progress
// ===============================

const progress = document.createElement("div");
progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#14F195";
progress.style.zIndex = "99999";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const current = (window.scrollY / total) * 100;
    progress.style.width = current + "%";
});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        if (pageYOffset >= top) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// Particle Background
// ===============================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - .5,
        dy: Math.random() - .5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#14F195";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    form.reset();
});

// ===============================
// END
// ===============================

// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.setAttribute("data-lucide", "x");
        menuBtn.setAttribute("aria-label", "Close navigation");
    } else {
        icon.setAttribute("data-lucide", "menu");
        menuBtn.setAttribute("aria-label", "Open navigation");
    }

    lucide.createIcons();
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        menuBtn.querySelector("i").setAttribute("data-lucide", "menu");
        menuBtn.setAttribute("aria-label", "Open navigation");

        lucide.createIcons();
    });

});


// ================================
// TYPING ANIMATION
// ================================

const typingElement = document.getElementById("typing");

const words = [
    "Student",
    "Web Developer",
    "Creative Designer",
    "Future Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-item, .contact-container"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formMessage.textContent = "Please fill in all fields.";
        return;

    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        return;

    }

    // Replace this with your actual email address.
    const receiverEmail = "your-email@example.com";

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formMessage.textContent = "Opening your email application...";

    window.location.href =
        `mailto:${receiverEmail}?subject=${mailSubject}&body=${mailBody}`;

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ================================
// INITIALIZE ICONS
// ================================

lucide.createIcons();
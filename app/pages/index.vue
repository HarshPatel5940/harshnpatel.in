<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// Theme state - initialize from localStorage or default to light mode
const isDark = ref(false);

// Set page title and load external resources
useHead({
    title: "Harsh Nikul Patel | Portfolio",
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
        },
    ],
    script: [
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
            defer: true,
        },
    ],
});

// Store original body styles to restore later
let originalBodyClass = "";
let originalBodyStyle = {};

onMounted(() => {
    // Initialize theme from localStorage
    initializeTheme();

    // Store original body state
    originalBodyClass = document.body.className;
    originalBodyStyle = {
        fontFamily: document.body.style.fontFamily,
        backgroundColor: document.body.style.backgroundColor,
        backgroundImage: document.body.style.backgroundImage,
        backgroundSize: document.body.style.backgroundSize,
        color: document.body.style.color,
        margin: document.body.style.margin,
        padding: document.body.style.padding,
        overflow: document.body.style.overflow,
    };

    // Apply initial theme
    applyTheme();

    // Wait for anime.js to load and fonts to be ready
    const checkAndRunAnimation = () => {
        if (typeof window.anime !== "undefined") {
            // Skip animations on mobile
            if (window.innerWidth <= 768) {
                showMobileLayout();
            } else {
                // Small delay to ensure fonts are loaded
                setTimeout(runAnimations, 100);
            }
        } else {
            setTimeout(checkAndRunAnimation, 50);
        }
    };
    checkAndRunAnimation();
});

onUnmounted(() => {
    // Restore original body state when leaving the page
    document.body.className = originalBodyClass;
    Object.keys(originalBodyStyle).forEach((key) => {
        document.body.style[key] = originalBodyStyle[key];
    });
});

function initializeTheme() {
    // Get theme from localStorage, default to light mode (false)
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme !== null) {
        isDark.value = savedTheme === "dark";
    } else {
        isDark.value = false; // Default to light mode
    }
}

function applyTheme() {
    // Apply portfolio page styles to body
    document.body.className = `portfolio-body ${isDark.value ? "dark" : "light"}`;
    document.body.style.fontFamily = '"Geist-Regular", sans-serif';
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    if (isDark.value) {
        // Dark theme
        document.body.style.backgroundColor = "#0a1f0f";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #1a3a28 1px, transparent 0)";
        document.body.style.color = "#ffffff";
    } else {
        // Light theme
        document.body.style.backgroundColor = "#f0fdf4";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #86efac 1px, transparent 0)";
        document.body.style.color = "#1a1a1a";
    }

    document.body.style.backgroundSize = "2rem 2rem";

    // Allow scrolling on mobile, prevent on desktop
    if (window.innerWidth <= 768) {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
    } else {
        document.body.style.overflow = "hidden";
    }
}

function toggleTheme() {
    isDark.value = !isDark.value;
    // Save theme preference to localStorage
    localStorage.setItem("portfolio-theme", isDark.value ? "dark" : "light");
    applyTheme();
}

function showMobileLayout() {
    // Show all elements immediately without animation on mobile
    const description = document.querySelector("#description");
    const socialButtons = document.querySelector("#social-buttons");
    const descriptionTexts = document.querySelectorAll(".description-text");
    const socialBtns = document.querySelectorAll(".social-btn");
    const line = document.querySelector(".ml12 .line");

    // Hide the cursor line on mobile
    if (line) line.style.display = "none";

    if (description) description.style.opacity = "1";
    if (socialButtons) socialButtons.style.opacity = "1";

    descriptionTexts.forEach((text) => {
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
    });

    socialBtns.forEach((btn) => {
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0) scale(1)";
    });
}

function runAnimations() {
    // Select parts of the name
    const part1 = document.querySelector(".part1");
    const part2 = document.querySelector(".part2");
    const part3 = document.querySelector(".part3");
    const line = document.querySelector(".ml12 .line");
    const letters = document.querySelector(".letters");

    if (!part1 || !part2 || !part3 || !line || !letters) {
        console.error("Animation elements not found");
        return;
    }

    // Utility function to wrap letters in spans
    function wrapLetters(element) {
        element.innerHTML = element.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>",
        );
    }

    // Wrap letters for each part of the name
    wrapLetters(part1);
    wrapLetters(part2);
    wrapLetters(part3);

    // --- INITIAL STATE SETUP ---
    // Measure the full width of part2 (" Nikul") to know how much space to make
    const part2Width = part2.getBoundingClientRect().width;

    // Hide part2 completely at the start. It will take up no space.
    window.anime.set(part2, {
        opacity: 0,
        width: 0, // Start with zero width
        display: "inline-block",
        overflow: "visible", // Ensure content isn't clipped during animation
    });

    // Create an animation timeline with Anime.js
    const tl = window.anime.timeline({
        easing: "easeOutExpo",
        duration: 1000,
    });

    // --- ANIMATION SEQUENCE ---
    tl.add({
        // Animate the letters of "Harsh" and " Patel"
        targets: ".part1 .letter, .part3 .letter",
        translateX: [40, 0],
        translateY: [40, 0], // Added translateY to prevent clipping
        translateZ: 0,
        opacity: [0, 1],
        scale: [0.8, 1], // Added scale animation
        easing: "easeOutExpo",
        duration: 1200,
        delay: window.anime.stagger(30, { start: 500 }),
    })
        .add({
            // Animate the vertical line appearing
            targets: line,
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: "-=875",
        })
        .add({
            // Move line to the end of "Harsh Patel"
            targets: line,
            translateX: [0, letters.scrollWidth],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100,
        })
        .add({
            // Move line back after "Harsh"
            targets: line,
            translateX: [letters.scrollWidth, part1.offsetWidth],
            easing: "easeInOutExpo",
            duration: 600,
            delay: 200,
        })
        .add({
            // Animate part2's width to make space for it
            targets: part2,
            width: [0, part2Width], // Animate from 0 to its natural width
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 800,
            offset: "-=600", // Run in parallel with the line moving back
        })
        .add({
            // Reveal the letters of "Nikul" with proper transforms
            targets: ".part2 .letter",
            translateY: [40, 0], // Animate from below to natural position
            scale: [0.8, 1], // Animate scale
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 600,
            delay: window.anime.stagger(80),
            offset: "-=800",
        })
        .add({
            // Move line to the end of the new full name "Harsh Nikul Patel"
            targets: line,
            translateX: () => [part1.offsetWidth, letters.scrollWidth + 20],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100,
        })
        .add({
            // Make the line disappear completely
            targets: line,
            opacity: 0,
            duration: 500,
            easing: "easeOutExpo",
        })
        .add(
            {
                // Fade in the description text
                targets: "#description",
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 1000,
                easing: "easeOutExpo",
            },
            "-=300",
        )
        .add(
            {
                // Animate description paragraphs one by one
                targets: ".description-text",
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                delay: window.anime.stagger(200),
                easing: "easeOutExpo",
            },
            "-=800",
        )
        .add(
            {
                // Fade in the social buttons
                targets: "#social-buttons",
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                easing: "easeOutExpo",
            },
            "-=400",
        )
        .add(
            {
                // Animate social buttons one by one
                targets: ".social-btn",
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.9, 1],
                duration: 400,
                delay: window.anime.stagger(100),
                easing: "easeOutExpo",
            },
            "-=600",
        );
}
</script>

<template>
    <div class="portfolio-page">
        <div class="content-wrapper">
            <!-- Animated name -->
            <h1 class="main-title ml12">
                <span class="text-wrapper">
                    <span class="letters">
                        <span class="part1">Harsh</span
                        ><span class="part2">&nbsp;Nikul</span
                        ><span class="part3">&nbsp;Patel</span>
                    </span>
                    <span class="line" />
                </span>
            </h1>

            <!-- Mobile static name (no animation) -->
            <h1 class="mobile-title">Harsh Nikul Patel</h1>

            <!-- Theme toggle button -->
            <button
                class="theme-toggle"
                :title="
                    isDark ? 'Switch to light theme' : 'Switch to dark theme'
                "
                @click="toggleTheme"
            >
                <svg
                    v-if="isDark"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                    />
                </svg>
                <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="currentColor"
                    />
                </svg>
            </button>

            <!-- Description text -->
            <div id="description" class="description-container">
                <p class="description-text">
                    I am a senior year undergrad dedicated to the pursuit of a
                    Computer Science and Engineering degree, backed by a
                    formidable
                    <strong>four-year</strong> freelance tenure as a Backend and
                    Bot Developer. Currently, I write code and have fun in
                    <strong>Golang & TypeScript</strong>. My relentless
                    enthusiasm for cutting-edge technologies and my commitment
                    to <strong>open source initiatives</strong> propel my
                    journey in this field.
                </p>

                <p class="description-text">
                    As a Freelance Developer, I have had the privilege of
                    collaborating with over <strong>30 clients</strong>, both
                    national and <strong>international</strong>, on projects
                    spanning bot development, automation, and web development.
                </p>

                <p class="description-text">
                    For further inquiries or collaboration opportunities, please
                    do not hesitate to reach out to me at
                    <a
                        href="mailto:hi@harshnpatel.in"
                        target="_blank"
                        class="email-link"
                    >
                        hi@harshnpatel.in</a
                    >
                    or feel free to
                    <a
                        href="https://cal.com/harshnpatel"
                        target="_blank"
                        class="email-link"
                    >
                        book a call here</a
                    >.
                </p>
            </div>

            <!-- Social buttons -->
            <div id="social-buttons" class="social-container">
                <a
                    class="social-btn primary"
                    href="/Harsh-Nikul-Patel_Resume.pdf"
                    download="Harsh_Nikul_Patel.pdf"
                    target="_blank"
                >
                    Download CV!
                </a>
                <a
                    href="https://linkedin.com/in/HarshPatel5940"
                    target="_blank"
                    class="social-btn outline"
                >
                    My Linkedin
                </a>
                <a
                    href="https://github.com/HarshPatel5940"
                    target="_blank"
                    class="social-btn outline"
                >
                    My Github
                </a>
                <a
                    href="https://fiverr.com/harshpatel5940"
                    target="_blank"
                    class="social-btn outline"
                >
                    My Fiverr
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.portfolio-body {
    font-family: "Geist-Regular", sans-serif !important;
    background-size: 2rem 2rem !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    min-height: 100vh !important;
    transition: all 0.3s ease !important;
}

.portfolio-body.dark {
    background-color: #0a1f0f !important;
    background-image: radial-gradient(
        circle at 1px 1px,
        #1a3a28 1px,
        transparent 0
    ) !important;
    color: #ffffff !important;
}

.portfolio-body.light {
    background-color: #f0fdf4 !important;
    background-image: radial-gradient(
        circle at 1px 1px,
        #86efac 1px,
        transparent 0
    ) !important;
    color: #1a1a1a !important;
}

.portfolio-page {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;
    font-family: "Geist-Regular", sans-serif;
    padding: 8vh 1rem 1rem;
    position: relative;
    overflow-x: hidden;
}

@media (max-width: 768px) {
    .portfolio-page {
        align-items: flex-start;
        padding: 2rem 0;
        min-height: auto;
        max-width: 100vw;
        overflow-x: hidden;
    }
}

.content-wrapper {
    text-align: center;
    padding: 2rem;
    max-width: 90%;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .content-wrapper {
        padding: 1rem;
        max-width: 100%;
        width: 100vw;
        box-sizing: border-box;
    }
}

.main-title {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    margin-bottom: 1rem;
    line-height: 1;
    word-break: keep-all;
    overflow-wrap: normal;
}

@media (min-width: 768px) {
    .main-title {
        font-size: 6rem;
    }
}

@media (max-width: 768px) {
    .main-title {
        display: none;
    }

    .mobile-title {
        display: block;
        font-size: 3rem;
        font-weight: 900;
        letter-spacing: -0.02em;
        margin-bottom: 1.5rem;
        line-height: 1;
        text-align: center;
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
    }
}

@media (max-width: 480px) {
    .mobile-title {
        font-size: 2.2rem;
        letter-spacing: 0;
        padding: 0 0.5rem;
        margin-bottom: 1rem;
    }
}

.mobile-title {
    display: none;
}

@media (max-width: 768px) {
    .mobile-title {
        display: block;
    }
}

@media (min-width: 769px) {
    .mobile-title {
        display: none;
    }
}

/* Style for the text that will be animated */
.letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(40px) scale(0.8);
}

.text-wrapper {
    position: relative;
    display: inline-block;
    text-align: center;
}

/* Using Flexbox for robust alignment and responsiveness */
.letters {
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    max-width: 100%;
    overflow: visible;
}

/* Each part needs proper overflow handling */
.part1,
.part2,
.part3 {
    overflow: visible;
    flex-shrink: 1;
}

.ml12 .line {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 3px;
    background-color: #fff;
    transform-origin: 0 50%;
}

.light .ml12 .line {
    background-color: #16a34a;
}

.description-container {
    margin-top: 1rem;
    opacity: 0;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
}

.description-text {
    opacity: 0;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #e5e7eb;
    margin-bottom: 1rem;
    text-align: justify;
}

@media (max-width: 768px) {
    .description-text {
        font-size: 1.2rem;
        text-align: justify;
        margin-bottom: 0.8rem;
        line-height: 1.5;
    }

    .description-container {
        max-width: 95%;
        margin-top: 1rem;
    }
}

@media (max-width: 480px) {
    .description-text {
        text-align: justify;
        font-size: 1rem;
        margin-bottom: 0.6rem;
    }

    .description-container {
        margin-top: 1rem;
    }
}

.description-text strong {
    color: #ffffff;
    font-weight: 600;
}

.email-link {
    color: #8ff99f;
    text-decoration: none;
    transition: all 200ms ease;
}

.email-link:hover {
    color: #6ee07f;
    text-decoration: underline;
}

.social-container {
    margin-top: 2rem;
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    .social-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        max-width: 85vw;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }
}

@media (max-width: 480px) {
    .social-container {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        gap: 1rem;
        max-width: 90vw;
        padding: 0 0.5rem;
    }
}

.social-btn {
    opacity: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);
    border: 2px solid transparent;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .social-btn {
        width: 100%;
        min-height: 4rem;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-sizing: border-box;
    }
}

@media (max-width: 480px) {
    .social-btn {
        min-height: 3.5rem;
        padding: 0.8rem;
        font-size: 0.9rem;
    }
}

.social-btn.primary {
    background-color: #22c55e;
    color: #ffffff;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.social-btn.primary:hover {
    background-color: #16a34a;
    transform: translateY(-2px) scale(1.02);
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.social-btn.outline {
    background-color: transparent;
    color: #e5e7eb;
    border-color: #1a3a28;
}

.social-btn.outline:hover {
    background-color: #1a3a28;
    border-color: #22543d;
    color: #ffffff;
    transform: translateY(-2px) scale(1.02);
}

.social-btn:focus {
    outline: 2px solid #8ff99f;
    outline-offset: 2px;
}

.theme-toggle {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: currentColor;
}

.theme-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
}

.light .theme-toggle {
    background: rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);
}

.light .theme-toggle:hover {
    background: rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
    .theme-toggle {
        top: 1rem;
        right: 1rem;
        width: 44px;
        height: 44px;
    }
}

/* Light theme overrides */
.light .description-text {
    color: #374151;
}

.light .description-text strong {
    color: #1a1a1a;
}

.light .email-link {
    color: #16a34a;
}

.light .email-link:hover {
    color: #15803d;
}

.light .social-btn.outline {
    color: #374151;
    border-color: #d1d5db;
}

.light .social-btn.outline:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
    color: #1a1a1a;
}

/* Light theme cursor */
.light * {
    cursor: default;
}

.light button,
.light a,
.light .social-btn,
.light .theme-toggle {
    cursor: pointer;
}
</style>

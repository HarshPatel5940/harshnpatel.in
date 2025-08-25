<template>
    <div
        :class="[
            'main-layout',
            isDark ? 'portfolio-body dark' : 'portfolio-body light',
        ]"
    >
        <NavBar
            :is-dark="isDark"
            :sticky="navbarSticky"
            :show-back-button="showBackButton"
            :back-to="backTo"
            :back-text="backText"
            :title="title"
            @toggle-theme="toggleTheme"
        />

        <main class="main-content" :class="{ 'with-navbar': navbarSticky }">
            <slot :isDark="isDark" />
        </main>

        <footer
            v-if="showFooter"
            class="main-footer"
            :class="isDark ? 'footer-dark' : 'footer-light'"
        >
            <div class="footer-container">
                <p class="footer-text">
                    © {{ new Date().getFullYear() }} Harsh Patel. All rights
                    reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    showFooter: {
        type: Boolean,
        default: true,
    },
    navbarSticky: {
        type: Boolean,
        default: true,
    },
    showBackButton: {
        type: Boolean,
        default: false,
    },
    backTo: {
        type: String,
        default: "/",
    },
    backText: {
        type: String,
        default: "Back to Home",
    },
    enableScroll: {
        type: Boolean,
        default: true,
    },
});

const isDark = ref(false);
let originalBodyStyles = {};

onMounted(() => {
    // Store original body styles
    originalBodyStyles = {
        overflow: document.body.style.overflow,
        overflowX: document.body.style.overflowX,
        backgroundColor: document.body.style.backgroundColor,
        backgroundImage: document.body.style.backgroundImage,
        backgroundSize: document.body.style.backgroundSize,
        color: document.body.style.color,
        fontFamily: document.body.style.fontFamily,
        margin: document.body.style.margin,
        padding: document.body.style.padding,
        className: document.body.className,
    };

    initializeTheme();
});

onUnmounted(() => {
    // Restore original body styles
    if (originalBodyStyles) {
        Object.keys(originalBodyStyles).forEach((key) => {
            if (key === "className") {
                document.body.className = originalBodyStyles[key];
            } else {
                document.body.style[key] = originalBodyStyles[key];
            }
        });
    }
});

function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    isDark.value =
        savedTheme === "dark" ||
        (!savedTheme &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
    applyTheme();
}

function applyTheme() {
    document.body.className = `portfolio-body ${isDark.value ? "dark" : "light"}`;
    document.body.style.fontFamily = '"Geist-Regular", sans-serif';
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    if (isDark.value) {
        document.body.style.backgroundColor = "#0a1f0f";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #05fc70 1px, transparent 0)";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#f0fdf4";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #86efac 1px, transparent 0)";
        document.body.style.color = "#1a1a1a";
    }

    document.body.style.backgroundSize = "2rem 2rem";

    if (props.enableScroll) {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
    } else {
        document.body.style.overflow = "hidden";
    }

    localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function toggleTheme() {
    isDark.value = !isDark.value;
    applyTheme();
}
</script>

<style>
.portfolio-body {
    font-family:
        "Geist",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
}

.portfolio-body.dark {
    background-color: #0a1f0f;
    background-image: radial-gradient(
        circle at 1px 1px,
        #05fc70 1px,
        transparent 0
    );
    background-size: 2rem 2rem;
    color: #ffffff;
}

.portfolio-body.light {
    background-color: #f0fdf4;
    background-image: radial-gradient(
        circle at 1px 1px,
        #86efac 1px,
        transparent 0
    );
    background-size: 2rem 2rem;
    color: #1a1a1a;
}

/* Global scroll enforcement */
html {
    overflow-y: auto !important;
    overflow-x: hidden !important;
}

body.portfolio-body {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: auto !important;
    min-height: 100vh !important;
}

.main-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
}

.main-content {
    flex: 1;
    width: 100%;
}

.main-content.with-navbar {
    /* Add any specific styles for pages with navbar */
}

.main-footer {
    border-top: 1px solid;
    margin-top: auto;
    transition: all 0.3s ease;
}

.footer-dark {
    border-top-color: rgba(255, 255, 255, 0.1);
}

.footer-light {
    border-top-color: rgba(0, 0, 0, 0.1);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
}

.footer-text {
    margin: 0;
    opacity: 0.7;
    font-size: 0.875rem;
    transition: color 0.3s ease;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #22c55e;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #16a34a;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .footer-container {
        padding: 1.5rem 1rem;
    }

    .footer-text {
        font-size: 0.8rem;
    }
}

/* Ensure proper overflow for all elements */
html,
body {
    overflow-x: hidden !important;
}
</style>

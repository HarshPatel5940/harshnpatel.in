<template>
    <header
        class="navbar"
        :class="[
            isDark ? 'navbar-dark' : 'navbar-light',
            sticky ? 'navbar-sticky' : '',
        ]"
    >
        <div class="navbar-container">
            <div class="navbar-content">
                <!-- Logo/Home Link -->
                <NuxtLink
                    v-if="showBackButton"
                    :to="backTo"
                    class="navbar-link navbar-back"
                    :class="isDark ? 'dark' : 'light'"
                >
                    <svg
                        class="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    {{ backText }}
                </NuxtLink>

                <div v-else class="navbar-logo">
                    <NuxtLink to="/" class="navbar-logo-link">
                        <span class="navbar-logo-text">{{
                            title || "HP"
                        }}</span>
                    </NuxtLink>
                </div>

                <!-- Navigation Links -->
                <nav class="navbar-nav">
                    <NuxtLink
                        to="/about"
                        class="navbar-icon-link"
                        :class="isDark ? 'dark' : 'light'"
                        title="About Me"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span class="navbar-tooltip">About</span>
                    </NuxtLink>

                    <NuxtLink
                        to="/blog"
                        class="navbar-icon-link"
                        :class="isDark ? 'dark' : 'light'"
                        title="Blog Posts"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M12 19l7-7 3 3-7 7-3-3z" />
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                            <path d="M2 2l7.586 7.586" />
                            <circle cx="11" cy="11" r="2" />
                        </svg>
                        <span class="navbar-tooltip">Blog</span>
                    </NuxtLink>

                    <a
                        href="https://github.com/harshpatel5940"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="navbar-icon-link"
                        :class="isDark ? 'dark' : 'light'"
                        title="GitHub Profile"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                        <span class="navbar-tooltip">GitHub</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/harshpatel5940"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="navbar-icon-link"
                        :class="isDark ? 'dark' : 'light'"
                        title="LinkedIn Profile"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            />
                        </svg>
                        <span class="navbar-tooltip">LinkedIn</span>
                    </a>

                    <!-- Theme Toggle -->
                    <!-- <button
                        class="navbar-icon-link navbar-theme-toggle"
                        :class="isDark ? 'dark' : 'light'"
                        title="Toggle Theme"
                        @click="$emit('toggle-theme')"
                    >
                        <svg
                            v-if="isDark"
                            width="20"
                            height="20"
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
                            width="20"
                            height="20"
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
                        <span class="navbar-tooltip">
                            {{ isDark ? "Light Mode" : "Dark Mode" }}
                        </span>
                    </button> -->
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
defineProps({
    isDark: {
        type: Boolean,
        default: false,
    },
    sticky: {
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
    title: {
        type: String,
        default: "",
    },
});

defineEmits(["toggle-theme"]);
</script>

<style scoped>
.navbar {
    backdrop-filter: blur(20px);
    border-bottom: 1px solid transparent;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 50;
}

.navbar-sticky {
    position: sticky;
    top: 0;
}

.navbar-dark {
    background: rgba(10, 31, 15, 0.85);
    border-bottom-color: rgba(255, 255, 255, 0.1);
}

.navbar-light {
    background: rgba(240, 253, 244, 0.85);
    border-bottom-color: rgba(0, 0, 0, 0.1);
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
}

.navbar-logo {
    display: flex;
    align-items: center;
}

.navbar-logo-link {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    font-size: 1.25rem;
    transition: all 0.3s ease;
}

.navbar-logo-text {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
}

.navbar-back {
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid transparent;
}

.navbar-back.dark {
    color: #4ade80;
    border-color: rgba(74, 222, 128, 0.2);
}

.navbar-back.light {
    color: #16a34a;
    border-color: rgba(22, 163, 74, 0.2);
}

.navbar-back:hover {
    transform: translateX(-2px);
}

.navbar-back.dark:hover {
    background: rgba(74, 222, 128, 0.1);
    border-color: rgba(74, 222, 128, 0.4);
}

.navbar-back.light:hover {
    background: rgba(22, 163, 74, 0.1);
    border-color: rgba(22, 163, 74, 0.4);
}

.navbar-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.navbar-icon-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.75rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    backdrop-filter: blur(10px);
    cursor: pointer;
    background: none;
}

.navbar-icon-link.dark {
    color: #d1d5db;
    border-color: rgba(255, 255, 255, 0.1);
}

.navbar-icon-link.light {
    color: #374151;
    border-color: rgba(0, 0, 0, 0.1);
}

.navbar-icon-link:hover {
    transform: translateY(-2px) scale(1.05);
}

.navbar-icon-link.dark:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.navbar-icon-link.light:hover {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.2);
    color: #1f2937;
}

.navbar-theme-toggle.dark:hover {
    background: rgba(34, 197, 94, 0.1);
    border-color: rgba(34, 197, 94, 0.3);
    color: #22c55e;
}

.navbar-theme-toggle.light:hover {
    background: rgba(34, 197, 94, 0.1);
    border-color: rgba(34, 197, 94, 0.3);
    color: #16a34a;
}

.navbar-tooltip {
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 60;
}

.navbar-tooltip::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid;
}

.navbar-icon-link.dark .navbar-tooltip {
    background: rgba(17, 24, 39, 0.9);
    color: #ffffff;
    border: 1px solid rgba(75, 85, 99, 0.5);
}

.navbar-icon-link.light .navbar-tooltip {
    background: rgba(255, 255, 255, 0.95);
    color: #1f2937;
    border: 1px solid rgba(209, 213, 219, 0.5);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.navbar-icon-link.dark .navbar-tooltip::before {
    border-bottom-color: rgba(17, 24, 39, 0.9);
}

.navbar-icon-link.light .navbar-tooltip::before {
    border-bottom-color: rgba(255, 255, 255, 0.95);
}

.navbar-icon-link:hover .navbar-tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -3rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .navbar-container {
        padding: 0 0.75rem;
    }

    .navbar-content {
        height: 3.5rem;
    }

    .navbar-nav {
        gap: 0.25rem;
    }

    .navbar-icon-link {
        width: 2.5rem;
        height: 2.5rem;
    }

    .navbar-back {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
    }

    .navbar-tooltip {
        display: none;
    }
}

@media (max-width: 480px) {
    .navbar-container {
        padding: 0 0.5rem;
    }

    .navbar-icon-link {
        width: 2.25rem;
        height: 2.25rem;
    }

    .navbar-nav {
        gap: 0.125rem;
    }
}
</style>

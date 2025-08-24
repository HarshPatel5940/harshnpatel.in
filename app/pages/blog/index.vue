<template>
    <div
        :class="[
            'min-h-screen transition-colors duration-300',
            isDark ? 'portfolio-body dark' : 'portfolio-body light',
        ]"
    >
        <!-- Header -->
        <header
            class="sticky top-0 z-10 backdrop-blur-sm transition-colors duration-300"
            :class="[isDark ? 'bg-gray-900/80' : 'bg-white/80']"
        >
            <div class="max-w-4xl mx-auto px-4 py-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h1
                            class="text-3xl font-bold transition-colors duration-300"
                        >
                            Blog
                        </h1>
                        <p
                            class="mt-1 transition-colors duration-300"
                            :class="isDark ? 'text-gray-400' : 'text-gray-600'"
                        >
                            Thoughts on development, technology, and more
                        </p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button
                            class="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 bg-transparent backdrop-blur-md border-0"
                            :class="[
                                isDark
                                    ? 'text-green-400 hover:text-green-300 hover:bg-green-400/10'
                                    : 'text-green-600 hover:text-green-700 hover:bg-green-600/10',
                            ]"
                            aria-label="Toggle theme"
                            @click="toggleTheme"
                        >
                            <svg
                                v-if="isDark"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="theme-icon-sun"
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
                                class="theme-icon-moon"
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
                        <NuxtLink
                            to="/"
                            class="font-medium transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-lg bg-transparent border border-green-500/20 backdrop-blur-sm"
                            :class="[
                                isDark
                                    ? 'text-green-400 hover:text-green-300 hover:bg-green-400/10 hover:border-green-400/40'
                                    : 'text-green-600 hover:text-green-700 hover:bg-green-600/10 hover:border-green-600/40',
                            ]"
                            aria-label="Go to Home"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                />
                                <polyline points="9,22 9,12 15,12 15,22" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </header>

        <!-- Search Bar -->
        <div class="max-w-4xl mx-auto px-4 pt-3">
            <div class="search-container mx-auto">
                <div class="search-wrapper">
                    <div class="search-icon-wrapper">
                        <svg
                            class="search-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search articles, tags, categories..."
                        class="search-input"
                        :class="isDark ? 'dark' : 'light'"
                    />
                    <div
                        v-if="searchQuery"
                        class="clear-search"
                        :class="isDark ? 'dark' : 'light'"
                        @click="searchQuery = ''"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
                <div class="search-glow" :class="isDark ? 'dark' : 'light'" />
            </div>
        </div>

        <!-- Blog Posts -->
        <main class="max-w-4xl mx-auto px-4 py-8">
            <div v-if="pending" class="text-center py-12">
                <div
                    class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"
                />
                <p class="mt-4 text-gray-600 dark:text-gray-400">
                    Loading posts...
                </p>
            </div>

            <div v-else-if="error" class="text-center py-12">
                <p class="text-red-600 dark:text-red-400">
                    Failed to load blog posts
                </p>
            </div>

            <div
                v-else-if="filteredPosts?.length === 0"
                class="text-center py-12"
            >
                <p
                    class="transition-colors duration-300"
                    :class="isDark ? 'text-gray-400' : 'text-gray-600'"
                >
                    {{
                        searchQuery
                            ? `No posts found for "${searchQuery}"`
                            : "No blog posts found"
                    }}
                </p>
            </div>

            <div v-else class="space-y-8">
                <article
                    v-for="post in filteredPosts"
                    :key="post._path || post._id"
                    class="blog-article rounded-lg p-6 cursor-pointer"
                    @click="navigateToPost(post)"
                >
                    <!-- Featured badge -->
                    <div v-if="post.featured" class="mb-4">
                        <span
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-300"
                            :class="[
                                isDark
                                    ? 'bg-green-900 text-green-200'
                                    : 'bg-green-100 text-green-800',
                            ]"
                        >
                            Featured
                        </span>
                    </div>

                    <!-- Post header -->
                    <div class="mb-4">
                        <h2 class="text-2xl font-bold mb-2">
                            <span
                                class="transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'hover:text-green-400'
                                        : 'hover:text-green-600',
                                ]"
                            >
                                {{ post.title }}
                            </span>
                        </h2>

                        <p
                            class="mb-3 transition-colors duration-300"
                            :class="isDark ? 'text-gray-400' : 'text-gray-600'"
                        >
                            {{ post.description }}
                        </p>

                        <!-- Meta information -->
                        <div
                            class="flex flex-wrap items-center gap-4 text-sm transition-colors duration-300"
                            :class="isDark ? 'text-gray-400' : 'text-gray-500'"
                        >
                            <time :datetime="post.date">
                                {{ formatDate(post.date) }}
                            </time>
                            <span>{{ post.reading_time }}</span>
                            <span class="capitalize">{{ post.category }}</span>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div v-if="post.tags?.length" class="mb-4">
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tag in post.tags.slice(0, 4)"
                                :key="tag"
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-700 text-gray-200'
                                        : 'bg-gray-100 text-gray-800',
                                ]"
                            >
                                {{ tag }}
                            </span>
                            <span
                                v-if="post.tags.length > 4"
                                class="text-xs self-center transition-colors duration-300"
                                :class="
                                    isDark ? 'text-gray-400' : 'text-gray-500'
                                "
                            >
                                +{{ post.tags.length - 4 }} more
                            </span>
                        </div>
                    </div>

                    <!-- Read more link -->
                    <div
                        class="pt-4 border-t transition-colors duration-300"
                        :class="isDark ? 'border-gray-700' : 'border-gray-200'"
                    >
                        <span
                            class="inline-flex items-center font-medium transition-colors duration-300"
                            :class="[
                                isDark
                                    ? 'text-green-400 hover:text-green-300'
                                    : 'text-green-600 hover:text-green-700',
                            ]"
                        >
                            Read more
                            <svg
                                class="ml-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </article>
            </div>
        </main>

        <!-- Footer -->
        <footer
            class="border-t mt-16 transition-colors duration-300"
            :class="isDark ? 'border-gray-700' : 'border-gray-200'"
        >
            <div class="max-w-4xl mx-auto px-4 py-8 text-center">
                <p
                    class="transition-colors duration-300"
                    :class="isDark ? 'text-gray-400' : 'text-gray-600'"
                >
                    © {{ new Date().getFullYear() }} Harsh Patel. All rights
                    reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
const isDark = ref(false);

const searchQuery = ref("");

onMounted(() => {
    initializeTheme();
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
    document.body.className = isDark.value
        ? "portfolio-body dark"
        : "portfolio-body light";
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function toggleTheme() {
    isDark.value = !isDark.value;
    applyTheme();
}

const {
    data: posts,
    pending,
    error,
} = await useAsyncData("blog-posts", () => {
    return queryCollection("blog").all();
});

const filteredPosts = computed(() => {
    if (!posts.value || !searchQuery.value) {
        return posts.value;
    }

    const query = searchQuery.value.toLowerCase();
    return posts.value.filter(
        (post) =>
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            post.category.toLowerCase().includes(query),
    );
});

function navigateToPost(post) {
    if (!post) {
        console.error("No post provided");
        return;
    }

    console.log("Post object:", post);
    console.log("Post _id:", post._id);

    let slug = "";

    if (post._id) {
        const parts = post._id.split(":");
        const filename = parts[parts.length - 1];
        slug = filename.replace(".md", "");
    } else {
        slug = post.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    const blogPath = `/blog/${slug}`;
    console.log("Generated slug:", slug);
    console.log("Navigating to:", blogPath);
    navigateTo(blogPath);
}

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

useHead({
    title: "Blog - Harsh Patel",
    meta: [
        {
            name: "description",
            content:
                "Read my thoughts on development, technology, and programming. Articles about NestJS, Go, TypeScript, and modern web development.",
        },
        {
            property: "og:title",
            content: "Blog - Harsh Patel",
        },
        {
            property: "og:description",
            content:
                "Read my thoughts on development, technology, and programming.",
        },
        {
            property: "og:type",
            content: "website",
        },
    ],
});
</script>

<style scoped>
/* Portfolio body styles */
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
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    background-image: radial-gradient(
        circle at 1px 1px,
        rgba(255, 255, 255, 0.15) 1px,
        transparent 0
    );
    background-size: 20px 20px;
    color: #ffffff;
}

.portfolio-body.light {
    background: linear-gradient(135deg, #8ff99f 0%, #b8ffd1 100%);
    background-image: radial-gradient(
        circle at 1px 1px,
        rgba(0, 0, 0, 0.1) 1px,
        transparent 0
    );
    background-size: 20px 20px;
    color: #1a1a1a;
}

/* Article cards with theme support */
.blog-article {
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.dark .blog-article {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.light .blog-article {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.blog-article:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.dark .blog-article:hover {
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.1);
}

/* Search container */
.search-container {
    position: relative;
    width: 100%;
    max-width: 600px;
}

.search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 16px;
    backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.search-wrapper:hover {
    transform: translateY(-2px);
}

.search-wrapper:focus-within {
    transform: translateY(-4px) scale(1.02);
}

.search-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: -1;
}

.search-glow.dark {
    background: linear-gradient(45deg, #22c55e, #10b981, #059669, #22c55e);
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
}

.search-glow.light {
    background: linear-gradient(45deg, #22c55e, #16a34a, #15803d, #22c55e);
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
}

.search-wrapper:focus-within .search-glow {
    opacity: 0.6;
}

@keyframes gradientShift {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

.search-icon-wrapper {
    position: absolute;
    left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.3s ease;
}

.search-wrapper:focus-within .search-icon-wrapper {
    transform: scale(1.1);
}

.search-icon {
    transition: all 0.3s ease;
    color: #22c55e;
}

.search-input {
    width: 100%;
    padding: 1rem 3rem 1rem 3rem;
    border: 2px solid transparent;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 500;
    background: transparent;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-family:
        "Geist",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        sans-serif;
    position: relative;
    z-index: 1;
}

.search-input.dark {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.15);
}

.search-input.light {
    background: rgba(255, 255, 255, 0.9);
    color: #1a1a1a;
    border-color: rgba(0, 0, 0, 0.08);
}

.search-input::placeholder {
    color: rgba(128, 128, 128, 0.8);
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #22c55e;
}

.search-input:focus::placeholder {
    color: rgba(128, 128, 128, 0.5);
    transform: translateX(4px);
}

.clear-search {
    position: absolute;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
}

.clear-search.dark {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

.clear-search.light {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.6);
}

.clear-search:hover {
    transform: scale(1.1);
}

.clear-search.dark:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.clear-search.light:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #1a1a1a;
}

@media (max-width: 768px) {
    .search-container {
        max-width: 100%;
    }

    .search-input {
        padding: 0.8rem 2.5rem 0.8rem 2.5rem;
        font-size: 14px;
    }

    .search-wrapper:focus-within {
        transform: translateY(-2px) scale(1.01);
    }

    .search-icon-wrapper {
        left: 0.75rem;
    }

    .clear-search {
        right: 0.75rem;
        width: 24px;
        height: 24px;
    }
}

/* Fix scroll issues */
html,
body {
    overflow-x: hidden;
}

/* Theme toggle icons */
.theme-icon-sun {
    filter: brightness(1.3);
}

.theme-icon-moon {
    filter: brightness(0.7);
}

/* Code styling for any inline code in descriptions */
.prose code {
    @apply px-1.5 py-0.5 rounded text-sm font-mono;
    font-weight: 500;
}

.light .prose code {
    background: rgba(0, 0, 0, 0.05);
    color: inherit !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .prose code {
    background: rgba(255, 255, 255, 0.1);
    color: inherit !important;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 6px;
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
</style>

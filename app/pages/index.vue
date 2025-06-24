<template>
    <div
        class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
        <!-- Vertical Navigation Slider - Desktop -->
        <nav
            class="nav-slider fixed top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        >
            <div
                class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700"
            >
                <div class="flex flex-col gap-4">
                    <button
                        v-for="(section, index) in sections"
                        :key="section.id"
                        :class="[
                            'nav-button group flex items-center justify-center w-10 h-10 rounded-full relative transition-all duration-300 focus:outline-none',
                            activeSection === index
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xl'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600',
                        ]"
                        :title="section.name"
                        @click="scrollToSection(section.id)"
                    >
                        <Icon :name="section.icon" class="w-5 h-5" />
                        <!-- Tooltip -->
                        <span
                            class="nav-tooltip absolute left-14 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none"
                        >
                            {{ section.name }}
                        </span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Navigation Slider - Bottom -->
        <nav
            class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden"
        >
            <div
                class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700"
            >
                <div class="flex gap-3">
                    <button
                        v-for="(section, index) in sections"
                        :key="section.id"
                        @click="scrollToSection(section.id)"
                        :class="[
                            'nav-button flex items-center justify-center w-10 h-10 rounded-full relative transition-all duration-300 focus:outline-none',
                            activeSection === index
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xl'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
                        ]"
                        :title="section.name"
                    >
                        <Icon :name="section.icon" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </nav>

        <!-- Header with theme toggle -->
        <header
            class="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
        >
            <div
                class="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center"
            >
                <h1 class="text-lg font-bold">
                    {{ personalData.personal.name }}
                </h1>
                <button
                    @click="toggleTheme"
                    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <Icon
                        :name="
                            theme === 'light'
                                ? 'i-carbon-sun'
                                : theme === 'dark'
                                  ? 'i-carbon-moon'
                                  : 'i-carbon-settings'
                        "
                        class="w-5 h-5"
                    />
                </button>
            </div>
        </header>

        <!-- Main content -->
        <main class="pt-16">
            <!-- Hero Section -->
            <section
                id="hero"
                class="relative min-h-screen flex items-center justify-center px-4 py-8"
            >
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {{ personalData.personal.tagline }}
                    </h1>
                    <p
                        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
                    >
                        {{ personalData.personal.title }}
                    </p>
                    <p
                        class="text-base md:text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        {{ personalData.personal.description }}
                    </p>

                    <!-- Social Links -->
                    <div class="flex justify-center gap-3 mb-8">
                        <a
                            v-for="(url, platform) in personalData.links"
                            :key="platform"
                            :href="url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-900 dark:text-white"
                        >
                            <img
                                v-if="platform === 'fiverr'"
                                src="/fiverr.svg"
                                alt="Fiverr"
                                class="w-5 h-5"
                            />
                            <Icon
                                v-else
                                :name="getSocialIcon(platform)"
                                class="w-5 h-5"
                            />
                        </a>
                    </div>
                </div>

                <!-- Bouncing Down Arrow -->
                <div
                    class="absolute bottom-24 left-1/2 transform -translate-x-1/2"
                >
                    <div
                        @click="scrollToSection('experience')"
                        class="bounce-arrow opacity-50 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
                    >
                        <Icon
                            name="i-carbon-chevron-down"
                            class="w-8 h-8 text-gray-600 dark:text-gray-400"
                        />
                    </div>
                </div>
            </section>

            <!-- Work Experience Section -->
            <section id="experience" class="py-16 px-4">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Work Experience
                    </h2>
                    <div class="space-y-6">
                        <div
                            v-for="exp in experienceData.experience"
                            :key="exp.title + exp.company"
                            class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                class="flex flex-col md:flex-row md:justify-between md:items-start mb-3"
                            >
                                <div>
                                    <h3 class="text-lg font-semibold">
                                        {{ exp.title }}
                                    </h3>
                                    <p
                                        class="text-blue-600 dark:text-blue-400 font-medium"
                                    >
                                        {{ exp.company }}
                                    </p>
                                    <p
                                        class="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        {{ exp.location }} • {{ exp.type }}
                                    </p>
                                </div>
                                <div class="text-right mt-2 md:mt-0">
                                    <p
                                        class="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        {{ formatDate(exp.start_date) }} -
                                        {{
                                            exp.current
                                                ? "Present"
                                                : formatDate(exp.end_date)
                                        }}
                                    </p>
                                </div>
                            </div>

                            <p
                                class="text-gray-700 dark:text-gray-300 mb-3 text-sm"
                            >
                                {{ exp.description }}
                            </p>

                            <div class="mb-3">
                                <div class="flex flex-wrap gap-1">
                                    <span
                                        v-for="tech in exp.technologies.slice(
                                            0,
                                            6,
                                        )"
                                        :key="tech"
                                        class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                                    >
                                        {{ tech }}
                                    </span>
                                    <span
                                        v-if="exp.technologies.length > 6"
                                        class="px-2 py-1 text-gray-500 text-xs"
                                    >
                                        +{{ exp.technologies.length - 6 }} more
                                    </span>
                                </div>
                            </div>

                            <div>
                                <ul
                                    class="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <li
                                        v-for="achievement in exp.achievements.slice(
                                            0,
                                            2,
                                        )"
                                        :key="achievement"
                                    >
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section
                id="projects"
                class="py-16 px-4 bg-gray-50 dark:bg-gray-800/50"
            >
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Projects
                    </h2>
                    <div class="grid md:grid-cols-2 gap-5">
                        <div
                            v-for="project in featuredProjects"
                            :key="project.title"
                            class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-all duration-300"
                        >
                            <div class="flex justify-between items-start mb-3">
                                <div>
                                    <h3 class="text-lg font-semibold">
                                        {{ project.title }}
                                    </h3>
                                    <p
                                        class="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        {{ project.type }}
                                    </p>
                                </div>
                                <span
                                    :class="getStatusColor(project.status)"
                                    class="px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    {{ project.status }}
                                </span>
                            </div>

                            <p
                                class="text-gray-700 dark:text-gray-300 mb-3 text-sm"
                            >
                                {{ project.description }}
                            </p>

                            <div class="mb-4">
                                <div class="flex flex-wrap gap-1">
                                    <span
                                        v-for="tech in project.technologies.slice(
                                            0,
                                            4,
                                        )"
                                        :key="tech"
                                        class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                                    >
                                        {{ tech }}
                                    </span>
                                    <span
                                        v-if="project.technologies.length > 4"
                                        class="px-2 py-1 text-gray-500 text-xs"
                                    >
                                        +{{ project.technologies.length - 4 }}
                                    </span>
                                </div>
                            </div>

                            <div class="flex gap-2">
                                <a
                                    v-if="project.github"
                                    :href="project.github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-1 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-xs"
                                >
                                    <Icon
                                        name="i-carbon-logo-github"
                                        class="w-3 h-3"
                                    />
                                    Code
                                </a>
                                <a
                                    v-if="project.demo"
                                    :href="project.demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-xs"
                                >
                                    <Icon
                                        name="i-carbon-launch"
                                        class="w-3 h-3"
                                    />
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-6">
                        <button
                            @click="showAllProjects = !showAllProjects"
                            class="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm"
                        >
                            {{
                                showAllProjects
                                    ? "Show Less"
                                    : "View All Projects"
                            }}
                        </button>
                    </div>

                    <!-- All Projects -->
                    <div
                        v-if="showAllProjects"
                        class="grid md:grid-cols-2 gap-4 mt-6"
                    >
                        <div
                            v-for="project in otherProjects"
                            :key="project.title"
                            class="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                        >
                            <h3 class="font-semibold mb-2">
                                {{ project.title }}
                            </h3>
                            <p
                                class="text-gray-600 dark:text-gray-400 mb-2 text-sm"
                            >
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-1 mb-2">
                                <span
                                    v-for="tech in project.technologies.slice(
                                        0,
                                        3,
                                    )"
                                    :key="tech"
                                    class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                            <a
                                v-if="project.github"
                                :href="project.github"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Blogs Section -->
            <section id="blogs" class="py-16 px-4">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Latest Blogs
                    </h2>
                    <div class="space-y-5">
                        <article
                            v-for="blog in featuredBlogs"
                            :key="blog.slug"
                            class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                class="flex flex-col md:flex-row md:justify-between md:items-start mb-3"
                            >
                                <div class="flex-1">
                                    <h3 class="text-lg font-semibold mb-2">
                                        {{ blog.title }}
                                    </h3>
                                    <p
                                        class="text-gray-600 dark:text-gray-400 mb-3 text-sm"
                                    >
                                        {{ blog.excerpt }}
                                    </p>
                                    <div class="flex flex-wrap gap-1 mb-2">
                                        <span
                                            v-for="tag in blog.tags.slice(0, 3)"
                                            :key="tag"
                                            class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                                        >
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                                <div class="text-right mt-2 md:mt-0">
                                    <p
                                        class="text-gray-500 dark:text-gray-400 text-xs"
                                    >
                                        {{ formatDate(blog.date) }}
                                    </p>
                                    <p
                                        class="text-gray-500 dark:text-gray-400 text-xs"
                                    >
                                        {{ blog.reading_time }}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="text-center mt-6">
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            More blogs coming soon! 📝
                        </p>
                    </div>
                </div>
            </section>

            <!-- Bio Section (Personal Details) -->
            <section id="bio" class="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
                        More About Me
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Education -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <div class="flex items-center mb-4">
                                <Icon
                                    name="i-carbon-education"
                                    class="w-6 h-6 text-blue-500 mr-3"
                                />
                                <h3 class="text-lg font-semibold">Education</h3>
                            </div>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                {{ personalData.bio.education }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                Focusing on cloud computing, system design, and
                                modern software development practices.
                            </p>
                        </div>

                        <!-- Hobbies -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <div class="flex items-center mb-4">
                                <Icon
                                    name="i-carbon-music"
                                    class="w-6 h-6 text-purple-500 mr-3"
                                />
                                <h3 class="text-lg font-semibold">
                                    Hobbies & Interests
                                </h3>
                            </div>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                {{ personalData.bio.hobbies }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                Always curious about new technologies and love
                                discovering innovative solutions.
                            </p>
                        </div>

                        <!-- Mission -->
                        <div
                            class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 md:col-span-2"
                        >
                            <div class="flex items-center mb-4">
                                <Icon
                                    name="i-carbon-rocket"
                                    class="w-6 h-6 text-green-500 mr-3"
                                />
                                <h3 class="text-lg font-semibold">Mission</h3>
                            </div>
                            <blockquote
                                class="text-lg text-gray-700 dark:text-gray-300 italic text-center"
                            >
                                "{{ personalData.bio.mission }}"
                            </blockquote>
                            <p
                                class="text-center text-gray-600 dark:text-gray-400 mt-2"
                            >
                                — {{ personalData.bio.organization }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer
            class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
            <div class="max-w-5xl mx-auto px-4 py-6">
                <div class="text-center">
                    <div class="flex justify-center gap-4 mb-4">
                        <a
                            v-for="(url, platform) in personalData.links"
                            :key="platform"
                            :href="url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <img
                                v-if="platform === 'fiverr'"
                                src="/fiverr.svg"
                                alt="Fiverr"
                                class="w-5 h-5"
                            />
                            <Icon
                                v-else
                                :name="getSocialIcon(platform)"
                                class="w-5 h-5"
                            />
                        </a>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        © {{ new Date().getFullYear() }}
                        {{ personalData.personal.name }}. Built with Nuxt.js
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">

import personalData from "../../content/personal.json";
import experienceData from "../../content/experience.json";
import projectsData from "../../content/projects.json";
import blogsData from "../../content/blogs.json";


const { theme, toggleTheme } = useTheme();


const sections = [
    { id: "hero", name: "Home", icon: "i-carbon-home" },
    { id: "experience", name: "Experience", icon: "i-carbon-portfolio" },
    { id: "projects", name: "Projects", icon: "i-carbon-code" },
    { id: "blogs", name: "Blogs", icon: "i-carbon-blog" },
    { id: "bio", name: "About", icon: "i-carbon-user" },
];


const showAllProjects = ref(false);
const activeSection = ref(0);


const fiverSvg = `<svg fill="currentColor" width="20" height="20" viewBox="-2.5 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z'/><circle cx='14.375' cy='1.875' r='1.875'/></svg>`;


const featuredProjects = computed(() =>
    projectsData.projects.filter((p: any) => p.featured),
);

const otherProjects = computed(() =>
    projectsData.projects.filter((p: any) => !p.featured),
);

const featuredBlogs = computed(() =>
    blogsData.blogs.filter((b: any) => b.published && b.featured).slice(0, 3),
);


const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
};


onMounted(() => {
    
    const observer = new IntersectionObserver(
        (entries) => {
            let maxVisibleSection = null;
            let maxVisibilityRatio = 0;

            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio > maxVisibilityRatio
                ) {
                    maxVisibilityRatio = entry.intersectionRatio;
                    maxVisibleSection = entry.target.id;
                }
            });

            if (maxVisibleSection) {
                const sectionIndex = sections.findIndex(
                    (section) => section.id === maxVisibleSection,
                );
                if (sectionIndex !== -1) {
                    activeSection.value = sectionIndex;
                }
            }
        },
        {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            rootMargin: "-10% 0px -10% 0px",
        },
    );

    sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
            observer.observe(element);
        }
    });
});


const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
    });
};

const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case "completed":
            return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
        case "in development":
            return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
        case "archived":
            return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
        default:
            return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
    }
};

const getSocialIcon = (platform: string) => {
    const icons: Record<string, string> = {
        website: "i-carbon-earth",
        fiverr: "i-carbon-portfolio",
        twitter: "i-carbon-logo-twitter",
        linkedin: "i-carbon-logo-linkedin",
        github: "i-carbon-logo-github",
        personal_github: "i-carbon-logo-github",
    };
    return icons[platform] || "i-carbon-link";
};


useHead({
    title: personalData.seo.title,
    meta: [
        { name: "description", content: personalData.seo.description },
        { name: "keywords", content: personalData.seo.keywords },
        { name: "author", content: personalData.seo.author },
    ],
});
</script>

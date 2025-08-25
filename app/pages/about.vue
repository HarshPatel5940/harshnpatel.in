<template>
    <div
        :class="[
            'min-h-screen transition-colors duration-300 about-page',
            isDark ? 'portfolio-body dark' : 'portfolio-body light',
        ]"
    >
        <!-- Header -->
        <header
            class="sticky top-0 z-10 backdrop-blur-sm border-b transition-colors duration-300"
            :class="[
                isDark
                    ? 'border-gray-700 bg-gray-900/80'
                    : 'border-gray-200 bg-white/80',
            ]"
        >
            <div class="max-w-4xl mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <NuxtLink
                        to="/"
                        class="font-medium flex items-center transition-colors duration-300"
                        :class="[
                            isDark
                                ? 'text-green-400 hover:text-green-300'
                                : 'text-green-600 hover:text-green-700',
                        ]"
                    >
                        <svg
                            class="mr-2 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Back to Home
                    </NuxtLink>
                    <div class="flex items-center gap-4">
                        <button
                            class="theme-toggle"
                            :class="isDark ? '' : 'light'"
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
                            to="/blog"
                            class="font-medium transition-colors duration-300"
                            :class="
                                isDark
                                    ? 'text-gray-400 hover:text-gray-300'
                                    : 'text-gray-600 hover:text-gray-700'
                            "
                        >
                            Blog
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-4xl mx-auto px-4 py-12">
            <!-- Hero Section -->
            <section class="mb-16">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Image Side -->
                    <div class="flex justify-center lg:justify-start">
                        <div class="relative">
                            <!-- Decorative background -->
                            <div
                                class="absolute inset-0 w-72 h-72 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 blur-3xl transform -translate-x-4 translate-y-4"
                            ></div>
                            <div
                                class="absolute inset-0 w-72 h-72 rounded-full bg-gradient-to-tl from-blue-400/10 to-purple-600/10 blur-3xl transform translate-x-4 -translate-y-4"
                            ></div>
                            <!-- Main image -->
                            <div class="relative z-10">
                                <img
                                    src="/harshnpatel.jpeg"
                                    alt="Harsh Patel"
                                    class="w-72 h-72 rounded-full object-cover border-8 border-gradient-to-br from-green-400 to-green-600 shadow-2xl"
                                    :class="[
                                        isDark
                                            ? 'border-green-400/50 shadow-green-400/20'
                                            : 'border-green-500/70 shadow-green-500/30',
                                    ]"
                                />
                                <!-- Floating accent -->
                                <div
                                    class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                                >
                                    hola!
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Side -->
                    <div class="text-center lg:text-left">
                        <h1
                            class="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            About Me :D
                        </h1>
                        <p
                            class="text-xl mb-8 leading-relaxed transition-colors duration-300"
                            :class="isDark ? 'text-gray-400' : 'text-gray-600'"
                        >
                            Software Development Engineer & BTech CSE Student
                            specializing in scalable backend systems and modern
                            web technologies.
                        </p>
                        <div
                            class="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <span
                                class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-green-400/20 text-green-300 border border-green-400/30'
                                        : 'bg-green-100 text-green-700 border border-green-200',
                                ]"
                            >
                                FOSS Enthusiast
                            </span>
                            <span
                                class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                                        : 'bg-blue-100 text-blue-700 border border-blue-200',
                                ]"
                            >
                                Developer
                            </span>
                            <span
                                class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-purple-400/20 text-purple-300 border border-purple-400/30'
                                        : 'bg-purple-100 text-purple-700 border border-purple-200',
                                ]"
                            >
                                Freelancer
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main About Content -->
            <div class="grid md:grid-cols-3 gap-12">
                <!-- Main Content -->
                <div class="md:col-span-2">
                    <!-- Technical Expertise -->
                    <section class="mb-12">
                        <h2
                            class="text-2xl font-bold mb-6 transition-colors duration-300"
                            :class="isDark ? 'text-white' : 'text-gray-900'"
                        >
                            Technical Expertise
                        </h2>
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-3">
                                    Backend Development
                                </h3>
                                <ul class="space-y-1 text-sm">
                                    <li>Go (Echo Framework)</li>
                                    <li>Node.js & TypeScript</li>
                                    <li>NestJS, Express.js & Hono</li>
                                    <li>RESTful APIs & GraphQL</li>
                                    <li>Microservices Architecture</li>
                                </ul>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-3">
                                    Frontend Development
                                </h3>
                                <ul class="space-y-1 text-sm">
                                    <li>React & Next.js</li>
                                    <li>Vue.js & Nuxt.js</li>
                                    <li>TypeScript & JavaScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Responsive Web Design</li>
                                </ul>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-3">
                                    Database & Cloud
                                </h3>
                                <ul class="space-y-1 text-sm">
                                    <li>AWS, GCP & Cloudflare</li>
                                    <li>Supabase & Azure (Basic)</li>
                                    <li>PostgreSQL & MongoDB</li>
                                    <li>Redis & SQLite</li>
                                    <li>Twilio & MinIO Integration</li>
                                </ul>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-3">
                                    Tools & Practices
                                </h3>
                                <ul class="space-y-1 text-sm">
                                    <li>Team Management</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Chatbots & Automation</li>
                                    <li>Requirement Analysis</li>
                                    <li>Negotiation & Communication</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Professional Experience -->
                    <section class="mb-12">
                        <h2
                            class="text-2xl font-bold mb-6 transition-colors duration-300"
                            :class="isDark ? 'text-white' : 'text-gray-900'"
                        >
                            Professional Experience
                        </h2>
                        <div class="space-y-6">
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Software Development Engineer – FTC
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    Futra.ltd • Jun 2025 - Present • Remote,
                                    Hong Kong
                                </p>
                                <p class="text-sm">
                                    Leading development of 3 web platforms
                                    (Next.js) and a large-scale backend
                                    (NestJS). Managing full software lifecycle
                                    in a lean 2-member team — architecture,
                                    infrastructure, CI/CD.
                                </p>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Freelance Developer
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    Fiverr • May 2021 - Present • Remote
                                </p>
                                <p class="text-sm">
                                    Delivered 30+ projects for national and
                                    international clients. Specialized in
                                    backend systems, automation workflows, and
                                    robust Discord bots.
                                </p>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Backend Developer Intern
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    Salzaa • May 24 - Jun 3, 2025 • Remote
                                </p>
                                <p class="text-sm">
                                    Solely managed a large NestJS backend
                                    integrating PayU, Shiprocket. Built
                                    returns/exchange and wallet systems;
                                    optimized endpoints by 40–60%.
                                </p>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Frontend Developer Intern
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    TrainingMug • Feb - Apr 2024 • Remote
                                </p>
                                <p class="text-sm">
                                    Integrated APIs into the existing User
                                    Module Website. Improved frontend code
                                    quality and maintainability.
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Projects -->
                    <section class="mb-12">
                        <h2
                            class="text-2xl font-bold mb-6 transition-colors duration-300"
                            :class="isDark ? 'text-white' : 'text-gray-900'"
                        >
                            Notable Projects
                        </h2>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div
                                class="p-4 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">CodeFlick</h3>
                                <p class="text-sm">
                                    Go + Vue platform for sharing and
                                    collaborating on gists.
                                </p>
                            </div>
                            <div
                                class="p-4 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">EzMs</h3>
                                <p class="text-sm">
                                    Robust CMS with NestJS, Supabase, Prisma
                                    backend and React frontend.
                                </p>
                            </div>
                            <div
                                class="p-4 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">DHB V2</h3>
                                <p class="text-sm">
                                    Discord bot with moderation, music playback,
                                    and Lavalink integration.
                                </p>
                            </div>
                            <div
                                class="p-4 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Keyshade (Contributor)
                                </h3>
                                <p class="text-sm">
                                    Bug fixes, pricing page, MinIO integration,
                                    GitHub OAuth, admin automation.
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Education -->
                    <section class="mb-12">
                        <h2
                            class="text-2xl font-bold mb-6 transition-colors duration-300"
                            :class="isDark ? 'text-white' : 'text-gray-900'"
                        >
                            Education
                        </h2>
                        <div class="space-y-4">
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Bachelor of Technology - Computer Science &
                                    Engineering
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    SRM University • 2022 - Present •
                                    Kattankulathur, Chennai
                                </p>
                                <p class="text-sm">
                                    Specialization in Cloud Computing • CGPA:
                                    9.12/10
                                </p>
                            </div>
                            <div
                                class="p-6 rounded-lg transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'bg-gray-800/50 border border-gray-700'
                                        : 'bg-gray-50 border border-gray-200',
                                ]"
                            >
                                <h3 class="font-semibold mb-2">
                                    Senior Secondary Education
                                </h3>
                                <p class="text-sm mb-2 opacity-70">
                                    Sindhi Model Senior Secondary School • 2010
                                    - 2022 • Chennai
                                </p>
                                <p class="text-sm">
                                    XII: 76.8% (PCM & Computer Science) • X:
                                    86.8%
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Sidebar -->
                <aside class="md:col-span-1">
                    <!-- Contact Information -->
                    <section
                        class="p-6 rounded-lg mb-8 transition-colors duration-300"
                        :class="[
                            isDark
                                ? 'bg-gray-800/50 border border-gray-700'
                                : 'bg-gray-50 border border-gray-200',
                        ]"
                    >
                        <h3 class="font-semibold mb-4">Get In Touch</h3>
                        <div class="space-y-3">
                            <a
                                href="mailto:iam.harshnpatel@gmail.com"
                                class="flex items-center text-sm transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'text-green-400 hover:text-green-300'
                                        : 'text-green-600 hover:text-green-700',
                                ]"
                            >
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    />
                                    <path
                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    />
                                </svg>
                                iam.harshnpatel@gmail.com
                            </a>
                            <div class="flex items-center text-sm">
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    />
                                </svg>
                                +91 98401 21224
                            </div>
                            <div class="flex items-center text-sm">
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Chennai, India
                            </div>
                            <a
                                href="https://cal.com/harshnpatel"
                                target="_blank"
                                class="flex items-center text-sm transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'text-green-400 hover:text-green-300'
                                        : 'text-green-600 hover:text-green-700',
                                ]"
                            >
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Schedule a Call
                            </a>
                        </div>
                    </section>

                    <!-- Social Links -->
                    <section
                        class="p-6 rounded-lg mb-8 transition-colors duration-300"
                        :class="[
                            isDark
                                ? 'bg-gray-800/50 border border-gray-700'
                                : 'bg-gray-50 border border-gray-200',
                        ]"
                    >
                        <h3 class="font-semibold mb-4">Connect</h3>
                        <div class="space-y-3">
                            <a
                                href="https://github.com/harshpatel5940"
                                target="_blank"
                                class="flex items-center text-sm transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'text-gray-400 hover:text-gray-300'
                                        : 'text-gray-600 hover:text-gray-700',
                                ]"
                            >
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/harshpatel5940"
                                target="_blank"
                                class="flex items-center text-sm transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'text-gray-400 hover:text-gray-300'
                                        : 'text-gray-600 hover:text-gray-700',
                                ]"
                            >
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://fiverr.com/harshpatel5940"
                                target="_blank"
                                class="flex items-center text-sm transition-colors duration-300"
                                :class="[
                                    isDark
                                        ? 'text-gray-400 hover:text-gray-300'
                                        : 'text-gray-600 hover:text-gray-700',
                                ]"
                            >
                                <svg
                                    class="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 16V9h4v7H8z"
                                    />
                                </svg>
                                Fiverr
                            </a>
                        </div>

                        <!-- Certifications -->
                        <section class="mt-8">
                            <h3 class="font-semibold mb-4">Certifications</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    ></span>
                                    OCI Foundations
                                </div>
                                <div class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    ></span>
                                    Cisco Networking
                                </div>
                                <div class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    ></span>
                                    ML Foundations
                                </div>
                                <div class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    ></span>
                                    Data Engineering
                                </div>
                                <div class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    ></span>
                                    Cloud Architecting
                                </div>
                            </div>
                        </section>
                    </section>

                    <!-- Resume Download -->
                    <section
                        class="p-6 rounded-lg transition-colors duration-300"
                        :class="[
                            isDark
                                ? 'bg-gray-800/50 border border-gray-700'
                                : 'bg-gray-50 border border-gray-200',
                        ]"
                    >
                        <h3 class="font-semibold mb-4">Resume</h3>
                        <a
                            href="/Harsh-Nikul-Patel_Resume.pdf"
                            download="Harsh_Nikul_Patel.pdf"
                            target="_blank"
                            class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-medium"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Download CV
                        </a>
                    </section>
                </aside>
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
import { ref, onMounted } from "vue";

const isDark = ref(false);

useHead({
    title: "About Harsh Patel | Full Stack Developer & Computer Science Student",
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
            name: "description",
            content:
                "Learn about Harsh Nikul Patel - Full Stack Developer, BTech CSE student at SRM University. 4+ years of freelance experience with TypeScript, Go, and modern web technologies.",
        },
        {
            name: "keywords",
            content:
                "Harsh Patel, About, Full Stack Developer, Computer Science Student, SRM University, TypeScript, Go, Freelancer, Software Engineer, BTech CSE",
        },
        { name: "author", content: "Harsh Nikul Patel" },
        {
            name: "robots",
            content:
                "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { name: "theme-color", content: "#0ea5e9" },

        { property: "og:type", content: "profile" },
        {
            property: "og:title",
            content:
                "About Harsh Patel | Full Stack Developer & Computer Science Student",
        },
        {
            property: "og:description",
            content:
                "Full Stack Developer, BTech CSE student at SRM University. 4+ years of freelance experience with TypeScript, Go, and modern web technologies.",
        },
        { property: "og:url", content: "https://harshnpatel.in/about" },
        { property: "og:site_name", content: "Harsh Patel Portfolio" },
        {
            property: "og:image",
            content: "https://harshnpatel.in/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
            property: "og:image:alt",
            content: "Harsh Nikul Patel - Full Stack Developer Portfolio",
        },
        { property: "og:locale", content: "en_US" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@harshpatel5940" },
        { name: "twitter:site", content: "@harshpatel5940" },
        {
            name: "twitter:title",
            content:
                "About Harsh Patel | Full Stack Developer & Computer Science Student",
        },
        {
            name: "twitter:description",
            content:
                "Full Stack Developer, BTech CSE student at SRM University. 4+ years of freelance experience with TypeScript, Go, and modern web technologies.",
        },
        {
            name: "twitter:image",
            content: "https://harshnpatel.in/og-image.png",
        },
        {
            name: "twitter:image:alt",
            content: "Harsh Nikul Patel - Full Stack Developer Portfolio",
        },

        { property: "profile:first_name", content: "Harsh" },
        { property: "profile:last_name", content: "Patel" },
        { property: "profile:username", content: "harshpatel5940" },
    ],
    link: [{ rel: "canonical", href: "https://harshnpatel.in/about" }],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Harsh Nikul Patel",
                alternateName: "Harsh Patel",
                url: "https://harshnpatel.in",
                image: "https://harshnpatel.in/og-image.png",
                sameAs: [
                    "https://github.com/harshpatel5940",
                    "https://twitter.com/harshpatel5940",
                    "https://linkedin.com/in/harshpatel5940",
                    "https://instagram.com/harshpatel5940",
                ],
                jobTitle: "Full Stack Developer",
                worksFor: {
                    "@type": "EducationalOrganization",
                    name: "SRM University",
                    url: "https://www.srmist.edu.in",
                },
                alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "SRM University",
                },
                knowsAbout: [
                    "TypeScript",
                    "Go Programming",
                    "Node.js",
                    "React",
                    "Vue.js",
                    "NestJS",
                    "Full Stack Development",
                    "API Development",
                    "Bot Development",
                    "Cloud Computing",
                    "Database Design",
                    "Microservices",
                    "Software Engineering",
                ],
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                    addressRegion: "India",
                },
                email: "hi@harshnpatel.in",
                description:
                    "Full Stack Developer and BTech CSE Student at SRM University. Specialized in TypeScript, Go, Node.js, and cloud computing. 4+ years of freelance experience working with international clients.",
                hasOccupation: {
                    "@type": "Occupation",
                    name: "Full Stack Developer",
                    occupationLocation: {
                        "@type": "Country",
                        name: "India",
                    },
                    skills: [
                        "TypeScript",
                        "Go",
                        "Node.js",
                        "React",
                        "Vue.js",
                        "NestJS",
                        "PostgreSQL",
                        "MongoDB",
                        "AWS",
                        "Docker",
                    ],
                },
                award: "4+ Years Freelance Experience",
                nationality: "Indian",
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "About Harsh Patel",
                url: "https://harshnpatel.in/about",
                description:
                    "Learn about Harsh Nikul Patel - Full Stack Developer and Computer Science Student",
                author: {
                    "@type": "Person",
                    name: "Harsh Nikul Patel",
                },
                inLanguage: "en-US",
                isPartOf: {
                    "@type": "WebSite",
                    name: "Harsh Patel Portfolio",
                    url: "https://harshnpatel.in",
                },
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: "https://harshnpatel.in",
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "About",
                            item: "https://harshnpatel.in/about",
                        },
                    ],
                },
            }),
        },
    ],
});

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
    document.body.className = `portfolio-body ${isDark.value ? "dark" : "light"}`;
    document.body.style.fontFamily = '"Geist-Regular", sans-serif';
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    if (isDark.value) {
        document.body.style.backgroundColor = "#0a1f0f";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #011409 1px, transparent 0)";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#f0fdf4";
        document.body.style.backgroundImage =
            "radial-gradient(circle at 1px 1px, #86efac 1px, transparent 0)";
        document.body.style.color = "#1a1a1a";
    }

    document.body.style.backgroundSize = "2rem 2rem";

    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";

    localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function toggleTheme() {
    isDark.value = !isDark.value;
    applyTheme();
}
</script>

<style scoped>
.portfolio-body {
    font-family:
        "Geist",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        sans-serif;
    background-size: 2rem 2rem;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    transition: all 0.3s ease;
}

.about-page {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    height: auto !important;
}

.portfolio-body.dark {
    background-color: #0a1f0f;
    background-image: radial-gradient(
        circle at 1px 1px,
        #05fc70 1px,
        transparent 0
    );
    color: #ffffff;
}

.portfolio-body.light {
    background-color: #f0fdf4;
    background-image: radial-gradient(
        circle at 1px 1px,
        #86efac 1px,
        transparent 0
    );
    color: #1a1a1a;
}

.theme-toggle {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    backdrop-filter: blur(10px);
}

.theme-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.light .theme-toggle {
    border-color: rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.1);
    color: #1a1a1a;
}

.light .theme-toggle:hover {
    background: rgba(0, 0, 0, 0.2);
}

.theme-icon-sun {
    color: #fbbf24;
}

.theme-icon-moon {
    color: #64748b;
}

.prose {
    color: inherit;
}

.prose p {
    margin-bottom: 1rem;
    line-height: 1.7;
}

.prose strong {
    font-weight: 600;
    color: #22c55e;
}

.prose-invert strong {
    color: #4ade80;
}


html,
body {
    overflow-x: hidden;
}


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

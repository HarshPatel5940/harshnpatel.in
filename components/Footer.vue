<template>
    <footer id="footer" class="container mx-auto px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8">
            <!-- About Section -->
            <div class="md:col-span-2">
                <h3 class="font-semibold text-lg mb-4">{{ personal.personal.name }}</h3>
                <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                    {{ personal.personal.description }}
                </p>
                <div class="flex space-x-4">
                    <a
                        :href="personal.links.github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github class="h-5 w-5" />
                    </a>
                    <a
                        :href="personal.links.linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin class="h-5 w-5" />
                    </a>
                    <a
                        :href="`mailto:${personal.personal.email}`"
                        class="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email Contact"
                    >
                        <Mail class="h-5 w-5" />
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="font-medium mb-4">Quick Links</h4>
                <nav class="space-y-2">
                    <a
                        href="#about"
                        class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        Contact
                    </a>
                </nav>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="font-medium mb-4">Get In Touch</h4>
                <div class="space-y-2">
                    <a
                        :href="`mailto:${personal.personal.email}`"
                        class="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {{ personal.personal.email }}
                    </a>
                    <a
                        href="/Harsh-Nikul-Patel_Resume.pdf"
                        target="_blank"
                        class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Download class="h-3 w-3" />
                        Resume
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div
            class="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
            <p class="text-sm text-muted-foreground">
                © {{ new Date().getFullYear() }} {{ personal.personal.name }}. All rights
                reserved.
            </p>
            <p class="text-xs text-muted-foreground mt-2 md:mt-0">
                Built with Nuxt.js ♥️
            </p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { Github, Linkedin, Mail, Download } from "lucide-vue-next";
import personal from "~/content/personal.json";
</script>

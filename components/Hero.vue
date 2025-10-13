<template>
    <section
        id="home"
        class="relative h-screen bg-gradient-to-br from-background to-muted overflow-hidden flex items-center"
    >
        <!-- FlickeringGrid Background -->
        <ClientOnly class="absolute inset-0 z-0">
            <LazyFlickeringGrid
                class="relative overflow-x inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,transparent,gray)]"
                :square-size="10"
                :grid-gap="8"
                color="#6B7280"
                :max-opacity="0.5"
                :flicker-chance="0.1"
                :width="1920"
                :height="1000"
            />
        </ClientOnly>

        <div class="container mx-auto px-6 text-center relative z-10 w-full">
            <div class="max-w-4xl mx-auto">
                <ClientOnly>
                    <BlurReveal :delay="0.2" :duration="0.75">
                        <h1 class="text-4xl md:text-6xl font-bold mb-6">
                            <span
                                class="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent"
                            >
                                {{ personal.personal.tagline }}
                            </span>
                            <img
                                src="/gopher.svg"
                                alt="Gopher"
                                class="inline-block w-16 md:w-24"
                            />
                        </h1>
                    </BlurReveal>
                </ClientOnly>
                <div class="flex flex-wrap justify-center gap-4 mb-4">
                    <Button variant="ghost">
                        <p class="text-md font-semibold">FOSS Enthusiast</p>
                    </Button>
                    <Button variant="ghost">
                        <p class="text-md font-semibold">
                            Co-Founder @
                            <a
                                href="https://limegreen.studio"
                                class="text-md font-semibold"
                            >
                                LimeGreen.studio
                            </a>
                        </p>
                    </Button>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                        <a
                            href="https://github.com/harshpatel5940"
                            class="flex items-center space-x-2"
                        >
                            <Github class="h-5 w-5 text-white" />
                            <span>My Projects</span>
                        </a>
                    </Button>

                    <Button variant="outline" size="lg">
                        <a
                            href="/Harsh-Nikul-Patel_Resume.pdf"
                            download="Harsh-Nikul-Patel_Resume.pdf"
                            class="flex items-center space-x-2"
                        >
                            <span>Download CV</span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Github } from "lucide-vue-next";
import personal from "../content/personal.json";
</script>

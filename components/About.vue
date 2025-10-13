<template>
    <section id="about" class="py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
                About Me
            </h2>
            <div
                class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto"
            >
                <div class="flex lg:col-span-2">
                    <Card class="p-8 flex-1 shadow-2xl">
                        <h3 class="text-xl font-semibold mb-3">Background</h3>
                        <div class="flex flex-col gap-4">
                            <p>
                                I am a senior year undergrad dedicated to the
                                pursuit of a Computer Science and Engineering
                                degree, backed by a formidable
                                <span class="font-bold text-primary"
                                    >four-year freelance tenure</span
                                >
                                as a Backend and Bot Developer.
                            </p>
                            <p>
                                Currently, I write code and have fun in
                                <span class="font-bold text-primary"
                                    >Golang</span
                                >
                                & TypeScript. My relentless enthusiasm for
                                cutting-edge technologies and my commitment to
                                <span class="font-bold text-primary"
                                    >open source initiatives</span
                                >
                                propel my journey in this field.
                            </p>
                            <p>
                                As a Freelance Developer, I have had the
                                privilege of
                                <span class="font-bold text-primary">
                                    collaborating with over 30 clients </span
                                >, both national and international, on projects
                                spanning bot development, automation, and web
                                development.
                            </p>
                            <p>
                                For further inquiries or collaboration
                                opportunities, please do not hesitate to reach
                                out to me at
                                <a
                                    href="mailto:hi@harshnpatel.in"
                                    class="font-bold text-primary"
                                    >hi@harshnpatel.in</a
                                >
                                or feel free to
                                <a
                                    href="https://cal.com/harshnpatel/15min"
                                    target="_blank"
                                    class="font-bold text-primary"
                                >
                                    book a call here</a
                                >.
                            </p>
                        </div>
                    </Card>
                </div>

                <div class="flex flex-col gap-2">
                    <Card class="p-8 flex-1 shadow-2xl">
                        <h3 class="text-xl font-semibold mb-3">Socials</h3>
                        <div class="space-y-4">
                            <a
                                :href="personal.links.fiverr"
                                target="_blank"
                                class="flex items-center space-x-3"
                            >
                                <svg
                                    class="h-5 w-5 fill-primary"
                                    version="1.2"
                                    baseProfile="tiny-ps"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1396 1769"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M227.04 1768.31L621.05 1768.31L621.05 874.13L1001.69 874.13L1001.69 1768.31L1395.7 1768.31L1395.7 540.5L621.05 540.5L621.05 467.1C621.05 387.04 681.15 333.63 767.96 333.63L1001.69 333.63L1001.69 0L707.86 0C420.72 0 227.04 180.17 227.04 440.42L227.04 540.5L0 540.5L0 874.13L227.04 874.13L227.04 1768.31Z"
                                    />
                                </svg>
                                <span>Fiverr</span>
                            </a>
                            <a
                                :href="personal.links.twitter"
                                target="_blank"
                                class="flex items-center space-x-3"
                            >
                                <Twitter class="h-5 w-5 text-primary" />
                                <span>Twitter</span>
                            </a>
                            <a
                                :href="personal.links.linkedin"
                                target="_blank"
                                class="flex items-center space-x-3"
                            >
                                <Linkedin class="h-5 w-5 text-primary" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                :href="personal.links.github"
                                target="_blank"
                                class="flex items-center space-x-3"
                            >
                                <Github class="h-5 w-5 text-primary" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </Card>

                    <Card class="p-8 flex-1 shadow-2xl">
                        <h3 class="text-xl font-semibold mb-3">Quick Facts</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <Globe class="h-5 w-5 text-primary" />
                                <span>Building MVP's</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <Code class="h-5 w-5 text-primary" />
                                <span>Full-Stack Developer</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <Cloud class="h-5 w-5 text-primary" />
                                <span>Veteran in Cloud Platforms</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <Smartphone class="h-5 w-5 text-primary" />
                                <span>Accessiblity Matters</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Code, Smartphone, Cloud, Globe } from "lucide-vue-next";
import { Twitter, Linkedin, Github } from "lucide-vue-next";
import personal from "../content/personal.json";
</script>

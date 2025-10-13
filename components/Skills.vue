<template>
    <section id="skills" class="py-20 bg-muted/50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
                Skills & Technologies
            </h2>
            <ClientOnly>
                <div class="grid place-content-center">
                    <IconCloud :images="imageUrls" />
                </div>
            </ClientOnly>
            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-3 gap-8">
                    <Card class="p-6">
                        <h3
                            class="text-xl font-semibold mb-4 flex items-center"
                        >
                            <Code class="h-5 w-5 mr-2 text-primary" />
                            Languages
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">JavaScript</Badge>
                            <Badge variant="secondary">Golang</Badge>
                            <Badge variant="secondary">Python (Basic)</Badge>
                            <Badge variant="secondary">C++ (Basic)</Badge>
                        </div>
                    </Card>

                    <Card class="p-6">
                        <h3
                            class="text-xl font-semibold mb-4 flex items-center"
                        >
                            <Layers class="h-5 w-5 mr-2 text-primary" />
                            Frameworks
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <Badge variant="secondary">Echo</Badge>
                            <Badge variant="secondary">Express</Badge>
                            <Badge variant="secondary">Hono</Badge>
                            <Badge variant="secondary">NestJs</Badge>
                            <Badge variant="secondary">ReactJs</Badge>
                            <Badge variant="secondary">NextJs</Badge>
                            <Badge variant="secondary">NuxtJs</Badge>
                        </div>
                    </Card>

                    <Card class="p-6">
                        <h3
                            class="text-xl font-semibold mb-4 flex items-center"
                        >
                            <Wrench class="h-5 w-5 mr-2 text-primary" />
                            Tools & Others
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <Badge variant="secondary">AWS</Badge>
                            <Badge variant="secondary">GCP</Badge>
                            <Badge variant="secondary">Cloudflare</Badge>
                            <Badge variant="secondary">Twillio</Badge>
                            <Badge variant="secondary">Supabase</Badge>
                            <Badge variant="secondary">Azure (Basic)</Badge>
                            <Badge variant="secondary">Team Management</Badge>
                            <Badge variant="secondary"
                                >Requirement Analysis</Badge
                            >
                            <Badge variant="secondary">Chatbots</Badge>
                            <Badge variant="secondary">Automation Tools</Badge>
                            <Badge variant="secondary">CI/CD Workflows</Badge>
                            <Badge variant="secondary">Closing Deals</Badge>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Code, Layers, Wrench } from "lucide-vue-next";

const slugs = [
    "typescript",
    "javascript",
    "golang",
    "python",
    "cplusplus",
    "react",
    "nextdotjs",
    "nuxtdotjs",
    "express",
    "nestjs",
    "cloudflare",
    "aws",
    "gcp",
    "twillio",
    "supabase",
    "azure",
    "automation",
    "cicd",
    "teamwork",
    "negotiation",
    "chatbot",
    "requirementanalysis",
];

const imageUrls = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);
</script>

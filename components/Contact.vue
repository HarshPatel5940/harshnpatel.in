<template>
    <section id="contact" class="py-20 bg-muted/50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
                Get In Touch
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-xl font-semibold mb-6">
                            Let's work together
                        </h3>
                        <p class="text-muted-foreground mb-8">
                            I'm always interested in new opportunities and
                            exciting projects. Whether you're looking for a
                            developer or just want to connect, feel free to
                            reach out!
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <Mail class="h-5 w-5 text-primary" />
                                <a
                                    :href="`mailto:${personal.personal.email}`"
                                    class="hover:text-primary transition-colors"
                                >
                                    {{ personal.personal.email }}
                                </a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <Linkedin class="h-5 w-5 text-primary" />
                                <a
                                    :href="personal.links.linkedin"
                                    class="hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Harsh Nikul Patel</a
                                >
                            </div>
                            <div class="flex items-center space-x-3">
                                <Github class="h-5 w-5 text-primary" />
                                <a
                                    :href="personal.links.github"
                                    class="hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >HarshPatel5940</a
                                >
                            </div>
                        </div>
                    </div>

                    <Card class="p-6">
                        <div
                            class="flex flex-col items-center justify-center h-full space-y-6"
                        >
                            <div class="text-center">
                                <Calendar
                                    class="h-16 w-16 text-primary mx-auto mb-4"
                                />
                                <h3 class="text-xl font-semibold mb-2">
                                    Schedule a Call
                                </h3>
                                <p class="text-muted-foreground mb-6">
                                    Book a 15-minute call to discuss your
                                    project or just to say hi!
                                </p>
                            </div>
                            <div
                                class="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                            >
                                <Button
                                    data-cal-link="harshnpatel/15min"
                                    data-cal-namespace="15min"
                                    data-cal-config='{"layout":"month_view"}'
                                    class="flex-1 sm:flex-none px-8 py-6 text-lg"
                                >
                                    <Calendar class="h-5 w-5 mr-2" />
                                    Book a Call
                                </Button>
                                <Button
                                    :href="`mailto:${personal.personal.email}`"
                                    as="a"
                                    variant="outline"
                                    class="flex-1 sm:flex-none px-8 py-6 text-lg"
                                >
                                    <Mail class="h-5 w-5 mr-2" />
                                    Send Email
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Github, Mail, Linkedin, Calendar } from "lucide-vue-next";
import personal from "~/content/personal.json";
import { onMounted } from "vue";

onMounted(() => {
    // Cal.com element-click embed script
    (function (C, A, L) {
        let p = function (a, ar) {
            a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
            C.Cal ||
            function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () {
                        p(api, arguments);
                    };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "15min", { origin: "https://app.cal.com" });

    window.Cal.ns["15min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
    });
});
</script>

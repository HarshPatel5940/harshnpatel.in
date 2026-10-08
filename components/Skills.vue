<script setup lang="ts">
const groups = [
  {
    title: "Languages",
    context: "The building blocks",
    items: ["Go", "TypeScript", "JavaScript", "Python (basic)", "C++ (basic)"],
  },
  {
    title: "Applications",
    context: "From API to interface",
    items: [
      "Echo",
      "NestJS",
      "Hono",
      "Express",
      "React",
      "Next.js",
      "Nuxt",
      "Vue",
    ],
  },
  {
    title: "Infrastructure & delivery",
    context: "Connecting and shipping",
    items: [
      "AWS",
      "GCP",
      "Cloudflare",
      "Supabase",
      "Twilio",
      "Azure (basic)",
      "CI/CD",
      "Automation",
    ],
  },
];
</script>

<template>
  <section id="skills" class="portfolio-container skills-section">
    <div class="section-heading">
      <div>
        <p class="section-kicker">04 / TOOLKIT</p>
        <h2>Tools for the problem at hand.</h2>
      </div>
    </div>
    <div class="skill-groups">
      <div
        v-for="(group, index) in groups"
        :key="group.title"
        class="skill-group"
      >
        <span class="skill-index">0{{ index + 1 }} / {{ group.context }}</span>
        <h3>{{ group.title }}</h3>
        <div class="tech-tags">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

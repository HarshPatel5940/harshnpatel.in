<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import { experience } from "~/lib/constants/experience";
</script>

<template>
  <section
    id="experience"
    class="portfolio-section portfolio-container experience-layout"
  >
    <div class="experience-heading">
      <p class="section-kicker">02 / EXPERIENCE</p>
      <h2>More than<br />writing the code.</h2>
      <p>
        Architecture, integrations, client requirements, and getting the whole
        thing out the door.
      </p>
      <a
        class="inline-link"
        href="/Harsh-Nikul-Patel_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >Read the full resume</a
      >
    </div>
    <div class="experience-timeline">
      <details
        v-for="(item, index) in experience"
        :key="item.company"
        class="experience-item"
        :open="index === 0"
      >
        <summary>
          <span class="timeline-dot" aria-hidden="true"></span
          ><span class="experience-summary"
            ><span class="experience-period">{{ item.period }}</span
            ><strong>{{ item.company }}</strong
            ><span>{{ item.role }}</span></span
          ><Plus :size="19" class="details-plus" aria-hidden="true" />
        </summary>
        <div class="experience-body">
          <p class="experience-context">{{ item.context }}</p>
          <h3>{{ item.highlight }}</h3>
          <ul>
            <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
          </ul>
          <div class="tech-tags">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </details>
    </div>
  </section>
</template>

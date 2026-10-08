<script setup lang="ts">
import { studioWork } from "~/lib/constants/studio";
</script>

<template>
  <section id="studio" class="portfolio-container studio-section">
    <div class="section-heading">
      <div>
        <p class="section-kicker">FROM LIMEGREEN.STUDIO</p>
        <h2>Products out in the world.</h2>
      </div>
      <p>
        Selected team projects from the studio I founded.<br />Read the
        studio’s published case studies.
      </p>
    </div>
    <div class="studio-grid">
      <a
        v-for="project in studioWork"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="studio-card"
        ><span class="project-category">{{ project.category }}</span>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <span class="inline-link">Read the studio case study</span></a
      >
    </div>
  </section>
</template>

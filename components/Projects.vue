<script setup lang="ts">
import {
  Github,
  Plus,
  Code2,
  Layers,
  ShieldCheck,
  Music2,
  FileSignature,
  Archive,
  Terminal,
  Mic,
} from "lucide-vue-next";
import { projects } from "~/lib/constants/projects";
const icons = {
  stash: Archive,
  nestop: Terminal,
  verse: Mic,
  codeflick: Code2,
  dhb: Music2,
  marai: FileSignature,
  keyshade: ShieldCheck,
  ezms: Layers,
};
</script>

<template>
  <section id="projects" class="portfolio-section portfolio-container">
    <div class="section-heading">
      <div>
        <p class="section-kicker">01 / SELECTED WORK</p>
        <h2>Built to do something.</h2>
      </div>
      <p>
        Recovery tools, scaffolding CLIs, meeting software.<br />And the bots
        and backends that started it all.
      </p>
    </div>
    <div class="project-grid">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card"
        :class="`project-${project.accent}`"
      >
        <div class="project-art" aria-hidden="true">
          <div class="project-art-top">
            <component
              :is="icons[project.id as keyof typeof icons]"
              :size="20"
            /><span>0{{ index + 1 }}</span>
          </div>
          <span class="project-symbol">{{ project.symbol }}</span
          ><span class="project-art-caption">{{ project.category }}</span>
        </div>
        <div class="project-card-body">
          <p class="project-category">{{ project.contribution }}</p>
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="tech-tags">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
          <details class="project-details">
            <summary>
              What I worked on
              <Plus :size="17" class="details-plus" aria-hidden="true" />
            </summary>
            <div class="project-details-body">
              <p v-for="detail in project.details" :key="detail">
                {{ detail }}
              </p>
              <a :href="project.code" target="_blank" rel="noopener noreferrer"
                ><Github :size="16" aria-hidden="true" />
                {{
                  project.companion ? "Backend source" : "View repository"
                }}</a
              ><a
                v-if="project.companion"
                :href="project.companion.url"
                target="_blank"
                rel="noopener noreferrer"
                ><Code2 :size="16" aria-hidden="true" />
                {{ project.companion.label }}</a
              >
            </div>
          </details>
        </div>
      </article>
      <a
        class="more-work-card"
        href="https://github.com/HarshPatel5940?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        ><Github :size="30" aria-hidden="true" />
        <h3>There’s more<br />in the commits.</h3>
        <p>Earlier bots, experiments, and the work that led here.</p>
        <span>Explore GitHub</span></a
      >
    </div>
    <p class="project-archive-note">
      Also built:
      <a
        href="https://github.com/HarshPatel5940/ohmylife"
        target="_blank"
        rel="noopener noreferrer"
        >OhMyLife</a
      >, a self-hostable agency workspace for projects, CRM, finances, and team
      chat, built with Next.js, Cloudflare D1, and Workers. Now archived.
    </p>
  </section>
</template>

<script setup lang="ts">
import { Github, Download, Code2, Workflow, Braces } from "lucide-vue-next";
import personal from "~/content/personal.json";
</script>

<template>
  <section id="home" class="portfolio-hero">
    <div class="portfolio-container hero-layout">
      <div class="hero-copy">
        <p class="section-kicker entrance">HARSH PATEL / SOFTWARE DEVELOPER</p>
        <h1 class="entrance entrance-two">
          Beyond syntax.<br /><span class="text-primary"
            >Into the real world.</span
          >
        </h1>
        <p class="hero-intro entrance entrance-three">
          I build backends, web products, and automations that connect the
          pieces. Go, TypeScript, and a healthy curiosity for how things work.
        </p>
        <div class="hero-actions entrance entrance-three">
          <Button as-child size="lg"
            ><a href="#projects">Explore my work</a></Button
          >
          <Button as-child variant="outline" size="lg"
            ><a href="/Harsh-Nikul-Patel_Resume.pdf" download
              ><Download :size="17" aria-hidden="true" /> Download resume</a
            ></Button
          >
        </div>
        <div class="hero-byline">
          <a
            href="https://limegreen.studio"
            target="_blank"
            rel="noopener noreferrer"
            >Founder @ LimeGreen.studio</a
          ><span aria-hidden="true">/</span
          ><a
            :href="personal.links.github"
            target="_blank"
            rel="noopener noreferrer"
            ><Github :size="15" aria-hidden="true" /> FOSS enthusiast</a
          >
        </div>
      </div>
      <div class="hero-workbench entrance entrance-three">
        <div class="workbench-top">
          <span>THE PERSON BEHIND THE CODE</span
          ><GopherMascot />
        </div>
        <div class="profile-line">
          <img
            src="/harshnpatel.jpeg"
            alt="Harsh Patel"
            width="72"
            height="72"
            fetchpriority="high"
          />
          <div>
            <strong>{{ personal.personal.name_short }}</strong
            ><span>Building across the stack.</span>
          </div>
        </div>
        <div class="workbench-tree">
          <a href="#projects"
            ><span class="tree-icon"
              ><Code2 :size="19" aria-hidden="true" /></span
            ><span
              ><strong>Interfaces</strong
              ><small>Vue · React · Next.js</small></span
            ><span class="tree-index">01</span></a
          >
          <a href="#projects"
            ><span class="tree-icon"
              ><Braces :size="19" aria-hidden="true" /></span
            ><span
              ><strong>Systems</strong><small>Go · NestJS · Cloud</small></span
            ><span class="tree-index">02</span></a
          >
          <a href="#projects"
            ><span class="tree-icon"
              ><Workflow :size="19" aria-hidden="true" /></span
            ><span
              ><strong>Automation</strong
              ><small>Bots · Integrations · Workflows</small></span
            ><span class="tree-index">03</span></a
          >
        </div>
        <div class="workbench-bottom">
          <span>idea</span><i aria-hidden="true"></i><span>build</span
          ><i aria-hidden="true"></i><span class="text-primary">ship</span>
        </div>
      </div>
    </div>
    <div class="portfolio-container evidence-strip">
      <div><strong>30+</strong><span>freelance clients</span></div>
      <div><strong>3</strong><span>web platforms at Futra</span></div>
      <div><strong>Go + TS</strong><span>backend to browser</span></div>
      <a href="#experience">See the experience behind it</a>
    </div>
  </section>
</template>

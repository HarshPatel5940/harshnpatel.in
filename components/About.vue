<script setup lang="ts">
import personal from "~/content/personal.json";
</script>

<template>
  <section
    id="about"
    class="portfolio-container portfolio-section about-layout"
  >
    <div>
      <p class="section-kicker">03 / A LITTLE CONTEXT</p>
      <h2>Curiosity is<br />part of the stack.</h2>
    </div>
    <div class="about-copy">
      <p>
        I’m Harsh, a developer working across backends, web applications, and
        automation. My freelance work has brought me into projects with more
        than 30 national and international clients, each with a different
        problem to solve.
      </p>
      <p>
        I enjoy building with Go and TypeScript, contributing to open source,
        and thinking beyond the syntax to how a whole system fits together.
      </p>
      <div class="about-note">
        <span>EDUCATION</span
        ><strong>SRM Institute of Science and Technology</strong>
        <p>
          BTech, Computer Science & Engineering<br />Specialization in Cloud
          Computing
        </p>
      </div>
      <a
        class="inline-link"
        :href="personal.links.fiverr"
        target="_blank"
        rel="noopener noreferrer"
        >Explore my freelance work on Fiverr</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import personal from "~/content/personal.json";
const isMobileMenuOpen = ref(false);
const menuButton = ref<{ $el: HTMLButtonElement } | null>(null);
const links = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
function closeMenu(event?: KeyboardEvent) {
  isMobileMenuOpen.value = false;
  if (event?.key === "Escape") menuButton.value?.$el.focus();
}
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <nav class="portfolio-container header-inner" aria-label="Main navigation">
      <a href="#home" class="site-wordmark" @click="closeMenu()"
        ><span class="site-monogram">hp.</span
        ><span>{{ personal.personal.name_short }}</span></a
      >
      <div class="desktop-nav">
        <a v-for="link in links" :key="link.href" :href="link.href">{{
          link.label
        }}</a>
      </div>
      <div class="header-controls">
        <ThemeToggle /><Button
          ref="menuButton"
          class="mobile-menu-toggle"
          variant="outline"
          size="icon"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="
            isMobileMenuOpen ? 'Close navigation' : 'Open navigation'
          "
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          ><X v-if="isMobileMenuOpen" :size="18" aria-hidden="true" /><Menu
            v-else
            :size="18"
            aria-hidden="true"
        /></Button>
      </div>
      <div v-if="isMobileMenuOpen" id="mobile-navigation" class="mobile-nav">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="closeMenu()"
          >{{ link.label }}</a
        >
      </div>
    </nav>
  </header>
</template>

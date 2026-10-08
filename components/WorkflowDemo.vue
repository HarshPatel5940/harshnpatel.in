<script setup lang="ts">
import { Play, RotateCcw, Check, Music2 } from "lucide-vue-next";
import { usePreferredReducedMotion } from "@vueuse/core";
const reducedMotion = usePreferredReducedMotion();
const selected = ref(0);
const completed = ref(-1);
const running = ref(false);
const status = ref("Ready to walk through the flow.");
let timer: ReturnType<typeof setTimeout> | undefined;
const steps = [
  {
    name: "Interaction",
    caption: "Discord",
    title: "A music request starts in Discord.",
    description:
      "DHB V2 includes music commands alongside moderation and utility commands. This simplified example follows a music request.",
    code: [
      "source: Discord",
      "intent: music playback",
      "mode: local walkthrough",
    ],
  },
  {
    name: "Command",
    caption: "Discord.js + TypeScript",
    title: "The bot handles the interaction.",
    description:
      "Discord.js connects the interaction to the TypeScript bot. The selected command determines what happens next.",
    code: [
      "handler: music command",
      "runtime: TypeScript",
      "library: Discord.js v14",
    ],
  },
  {
    name: "Audio",
    caption: "Lavalink",
    title: "Lavalink supports the music flow.",
    description:
      "The bot integrates Lavalink for music playback. Here, the audio step is visualized without contacting a server.",
    code: [
      "integration: Lavalink",
      "capability: music playback",
      "network requests: none",
    ],
  },
  {
    name: "Playback",
    caption: "Back to Discord",
    title: "The request becomes a listening experience.",
    description:
      "In the real bot, the flow supports music playback in Discord. This walkthrough ends here; it does not join a channel or play audio.",
    code: [
      "walkthrough: complete",
      "audio played: none",
      "external connections: none",
    ],
  },
];
function advance(index: number) {
  selected.value = index;
  status.value = `Step ${index + 1} of ${steps.length}: ${steps[index]!.name}.`;
  timer = setTimeout(
    () => {
      completed.value = index;
      if (index < steps.length - 1) advance(index + 1);
      else {
        running.value = false;
        status.value =
          "Walkthrough complete. No Discord connection or audio playback.";
      }
    },
    reducedMotion.value === "reduce" ? 120 : 1000,
  );
}
function run() {
  if (running.value) return;
  completed.value = -1;
  running.value = true;
  advance(0);
}
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <section id="workflow" class="workflow-section portfolio-section">
    <div class="portfolio-container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">02 / UNDER THE HOOD</p>
          <h2>Follow the moving pieces.</h2>
        </div>
        <p>
          A simplified walkthrough of DHB V2.<br />From a Discord interaction to
          music playback.
        </p>
      </div>
      <div class="workflow-panel">
        <div class="workflow-toolbar">
          <span
            ><Music2 :size="18" aria-hidden="true" /> DHB V2 / MUSIC FLOW</span
          ><Button :disabled="running" @click="run"
            ><RotateCcw
              v-if="completed === 3 && !running"
              :size="16"
              aria-hidden="true"
            /><Play v-else :size="16" aria-hidden="true" />{{
              running
                ? "Running…"
                : completed === 3
                  ? "Run again"
                  : "Run walkthrough"
            }}</Button
          >
        </div>
        <div class="workflow-steps">
          <button
            v-for="(step, index) in steps"
            :key="step.name"
            class="workflow-step"
            :class="{
              selected: selected === index,
              completed: completed >= index,
            }"
            :aria-pressed="selected === index"
            :disabled="running"
            @click="selected = index"
          >
            <span class="step-number"
              ><Check
                v-if="completed >= index"
                :size="15"
                aria-hidden="true"
              /><template v-else>0{{ index + 1 }}</template></span
            ><strong>{{ step.name }}</strong
            ><span>{{ step.caption }}</span>
          </button>
        </div>
        <div class="workflow-explanation">
          <div>
            <p class="section-kicker">STEP 0{{ selected + 1 }}</p>
            <h3>{{ steps[selected]!.title }}</h3>
            <p>{{ steps[selected]!.description }}</p>
          </div>
          <pre
            aria-label="Illustrative step details"
          ><code>{{ steps[selected]!.code.join('\n') }}</code></pre>
        </div>
        <div class="workflow-status">
          <span role="status" aria-live="polite">{{ status }}</span
          ><span>LOCAL DEMO · NO SERVICES CONNECTED</span>
        </div>
      </div>
    </div>
  </section>
</template>

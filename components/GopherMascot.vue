<template>
  <span class="gopher-mascot" aria-hidden="true">
    <img src="/gopher.svg" alt="" width="88" height="88" />
  </span>
</template>

<style scoped>
.gopher-mascot {
  display: inline-grid;
  place-items: center;
  flex: 0 0 64px;
  width: 64px;
  height: 40px;
  overflow: visible;
}

.gopher-mascot img {
  width: 88px;
  height: 88px;
  max-width: none;
  margin-top: -24px;
  transform-origin: 50% 85%;
  animation: gopher-hop 1.8s ease-in-out 2;
}

@media (hover: hover) {
  .gopher-mascot:hover img {
    animation: gopher-wave 0.65s ease-in-out 2;
  }
}

@keyframes gopher-hop {
  0%, 65%, 100% { transform: translateY(0) rotate(0); }
  25% { transform: translateY(-7px) rotate(-7deg); }
  45% { transform: translateY(-2px) rotate(5deg); }
}

@keyframes gopher-wave {
  0%, 100% { transform: rotate(0); }
  30% { transform: rotate(-9deg) translateY(-3px); }
  65% { transform: rotate(7deg); }
}

@media (prefers-reduced-motion: reduce) {
  .gopher-mascot img,
  .gopher-mascot:hover img {
    animation: none;
  }
}
</style>

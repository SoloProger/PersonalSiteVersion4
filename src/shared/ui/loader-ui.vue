<script setup lang="ts"></script>

<template>
  <div class="lds_dual_ring"></div>
</template>

<style scoped lang="scss">
.lds_dual_ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds_dual_ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #1e88e5;
  border-color: #61dafb transparent #61dafb transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

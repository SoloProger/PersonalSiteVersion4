<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 5px 15px;
  color: #1e88e5;
  font-size: 20px;
  background: transparent;
  border: 1px solid #1e88e5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.button::after {
  content: '';
  width: 100%;
  height: 3px;

  background: #1e88e5;
  opacity: 0;

  display: none;
  z-index: 1;

  transition: opacity 0.3s linear;
}

.button:hover {
  color: #ffffff;
  background: #1e88e5;
}

.button:hover::after {
  opacity: 1;
}
</style>

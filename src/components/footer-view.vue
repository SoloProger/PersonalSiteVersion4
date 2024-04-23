<script setup lang="ts">
import { ref } from 'vue';
import AboutSite from '../segments/footer/about-site.vue';

const visible = ref<boolean>(false);
</script>

<template>
  <footer>
    <div class="footer__wrapper">
      <span class="footer__text">Made by Andrei Solo</span>
      <span class="footer__text about__site" @click="visible = true">
        О сайте
      </span>
      <modal-ui :show="visible" @close="visible = false">
        <about-site></about-site>
      </modal-ui>
    </div>
  </footer>
</template>

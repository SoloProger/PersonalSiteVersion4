<script setup lang="ts">
import ButtonUi from '../../shared/ui/button-ui.vue';

interface CardProps {
  icon: string;
  title: string;
  body: string;
  link: string;
  button: string;
}

defineProps<CardProps>();
</script>

<template>
  <div class="contact__card">
    <div class="card__header">
      <img :src="icon" alt="icon" />
      <h3>{{ title }}</h3>
    </div>
    <div class="card__body">{{ body }}</div>
    <div class="card__footer">
      <button-ui>
        <a :href="link" class="button__link" target="_blank" rel="noreferrer">
          {{ button }}
        </a>
      </button-ui>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonUi from '../../shared/ui/button-ui.vue';

interface ProjectProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

defineProps<ProjectProps>();
</script>

<template>
  <div class="content__wrapper">
    <div class="content__img">
      <img :src="img" alt="Изображение" class="avatar" />
    </div>
    <div class="content_text project">
      <div class="content__text__header">
        <h3>{{ title }}</h3>
      </div>
      <div class="content__body project__body">
        <p>{{ description }}</p>
      </div>
      <div class="content__footer">
        <button-ui>
          <a :href="link" class="button__link"> Ознакомиться </a>
        </button-ui>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonUi from '../../shared/ui/button-ui.vue';
</script>

<template>
  <header>
    <div class="content__wrapper">
      <div class="content__img">
        <figure>
          <img src="/images/author.jpg" alt="Author" />
          <figcaption>
            <em>Солонников Андрей. Автор сайта. Начинающий разработчик</em>
          </figcaption>
        </figure>
      </div>
      <div class="content__text">
        <h2 class="content__text__header">Добро пожаловать!</h2>
        <p class="content__text__paragraph">
          Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
          началу программирование для меня было просто интересным занятием.
          Первые полгода я занимался изучением верстки, но уделял мало времени
          этому занятию...
        </p>
        <div class="content__footer">
          <button-ui>
            <router-link to="/about" class="button__link">
              Подробнее...
            </router-link>
          </button-ui>
        </div>
      </div>
    </div>
  </header>
</template>

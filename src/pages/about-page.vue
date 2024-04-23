<script setup lang="ts">
import ButtonUi from '../shared/ui/button-ui.vue';
</script>

<template>
  <section>
    <div class="content__wrapper">
      <div class="content__text">
        <div class="content__text__header">
          <h2>Привет!</h2>
        </div>
        <div class="content__body">
          <p>
            Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
            началу программирование для меня было просто интересным занятием.
            Первые полгода я занимался изучением верстки, но уделял мало времени
            этому занятию... Позже попробовал
            <strong>JavaScript</strong>, который мне, изначально, не понравился.
            Через месяц после первой программы на <em>JS</em>, я знакомлюсь с
            <strong>Python</strong>, который становиться моим основным языком на
            долгих 10 месяцев. Но после первой работы на этом языке, я
            углубляюсь во Frontend, где и знакомлюсь с <strong>React</strong> и
            <strong>Vue</strong>. Последние пол года я очень много занимался
            <strong>Frontend-частью</strong> и <strong>JavaScript</strong> в
            частности. Но всё меняется...
          </p>
        </div>
      </div>
      <figure class="content__img">
        <img src="/images/avatar.jpg" alt="avatar" class="avatar" />
      </figure>
    </div>
    <div class="content__wrapper">
      <div class="content__text">
        <div class="content__text__header">
          <h2>T-Shaped Специалист</h2>
        </div>
        <div class="content__body">
          <p style="margin-bottom: 20px">
            Сейчас я Backend T-Shaped-специалист. Основная сфера -
            Backend-разработка. Смежная сфера - Frontend-разработка. Но это
            только hard-skills. Про soft-skills я не буду здесь упоминать, они
            нужны любому специалисту. Теперь о каждой сфере по отдельности...
          </p>
          <button-ui>
            <a
              class="button__link"
              target="_blank"
              rel="noreferrer"
              href="https://skillbox.ru/media/growth/kto_takoy_t_shaped_spetsialist/"
            >
              Кто такой T-Shaped Специалист ?
            </a>
          </button-ui>
        </div>
      </div>
    </div>
    <div class="content__wrapper">
      <div class="content__text">
        <div class="content__text__header">
          <h2>Backend-Разработчик</h2>
        </div>
        <div class="content__body">
          <p style="margin-bottom: 20px">
            Чтобы узнать о сфере подробно, нажмити на кнопку. Я же в этом блоке
            опишу, почему именно backend. Изначально я вообще хотел быть
            fullstack-разработчиком, но из-за сложности освоения сразу двух
            направлений разработки я отказался от этой идеи. Неудачный выбор
            заставил меня задуматься о том, что разработка и вовсе не моё, но
            позже я решил попробовать снова на этот раз в Backend, и всё
            получилось. Позже я всё же вернулся к фронтенду, но сейчас я
            развиваюсь в качестве T-Shaped разработчика с приорететом на
            Backend.
          </p>
          <button-ui>
            <a
              class="button__link"
              target="_blank"
              rel="noreferrer"
              href="https://checkroi.ru/blog/professiya-bekend-razrabotchik/"
            >
              Кто такой Backend Разработчик ?
            </a>
          </button-ui>
        </div>
      </div>
    </div>
    <div class="content__wrapper">
      <div class="content__text">
        <div class="content__text__header">
          <h2>Frontend-Разработчик</h2>
        </div>
        <div class="content__body">
          <p style="margin-bottom: 20px">
            Это ответление блока о Backend-разработке, в котором я рассказываю
            свой опыт во Frontend. После отказа от fullstack, я углубился во
            frontend, но и здесь так и не смогу найти себя. Было интересно
            делать запросы, работать со store, делать маршрутизацию и
            разбираться во фреймворках, но в моей работе было много вёрстки,
            которую я не люблю. Да и в принципе frontend больше подходит для
            творческих людей, коим я не являюсь. Было принято решение уйти в
            Backend. Тут то я и нашел себя.
          </p>
          <button-ui>
            <a
              class="button__link"
              target="_blank"
              rel="noreferrer"
              href="https://checkroi.ru/blog/frontend-razrabotchik-podrobnyj-razbor-professii/"
            >
              Кто такой Frontend Разработчик ?
            </a>
          </button-ui>
        </div>
      </div>
    </div>
  </section>
</template>

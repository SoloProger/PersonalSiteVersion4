<script setup lang="ts">
import ButtonUi from '../shared/ui/button-ui.vue';
import InputUi from '../shared/ui/input-ui.vue';
import { ref } from 'vue';

const formData = ref<{ name: string; phone: string }>({
  name: '',
  phone: '',
});
</script>

<template>
  <div class="contact__wrapper">
    <div class="contact__header">
      <h2>Форма связи</h2>
    </div>
    <hr />
    <div class="form__inner">
      <div class="form__img">
        <img src="/images/logo.png" alt="" class="image" />
      </div>
      <div class="form__wrapper">
        <div class="form__header">
          <h2>Заполните форму</h2>
        </div>
        <form>
          <div class="form__input">
            <input-ui v-model="formData.name" placeholder="Ваше имя"></input-ui>
          </div>

          <div class="form__input">
            <input-ui
              v-model="formData.phone"
              placeholder="Ваш телефон"
            ></input-ui>
          </div>

          <button-ui>Оставить заявку</button-ui>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

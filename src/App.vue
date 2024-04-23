<script setup lang="ts">
import NavbarView from './components/navbar-view.vue';
import FooterView from './components/footer-view.vue';
import ContactForm from './components/contact-form.vue';
</script>

<template>
  <main class="app__container">
    <navbar-view></navbar-view>
    <router-view></router-view>
    <contact-form></contact-form>
    <footer-view></footer-view>
  </main>
</template>

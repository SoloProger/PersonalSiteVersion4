<script setup lang="ts"></script>

<template>
  <nav>
    <div class="nav__wrapper">
      <router-link to="/" class="nav__logo"> Andrei Solo</router-link>
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__item__link" to="/about">
            Обо_мне
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__item__link" to="/portfolio">
            Портфолио
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}

.nav__logo {
  padding: 10px;
  font-size: 50px;
  font-weight: 700;
  color: #61dafb;
  text-decoration: none;
}

.nav__list {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.nav__item {
  font-size: 20px;
  margin: 0 15px;
  text-transform: uppercase;
}

.nav__item__link {
  text-decoration: none;
  color: #dadbdc;

  transition: color 0.5s linear;
}

.nav__item__link::after {
  content: '';
  width: 100%;
  height: 3px;

  background-color: #1e88e5;
  opacity: 0;

  display: none;
  z-index: 1;

  transition: opacity 0.5s linear;
}

.nav__item__link:hover {
  color: #1e88e5;
}

.nav__item__link:hover::after {
  opacity: 1;
}

@media (max-width: 700px) {
  .nav__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
  }
}
</style>

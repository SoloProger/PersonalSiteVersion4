<script setup lang="ts">
import ProjectCard from '../segments/portfolio-page/project-card.vue';
</script>

<template>
  <section class="project__list">
    <project-card
      link="https://soloproger.github.io/PersonSite-WithoutFrameWorks/"
      img="/images/mysite.png"
      title="Сайт без фреймворков"
      description="Сайт представляет собой одну страничку с формой. Изначально это был 
            тестовый полигон для HTML/CSS, после тренировок я выложил сайт на GitGub. 
            Да, он очень прост в исполнении, но именно с помощью него я изучил основы верстки."
    ></project-card>
    <project-card
      link="https://github.com/SoloProger/PersonSite"
      img="/images/personsitev3.png"
      title="Сайт. Версия 3"
      description="Мой последний проект персонального сайта, он же и самый ленивый. 
            Я взял готовый шаблон верстки(знаю, так делать не красиво)
            и подделал его под себя. Также глупое решение - оборачивать это проект в SPA. 
            Да, сайт сделан с помощью фреймворка, конкретно - Vue.js третий версии."
    ></project-card>
    <project-card
      link="https://github.com/SoloProger/Site-Portfolio-Front"
      img="/images/personsitev2.png"
      title="Сайт. Версия 2"
      description="Сайт второй версии. Это один из трех крупных персональных сайтов(сайтов-портфолио), которые я делал.
            Сайт был самым навороченным в плане технологий, т.к именно на нём впервые я писал серверную часть на отличном от JS языке.
            Это был PHP, конечно же не в чистом виде, а с фреймворком. Сайт был сделан с душой, но как зря. Много неправильных решений в гамме
            и верстке. Но он мне нравиться."
    ></project-card>
    <project-card
      link="https://github.com/SoloProger/Vue-Shop-Frontend"
      img="/images/buildingsite.png"
      title="Сайт строительной компании"
      description="Сайт строительной компании представляющий из себя лендинг обернутый в SPA, не лучшая задумка, 
            но решение принималось исходя из возмонжного расширения проекта в будущем.
            На сайте имеется форма, бекенд которой написан на Python/Flask."
    ></project-card>
    <project-card
      link="http://react.host1831397.hostland.pro/"
      img="/images/brickproject.png"
      title="Флагман Кирпич"
      description="Первый крупный рабочий проект. Сделан на react+hooks - клиент, Python/Djnago - сервер. Я избавился от css фреймворков и верстал всё ручками,
            поэтому получилось лучше чем мои проекты. Проект получился большим и сложном, он до сих пор развивается."
    ></project-card>
    <project-card
      link="http://mar.host1817853.hostland.pro/"
      img="/images/marriana.png"
      title="Марианна"
      description="Этот и следующий проект - верстка + Wordpress. Они позволят оценить мои навыки верстки. 
            Оценить мои навыки серверного программирования по этим проктам, увы, невозможно"
    ></project-card>
    <project-card
      link="https://obektuv.ru/"
      img="/images/obektuv.png"
      title="Объектув"
      description="Этот проект - верстка + Wordpress. Они позволят оценить мои навыки верстки. 
            Оценить мои навыки серверного программирования по этим проктам, увы, невозможно"
    ></project-card>
  </section>
</template>

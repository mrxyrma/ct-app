<script setup lang="ts">
  import { TableCard } from 'src/entities/table-card';
  import { categoryCards } from 'src/shared/data/category-сards.ts';
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="bg-sky-700 min-h-10 flex justify-center items-center max-sm:min-h-7">
      <h1 class="font-bold text-lg text-gray-50 inline max-sm:text-base">
        Таблицы для подбора оборудования
      </h1>
    </header>

    <main>
      <ul class="grid gap-5 p-5 cards max-w-screen-xl mx-auto">
        <table-card
          v-for="card in categoryCards"
          :key="card._id"
          :title="card.title"
          :src="card.src"
          :link="card.link"
        />
      </ul>
    </main>

    <footer class="bg-sky-700 min-h-10 flex justify-center items-center max-sm:min-h-7">
      <a
        href="mailto:ander_kor@mail.ru?subject=Вопрос по сайту&body=Добрый день!"
        class="font-bold text-lg text-gray-50 inline max-sm:text-base"
      >
        © Андрей Королёв 2024
      </a>
    </footer>
  </div>
</template>

<style scoped>
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
</style>

<template>
  <div class="p-4">

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="data?.Search">
      <div class="grid md:grid-cols-3 gap-4 w-full">
        <div v-for="movie in data.Search" :key="movie.imdbID" @click="goToDetail(movie.imdbID)" class="cursor-pointer">
          <div class="w-full">

            <img :src="movie.Poster" class="w-full max-w-full aspect-[2/3] object-cover h-[400px] rounded-[20px] hover:translate-y-1 shadow-[2px_1px_6px_0px_#0000004D]
  " />
          </div>
          <div class="space-y-0.5 text-center">
            <p class="mt-1 text-center font-bold">{{ movie.Title }}</p>
            <p class="text-sm">(17+)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- pagination  -->
    <div className="flex flex-wrap justify-center items-center mt-6 gap-2 text-white w-full px-2" v-if="totalPage > 1">
      <button @click="store.setPage(store.currentPage - 1)" :disabled="store.currentPage === 1" class="px-3P py-1">Sebelumnya</button>

      <button v-for="page in pages" :key="page" :disabled="page === '...'"
        @click="typeof page === 'number' && goToPage(page)" class="px-3 py-1 rounded-full"
        :class="{ 'bg-red-600 text-white': page === store.currentPage, 'text-red-500': page !== store.currentPage && page !== '...', 'cursor-default': page === '...' }">{{
          page }}</button>
      <button class="px-3 py-1" @click="store.setPage(store.currentPage + 1)"
        :disabled="store.currentPage >= totalPage">Selanjutnya</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useFetchMovies } from '../services/useMovie'
import { useMovieStore } from '../stores/movieStore'
import { getPageList } from '../utils/pagination'


const router = useRouter()
const store = useMovieStore()
const { data, isLoading } = useFetchMovies();

/* pagination */
const totalPage = computed(() => {
  return Math.ceil((Number(data.value?.totalResults) ?? 0) / 10);
});
const pages = computed(() => getPageList(store.currentPage, totalPage.value))
const goToPage = (page: number) => {
  store.setPage(page);
}


const goToDetail = (id: string) => {
  router.push(`/movie/${id}`)
}
</script>
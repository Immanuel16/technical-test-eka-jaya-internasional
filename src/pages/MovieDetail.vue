<template>
  <div class="space-y-8">
    <!-- info detail -->
      <div v-if="isLoading || isInfoLoading">Loading...</div>

    <div class="flex flex-col py-4 px-2 space-y-4" v-if="data">
      <h1 class="text-2xl font-bold">{{ data.Title }}</h1>
      <div class="grid w-full md:flex md:space-x-6">
        <img :src="data.Poster"
          class="w-full md:w-[270px] h-[400px] rounded-[20px] shadow-[2px_1px_6px_0px_#0000004D]" />
        <div class="md:h-[400px] mt-4 md:mt-0 space-y-6 flex flex-col md:justify-between">
          <div class="space-y-4 md:space-y-5">
            <div class="w-full">
              <p>Release Date: {{ data.Released }}</p>
              <p>Language: {{ data.Language }}</p>
              <p>Genre: {{ data.Genre }}</p>
              <p>Cast & Crew: {{ data.Actors }}</p>
              <p>Director: {{ data.Director }}</p>
              <p>Length: {{ data.Runtime }}</p>
            </div>
            <p class="text-2xl font-bold">SINOPSIS</p>
            <p>{{ data.Plot }}</p>
          </div>
          <div class="flex space-x-3 items-center">
            <button
              class="text-white bg-[#c0222e] h-[50px] w-[138px] rounded-[15px] flex justify-center items-center">Buy
              Ticket</button>
            <button
              class="text-white bg-[#c0222e] h-[50px] w-[138px] rounded-[15px] flex justify-center items-center">Watch
              Trailer</button>
          </div>
        </div>
      </div>
    </div>
    <!-- top 3 movies -->
    <div class="space-y-8">
      <h1 class="text-2xl font-bold">Now Playing</h1>

      <div v-if="topThreeMovies?.Search">
        <div class="grid md:grid-cols-3 gap-4 w-full">
          <div v-for="movie in topThreeMovies.Search" :key="movie.imdbID" class="cursor-pointer">
            <img :src="movie.Poster" class="w-full max-w-full h-[400px] aspect-[2/3] object-cover rounded-[20px] hover:translate-y-1 shadow-[2px_1px_6px_0px_#0000004D]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetchMovieDetail, useFetchTop3Movies } from '../services/useMovie'

const route = useRoute()
const { data, isLoading: isInfoLoading } = useFetchMovieDetail(route.params.id as string)
const { data: topThreeMovies, isLoading } = useFetchTop3Movies()
</script>

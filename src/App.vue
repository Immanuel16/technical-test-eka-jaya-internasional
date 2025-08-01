<template>
  <div class="min-h-screen bg-[#232c32] text-white w-full ">
    <!-- HEADER -->
    <header class="bg-red-600 px-4 py-3 flex justify-between items-center">
      <div class="flex items-center md:space-x-[120px]">

        <img src="/public/logo.ico" class="h-[40px] w-[130.97px]" alt="">
        <input class="border hidden md:flex rounded-[20px] md:w-[500px] h-[50px] pl-4 text-black" placeholder="Search Title / Theatre Here" v-model="keywordRef"
          @keyup.enter="search" />
      </div>
      <span class="text-sm">IMAX | DOLBY</span>
    </header>
    <div class="mx-2 mt-3 md:mt-0">

      <input class="border md:hidden flex rounded-[20px] w-full  h-[50px] pl-4 text-black" placeholder="Search Title / Theatre Here" v-model="keywordRef"
            @keyup.enter="search" />
    </div>

    <!-- SIDEBAR & MAIN CONTENT -->
    <div class="flex flex-col md:grid md:grid-cols-[273px_calc(100%-273px)] w-full max-w-screen ">
      <!-- SIDEBAR -->
      <aside class="bg-[#191c1f] py-4 md:min-h-[calc(100vh-302px) w-full">
        <div class="h-[60px] text-white flex items-center pl-4" v-for="(menu, i) in sidebarMenu"
          :class="{ 'bg-[#232c32]': menu.value === store.keyword || i === 0 && store.keyword === 'test' }">{{ menu.name }}
        </div>
      </aside>
      <!-- CONTENT -->
      <main class="w-full py-6 px-4 font-oxygen md:w-[80%]">
        <RouterView />
      </main>
    </div>

    <!-- FOOTER -->
    <footer class="flex justify-center items-center bg-red-600 text-xs text-center text-white py-3 md:h-[228px] px-4 font-oxygen bottom-0 ">
      <div class="w-fulll md:w-[50%] text-left">

        &copy; 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex
        or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya. <br>
        Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara 
        Sejahtera Raya. <br> There is no other institutions/agencies outside
        PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from
        PT Nusantara Sejahtera Raya
      </div>  
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useMovieStore } from './stores/movieStore';
const store = useMovieStore()
const sidebarMenu = [
  { name: 'Now Playing', value: 'now playing' },
  { name: 'Coming Soon', value: 'coming soon' },
  { name: 'Theatre', value: 'theatre' },
  { name: 'Promotion', value: 'promotion' },
  { name: 'Informations', value: 'informations' }
]

const keywordRef = ref()
const search = () => {
  store.setKeyword(keywordRef.value)
}
</script>

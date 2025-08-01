<template>
  <div class="flex flex-col py-4 animate-pulse">
    <div class="grid md:grid-cols-3 gap-4 w-full">
      <div v-for="n in 10" :key="n" class="space-y-4">
        <div class="w-full">
          <div class="w-full bg-gray-700 max-w-full aspect-[2/3] object-cover h-[400px] rounded-[20px] hover:translate-y-1 shadow-[2px_1px_6px_0px_#0000004D]"></div>
        </div>
        <div class="space-y-1 flex flex-col items-center">
          <div class="w-[200px] h-6 bg-gray-700 rounded"></div>
          <div class="w-[100px] h-3 bg-gray-700 rounded"></div>

        </div>
      </div>
    </div>

    <!-- pagination  -->
    <div className="flex flex-wrap justify-center items-center mt-6 gap-2 text-white w-full px-2">
      <div class="w-[200px] h-6 bg-gray-700 rounded"></div>


      <div v-for="c in 5" :key="c" class="w-[24px] h-6 bg-gray-700 px-3 py-1 rounded-full"></div>
      <div class="w-[200px] h-6 bg-gray-700 rounded"></div>
    </div>
  </div>
</template>
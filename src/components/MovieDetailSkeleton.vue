<template>
  <div class="flex flex-col py-4 px-2 space-y-4 animate-pulse">
    <div class="w-[200px] h-6 bg-gray-700 rounded"></div>
    <div class="grid w-full md:flex md:space-x-6">
      <div class="bg-gray-700 w-full md:w-[270px] h-[400px] rounded-[20px] "></div>
      <div class="md:h-[400px] mt-4 md:mt-0 space-y-6 flex flex-col md:justify-between">
        <div class="space-y-4 md:space-y-5">
          <div class="w-full space-y-2">
            <div class="w-24 h-4 bg-gray-700 rounded"></div>
            <div class="w-[120px] h-4 bg-gray-700 rounded"></div>
            <div class="w-[160px] h-4 bg-gray-700 rounded"></div>
            <div class="w-[120px] h-4 bg-gray-700 rounded"></div>
            <div class="w-[160px] h-4 bg-gray-700 rounded"></div>
            <div class="w-[120px] h-4 bg-gray-700 rounded"></div>
          </div>
          <div class="w-24 h-6 bg-gray-700 rounded"></div>

          <div class="w-full h-24 bg-gray-700 rounded"></div>

        </div>
        <div class="flex space-x-3 items-center">
          <div class="text-white bg-gray-700 h-[50px] w-[138px] rounded-[15px] flex justify-center items-center"></div>
          <button
            class="text-white bg-gray-700 h-[50px] w-[138px] rounded-[15px] flex justify-center items-center"></button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col py-4 px-2 animate-pulse">
    <!-- top 3 movies -->
    <div class="space-y-8">
          <div class="w-[200px] h-6 bg-gray-700 rounded"></div>


      <div class="grid md:grid-cols-3 gap-4 w-full">
        <div v-for="n in 3" :key="n + 'list'" class="cursor-pointer">
          <div  class="w-full max-w-full bg-gray-700 h-[400px] aspect-[2/3] object-cover rounded-[20px] hover:translate-y-1 shadow-[2px_1px_6px_0px_#0000004D]"> </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
    <div v-for="n in 8" :key="n" class="space-y-2">
      <div class="w-full h-64 bg-gray-700 rounded"></div>
      <div class="h-4 w-3/4 bg-gray-700 rounded mx-auto"></div>
    </div>
  </div> -->
</template>
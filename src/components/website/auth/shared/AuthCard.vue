<template>
  <div class="w-full min-h-full flex items-center justify-center py-6">
    <div
      class="bg-white w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 rounded-xl shadow-lg shadow-gray-200"
    >
      <div class="px-8 md:px-12 pt-14 md:pt-16">
        <slot />
      </div>
      <div>
        <img
          class="rounded w-full object-contain"
          :src="require(`@/assets/login/passwordpg.svg`)"
          alt="passwordpg"
        />
      </div>
    </div>
  </div>
</template>
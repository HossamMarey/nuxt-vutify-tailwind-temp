<template>
  <v-app>
    <div
      class="w-full max-h-screen overflow-hidden grid grid-cols-1"
      :class="fullWidth ? '' : 'lg:grid-cols-2'"
    >
      <div
        v-if="!fullWidth"
        class="h-screen bg-cover items-center justify-center hidden lg:flex"
        :style="`background-image: url(${backgroundImage});`"
      >
        <div class="my-12 mx-8 max-w-lg min-h-[60%] flex flex-col justify-between">
          <div>
            <h1
              v-if="sideTitle"
              class="text-white font-bold leading-tight first-letter:text-secondary first-letter:text-6xl"
            >{{sideTitle}}</h1>
            <p v-if="sideSubTitle" class="text-white mt-3 text-lg">{{ sideSubTitle }}</p>
          </div>
          <v-img
            v-if="sideLogo"
            class="flex-grow-0"
            :class="[
              'signture-image',
              { ar: $i18n.locale == 'ar' },
              { en: $i18n.locale != 'ar' },
            ]"
            :src="require(`@/assets/login/zrelators-signture.png`)"
            alt="zrelators"
            width="230.04px"
            height="40px"
          />
        </div>
      </div>
      <div
        class="max-h-screen min-h-screen overflow-auto"
        :class="`${fullWidth ? 'bg-bg-light' : '' }`"
      >
        <div
          class="container py-14 min-h-full flex flex-col justify-center items-center"
          :class="`${fullWidth ? '' : '   first:h-[inherit]' }`"
        >
          <slot />
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    backgroundImage: {
      type: String,
      default: require('@/assets/login/SignIn-bg.png'),
    },
    sideTitle: {
      type: String,
      default: '',
    },
    sideSubTitle: {
      type: String,
      default: '',
    },
    sideLogo: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
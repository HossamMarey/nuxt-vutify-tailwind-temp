<template>
  <v-app>
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </v-app>
</template>

<script>
import { handleLangaugeChange } from '../utils/langaugeChanger'
import MainHeader from '@/components/website/layouts/header/header.vue'
import MainFooter from '@/components/website/layouts/footer/footer.vue'
export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {}
  },
  created() {
    if (process.client) {
      const lang = localStorage?.getItem('lang') || this?.$i18n?.locale || 'ar'
      handleLangaugeChange(this, lang)
    }
  },
}
</script>

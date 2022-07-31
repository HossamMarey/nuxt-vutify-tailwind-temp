<template>
  <Nuxt />
</template>

<script>
import { handleLangaugeChange } from '../utils/langaugeChanger'
export default {
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

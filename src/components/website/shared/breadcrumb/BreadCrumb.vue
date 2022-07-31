<template>
  <div v-if="breadcrumbs && breadcrumbs.length" class="flex items-center">
    <div
      v-for="(item , ix) in breadcrumbs"
      :key="ix+ '-breadcrumb'"
      class="flex items-center flex-grow-0 text-text-light"
    >
      <nuxt-link v-if="item.slug" :to="localePath(item.slug)" class="text-text-dark">{{item.title}}</nuxt-link>
      <span v-else>{{item.title}}</span>
      <span v-if="ix !== breadcrumbs.length - 1" class="flex items-center flex-grow-0 mx-1">
        <span class="rtl:hidden">
          <v-icon class="text-sm">mdi-chevron-double-right</v-icon>
        </span>
        <span class="hidden rtl:inline-block">
          <v-icon class="text-sm">mdi-chevron-double-left</v-icon>
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    breadcrumbs: Array,
  },
}
</script>

<style lang="scss" scoped>
.v-icon.v-icon {
  font-size: 1.125rem !important;
}
</style>
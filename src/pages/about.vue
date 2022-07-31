<template>
  <div class="bg-bg-light">
    <div class="mt-14 md:mt-16"></div>
    <section class="container pt-8 md:pt-10">
      <BreadCrumb :breadcrumbs="breadcrumbs" />
    </section>
    <main class="about_page mt-3">
      <About />
    </main>
  </div>
</template>

<script>
import About from '@/components/website/about'
import BreadCrumb from '@/components/website/shared/breadcrumb/BreadCrumb.vue'
export default {
  name: 'IndexPage',
  components: { About, BreadCrumb },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$t('shared.home'),
          slug: `/`,
        },
        {
          title: this.$t('shared.AboutUs'),
        },
      ],
    }
  },
}
</script>

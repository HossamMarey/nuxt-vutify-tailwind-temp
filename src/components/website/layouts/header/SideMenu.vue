<template>
  <div class="w-full">
    <div class="p-3 py-4 bg-black bg-opacity-20 flex items-center justify-between">
      <img
        alt="Logo"
        class="shrink w-fit h-6"
        :class="$i18n.locale == 'ar' ? 'md:ml-16' : 'md:mr-16'"
        contain
        :src="require(`@/assets/logo/primaryLogo.svg`)"
      />
      <span class="text-gray-300 hover:text-secondary cursor-pointer" @click="$emit('closeDrawer')">
        <v-icon class="text-lg" color="white">mdi-close</v-icon>
      </span>
    </div>
    <v-list nav class="p-0">
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item
          v-for="link in links"
          :key="link.name"
          class="hover:bg-black hover:bg-opacity-10 p-0 min-h-0"
          :class="`${$route.name == link.name  ? 'bg-black  bg-opacity-5 ' : ''}`"
        >
          <nuxt-link :to="localePath(link.slug)" tag="a" class="w-full px-3 block py-4 text-base">
            <span
              class="text-white text-base"
              :class="`${$route.name == link.name  ? 'text-secondary' : ''}`"
            >{{ link.title }}</span>
          </nuxt-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      links: [
        {
          name: 'home',
          title: this.$t('header.main'),
          slug: `/`,
        },
        {
          name: 'about',
          title: this.$t('header.about'),
          slug: `/about`,
        },
        {
          name: 'properties',
          title: this.$t('header.properties'),
          slug: `/properties`,
        },
        {
          name: 'faq',
          title: this.$t('header.faq'),
          slug: `/faq`,
        },
        {
          name: 'contact',
          title: this.$t('header.contact'),
          slug: `/contact`,
        },
      ],
    }
  },
}
</script>
 
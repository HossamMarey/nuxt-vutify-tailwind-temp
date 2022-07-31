<template>
  <div>
    <div class="home">
      <div id="homeBack"   class="background-img min-h-[600px]">
        <img
          alt="img"
          class="shrink arrow"
          width="35px"
          contain
          :src="require(`@/assets/img/ico/downArrow.svg`)"
          @click="scrollToView('features')"
        />
      </div>
      H O M E
    </div>
  </div>
</template>

 <script>
 
export default {
   
  data() {
    return {
      homePosts: [
        {
          title: `post1`,
          description: 'post2Description',
          cardImage: 'building',
          buttonTitle: 'readMore',
        },
        {
          title: 'post2',
          description: `postDescription2`,
          cardImage: 'mobiles',
          buttonTitle: 'contactUs',
        },
      ],
    }
  },
  methods: {
    scrollToView(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>
 
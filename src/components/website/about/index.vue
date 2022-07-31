<template>
  <div class="mb-8">
    <div class="container">
      <div class="bg-white rounded-lg p-6 md:p-7">
        <h2 class="text-3xl mb-6" style="font-size: 1.875rem !important">{{$t('about.aboutHeader')}}</h2>
        <div v-for="x in 3" :key="x" class="text-text">
          <p>{{$t('about.aboutText1')}}</p>
          <p>{{$t('about.aboutText2')}}</p>
          <p>{{$t('about.aboutText3')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  components: {},
}
</script>
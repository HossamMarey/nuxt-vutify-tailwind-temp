<template>
  <AuthLayout :sideTitle="$t('LogIn.ExploreFuture')" :sideSubTitle="$t('LogIn.EazySolution')">
    <Login />
  </AuthLayout>
</template>

<script>
import Login from '@/components/website/auth/Login/Login.vue'
export default {
  components: {
    Login,
  },
  layout: 'auth',
}
</script>
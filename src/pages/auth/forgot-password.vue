<template>
  <AuthLayout :fullWidth="true">
    <AuthCard>
      <ForgotPassword />
    </AuthCard>
  </AuthLayout>
</template>

<script>
import ForgotPassword from '@/components/website/auth/forgotpassword/forgotpasswordComponent.vue'
import AuthLayout from '@/components/website/auth/shared/AuthLayout.vue'
import AuthCard from '@/components/website/auth/shared/AuthCard.vue'

export default {
  components: {
    ForgotPassword,
    AuthLayout,
    AuthCard,
  },
  layout: 'auth',
}
</script>
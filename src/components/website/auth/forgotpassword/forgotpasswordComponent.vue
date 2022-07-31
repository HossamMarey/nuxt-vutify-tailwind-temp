<template>
  <div class="max-w-sm mx-auto">
    <div class="text-center mb-6">
      <h4 class="text-center">{{ $t("password.ForgotPassword") }}</h4>
      <p class="mt-4">{{ $t("password.EnterYourEmail") }}</p>
    </div>
    <v-form>
      <div class="verivication-input-wrapper">
        <v-input
          placeholder="example@gmail.com"
          class="customTextFieldInput"
          :rules="[rules.required, rules.email]"
        />
      </div>
      <v-btn
        class="newsletter"
        classes="text-base capitalize"
        large
        block
        :click="ToEmailVerificationPage"
        :text="$t('password.SendLink')"
      />
    </v-form>
    <div class="pa-0 mt-4 text-center">
      <div class="backToSignAncor">
        <NuxtLink :to="localePath(`/auth/login`)" tag="a">
          {{
          $t("password.BackToSignIn")
          }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
 
<script>
 
import rules from '@/services/rules'

export default {
  components: {
 
  },
  data() {
    return {
      formValues: '',
      email: '',
    }
  },
  computed: {
    rules() {
      return rules.getRules(this)
    },
  },
  methods: {
    ToEmailVerificationPage() {
      this.$router.push({
        path: this.localePath(`/emailVerification`),
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.v-input__slot {
  min-height: 43px;
}

.backToSignAncor {
  margin: 5px 0px;
  a {
    font-family: var(--font-en);
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    color: var(--secondary) !important;
    text-decoration: none !important;
  }
}
</style>
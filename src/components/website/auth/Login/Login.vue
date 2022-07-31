<template>
  <div class="w-full max-w-sm xl:max-w-md mx-auto">
    <div>
      <h3 class="signin-header-wrapper">{{ $t("password.welcomeMessage") }}</h3>
      <p class="mt-3 signin-text-wrapper py-0">{{ $t("password.EnterYourDetailsLog") }}</p>
    </div>
    <v-form>
      <v-input
        placeholder="example@gmail.com"
        class="customTextFieldInput"
        :label="$t('password.email')"
        :data="formData.email"
        :rules="[rules.required, rules.email]"
      />

      <v-input
        placeholder="password"
        :data="formData.password"
        class="customTextFieldInput"
        :label="$t('password.password')"
        :rules="[rules.required, rules.min]"
        :type="showPass ? 'text' : 'password'"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :appendIconClick="showHidePassword"
        @data-changed="formData.password = $event"
      />

    

      <v-btn
        large
        class="custom-btn"
        classes="text-base capitalize"
        block
        :click="Login"
        :text="$t('password.SignIn')"
      />

      <p class="HaveAcountMessage text-center mt-5">
        {{ $t("password.dontHaveAccountMessage") }}
        <nuxt-link
          class="goToSignUpAncor"
          :to="localePath(`/signup`)"
          tag="a"
        >{{ $t("password.SignUp") }}</nuxt-link>
      </p>

     
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
 
import rules from '@/services/rules.ts'

export default {
  components: {
 
  },
  data() {
    return {
      formData: {
        password: '',
        email: '',
      },
      rememberMe: '',
      showPass: false,
    }
  },
  computed: {
    ...mapGetters({ isLoggedIn: 'common/isLoggedIn' }),
    rules() {
      return rules.getRules(this)
    },
  },
  methods: {
    showHidePassword() {
      this.showPass = !this.showPass
    },
    Login() {
      this.$store.commit('common/logIn')
      this.$router.push(this.localePath(`/`))
    },
  },
}
</script>

<style lang="scss" scoped>
.signIn-warrper {
  background-color: var(--white);

  .signIn-wrapper {
    padding-top: 90px;
  }
  .signin-header-wrapper {
    color: var(--color-primary);
    font-family: var(--font-en);
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 29px;
  }
  .signin-text-wrapper {
    color: var(--text-mute-02);
    font-family: var(--font-en);
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 17px;
  }
}
.signin-background {
  background-image: url(@/assets/login/SignIn-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(7, 7, 7, 0.171);
  box-shadow: inset 0 0 0 1000px rgba(12, 12, 12, 0.356);
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
}

.Sign-in-explore-head {
  padding: 0px 100px 0px 90px;
  font-weight: 700;
  font-family: var(--font-en);
  font-style: normal;
  line-height: 68px;
  color: var(--white);
  h1 {
    max-width: 553px;
  }
}
.Sign-in-explore-head::first-letter {
  color: var(--color-gold);
}
.Sign-in-explore-text {
  padding: 12px 100px 0px 90px;
  font-weight: 500;
  font-family: var(--font-en);
  font-style: normal;
  font-size: 1.25rem;
  line-height: 24px;
  color: var(--white);
}
.signture-image {
  position: absolute;
  bottom: 77px;

  &.ar {
    right: 100px;
  }
  &.en {
    left: 100px;
  }
}
.remmeber {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
}
.row + .row {
  margin-top: 8px;
}
.HaveAcountMessage {
  font-family: var(--font-en);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 20px;
  color: var(--text-mute);
}
.goToSignUpAncor {
  font-family: var(--font-en);
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 20px;
  color: var(--color-primary);
}
.ForgotPassAncor {
  color: var(--color-primary);
  font-family: var(--font-en);
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 15px;
}

@media only screen and (max-width: 959px) {
  .signin-background {
    display: none;
  }
  .signin-header-wrapper {
    text-align: center;
  }
  .signin-text-wrapper {
    text-align: center;
  }
  .custom-btn {
    padding: 15px 0px 16px;
  }
}
</style>
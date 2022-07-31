<template class="customHeader" >
  <header>
    <transition name="slide-fade">
      <v-app-bar app :color="scrollPosition > 50 ? 'primary' : headerColor" class="site-app-bar">
        <v-container class="d-flex align-center">
          <nuxt-link class="flex flex-grow-0 flex-shrink w-fit" :to="localePath('/')" tag="a">
            <img
              alt="Logo"
              class="shrink w-fit h-6"
              :class="$i18n.locale == 'ar' ? 'md:ml-16' : 'md:mr-16'"
              contain
              :src="require(`@/assets/logo/primaryLogo.svg`)"
            />
          </nuxt-link>
          <v-list v-if="$vuetify.breakpoint.lgAndUp" nav dense>
            <v-list-item-group
              v-model="group"
              :class="[$vuetify.breakpoint.lgAndUp ? 'd-flex' : '']"
            >
              <v-list-item :class="[{ 'site-app-bar--active': $route.name == 'home' }]">
                <nuxt-link :to="localePath('/')" tag="a">
                  <v-list-item-title>{{ $t("header.main") }}</v-list-item-title>
                </nuxt-link>
              </v-list-item>

              <v-list-item :class="[{ 'site-app-bar--active': $route.name == 'about' }]">
                <nuxt-link :to="localePath('/about')" tag="a">
                  <v-list-item-title>
                    {{
                    $t("header.about")
                    }}
                  </v-list-item-title>
                </nuxt-link>
              </v-list-item>

              <v-list-item
                :class="[
                  { 'site-app-bar--active': $route.name == 'properties' },
                ]"
              >
                <nuxt-link :to="localePath('/properties')" tag="a">
                  <v-list-item-title>
                    {{
                    $t("header.properties")
                    }}
                  </v-list-item-title>
                </nuxt-link>
              </v-list-item>

              <v-list-item :class="[{ 'site-app-bar--active': $route.name == 'faq' }]">
                <nuxt-link :to="localePath('/faq')" tag="a">
                  <v-list-item-title>{{ $t("header.faq") }}</v-list-item-title>
                </nuxt-link>
              </v-list-item>

              <v-list-item :class="[{ 'site-app-bar--active': $route.name == 'contact' }]">
                <nuxt-link :to="localePath('/contact')" tag="a">
                  <v-list-item-title>
                    {{
                    $t("header.contact")
                    }}
                  </v-list-item-title>
                </nuxt-link>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-spacer></v-spacer>

          <v-menu
            v-if="$store.state.common.isAuth"
            ref="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-img
                  alt="calender"
                  class="shrink mr-1 ml-1"
                  contain
                  :src="require(`@/assets/img/ico/light-calendar.svg`)"
                />
              </v-btn>
            </template>
            <v-date-picker
              no-title
              class="customDatePic"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
              scrollable
            ></v-date-picker>
          </v-menu>

          <v-badge v-if="$store.state.common.isAuth" color="error" dot overlap>
            <v-img
              alt="Notification"
              class="shrink mr-1 ml-1"
              contain
              :src="require(`@/assets/img/ico/Notification.svg`)"
            />
          </v-badge>
          <v-btn text color="white" @click="changeLanguage">{{ $i18n.locale == "ar" ? "en" : "ar" }}</v-btn>

          <v-menu
            v-if="$store.state.common.isAuth"
            ref="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-img
                  alt="calender"
                  class="shrink mr-1 ml-1"
                  contain
                  :src="require(`@/assets/img/Avatar.png`)"
                />
                <div class="d-flex align-center">
                  <div class="drowpdown-profile">Hi Ahmed</div>
                  <div>
                    <v-img
                      alt="calender"
                      width="12"
                      height="10"
                      :src="require(`@/assets/img/ico/ArrowRectangle.svg`)"
                    />
                  </div>
                </div>
              </v-btn>
            </template>
            <div class="dropdown">
              <v-card-title class="text-h5">
                <p class="dropdown__title">{{ $t("profile.ViewProfile") }}</p>
                <v-spacer></v-spacer>
                <v-btn class="dropdown__icon" icon>
                  <img src="@/assets/img/ico/Cheveron.svg" alt="Edit.svg" />
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <div class="account-dropdown">
                <nuxt-link :to="localePath('/user/profile')">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="@/assets/img/Avatar.png" alt="user" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="account-dropdown__title">{{ $t("profile.name") }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </nuxt-link>
              </div>
              <div class="account-dropdown">
                <nuxt-link :to="localePath('/realtor/profile')">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="@/assets/img/Avatar2.png" alt="user" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="account-dropdown__title">Asma Naser</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </nuxt-link>
              </div>
              <v-divider></v-divider>
              <div>
                <v-btn class="logout-dropdown" @click="Logout">
                  <v-list-item>
                    <v-list-item-avatar size="16.67">
                      <v-img src="@/assets/profile/icons/logout.svg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__logout">
                        {{
                        $t("profile.Logout")
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-btn>
              </div>
            </div>
          </v-menu>

          <v-btn v-if="!$store.state.common.isAuth" text color="white" @click="openLogin">
            <v-img
              alt="user"
              class="shrink mr-1 ml-1"
              contain
              :src="require(`@/assets/img/ico/user.svg`)"
            />
            {{ $t("header.login") }}
          </v-btn>

          <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" />
        </v-container>
      </v-app-bar>
    </transition>

    <v-navigation-drawer
      v-model="drawer"
      class="drawerStyle"
      absolute
      temporary
      :right="$i18n.locale == 'ar'"
    >
      <SideMenu @closeDrawer="log" />
    </v-navigation-drawer>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import SideMenu from './SideMenu.vue'
import { handleLangaugeChange } from '@/utils/langaugeChanger'

export default {
  name: 'CustomHeader',
  components: {
    SideMenu,
  },
  props: ['auth'],
  data: () => ({
    drawer: false,
    group: null,
    scrollPosition: null,
    data: '',
  }),
  computed: {
    ...mapGetters({ isLoggedIn: 'common/isLoggedIn' }),
    headerColor() {
      const path = this.$i18n?.locale === 'ar' ? '/' : `/${this.$i18n?.locale}`
      if (path && path === this.$route.path) {
        return 'transparent'
      } else {
        return 'primary'
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    log() {
      this.drawer = !this.drawer
    },
    changeLanguage() {
      handleLangaugeChange(this, this.$i18n.locale === 'ar' ? 'en' : 'ar')
    },
    getNewPath(lang) {
      const fullPath = this.$route.fullPath
      const oldLang = fullPath.split('/').pop()
      const route = fullPath.split('/')

      if (oldLang === 'ar' || oldLang === 'en' || fullPath === '/') {
        route.pop()
      }

      route.push(lang)

      return route.join('/')
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    openLogin() {
      this.$router.push(this.localePath(`/auth/login`))
    },
    Logout() {
      this.$store.commit('common/logout')
      this.$router.push(this.localePath('/'))
    },
  },
}
</script>

<style scoped lang="scss">
.drawerStyle {
  background-color: var(--primary) !important;
  transform: unset !important;
  height: 100vh !important;
  position: fixed;
}
.v-sheet.v-app-bar.v-toolbar.site-app-bar {
  transition: background-color 0.3s;
  box-shadow: none;
}

.v-list {
  background: transparent !important;
}

.v-list-item-group {
  &.hover {
    &::before {
      opacity: 0;
    }
  }

  .v-list-item {
    justify-content: center;
    height: 40px;
    padding: 18px;
    margin-top: 4px;

    .v-list-item__title {
      font-size: 1rem;
      line-height: 1.5rem;
      color: white;
    }
  }

  .v-list-item--active {
    &::before {
      content: none;
    }
  }
}
.dropdown {
  background: var(--white);
  box-shadow: 20px 50px 80px rgba(8, 20, 48, 0.09);
  border-radius: 10px;
  &__logout {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #737680;
  }
}
.account-dropdown {
  margin: 24px 20px;
  background: var(--bg-light-01);
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.02),
    inset 0px -1px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  &__title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    color: #101018;
  }
}
.logout-dropdown {
  width: 100%;
  overflow: hidden;
}
.drowpdown-profile {
  margin-inline: 5px;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 22px;
  color: var(--white);
}
.v-menu__content--fixed {
  top: 45px !important;
  margin-left: -20px;
}
.mdi-menu::before {
  color: white;
}

a {
  text-decoration: none;
  color: var(--text-color-01) !important;
  text-align: center;
}

.site-app-bar--active {
  a {
    color: var(--basic-color-01) !important;
  }
}

.small-menu {
  width: 100%;
  margin-top: 104px;
  text-align: center;
  transform: 0.3s ease-in-out all;
  animation: slidein 0.4s ease-in-out;
}

@keyframes slidein {
  from {
    transform: translateY(-200px);
  }

  to {
    transform: translateY(0%);
  }
}

.slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

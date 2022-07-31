<template>
  <footer class="footer">
    <v-container class="pb-0">
      <div class="footer__top">
        <div class="row justify-center text-start">
          <div class="col-md-3">
            <div class="logo">
              <img
                class="m-2"
                :src="require(`@/assets/logo/primaryLogo.svg`)"
                alt="data future"
                width="70%"
              />
            </div>

            <p class="underIconText px-3">{{ $t("footer.underIconText") }}</p>
            <p class="underIconText2 px-3">{{ $t("footer.underIconText2") }}</p>

            <div class="d-flex footer__social">
              <v-hover v-for="link in socialLinks" :key="link.type" v-slot="{ hover }">
                <v-btn
                  :elevation="0"
                  fab
                  class="mr-2"
                  :color="hover ? 'secondary' : 'lightPrimary'"
                  small
                >
                  <img
                    :src="require(`@/assets/img/ico/${link.type}.svg`)"
                    alt="Twitter"
                    width="15"
                    height="15"
                    @click="openURL(link.link)"
                  />
                </v-btn>
              </v-hover>
            </div>
          </div>

          <div class="col-md-2 px-2 footer__links">
            <nuxt-link :to="localePath(`/projects`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.projects") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/about`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.about") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/blogs`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.realEstateGuide") }}</p>
            </nuxt-link>
          </div>

          <div class="col-md-2 px-2 footer__links">
            <nuxt-link :to="localePath(`/commercial-service`)" tag="a">
              <p
                class="footer__list_header"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.commercialServices") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/PartnerSignup`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.partnerWithUs") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/contact`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.contact") }}</p>
            </nuxt-link>
          </div>

          <div class="col-md-2 px-2 footer__links">
            <nuxt-link :to="localePath(`/PartnerSignup`)" tag="a">
              <p
                class="footer__list_header"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.becomePartner") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/request-meeting`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.reserveYourProperty") }}</p>
            </nuxt-link>

            <nuxt-link :to="localePath(`/developers`)" tag="a">
              <p
                class="footer__list_header px-1"
                :class="$i18n.locale == 'ar' ? 'footer__list_header_AR' : ''"
              >{{ $t("footer.developers") }}</p>
            </nuxt-link>
          </div>

          <div class="col-md-3 px-2 footer__contact-info">
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                <span dir="ltr">{{ $t("footer.footerLocation") }}</span>
              </p>
            </div>

            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                <a href="tel:+2002 15732" dir="ltr">+2002 15732</a>
              </p>
            </div>

            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                <a href="mailto:info@zrealtors.com" dir="ltr">info@zrealtors.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div class="w-full bg-black bg-opacity-30 mt-10 md:mt-12">
      <v-container>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-3 grid-flow-row-dense">
          <div class="hidden md:block"></div>
          <div class="flex items-center gap-3 md:col-start-3 md:justify-end">
            <nuxt-link :to="localePath(`/terms`)" tag="a">{{ $t("footer.termsAndConditions") }}</nuxt-link>
            <nuxt-link :to="localePath(`/policy`)" tag="a">{{ $t("footer.privacyPolicy") }}</nuxt-link>
          </div>
          <div class="lg:text-center">
            <p class="mb-0">
              @2022
              <span class="text-secondary">Zrealtors</span>
              . {{ $t("footer.copyRights") }}
            </p>
          </div>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  data: () => ({
    socialLinks: [
      { type: 'facebook', link: '' },
      { type: 'twitter', link: '' },
      { type: 'linkedin', link: '' },
      { type: 'instagram', link: '' },
    ],
  }),
  methods: {
    openURL(url) {
      if (url) {
        window.open(url, '_blank')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--primary);
  color: var(--white);
  padding-top: 80px;
  background-image: url('@/assets/img/footer-line.png'),
    url('@/assets/img/footer-line.png'), url('@/assets/img/footer-line.png'),
    url('@/assets/img/footer-line.png');
  background-position: 5% top, 35% top, 65% top, 95% top;

  background-size: contain;
  .footer__list_header {
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 0.875rem !important;
    margin-bottom: 20px;
  }
  .footer__list_header_AR {
    letter-spacing: 0 !important;
  }
  .footer__bottom {
    position: relative;
  }
  .footer__bottom p {
    margin: auto;
  }
  .footer__privacy {
    position: absolute;
    right: 0;

    @media screen and (max-width: 1020px) {
      position: unset;
    }
  }
  .underIconText {
    line-height: 32px;
    margin-top: 20px;
    max-width: 300px;
  }
  .underIconText2 {
    line-height: 32px;
    margin-top: 0px;
    max-width: 300px;
  }
  .footer__bottom > p > span {
    color: var(--secondary);
  }
  &__links {
    p {
      line-height: 36px;
    }
  }

  &__contact-info {
    p {
      line-height: 29px;
    }
  }

  &__companyTitle {
    line-height: 36px;
    margin-bottom: 10px;
  }

  &__companyInfo {
    p {
      margin-bottom: 24px;
    }
  }

  &__social {
    margin-top: 30px;

    img {
      margin-inline: 8px;
      cursor: pointer;
    }
  }

  hr {
    margin-top: 70px;
  }

  a {
    text-decoration: none;
    color: var(--white) !important;
  }
}
</style>

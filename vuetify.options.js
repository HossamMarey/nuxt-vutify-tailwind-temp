import ar from 'vuetify/lib/locale/ar'
import en from 'vuetify/lib/locale/en'

const vuetifyOptions = {
  // breakpoint: {},
  // icons: {},
  treeShake: true,
  theme: {
    dark: false,
    light: true,
    themes: {
      light: {
        primary: '#220054',
        accent: '#82b1ff',
        secondary: '#c8a45d',
        info: '#548e2d',
        warning: '#ffc107',
        error: '#e83a3a',
        success: '#4caf50',
        btn: '#220054',
        lightPrimary: '#57407a',
        midGray: '#6b7280',
        darkPrimary: '#1B2534',
        lightDark: '#383e43',
        subtitle: '#777E90',
      }
    },
  },
  rtl: true,
  lang: {
    locales: { ar, en }
  }
}

export default vuetifyOptions;
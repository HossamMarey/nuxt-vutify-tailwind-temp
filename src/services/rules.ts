const getRules = (app: any) => {
  if (!app || !process.client) {
    return {}
  }
  const i18n = app.$i18n
  const minLength = 8;
  const maxNormalLength = 60;
  const rules = {
    required: (value: unknown) => !!value || i18n.t('errors.required'),
    min: (value: string) => {
      return value.length >= minLength ||
        i18n.t('errors.minLength', { num: minLength })
    },
    max: (value: string) => {
      return value.length <= maxNormalLength ||
        i18n.t('errors.maxLength', { num: maxNormalLength })
    },
    email: (email: string) => {
      return !!String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || i18n.t('errors.email')
    },
    confirmPassword: (value: string, confirmPassword: string) => {
      return value === confirmPassword || i18n.t('errors.passwordMatch')
    },
  }

  return rules
}

export default { getRules }
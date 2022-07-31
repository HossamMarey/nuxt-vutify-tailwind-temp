# some code snippets 

## links 
 - nuxt link 
 - localePath => handle langauge  changes

 `
  <NuxtLink :to="localePath('/auth/login')">link</NuxtLink>
  `
  `
  this.$router.push(this.localePath('/auth/login'));
 `
**https://i18n.nuxtjs.org/basic-usage**

## custom rules 
 `import rules from '@/services/rules.ts'`
 
 `
 computed: {
    rules() {
      return rules.getRules(this)
    },
  }
  `
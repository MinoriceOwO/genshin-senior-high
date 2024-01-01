<script setup lang="ts">

defineComponent({
  name: 'MainFooter'
})

const openInNewTab = (link: string): void => {
  window.open(link)
}

</script>

<template>
  <v-footer class="main-footer text-align-center">
    <div class="main-footer-content-container">
      <v-btn
        color="transparent"
        elevation="0"
        icon
        @click="openInNewTab('https://github.com/MinoriceOwO/genshin-senior-high')"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <p>
        &nbsp;Powered by 
        <NuxtLink to="https://nuxt.com">Nuxt.JS</NuxtLink>
        &nbsp;&&nbsp;
        <NuxtLink to="https://vuetifyjs.com">Vuetify.JS</NuxtLink>
        &nbsp;&&nbsp;
        <NuxtLink to="https://vuejs.org">Vue.JS</NuxtLink>&nbsp;
      </p>
      <p>
        Made by <NuxtLink to="https://github.com/MinoriceOwO">Minorice</NuxtLink> with ❤️
      </p>
      <p>
        <s>Genshin</s> Hangzhou Senior High School, a <NuxtLink to="https://www.xn--8mrq2kk1b027c.com/">Genshin College Alliance</NuxtLink> member.
      </p>
    </div>
  </v-footer>
</template>

<style>

.main-footer {
  margin-top: 80px;
  background: rgb(95, 181, 221) !important;
  color: white !important;
  justify-content: center;
}

.main-footer-content-container {
  margin-bottom: 40px;
}

.main-footer-content-container p {
  font-weight: lighter;
  font-family: 'Product Sans';
  font-size: 16px;
}

</style>

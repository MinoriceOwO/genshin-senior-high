<script setup lang="ts">

useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - 原神高级中学` : '原神高级中学'
  }
})

</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

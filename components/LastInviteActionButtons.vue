<script setup lang="ts">

defineComponent({
  name: 'LastInviteActionButtons'
})

// this --> methods
const pushRouter = (link: string): void => {
  const router = useRouter()
  router.push({ path: link })
}

</script>

<template>
  <v-container class="last-invite-container">
    <div class="text-align-center">
      <p class="last-invite-sub-title">还在等待什么?</p>
      <p class="last-invite-title">加入杭高!</p>
      <v-btn
        prepend-icon="mdi-rocket-outline"
        size="x-large"
        color="#58B2DC"
        elevation="0"
        variant="outlined"
        @click="pushRouter('/docs')"
      >
        开始入学
      </v-btn>
    </div>
  </v-container>
</template>

<style>

.last-invite-container {
  margin-top: 50px;
}

.last-invite-sub-title {
  font-weight: medium;
  font-size: x-large;
  margin-bottom: 20px;
}

.last-invite-title {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
}

</style>

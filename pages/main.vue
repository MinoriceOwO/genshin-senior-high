<script setup lang="ts">

useHead({
  title: '首页'
})

const whiteWrapper: globalThis.Ref = ref(null)

const clearWrapper = ():void => {
  whiteWrapper.value.$el.style.opacity = '0'
  setTimeout(() => {
    whiteWrapper.value.$el.style.visibility = 'none'
    whiteWrapper.value.$el.style.display = 'none'
  }, 1500)
}

onMounted(() => {
  setTimeout(() => {
    clearWrapper()
  }, 500)
})

</script>

<template>
  <div>
    <Teleport to="body">
      <WhiteWrapper ref="whiteWrapper" />
    </Teleport>
    <MainDynamicTitle class="main-dyn-title-root" />
    <MainActionButtons />
    <MainCards />
    <LastInviteActionButtons />
    <MainFooter />
  </div>
</template>

<style>

.main-dyn-title-root {
  margin-top: 10vh;
  margin-bottom: 10vh;
}

</style>

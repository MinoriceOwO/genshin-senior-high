<script setup lang="ts">

defineComponent({
  name: 'WhiteWrapper'
})

</script>

<template>
  <div class="main-white-wrapper" />
</template>

<style>

.main-white-wrapper {
  z-index: 2000;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  transition: opacity 1.5s;
  position: fixed;
  top: 0;
  visibility: visible;
}

</style>

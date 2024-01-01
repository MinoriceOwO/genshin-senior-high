<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({
  name: 'IndexPage',
  layout: 'index-layout'
})

const giLogo: globalThis.Ref = ref(null)
const showCopyrightInfo: boolean = true
const cpTexture: globalThis.Ref = ref(null)
const router = useRouter()

const clearLogoOpacity = (): void => {
  giLogo.value.$el.style = 'opacity: 1;'
}

const clearTextureOpacity = (): void => {
  cpTexture.value.$el.style = 'opacity: 1;'
}

const setLogoAndTextureOpacity = (): void => {
  giLogo.value.$el.style = 'opacity: 0;'
  cpTexture.value.$el.style = 'opacity: 0;'
}

onMounted(() => {
  setTimeout(() => { clearLogoOpacity() }, 500)
  if (showCopyrightInfo === true) {
    setTimeout(() => {
      clearTextureOpacity()
    }, 1000)
  }
  setTimeout(() => {
    setLogoAndTextureOpacity()
    setTimeout(() => {
      router.push({ path: '/main' })
    }, 1500)
  }, 3000)
})

</script>

<template>
  <div>
    <v-container class="v-container-index d-flex">
      <v-col class="align-self-center text-align-center">
        <NuxtImg
          class="
            gi-logo-main
            justify-img
          "
          ref="giLogo"
          src="https://static.asagi.cc/resources/genshin-senior-high/img/Logo_CHS_Recolored.png"
          @click.right.prevent
        />
      </v-col>
    </v-container>

    <v-col ref="cpTexture" class="index-fake-copyright-texture text-align-center display-block justify-index-texture" v-if="showCopyrightInfo">
      <p> 抵制不良游戏, 拒绝盗版游戏, 注意自我保护, 谨防受骗上当, 适度游戏益脑, 沉迷游戏伤身, 合理安排时间, 享受健康生活。 </p>
      <p> "原神" 是上海米哈游天命科技有限公司/COGNOSPHERE PTE. LTD. 持有的商标。 </p>
      <p> 这是一个开源项目, 与"原神"/上海米哈游天命科技有限公司/COGNOSPHERE PTE. LTD./HoYoVerse 无关。 </p>
    </v-col>
  </div>
</template>

<style>

.gi-logo-main {
  opacity: 0;
  transition: opacity 1.5s;
}

.index-fake-copyright-texture {
  color: rgb(117, 117, 117);
  font-family: 'HYWH-85W';
  opacity: 0;
  transition: opacity 1.5s;
}

</style>

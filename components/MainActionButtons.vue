<script setup lang="ts">

defineComponent({
  name: 'MainActionButtons'
})

// this.$data
let isVideoShow = ref(false)

// this --> methods
const openInNewTab = (link: string): void => {
  window.open(link)
}
const pushRouter = (link: string): void => {
  const router = useRouter()
  router.push({ path: link })
}


</script>

<template>
  <v-container class="main-act-btn-container d-flex">
    <div class="main-act-btn-div">
      <div class="main-act-btn-sub-div">
        <v-btn
          prepend-icon="mdi-rocket-outline"
          size="x-large"
          color="#58B2DC"
          elevation="0"
          @click="pushRouter('/docs')"
        >
          开始入学
        </v-btn>
      </div>
      <div class="main-act-btn-sub-div">
        <v-btn
          prepend-icon="mdi-play-outline"
          size="x-large"
          color="#58B2DC"
          elevation="0"
          variant="outlined"
          @click="isVideoShow = true"
        >
          为什么选择杭高?
        </v-btn>
      </div>
      <div class="main-act-btn-sub-div">
        <v-btn
          prepend-icon="mdi-github"
          size="x-large"
          color="black" 
          elevation="0"
          @click="openInNewTab('https://github.com/MinoriceOwO/genshin-senior-high')"
        >
          &nbsp;GitHub&nbsp;
        </v-btn>
      </div>
    </div>
    <v-dialog v-model="isVideoShow" max-width="800" persistent>
      <video src="https://static.asagi.cc/resources/genshin-senior-high/videos/hg.mp4" autoplay controls />
      <v-btn
        class="video-close-btn align-self-center justify-center"
        color="white"
        variant="outlined"
        @click="isVideoShow = false"
        icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <p style="margin-top: 20px; color: white;" class="text-align-center align-self-center justify-center">
        <p class="d-flex justify-center"><v-icon>mdi-progress-alert</v-icon> 提示</p>
        <p>如果您在播放过程中遇到卡顿等情况, 建议您切换网络环境。</p>
        <p>此视频通过 Cloudflare 进行分发。</p>
      </p>
    </v-dialog>
  </v-container>
</template>

<style>

.main-act-btn-container .v-btn {
  margin-left: 10px;
  margin-right: 10px;
  text-transform: none;
}

@media (width <= 620px) {
  .main-act-btn-sub-div {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-items: center;
    justify-content: center;
  }
}

@media (width > 620px) {
  .main-act-btn-sub-div {
    display: inline-block;
  }
}


.video-close-btn {
  margin-top: 20px;
}

.main-act-btn-div {
  margin-left: auto;
  margin-right: auto;
}

</style>

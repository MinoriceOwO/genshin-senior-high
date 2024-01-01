<script setup lang="ts">

// export default
defineComponent({
  name: 'AppBar'
})

// this.$data
const docs: { name: string, id: number, isOutside: boolean, link: string }[] = [
  {
    name: '入学指南',
    id: 1,
    isOutside: false,
    link: '/docs'
  },
  {
    name: '贡院校区',
    id: 2,
    isOutside: true,
    link: 'http://www.hanggao.net/'
  },
  {
    name: '钱江校区',
    id: 3,
    isOutside: true,
    link: 'http://www.hanggao.net/'
  },
  {
    name: '钱塘学校',
    id: 4,
    isOutside: true,
    link: 'http://www.hanggaoqt.cn/home.htm'
  }
]

// this.$refs
const mainAppBar: globalThis.Ref = ref(null)

// this --> methods
const openInNewTab = (link: string): void => {
  window.open(link)
}
const pushRouter = (link: string): void => {
  const router = useRouter()
  router.push({ path: link })
}

onMounted(() => {
  
})

</script>

<template>
  <v-app-bar
    class="main-appbar d-flex"
    ref="mainAppBar"
    density="comfortable"
    :elevation="0"
  >
    <v-app-bar-title class="margin-left-space-around" @click="pushRouter('/main')">
      <div class="main-appbar-title d-flex">
        <span class="align-self-center light-weight-font">杭州</span>
        <NuxtImg
          src="https://static.asagi.cc/resources/genshin-senior-high/img/Logo_CHS_Recolored.png"
          width="50"
        />
        <span class="align-self-center light-weight-font">高级中学</span>
      </div>
    </v-app-bar-title>
    <div class="margin-right-space-around align-left">
      <v-btn class="dyn-show-btn" :elevation="0" @click="pushRouter('/main')">首页</v-btn>
      <v-menu
        transition="slide-y-transition"
        open-on-hover
        open-on-focus
        open-on-click
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
          >
            文档
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="singleDoc in docs"
            :key="singleDoc.id"
          >
            <v-btn elevation="0" @click="singleDoc.isOutside ? openInNewTab(singleDoc.link) : pushRouter(singleDoc.link)">
              {{ singleDoc.name }}
              <v-icon style="opacity: 0.5;" v-if="singleDoc.isOutside">mdi-open-in-new</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn :elevation="0" @click="pushRouter('/about')">关于</v-btn>
      <v-btn
        :elevation="0"
        icon
        @click="openInNewTab('https://github.com/MinoriceOwO/genshin-senior-high')"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style>

.main-appbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}

.main-appbar-title {
  font-size: medium;
}

.dyn-show-btn {
  display: none;
}

@media (width > 768px) {
  .margin-left-space-around {
    margin-left: 10% !important;
  }
  .margin-right-space-around {
    margin-right: 10% !important;
  }
  .dyn-show-btn {
    display: unset;
  }
}

</style>

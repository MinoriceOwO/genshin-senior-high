<script setup lang="ts">

// export default
defineComponent({
  name: 'MainDynamicTitle'
})

// this.$data
const adjectiveContentsList: string[] = ['令人向往', '具有百廿校史', '科学 民主 求真 创新', '以人为本, 与时俱进', '教人以 丰富 善良 理性 高贵']
let nowAdjectiveShowing: number = 0
let nowAdjectiveContent: globalThis.Ref = ref('令人向往')
let flickingInterval: NodeJS.Timeout

// this.$refs
const typeCursor: globalThis.Ref = ref(null)

// this --> methods
const cursorFlickingIntervalFunc = (): NodeJS.Timeout => {
  const flickingInterval = setInterval(() => {
    typeCursor.value.style.opacity = (typeCursor.value.style.opacity === '0') ? '1' : '0'
  }, 400)
  return flickingInterval
}
const adjectiveContentDynamicChangeInterval = (): NodeJS.Timeout => {
  const dynChangeInterval = setTimeout(() => {
    let nowAdjectiveContentList: string[] = adjectiveContentsList[nowAdjectiveShowing].split('') // 当前的形容词列表化数组, 如: ['令', '人', '向', '往']
    let counter: number = nowAdjectiveContentList.length // 计数器, 用于统计当前正在操作的字符, 初始值为当前数组长度, 如: 4
    let isAdding: boolean = false // 标签, 用于标记当前的操作模式
    let isWaiting: boolean = false // 标签, 是否处于等待状态
    // ↑ true = 逐字添加, false = 逐字减少
    const updateTexture = (target: string) => nowAdjectiveContent.value = target // 将生成的新字符串上载到页面
    setInterval((): boolean => {
      if (isWaiting) { return false }
      if (!isAdding) { // 逐字减少模式, 则删除当前数组中计数器标记的字符
        if (counter <= 0) { // Counter 已经为 0, 所以切换到逐字添加模式, 并更新当前显示的形容词, 同时跳过本次操作, 再等待 0.5s
          isAdding = true
          nowAdjectiveShowing = adjectiveContentsList.length - 1 === nowAdjectiveShowing ? 0 : nowAdjectiveShowing + 1
          // ↑ 如果当前正在显示的形容词已经是列表的最后一个, 则重置回第一个, 否则更新至下一个
          counter = 1 // 重置计数器为 1
          nowAdjectiveContentList = [] // 更新当前的形容词列表化数组, 设为空 (其实没有必要)
          return false
        }
        nowAdjectiveContentList.splice(counter - 1, 1) // 删除 index 为计数器 - 1 的值, 因为 index 从 0 开始, 所以 <array>.length 比 index 大 1
        // 现在已经删除了操作的字符, 如: ['令', '人', '向', '往'] -> ['令', '人', '向']
        counter-- // 计数器 -= 1
        updateTexture(nowAdjectiveContentList.join('')) // 上载新的字符串, 如: '令人向'
        return true
      } else { // 逐字增加模式
        if (counter - 1 === adjectiveContentsList[nowAdjectiveShowing].length) { // 已经完成打字, 切换到逐字减少模式, 跳过本次操作, 再等待 0.5s
          isAdding = false
          isWaiting = true
          setTimeout(() => {
            isWaiting = false
          }, 2000)
          return false
        } else {
          const targetAdjectiveContentList = adjectiveContentsList[nowAdjectiveShowing] // 目标的数组, 即增加完成后的数组
          nowAdjectiveContentList.push(targetAdjectiveContentList[counter - 1]) // 向当前的数组内添加新的文字
          counter++ // 计数器 += 1
          updateTexture(nowAdjectiveContentList.join('')) // 上载新字符串
          return true
        }
      }
    }, 100)
  }, 1500)
  return dynChangeInterval
}

// mounted
onMounted(() => {
  flickingInterval = cursorFlickingIntervalFunc()
  adjectiveContentDynamicChangeInterval()
})

// unmounted
onUnmounted(() => {
  clearInterval(flickingInterval)
})

</script>

<template>
  <v-col class="main-dyn-title-container">
    <div class="text-align-center">
      <p class="main-dyn-title-texture-min">这是一所</p>
      <div style="min-height: 120px;" class="d-flex justify-center align-center">
        <p class="main-dyn-title-texture-lg">
          <span class="main-dyn-title-texture-critical">{{ nowAdjectiveContent }}</span>
          <span ref="typeCursor" class="type-cursor">|</span>
        </p>
      </div>
      <p class="main-dyn-title-texture-md">的高中</p>
    </div>
  </v-col>
</template>

<style>

.main-dyn-title-container {
  width: 100%;
}

@media (0 < width <= 768px) {
  .main-dyn-title-texture-min {
    font-size: 30px;
    font-weight: bold;
  }

  .main-dyn-title-texture-lg {
    font-size: 40px;
    font-weight: bold;
  }

  .type-cursor {
    font-size: 40px !important;
  }

  .main-dyn-title-texture-md {
    font-size: 30px;
    font-weight: bold;
  }
}

@media (width >= 768px) {
  .main-dyn-title-texture-min {
    font-size: 40px;
    font-weight: bold;
  }

  .main-dyn-title-texture-lg {
    font-size: 80px;
    font-weight: bold;
  }

  .main-dyn-title-texture-md {
    font-size: 40px;
    font-weight: bold;
  }
}

.main-dyn-title-texture-critical {
  margin-top: 5px;
  background: linear-gradient(140deg, #66CCFF 25%, #F596AA);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.type-cursor {
  margin-left: 10px;
  font-size: 80px;
  color: #66CCFF;
  background: transparent;
  opacity: 0;
  transition: opacity 0.4s;
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
}

</style>

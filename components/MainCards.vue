<script setup lang="ts">

defineComponent({
  name: 'MainCards'
})

// this.$data
const cards: { id: number; title: string; subtitle: string; text: string; }[] = [
  {
    id: 1,
    title: '😊 学生友好',
    subtitle: '更舒适的体验',
    text: '杭州学业压力最轻松的普通高中之一, 轻松的学业压力能够让你更贴近生活。'
  },
  {
    id: 2,
    title: '⚡ 活动丰富',
    subtitle: '更精彩的生活',
    text: '缤纷多彩的校园活动, 助你在融入集体的同时充分享受乐趣。'
  },
  {
    id: 3,
    title: '🏫 舒适环境',
    subtitle: '更舒心的生活',
    text: '无论是典雅的贡院, 还是风格化的钱江, 抑或是新潮的钱塘, 都能为你带来如家的感受。'
  },
  {
    id: 4,
    title: '🕓 悠长校史',
    subtitle: '更可靠的师资',
    text: '各个名家大师的摇篮, 更是<s>海猫络合物的母校</s>。强大的师资力量使你在学业路上不再是一个人。'
  },
  {
    id: 5,
    title: '✨ 一生荣耀',
    subtitle: '更闪耀的背景',
    text: '高中的学习生涯, 杭高带给你的不仅是丰富的学识, 还有受益终身的能力和品质。'
  },
  {
    id: 6,
    title: '🛣️ 无限可能',
    subtitle: '更开阔的前景',
    text: '和多所高校合作, 辅以三年的学习素养, 杭高让世界成为你的舞台。'
  }
]

</script>

<template>
  <v-container class="wrap-flex dynamic-flex justify-space-around">
    <div v-for="card in cards" :key="card.id" class="v-card-sub-div">
      <v-card max-width="400" class="grey-outlined-card" variant="plain">
        <v-card-item>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
        </v-card-item>
        <v-card-text v-html="card.text">
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<style>

.grey-outlined-card {
  outline-style: solid;
  outline-width: 1px;
  outline-color: rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
}

.v-card-sub-div {
  margin-left: 10px;
  margin-right: 10px;
  max-width: 90vw;
}

/* 谁来帮忙写写响应式啊... 快死了... TwT */

@media (width <= 620px) {
  .v-card-sub-div {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-items: center;
    justify-content: center;
  }
  .dynamic-flex {
    display: unset;
  }
}

@media (620px < width <= 768px) {
  .grey-outlined-card {
    min-height: 172px;
  }
}


@media (768px < width <= 1280px) {
  .grey-outlined-card {
    min-height: 152px;
  }
}

@media (width > 620px) {
  .v-card-sub-div {
    display: inline-block;
    margin-top: 20px;
  }
  .dynamic-flex {
    display: flex !important;
    justify-content: space-around;
  }
  .wrap-flex {
    flex-wrap: wrap;
  }
  .wrap-flex div {
    flex: 0 0 30%;
  }
}

</style>

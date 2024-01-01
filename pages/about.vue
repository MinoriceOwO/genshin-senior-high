<script setup lang="ts">

useHead({
  title: '关于'
})

</script>

<template>
  <div class="template-docs-view">
    <p class="docs-view-title">关于</p>
    <p class="docs-view-content">
      啊嗯... 其实没什么啦... 只是当时看到 <NuxtLink class="a-link-blue" to="https://www.xn--8mrq2kk1b027c.com/">原神高校联盟</NuxtLink> 这个项目, 一时兴起, 就搭了这么一个站。
      <br />
      如果您有空的话, 也欢迎来<NuxtLink class="a-link-blue" to="https://github.com/MinoriceOwO/genshin-senior-high/pulls">提交 Pull Request</NuxtLink>呀~ <s>一起来输出杭高文化</s> (×
      <br />
      大概就是这样... 以后如果想到什么别的会再往这里加的。=w=
      <br />
      <p class="docs-end-line">
        Minorice
        <br />
        于 2024 / 01 / 01
      </p>
    </p>
  </div>
</template>

<style>

.template-docs-view {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

@media (width <= 768px) {
  .template-docs-view {
    width: 90vw;
  }
}

@media (width > 768px) {
  .template-docs-view {
    width: 80vw;
  }
}

.docs-view-title {
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.docs-end-line {
  margin-top: 10px;
  text-align: right;
}

</style>

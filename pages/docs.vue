<script setup lang="ts">

useHead({
  title: '文档'
})

</script>

<template>
  <!-- 惊喜! 根本没有CMS (× -->
  <div class="template-docs-view">
    <p class="docs-view-title">入学指南</p>
    <p class="docs-view-content">
      啊哦, 这里还什么都没有哦...
      <br />
      <s>因为我也不知道要怎么写。</s>
      <br />
      如果您有能力提交此处的内容, 您可以前往本项目的 GitHub 仓库提交 <NuxtLink class="a-link-blue" to="https://github.com/MinoriceOwO/genshin-senior-high/pulls">Pull Request</NuxtLink>。
      <br />
      <p class="docs-end-line">
        <NuxtLink class="a-link-blue a-no-underline" to="https://github.com/MinoriceOwO/genshin-senior-high/blob/main/pages/docs.vue">
          <v-icon>mdi-open-in-new</v-icon>&nbsp;
          <span class="align-self-center">在 GitHub 上编辑</span>
        </NuxtLink>
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

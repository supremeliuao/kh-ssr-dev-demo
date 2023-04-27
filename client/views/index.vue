<template>
  <div class="kh-index">
    kinghiee ssr test
    <img src="@client/assets/imgs/index/csdn-logo.png" alt="logo">
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'kinghiee-ssr-demo',
    meta: [{
      name: 'description',
      content: 'my standard description',
    }]
  },
  mounted() {
    console.log('nihao ---- ceshi');
  }
}
</script>

<style scoped lang="less">
  .kh-index {
    border: 1px solid red;
  }
</style>
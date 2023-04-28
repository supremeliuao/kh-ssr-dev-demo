<template>
  <div class="kh-index">
    <div class="kh-index__center">
      kinghiee
      <img src="@client/assets/imgs/index/csdn-logo.png" alt="logo">
    </div>
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
    display: grid;
    height: 100vh;
    place-content: center;

    &__center {
      border: 1px solid red;
    }
  }
</style>
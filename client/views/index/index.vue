<template>
  <div class="kh-idx">
    <div>
      kinghiee 修改s
      <img src="@client/assets/imgs/index/csdn-logo.png" alt="logo">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo() {
    return {
      title: '首页-index',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
      ]
    };
  },
})
export default class KhIndex extends Vue {
  message = 'Hello World!';
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="less" scoped>
/** @define kh-idx */
.kh-idx {
  border: 1px solid red;
}
</style>


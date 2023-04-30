<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo() {
    return {
      title: 'kh-index',
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
export default class KhApp extends Vue {
}
</script>
<style lang="less" scoped>
</style>

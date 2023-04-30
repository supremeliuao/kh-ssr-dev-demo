<template>
  <div>
    <div>
      kinghiee 修改1111
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
  message = 'Hello World!'
  mounted() {
    console.log('mounted');
  }
}
</script>


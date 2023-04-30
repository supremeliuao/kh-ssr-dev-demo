<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo() {
    return {
      title: 'kh-full',
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
export default class HelloWorld extends Vue {

  // Declared as component data
  message = 'Hello World!';
}
</script>

<template>
  <div class="kh-idx">
    <div class="kh-idx__content">
      <div class="kh-idx__content-title">
        kinghiee`s blogs
      </div>
      <p class="kh-idx__content-tip">
        —— follow ——
      </p>
      <div class="kh-idx__follow">
        <a
          rel="noopener noreferrer"
          class="kh-idx__follow-link"
          href="https://blog.csdn.net/qq_42683219?spm=1000.2115.3001.5343"
          target="_blank"
        >
          <img
            src="@client/assets/imgs/index/csdn-logo.png"
            alt="logo"
            class="kh-idx__follow-icon"
          >
        </a>
        <a
          href="https://github.com/supremeliuao"
          target="_blank"
          rel="noopener noreferrer"
          class="kh-idx__follow-link"
        >
          <img
            src="@client/assets/imgs/index/github-icon.webp"
            alt="logo"
            class="kh-idx__follow-icon"
          >
        </a>
        <a
          href="https://www.kinghiee.cn/"
          target="_blank"
          rel="noopener noreferrer"
          class="kh-idx__follow-link"
        >
          <img
            src="@client/assets/imgs/index/kinghiee-icon.jpeg"
            alt="logo"
            class="kh-idx__follow-icon"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo() {
    return {
      title: '首页-kinghiee',
      meta: [
        {
          name: 'description',
          content: 'kinghiee`s vue2 ssr'
        },
        {
          name: 'keywords',
          content: 'ssr,vue2'
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
  display: grid;
  height: 100vh;
  place-content: center;

  &__content {

    &-title {
      margin-bottom: 32px;
      font-size: 20px;
      text-align: center;
    }

    &-tip {
      margin-bottom: 12px;
      color: #8c8c8c;
      font-size: 12px;
      text-align: center;
    }
  }

  &__follow {
    display: flex;
    gap: 18px;

    &-link {
      display: flex;
      border: .5px solid #eee;
    }

    &-icon {
      width: 100px;
      height: 60px;
      object-fit: contain;
    }
  }
}
</style>


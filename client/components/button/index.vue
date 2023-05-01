<template>
  <button @click="handleBtnClick">
    {{ btnText }}
  </button>
</template>

<script>

/**
     * button 组件展示
     * @displayName 基础button组件
     */
export default {
  name: 'KhButton',
  props: {
    btnText: {
      type: String,
      default: '按钮'
    },

    /**
             * 按钮尺寸
             * @values small, normal, large
             */
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {

    /**
             * 处理按钮点击事件
             */
    handleBtnClick() {

      /**
                 * click 事件
                 * @event btnClick
                 * @property { Boolean }
                 */
      this.$emit('btnClick', true);
    }
  }
};
</script>
<template>
  <div>
    <!-- @slot 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script>

/** 骨架屏 demo
     * @displayName 骨架屏组件
     */
export default {
  name: 'KhSkeleton',
  props: {

    /**
             * 行数
            */
    rowNumber: {
      type: Number,
      default: 3
    }
  }
};
</script>

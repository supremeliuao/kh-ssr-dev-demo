 ```vue
  <template>
    <div class="wrapper">
        <kh-button @btnClick="handleBtnClick"></kh-button>
        当前按钮状态:{{ btnStatusText }}
    </div>
  </template>

  <script>
    import KhButton from './index.vue'
    export default {
        components: {
            KhButton
        },
        data() {
            return {
                btnStatusText: '没有点击'
            };
        },
        methods: {
            handleBtnClick() {
                this.btnStatusText = '已点击';
            }
        }
    }
  </script>

  <style scoped>
  </style>
```
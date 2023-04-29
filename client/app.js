import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './routes/index';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';
import '@client/assets/style/index.less';
import VueMeta from 'vue-meta';

Vue.use(VueMeta, { ssrAppId: 1 });

// 简单工厂模式创建vue实例
export function createApp() {
    const router = createRouter();
    const store = createStore();

    sync(store, router);

    const app =  new Vue({
        router,
        store,
        render: h => h(App),
    })

    return {
        app,
        router,
        store
    }
};

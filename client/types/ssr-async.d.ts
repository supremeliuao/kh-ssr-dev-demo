import { Store } from 'vuex';
import { Route } from 'vue-router';

// ssr 预加载函数参数接口
export declare interface SSRAsyncData {
  store: Store<any>
  route: Route
}


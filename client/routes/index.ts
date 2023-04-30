import Vue from 'vue';
import Router from 'vue-router';
import indexRouter from './indexRouter';
import fullRouter from './fullRouter';
Vue.use(Router);

export function createRouter(){
  return new Router({
      mode:'history',
      routes:[
        ...indexRouter,
        ...fullRouter
      ]
  })
}

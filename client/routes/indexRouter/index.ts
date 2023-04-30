const INDEX_ROUTER = [
  {
    path: '/',
    name: 'index',
    component: () => import( /* webpackChunkName: "kh-index" */ '@client/views/index/index.vue'),
  },
];

export default INDEX_ROUTER;

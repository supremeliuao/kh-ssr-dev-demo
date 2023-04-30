const INDEX_ROUTER = [
  {
    path: '/full',
    name: 'full',
    component: () => import( /* webpackChunkName: "kh-index" */ '@client/views/index/index.vue'),
  },
];

export default INDEX_ROUTER;

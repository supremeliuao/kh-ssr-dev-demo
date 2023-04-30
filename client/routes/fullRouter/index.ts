const FULL_ROUTER = [
  {
    path: '/full',
    name: 'full',
    component: () => import( /* webpackChunkName: "kh-full" */ '@client/views/full/index.vue'),
  },
];

export default FULL_ROUTER;

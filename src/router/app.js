export default [
  {
    path: '/',
    name: 'index',
    component: () => import('./../views/index.vue'),
    meta: {
      menuBar: true,
      authRequired: false,
    },
  },
]

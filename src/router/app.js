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
  {
    path: '/produto/:id',
    name: 'product',
    component: () => import('./../views/item.vue'),
    meta: {
      menuBar: true,
      authRequired: false,
    },
  },
]

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/index', component: () => import('pages/WeatherIndexPage.vue') },
      {
        path: '/detail/:city',
        component: () => import('pages/DetailCityPage.vue'),
        props: (route) => ({ city: route.params.city }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes

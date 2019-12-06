import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页'},
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/course',
      name: 'course',
      meta: { title: '课程'},
      component: () => import('../pages/courses/index.vue'),
      children: [
        {
          name: 'course-list',
          path: 'course-list',
          meta: {title: '课程'},
          component: () => import('../pages/courses/course-list.vue'),
        },
        {
          name: 'details',
          path: 'details',
          meta: {title: '课程'},
          component: () => import('../pages/courses/details.vue'),
        },
        {
          path: '*',
          redirect: {name: 'course-list'},
        }
      ],
    },
    {
      path: '/skill',
      name: 'skill',
      meta: { title: '技能'},
      component: () => import('../pages/skills/skill.vue'),
      children: [
          {
              name: 'skill-name',
              path: 'skill-name',
              meta: {title: '技能'},
              component: () => import('../pages/skills/skill-name.vue'),
          },
      ],
    },
    {
      path: '/experience',
      name: 'experience',
      meta: { title: '经验'},
      component: () => import('../pages/experience.vue'),
    },
    {
      path: '/master',
      name: 'master',
      meta: { title: '专家'},
      component: () => import('../pages/master.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `XIN-${to.meta.title}`;
  next();
});

export default router;

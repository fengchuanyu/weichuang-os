export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/student/list' },
      {
        path: '/student',
        name: 'student',
        icon: 'team',
        routes: [
          // 学生管理
          {
            path: '/student/list',
            name: 'list',
            component: './Student/Student',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              // {
              //   path: '/account/center/articles',
              //   component: './Account/Center/Articles',
              // },
              // {
              //   path: '/account/center/applications',
              //   component: './Account/Center/Applications',
              // },
              // {
              //   path: '/account/center/projects',
              //   component: './Account/Center/Projects',
              // },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];

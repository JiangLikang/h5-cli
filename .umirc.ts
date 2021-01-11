import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  dynamicImport: {
    loading: '@/components/Loading/index',
  },
  // proxy: {
  // "/api": {
  //   "target": 'https://v1test.tf56.com',
  //   "changeOrigin": true,
  // },
  // },
  antd: {},
  dva: {
    hmr: true,
    // immer: true
  },
  publicPath: '/biz/lytSales/',
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 9,
    android: 4.1,
  },
  // 配置额外的 postcss 插件
  extraPostCSSPlugins: [
    require('postcss-pxtorem')({
      rootValue: 100,
      propList: ['*'],
      // exclude: /node_modules/
    }),
  ],
  theme: {
    hd: '2px',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      // wrappers: [
      //   '@/wrappers/auth'
      // ],
      routes: [
        { path: '/', component: '@/pages/home', title: '陆运通业务报告' },
      ],
    },
  ],
});

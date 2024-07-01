import { createRouter, createWebHistory } from 'vue-router';

// 使用箭頭函數進行動態引入組件
const Layout = () => import('@/layout/index.vue');
const IndexPage = () => import('@/views/indexPage/index.vue');

const routes = [
	{
		path: '/',
		component: Layout,
		redirect: "/index-page",
		children: [
			{
				path: 'index-page',
				name: 'IndexPage',
				component: IndexPage,
				meta: {
					title: "IndexPage",
					affix: true,
					keepAlive: true,
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_APP_BASE_API),
	routes,
});

export default router;

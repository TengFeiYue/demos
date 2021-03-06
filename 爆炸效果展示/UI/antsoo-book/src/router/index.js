import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 通讯录
import Book from '@/components/Book';
import BookDetail from '@/components/bookDetail/bookDetail';

// 我的
import My from '@/components/My';
import MyElecCard from '@/components/myTrunks/myElecCard';
import ConfirmChange from '@/components/myTrunks/confirmChange';
import Confirm from '@/components/myTrunks/confirm';
import Address from '@/components/myTrunks/address';
import Collect from '@/components/myTrunks/collect';
import FeedBack from '@/components/myTrunks/feedBack';
import MyConnections from '@/components/myTrunks/myConnections';
import MyBooks from '@/components/myTrunks/myBooks';
import chooseCity from '@/components/chooseCity/cityList';

// 公共
import Login from '@/components/common/login';

var router = new Router({
	routes: [
		// 重定向导航
		{path: '/',redirect: Book},

		// 通讯录
		{path: '/book', name: 'book', component: Book},
		{path: '/bookDetail', name: 'bookDetail', component: BookDetail},

		// 我的
		{path: '/my', name: 'my', component: My, meta: {title: '我的'}},
		{path: '/myElecCard', name: 'myElecCard', component: MyElecCard, meta: {title: '我的电子名片'}}, // 我的-我的电子名片
		{path: '/confirmChange', name: 'confirmChange', component: ConfirmChange, meta: {title: '俺搜认证变更'}}, // 我的-俺搜认证变更
		{path: '/confirm', name: 'confirm', component: Confirm, meta: {title: '认证'}}, // 我的-认证：暂时没有入口
		{path: '/address', name: 'address', component: Address, meta: {title: '详细地址'}}, // 我的-详细地址
		{path: '/collect', name: 'collect', component: Collect, meta: {title: '我的收藏'}}, // 我的-我的收藏
		{path: '/feedBack', name: 'feedBack', component: FeedBack, meta: {title: '意见反馈'}}, // 我的-意见反馈
		{path: '/myConnections', name: 'myConnections', component: MyConnections, meta: {title: '我的解锁人脉'}}, // 我的-我的解锁人脉 
		{path: '/myBooks', name: 'myBooks', component: MyBooks, meta: {title: '我的通讯录'}}, // 我的-我的通讯录 
		{path: '/cityList', name: 'cityList', component: chooseCity, meta: {title: '位置'}}, // 我的-我的通讯录 
		
		//公共
		{path: '/login', name: 'login', component: Login, meta: {title: '登录'}}, // 登录
		
		// 路由error时重定向
		{path: '*', redirect: '/book'}
	]
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if(to.meta.title) {
		document.title = to.meta.title
	};
	next()
})



export default router;

// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 1.0

// development and production host
const hosts = {
	development: 'http://192.168.1.8:8752/antsooWXApp', //陈宣
	production: 'https://wxapp.antsoo.com'
}

// apis
const api = {
	user: {
		validateCode: {
			method: 'POST',
			url: '/user/sendValidatecode'
		},
		login: {
			method: 'POST',
			url: '/user/loginNoPwd'
		},
		update: {
			method: 'POST',
			url: '/user/update'
		}
	},
	my: {
		myCenter: { // 我的中心
			method: 'POST',
			url: '/user/userRuleInfo'
		},
		attestationChange: { // 俺搜认证变更
			method: 'POST',
			url: '/user/userInformation'
		},

		myQrCode:{ // 我的小程序码
			method: 'POST',
			url: '/user/mySmallProgramCode'
		},

		myCard:{// 我的电子名片+人脉详情
			method: 'POST',
			url: '/member/memberDetailInfo'
		},

		myCollect:{//我的收藏
			method: 'POST',
			url: '/user/collectionList'
		},

		myLocktask:{//我的解锁人脉
			method: 'POST',
			url: '/lockTask/unlockcustomers'
		},

		feedback: { //用户反馈
			method: 'POST',
			url: '/user/backAdvice'
		},

		cardRecognize: { // 名片解析
			method: 'POST',
			url: '/card/recognition'
		},
		myPersonalInfo: { // 我的个人信息认证
			method: 'POST',
			url: '/user/userInfoUpdate'
		},
		confirmSubmit: { // 我的个人信息认证
			method: 'POST',
			url: '/user/cardOrBusinessLicenceSave'
		},
		companySearchShow: { // 企业模糊搜索
			method: 'POST',
			url: '/user/EnterpriseNameAutoComplete'
		},
		productChain: { // 主营行业列表
			method: 'POST',
			url: '/dict/enterpriseCategory'
		},
		hasManageRights: { // 升级管理员权限
			method: 'POST',
			url: '/user/getEnterpriseInfoByScanName'
		},
		offCompany: { // 脱离企业
			method: 'POST',
			url: '/user/userAutoAwaySave'
		},
		checkStatus: { // 认证查询状态
			method: 'POST',
			url: '/user/queryjoinCompanyStatusInfo'
		},
		changeInfoStatus: { // 民片变更状态
			method: 'POST',
			url: '/user/nameCardQuery'
		},
		changeInfo: { // 信息变更
			method: 'POST',
			url: '/user/cardPositionChange'
		},
	},
  	index:{
		productionStatistic:{//产业链角色统计
			method:'POST',
			url:'/enterprise/queryEnterpirseMemberNumByCity'
		},
		relationsStatistic:{//产业链角色统计
			method:'POST',
			url:'/member/getMemberCountByPosition'
		},
		searchEnteprise:{//搜索企业
			method:'POST',
			url:'/enterprise/searchEnterprise'
		},
		searchPerson:{//搜索人脉
			method:'POST',
			url:'/member/searchMembers'
		},
		roundCompany: {//周边的企业
			method:'POST',
			url:'/enterprise/enterpriseListInfo'
		},
		roundPerson: {//周边的人
			method:'POST',
			url:'/member/filterMembers'
		},
		bannerImg:{//首页轮播图
			method:'POST',
			url:'/advertisement/getAdvertisementList'
		},
		companyOrRelationsNum:{//企业和人脉数量统计
			method:'POST',
			url:'/enterprise/queryEnterpirseMemberNumByCategoryAndCity'
		},
		antsooRecommand:{//俺搜推荐
			method:'POST',
			url:'/enterprise/recommendEnterpriseListInfo'
		},
		hotCity: { // 热门城市
			method: 'POST',
			url: '/enterprise/appHotCities'
		}
	},
	company: {
		companyContact: {	// 企业联系人
			method: 'POST',
			url: '/member/memberListInfo'
		},
		companyInformation: {   //企业主营产品
			method: 'POST',
			url: '/qccEnterprise/qccEnterpriseInfo'
		},
		companyProduct: {
			method: 'POST',
			url: '/mainProduct/productList'
		},
		comDetailInfo: { //企业详情
			method: 'POST',
			url: '/enterprise/baseInfo'
		},
		companyList:{//企业列表
            method: 'POST',
			url: '/enterprise/enterpriseListInfo'
		},
		companyFilter:{
            method: 'POST',
			url: '/dict/enterpriseCondition'
		},
		companyHasExist:{//公司是否存在
      		method: 'POST',
			url: '/user/getEnterpriseIdByName'
		},
		upLoadLisence:{//公司是否存在
      		method: 'POST',
			url: '/user/cardOrBusinessLicenceSave'
		},
		companyRound: {//周边企业
			method: 'POST',
			url: '/enterprise/peripheryEnterpriseListInfo'
		},
		addCollection: { //添加收藏
			method: 'POST',
			url: '/user/addCollection'
		},
		cancelCollection: { //取消收藏
			method: 'POST',
			url: '/user/cancelCollection'
		},
		isCollect: { // 查询收藏状态
			method: 'POST',
			url: '/user/isCollected'
		}
	},
	relations:{
        autoSort:{//智能排序
			method: 'POST',
			url: '/dict/memberOrderRule'
		},
		personDuty:{//人脉职位信息
			method: 'POST',
			url: '/dict/memberPosition'
		},
		distance:{//人脉距离
			method: 'POST',
			url: '/dict/memberDistances'
		},
		mainLines:{//人脉主营行业
			method: 'POST',
			url: '/dict/enterpriseCategory'
		},
		runningModel:{//人脉经营模式
			method: 'POST',
			url: '/dict/enterpriseModel'
		},
		relationList:{//人脉列表
			method: 'POST',
			url: '/member/filterMembers'
		},
		relationNum:{//人脉数量
			method: 'POST',
			url: '/member/filterCountMembers'
		},
	},
}

module.exports = {
	env,
	version,
	api: disposeUrl(api, hosts[env])
}

function disposeUrl(obj, prefix) {
	Object.keys(obj).forEach(v => {
		if(obj[v].url) {
			obj[v].url = prefix + obj[v].url
		} else {
			obj[v] = disposeUrl(obj[v], prefix)
		}
	})
	return obj
}

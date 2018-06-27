// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 1.0

// development and production host
const hosts = {
    development: 'http://192.168.1.8:8752/wxmall',
    production: 'https://wxmall2.antsoo.com'
}

// apis
const api = {
    user:{
        validateCode:{
            method: 'POST',
            url: '/user/sendValidatecode'
        },
        login:{
            method: 'POST',
            url: '/user/loginNoPwd'
        },
        pwdLogin:{
            method: 'POST',
            url: '/user/loginWithPwd'
        },
        update:{
            method: 'POST',
            url: '/user/update'
        }
    },
    product: {
		/**
		 * login api
		 * need header:
		 * {
		 *   'x-wechat-code': code,
		 *   'x-wechat-encrypted': encryptedData,
		 *   'x-wechat-iv': iv
		 * }
		 */
        materialLists: {
            method: 'POST',
            url: '/dailyBaseProduct/productList'
        },
        materialDetailLists: {//原料报价详情
            method: 'POST',
            url: '/dailyBaseProduct/materialPriceDetail'
        },
        otherMaterialDetailLists: {//具体材料详情
            method: 'POST',
            url: '/dailyBaseProduct/materialDetail'
        },
        marketingDetailLists: {
            method: 'POST',
            url: '/dailyLinkMan/salesManDetail'
        },
        fetchPricesDatas: {
            method: 'GET',
            url: '/dailyProductPrice/recentlyBaseProductPriceList'
        },
        fetchpriceArea: {
            method: 'GET',
            url: '/user/getProCityAreaInfo'
        },
        releaseMaterialPrice: {
            method: 'POST',
            url: '/dailyProductPrice/dailyBaseProductCreate'
        },
        editMaterialPrice: {
            method: 'POST',
            url: '/dailyProductPrice/dailyBaseProductUpdate'
        },
        getPnameDataList: {
            method: 'POST',
            url: '/dailyProductPrice/getCommodityNameListByIndustryRole'
        },
        getmysubpriceData: {//获取我的报价列表
            method: 'POST',
            url: '/dailyProductPrice/myDailyBaseProductList'
        },
        getHistoryPriceData: {//获取我的材料的历史报价
            method: 'POST',
            url: '/dailyProductPrice/dailyProductPriceHistoryList'
        },
        deletMysubpriceItem: {//删除我的报价
            method: 'POST',
            url: '/dailyProductPrice/dailyBaseProductDelete'
        },
        copyMysubpriceItem: {//复制我的报价
            method: 'POST',
            url: '/dailyProductPrice/dailyBaseProductQuery'
        },
        refreshData: {//一键刷新
            method: 'POST',
            url: '/dailyProductPrice/oneButtonRefresh'
        },
        fetchUnitsData: {//获取单位与交货方式
            method: 'GET',
            url: '/dailyProductPrice/deliveryTypeAndPriceUnit'
        }
    },
    findMeBuyMaterial:{
        linkerList: {//找我买材料
            method: 'POST',
            url: '/dailyLinkMan/manList'
        }
    },
    common: {
        productCates:{
            method:'POST',
            url:'/dailyBaseProduct/seriesTypeList'
        },
        callLinkers:{
            method:'POST',
            url:'/dailyLinkMan/fixedDialNumbers'
        },
        collection:{
            method:'POST',
            url:'/collect/addCollect'
        },
        collectionList:{
            method:'POST',
            url:'/myCenter/myCollect'
        },
        linkedSellerList:{
            method:'POST',
            url:'/myCenter/myLinkedMan'
        },
        teasing:{
            method:'POST',
            url:'/myCenter/mySuggest'
        },
        nameCard:{
            method:'POST',
            url:'/user/nameCardAnalyze'
        },
        personalInfoData:{
            method:'POST',
            url:'/user/updateUserInfo'
        },
        confirmInfoData:{//个人认证信息
            method:'POST',
            url:'/user/applyJoinEnterprise'
        },
        confirmStatusquery:{//个人认证查询
            method:'POST',
            url:'/user/userJoinEnterpriseInfo'
        },
        getPersonalInfoData:{
            method:'POST',
            url:'/user/queryUserInfo'
        },
        subChangedDutyInfo:{
            method:'POST',
            url:'/user/nameCardChange'
        },
        inqueryCardChange:{
            method:'POST',
            url:'/user/nameCardQuery'
        },
        getCompanyNameData:{
            method:'POST',
            url:'/user/enterpriseNameSearch'
        },
        getmodelData:{
            method:'GET',
            url:'/user/filterInfo'
        }

    }

}

module.exports = {
    env,
    version,
    api: disposeUrl(api, hosts[env])
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })

    return obj
}

var vm = new Vue({
	el: '#app',
	data: {
		userId: -1,
		isShare: -1, //分享完成返回的参数
		isShareBtn: false, // 判断登录，分享，任务完成三个按钮的显示与隐藏；
		isSelect: false, // 是否可点击个人中奖记录
		prizeList: [], // 获奖记录列表
		arr1: [], // 开始抽奖前四个列表
		arr2: [], // 开始抽奖后四个列表
		getNum: -1,
		rannum: -1,
		rank: -1,
		delay: 30,
		i: 0,
		k: 0,
		prizeName: '',
		layerCon: true, // 弹窗《知道了》下一步
		layerNext: true, // 弹窗去分享
		isLoginShare: {},
		numDraw: 0, // 剩余抽奖次数
		addSelectedList: [], //用户个人中奖纪录newAntsoologo.png
		sureDrawedArr: []
	},

	methods: {
		start() {
			if(this.userId <= 0) { //如果没有登录，提示完成登录获取抽奖机会
				layer.msg('请完成登录任务获取抽奖机会！');
				return;
			}
			
			if(this.userId > 0 && this.isShare != 1 && this.numDraw == 0) { //如果已经登录并且用完了一次抽奖机会但是没有分享，提示分享完成任务
				layer.msg('请完成分享任务获取抽奖机会！');
				return;
			}

			if(this.userId > 0 && this.isShare == 1 && this.numDraw == 0) { //如果已经登录，完成分享，两次抽奖机会用完提示明天继续抽奖
				layer.msg('今天机会已用完，请明天再来！');
				return;
			}
			if(this.numDraw <= 0) { // 如果抽奖机会已经用完，不让继续点击
				return;
			}

			var items = document.getElementsByClassName("item");

			for(var n = 0; n < items.length; n++) {
				items[n].className = 'item';
			}
			this.toki();

			//调用中奖号码
			this.getlottery();
		},

		shuzu() {
			var arr = document.getElementsByClassName("item"); //获得数组；
			var arr1 = [arr[0], arr[1], arr[2], arr[4], arr[7], arr[6], arr[5], arr[3]]; //确定新的数组遍历次序；
			for(var n = 0; n < arr1.length; n++) {
				if(Number(arr1[n].getAttribute('data-num')) == this.getNum) {
					this.rannum = 25 + n;
					this.rank = this.rannum;
					break;
				}
			}
			var p = this.i % 8;
			if(this.i > 0) {
				arr1[(this.i - 1) % 8].className = 'item';
			}
			arr1[p].className = 'item active'
		},

		toki() {
			this.shuzu();
			if(this.i == this.rank) {
				this.delay = 30;
				this.i = 0;
				this.k = 0;
				this.showLayer();
				var items = document.getElementsByClassName("item");

				for(var n = 0; n < items.length; n++) {
					items[n].className = 'item';
				}
				return;
			}
			this.delay += 10;
			this.i++;
			window.setTimeout(this.toki, this.delay);
		},

		// 关闭中奖提示遮罩层
		hideLayer() {
			document.getElementsByClassName('layer')[0].style.display = 'none';
		},

		// 开启中奖提示遮罩层
		showLayer() {
			document.getElementsByClassName('layer')[0].style.display = "block";
		},

		// 关闭中奖分享遮罩层
		hideLayerNext() {
			document.getElementsByClassName('layer-next')[0].style.display = 'none';
		},

		// 开启中奖分享遮罩层
		showLayerNext() {
			document.getElementsByClassName('layer-next')[0].style.display = "block";
		},

		// 中奖纪录遮罩层隐藏
		hideDrawRecodes() {
			document.getElementsByClassName('draw-recodes')[0].style.display = 'none';
		},

		// 中奖纪录遮罩层显示					
		showDrawRecodes() {
			document.getElementsByClassName('draw-recodes')[0].style.display = "block";
		},

		// 点击中奖纪录
		isSelected(status, obj) {
			if(status == 1) {
				return;
			} else {
				var dom = document.getElementById(obj);
				if(dom.getAttribute("class") == '') {
					dom.className = 'active';
					return;
				} else {
					dom.className = '';
					return;
				}
			}
		},

		// 获取当前的日期
		getNowTime: function() {
			var _date = new Date();
			var y = _date.getFullYear();
			var m = _date.getMonth() + 1;
			if(m < 10) {
				m = '0' + m;
			}
			var d = _date.getDate();
			if(d < 10) {
				d = '0' + d;
			}
			return y + '-' + m + '-' + d;
		},

		//如果未登陆，禁止请求《添加抽奖机会》接口
		getLoginInfo: function(num) {
			var _this = this;
			_this.$http.post(appUrl + '/draw/addDrawChance', {
				userId: _this.userId,
				type: num,
			}).then(function(res) {
				if(res.status == 200) {
					_this.isLoginShare = res.data.body;
					_this.numDraw = res.data.body.remainCount;
				}
			}).catch(function(err) {
				console.log(err);
			})
			//_this.getNumDraw();
		},

		// 获取所有中奖信息
		getAllUserDrawList: function() {
			var _this = this;
			_this.$http.post(appUrl + '/draw/getDrawRecordList', {
				userId: null
			}).then((res) => {
				if(res.status == 200) {
					_this.prizeList = res.data.body;
					_this.$nextTick(function() {
						window.setInterval(function() {
							var oParent = document.getElementsByClassName('scroll-content')[0];
							oParent.appendChild(oParent.children[0]);
						}, 2000);
					})
				}
			}).catch((err) => {
				console.log(err)
			})
		},

		// 获取九宫格物品信息
		getDrawList: function() {
			var _this = this;
			_this.$http.get(appUrl + '/draw/getDrawRewardList').then((res) => {
				if(res.status == 200) {
					var allArr = res.data.body;
					for(var i = 0; i < allArr.length; i++) {
						if(i < allArr.length / 2) {
							_this.arr1.push(allArr[i]);
						} else if(i >= allArr.length / 2) {
							_this.arr2.push(allArr[i])
						}
					}

				}
			}).catch((err) => {
				console.log(err);
			})
		},

		// 调用抽到的奖品
		getlottery: function() {
			var _this = this;
			_this.$http.post(appUrl + '/draw/addReward', {
				userId: _this.userId
			}).then((res) => {
				if(res.status == 200) {
					_this.getNum = res.data.body.id;
					_this.prizeName = res.data.body.rewardName
					_this.getNumDraw();
				}
			}).catch((err) => {
				console.log(err);
			})
		},

		// 用户今天剩余抽奖次数
		getNumDraw: function() {
			var _this = this;
			_this.$http.post(appUrl + '/draw/getRemainCount', {
				userId: _this.userId
			}).then((res) => {
				if(res.status == 200) {
					_this.numDraw = res.data.body;
				}
			}).catch((err) => {
				console.log(err);
			})
		},

		// 个人中奖纪录
		getDrawRecodes: function() {
			var _this = this;
			if(_this.userId <= 0) {
				return;
			}
			_this.$http.post(appUrl + '/draw/getDrawRecordList', {
				userId: _this.userId,
			}).then((res) => {
				if(res.status == 200) {
					_this.addSelectedList = res.data.body;
				}
			}).catch((err) => {
				console.log(err);
			})
		},

		// 点击确认个人已中奖
		sureDrawed: function() {
			var _this = this;
			var rewardId = _this.sureDrawedArr.join(',');
			console.log(rewardId);
			_this.$http.post(appUrl + '/draw/acceptReward', {
				userId: _this.userId,
				rewardIdStr: rewardId
			}).then((res) => {
				//console.log(res);
			}).catch((err) => {
				console.log(err);
			});
			_this.hideDrawRecodes();
			_this.getDrawRecodes();
		}
	},
	mounted() {
		var _this = this;
		this.$nextTick(function() {

			_this.userId = getQueryString('userId'); // 获取地址栏的userId
			_this.isShare = getQueryString('isShare'); // 获取地址栏的userId

			if(_this.userId > 0) {
				_this.getLoginInfo(1); // 进入页面的时候获取抽奖次数，用来判断页面的按钮和抽奖机会的显示，传入参数1
				_this.isShareBtn = true;
			}
			if(_this.userId > 0 && _this.isShare == 1) {
				_this.getLoginInfo(2); // 分享完成进入页面的时候获取抽奖次数，并且传入2		
				_this.isShareBtn = false;
			}

			_this.getAllUserDrawList();

			_this.getDrawList();
		})
	}
})
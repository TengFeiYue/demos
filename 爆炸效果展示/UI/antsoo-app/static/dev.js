// 全局函数
var urlPort = "http://h5.antsoo.com"; //当前站点
//var appUrl = "http://app150.antsoo.com:85"; //app
//var appUrl = "http://192.168.1.133:8080/antsooApp"; //文俊
var appUrl = "http://192.168.1.133:8080/antsooApp"; //徐进
var version = "1.0.7";

//解析url
function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	}
	return null;
}

function getQuery(key) {
	// 获取参数
	var url = window.location.search;
	// 正则筛选地址栏
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	// 匹配目标参数
	var result = url.substr(1).match(reg);
	//返回参数值
	return result ? decodeURIComponent(result[2]) : null;
}

// 滑动删除
function deleteListProduct(arr) {
	var _this = this;
	var expansion = null; //是否存在展开的list
	for(var i = 0; i < arr.length; i++) {
		var x, y, X, Y, swipeX, swipeY;
		arr[i].addEventListener('touchstart', function(event) {
			// event.preventDefault();
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true;
			if(expansion) { //判断是否展开，如果展开则收起
				expansion.className = "";
			}
		});
		arr[i].addEventListener('touchmove', function(event) {
			event.preventDefault();
			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;
			// 左右滑动
			if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
				// 阻止事件冒泡
				event.stopPropagation();
				if(X - x > 10) { //右滑
					event.preventDefault();
					this.className = ""; //右滑收起
				}
				if(x - X > 10) { //左滑
					event.preventDefault();
					this.className = "swipeleft"; //左滑展开
					expansion = this;
				}

				swipeY = false;
			}
			// 上下滑动
			if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
				swipeX = false;
			}
		});

	}
}
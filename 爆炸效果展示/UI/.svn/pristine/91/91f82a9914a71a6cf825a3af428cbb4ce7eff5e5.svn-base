<template>
	<div class="app-container">
		<div class="city">
			<div class="city-wrapper city-wrapper-hook">
				<div class="scroller-hook">
					<div class="cities cities-hook"></div>
				</div>
				<div class="shortcut shortcut-hook"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import city from '../../assets/js/city';
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				selectCityName: '',
			}
		},
		mounted() {
			var _this = this;
			this.$store.dispatch('hideFooter');
			var cityWrapper = document.querySelector('.city-wrapper-hook');
			var cityScroller = document.querySelector('.scroller-hook');
			var cities = document.querySelector('.cities-hook');
			var shortcut = document.querySelector('.shortcut-hook');
			var scroll;
			var shortcutList = [];
			var anchorMap = {};

			function initCities() {
				var y = 0;
				var titleHeight = 28;
				var itemHeight = 90;
				var lists = '';
				var en = '<ul>';
				city.forEach(function(group) {
					var name = group.name;
					lists += '<div class="title">' + name + '</div>';
					lists += '<ul>';
					group.cities.forEach(function(g) {
						lists += '<li class="item" data-name="' + g.name + '" data-id="' + g.cityid + '"><span class="border-1px name">' + g.name + '</span></li>';
					});
					lists += '</ul>';
					var name = group.name.substr(0, 1);
					en += '<li data-anchor="' + name + '" class="item">' + name + '</li>';
					var len = group.cities.length;
					anchorMap[name] = y;
					y -= titleHeight + len * itemHeight;

				});
				en += '</ul>';
				cities.innerHTML = lists;
				shortcut.innerHTML = en;
				shortcut.style.top = (cityWrapper.clientHeight - shortcut.clientHeight) / 2 + 'px';
				scroll = new BScroll(cityWrapper, {
					probeType: 3
				});
				scroll.scrollTo(0, 0);
				var items = document.getElementsByClassName('item');
				for(var n = 0; n < items.length; n++) {
					items[n].index = n;
					items[n].addEventListener('touchend', function(e) {
						e.preventDefault();
						e.stopPropagation();
						_this.selectCityName = items[this.index].getAttribute('data-name') != null ? items[this.index].getAttribute('data-name') : '';
						console.log(_this.selectCityName)
					});
				}
			}

			//bind Event
			function bindEvent() {
				var touch = {};
				var firstTouch;

				shortcut.addEventListener('touchstart', function(e) {

					var anchor = e.target.getAttribute('data-anchor');

					firstTouch = e.touches[0];
					touch.y1 = firstTouch.pageY;
					touch.anchor = anchor;

					scrollTo(anchor);

				});

				shortcut.addEventListener('touchmove', function(e) {

					firstTouch = e.touches[0];
					touch.y2 = firstTouch.pageY;

					var anchorHeight = 16;

					var delta = (touch.y2 - touch.y1) / anchorHeight | 0;

					var anchor = shortcutList[shortcutList.indexOf(touch.anchor) + delta];

					scrollTo(anchor);

					e.preventDefault();
					e.stopPropagation();

				});

				function scrollTo(anchor) {
					var maxScrollY = cityWrapper.clientHeight - cityScroller.clientHeight;

					var y = Math.min(0, Math.max(maxScrollY, anchorMap[anchor]));

					scroll.scrollTo(0, y);
					if(typeof y !== 'undefined') {}
				}
			}

			initCities();

			bindEvent();
		}
	}
</script>

<style lang="less">
	.city {
		display: block;
	}
	
	.city .city-wrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	
	.city .city-wrapper .cities .title {
		height: 28px;
		padding-left: 16px;
		line-height: 28px;
		background: #ccc;
		color: #878787;
	}
	
	.city .city-wrapper .cities .item {
		height: 44px;
		padding: 0 16px;
		line-height: 44px;
	}
	
	.city .city-wrapper .cities .item .name {
		display: block;
		position: relative;
	}
	
	.city .city-wrapper .cities .item .name:before,
	.city .city-wrapper .cities .item .name:after {
		display: block;
		position: absolute;
		border-top: 1px solid #e5e5e5;
		left: 0;
		width: 100%;
		content: ' ';
	}
	
	.city .city-wrapper .cities .item .name:before {
		display: none;
		top: 0;
	}
	
	.city .city-wrapper .cities .item .name:after {
		display: block;
		bottom: 0;
	}
	
	.city .city-wrapper .cities .item:active {
		background-color: #f0f0f0;
	}
	
	.city .city-wrapper .cities .item:last-child .name:after {
		display: none;
	}
	
	.city .city-wrapper .shortcut {
		position: absolute;
		z-index: 30;
		width: 40px;
		right: 0;
		font-family: Helvetica;
	}
	
	.city .city-wrapper .shortcut .item {
		height: 20px;
		padding-top: 4px;
		padding-left: 24px;
		text-align: center;
		color: #fa8919;
	}
	
	@media only screen and (max-height: 600px) {
		.city .city-wrapper .shortcut .item {
			padding-top: 3px;
		}
	}
</style>
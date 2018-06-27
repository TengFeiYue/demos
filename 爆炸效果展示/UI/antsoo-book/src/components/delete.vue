<template lang="html">
	<div class="left-delete">
		<div class="move" @touchstart='_touchStart' @touchmove='_touchMove' :class="cName">
			<slot></slot>
			<div class="deleteIcon" @click.prevent="deleteItem(ind)">删除</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			ind: Number
		},
		data() {
			return {
				expansion: null,
				sx: 0,
				sy: 0,
				sX: 0,
				sY: 0,
				swipeX: true,
				swipeY: true,
				cName: ''
			}
		},
		methods: {
			_touchStart: function(ev) {
				ev = ev || event;
				this.sx = ev.changedTouches[0].pageX;
				this.sy = ev.changedTouches[0].pageY;
				this.swipeX = true;
				this.swipeY = true;
				if(this.expansion) {
					this.expansion.className = "";
				}
			},
			_touchMove: function(ev) {
				ev = ev || event;
				this.sX = event.changedTouches[0].pageX;
				this.sY = event.changedTouches[0].pageY;
				if(this.swipeX && Math.abs(this.sX - this.sx) - Math.abs(this.sY - this.sy) > 0) {
					ev.stopPropagation();
					if(this.sX - this.sx > 10) {
						ev.preventDefault();
						this.cName = "";
					}
					if(this.sx - this.sX > 10) {
						ev.preventDefault();
						this.cName = "swipeleft"
					}
					this.swipeY = false;
				}
				if(this.swipeY && Math.abs(this.sX - this.sx) - Math.abs(this.sY - this.sy) < 0) {
					this.swipeX = false;
				}
			},
			deleteItem: function(n) {
				this.$emit('deleteItem', n)
				this.cName = "";
			}
		}
	}
</script>

<style lang="css">
	.swipeleft {
		transform: translateX(-15%);
		-webkit-transform: translateX(-15%);
	}
	
	.left-delete {
		width: 126%;
		height: 100%;
		position: relative;
		z-index: 2;
	}
	
	.move {
		position: relative;
		-webkit-transition: all 0.3s linear;
		transition: all 0.3s linear;
	}
	
	.deleteIcon {
		width: 90px;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		background: red;
		color: #ffffff;
		padding-left: 15px;
		font-size: 16px;
	}
</style>
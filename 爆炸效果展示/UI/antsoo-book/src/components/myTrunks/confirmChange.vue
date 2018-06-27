<template>
	<div class="app-container">
		<div class="title">
			<div class="title-text">您的信息已认证</div>
			<div class="title-op" @click="menuFlag = !menuFlag">
				<img src="../../assets/imgs/infochange.png" />
			</div>
		</div>
		<ul class="menu" v-if="menuFlag">
			<div class="jiao"></div>
			<li class="layer-list" @click="jobChange">
				<div class="layer-list-icons">
					<img src="../../assets/imgs/icon-workchange.png" />
				</div>
				<div class="layer-list-text">名片职位变更</div>
			</li>
			<li class="layer-list" @click="leaveCom">
				<div class="layer-list-icons">
					<img src="../../assets/imgs/icon-comchange.png" />
				</div>
				<div class="layer-list-text">脱离企业</div>
			</li>
		</ul>
		<ul class="list">
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">姓名</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">邮箱</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">名片职位</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">企业名称</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">企业类型</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">经营模式</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">企业地区</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<div class="list-icons">
						<img src="../../assets/imgs/icon-name.png" />
					</div>
					<div class="list-title">详细地址</div>
					<div class="list-text">tanxiang</div>
				</div>
			</li>
		</ul>
		<!-- 是否脱离企业弹窗 -->
		<div class="leaveCom" v-if="leaveComFlag">
			<div class="leaveComLayer">
				<p class="leave-title">脱离企业</p>
				<p class="leave-con">选择确定后，您将于原企业脱离任何关系，重新获得认证身份需再次提交认证信息</p>
				<p class="leave-op">
					<span @click="cancelLeaveCom">取消</span>
					<span @click="sureLeaveCom">提交</span>
				</p>
			</div>
		</div>
		<!-- 名片职位变更弹窗 -->
		<div class="jobChange" v-if="jobChangeFlag">
			<div class="jobChangeLayer">
				<p class="job-title">名片职位变更</p>
				<p class="job-con">
					<span>名片职位</span>
					<input type="text" placeholder="请输入新名片职位"/>
				</p>
				<p class="job-op">
					<span @click="cancelJobChange">取消</span>
					<span @click="sureJobChange">提交</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuFlag: false,
				leaveComFlag: false,
				jobChangeFlag: false,
			}
		},
		methods: {
			// 脱离企业
			leaveCom: function() {
				var _this = this;
				_this.leaveComFlag = true;
			},
			// 取消脱离企业
			cancelLeaveCom: function() {
				var _this = this;
				_this.leaveComFlag = false;
			},
			// 确认脱离企业
			sureLeaveCom: function() {
				var _this = this;
				_this.$router.push('/my');
				_this.leaveComFlag = false;
			},
			// 名片职位变更
			jobChange: function() {
				var _this = this;
				_this.jobChangeFlag = true;
			},
			// 取消名片职位变更
			cancelJobChange: function(){
				var _this = this;
				_this.jobChangeFlag = false;
			},
			// 确认名片职位变更
			sureJobChange: function () {
				var _this = this;
				alert('将新的职位和名片信息传给后台，然后关闭弹窗')
				_this.jobChangeFlag = false;
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style lang="less" scoped>
	@bgColor: #fff;
	.app-container {
		overflow: hidden;
		position: relative;
		.title {
			height: 44px;
			border-bottom: 1px solid #0092ff;
			padding: 0 15px;
			.title-text {
				width: 100px;
				line-height: 44px;
				float: left;
			}
			.title-op {
				width: 78px;
				height: 28px;
				margin-top: 8px;
				float: right;
			}
		}
		.menu {
			width: 124px;
			height: 70px;
			position: fixed;
			right: 15px;
			top: 40px;
			box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.3);
			background: @bgColor;
			border-radius: 4px;
			.jiao {
				position: absolute;
				left: 0;
				right: -75px;
				top: -5px;
				margin: auto;
				height: 0px;
				width: 0px;
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;
				border-bottom: 10px solid #fff;
			}
			.layer-list {
				height: 35px;
				width: 100%;
				.layer-list-icons {
					margin-top: 8px;
					margin-left: 10px;
					height: 15px;
					width: 15px;
					float: left;
					img {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				.layer-list-text {
					height: 100%;
					width: 70%;
					line-height: 35px;
					float: right;
					color: #666;
					border-bottom: 1px solid #ececec;
				}
			}
			.layer-list:nth-last-of-type(1) .layer-list-text {
				border-bottom: none;
			}
		}
		.list {
			li {
				width: 100%;
				height: 44px;
				line-height: 44px;
				padding-left: 15px;
				background-color: @bgColor;
				.detail {
					width: 100%;
					height: 100%;
					border-bottom: 1px solid #ececec;
					padding-right: 15px;
					.list-icons {
						margin: 10px 10px 0 0;
						width: 24px;
						height: 24px;
						float: left;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.list-title {
						width: 71px;
						height: 100%;
						float: left;
					}
					.list-text {
						width: 65%;
						height: 100%;
						float: right;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: right;
					}
				}
				&:nth-child(2) {
					margin-bottom: 10px;
				}
				&:nth-last-of-type(1) .detail,
				&:nth-child(2) .detail {
					border-bottom: none;
				}
			}
		}
		.leaveCom,
		.jobChange {
			width: 100%;
			background: rgba(0, 0, 0, 0.3);
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
		.leaveCom .leaveComLayer, 
		.jobChange .jobChangeLayer{
			width: 90%;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			margin: auto;
			background-color: #fff;
			border-radius: 8px;
		}
		.leaveCom .leaveComLayer {
			height: 195px;
			.leave-title {
				line-height: 4;
			}
			.leave-title,
			.leave-con {
				text-align: center;
			}
			.leave-con,
			.leave-op {
				padding: 0 15px;
			}
			.leave-con {
				line-height: 1.5;
			}
			.leave-op {
				height: 48px;
				span {
					display: block;
					height: 48px;
					width: 145px;
					color: #fff;
					line-height: 48px;
					text-align: center;
					border-radius: 4px;
					&:nth-child(1) {
						float: left;
						background-color: #ccc;
					}
					&:nth-child(2) {
						float: right;
						background-color: #0092ff;
					}
				}
			}
		}
		.jobChange .jobChangeLayer{
			height: 290px;
			.job-title{
				line-height: 4;
				text-align: center;
			}
			.job-con{
				padding: 0 15px;				
			}
			.job-op{
				padding: 0 15px;
				height: 48px;
				span {
					display: block;
					height: 48px;
					width: 145px;
					color: #fff;
					line-height: 48px;
					text-align: center;
					border-radius: 4px;
					&:nth-child(1) {
						float: left;
						background-color: #ccc;
					}
					&:nth-child(2) {
						float: right;
						background-color: #0092ff;
					}
				}
			}
		}
	}
</style>
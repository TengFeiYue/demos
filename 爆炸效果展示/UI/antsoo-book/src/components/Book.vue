<template>
  </div>
	<div>
		<ul>
			<router-link tag='li' v-for="(v,i) in arrList" :key="i" :to="{ name: 'bookDetail', params: {aa:v.p} }">
				<dl class="classifly">
					<dt></dt>
					<dd class="classifly-title">
						<span>{{v.category}}</span>
					</dd>
					<dd class="classifly-body">
						<span>{{v.content}}</span>
					</dd>
					<dd class="classifly-people">
						<div class="people-amount">1234人</div>
						<div class="people-collect">
							<span class="collect-child">123</span>
							<img class="collect-child" src="../assets/imgs/grey.png">
						</div>
					</dd>
				</dl>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'book',
		data() {
			return {
				arrList: [{
						category: '全国改性料通讯录',
						p: '1',
						content: '通讯录包含上下游最new的人脉关系，只有你想不到的，没有我们做不到的'
					},
					{
						category: '全国主机厂通讯录',
						p: '1'
					},
					{
						category: '全国制品通讯录',
						p: '1'
					},
					{
						category: '全国辅料通讯录',
						p: '1'
					},
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.icon-wendu{
		font-size:50px;
	}
	ul{
		margin-left: 9px;
		li{
			float: left;
			margin: 12px 7px;
			width: 45%;
			text-align: left;
			background-color: #fff;			
		}
		.classifly{
			dt{
				height: 90px;
				background-color: #DCDCDC;
			}
			.classifly-title{ /*通讯录标题*/
				height: 25px;
				line-height: 25px;
				font-size: 14px;
				font-weight: bold;
				padding-left: 5px;
			}
			.classifly-body { /*通讯录摘要*/
				color: #A9A9A9;
				height: 40px;
				font-size: 14px;
				padding-left: 5px;
				padding-right: 5px;
				line-height: 18px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp:2;
				overflow: hidden;
			}
			.classifly-people{ /*通讯录统计*/
				font-size: 14px;
				margin-top: 8px;
				height: 20px;
				.people-amount{ /*通讯录人脉数统计*/
					background-color: #DCDCDC;
					width: 70px;
					height: 15px;
					text-align: center;
					line-height: 15px;
					border-radius: 15px;
					float: left;
					margin-left: 5px;
				}
				.people-collect{
					/*通讯录收藏数统计*/
					float: right;
					margin-top: 2px;
					margin-right: 5px;
					.collect-child{
						display: block;
						float: right;
						height: 13px;
					}
					img{
						margin-right: 3px;
					}
				}
			}
		}
	}
</style>

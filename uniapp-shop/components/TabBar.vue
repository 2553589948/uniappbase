<template>
	<view class="tabbar">
		<view class="nav_bar_wrap">
			<view class="nav_bar_item"  @tap='switchTab(0)' >
				<view class="nav_bar_image">
					<image v-if=" currentIndex !== 0" :src=" domain + '/uploads/image/tabbar/home_tab_a.png'"></image>
					<image v-else :src=" domain + '/uploads/image/tabbar/hone_tab_a.png'"></image>
				</view>
				<text class="nav_bar_title" :style=" currentIndex !== 0 ? { color : fontColor} : { color:fontColorActive}">首页</text>
			</view>
			<view class="nav_bar_item"  @tap='switchTab(1)' >
				<view class="nav_bar_image">
					<image v-if=" currentIndex !== 1" :src=" domain + '/uploads/image/tabbar/home_tab_b.png'"></image>
					<image v-else :src=" domain + '/uploads/image/tabbar/hone_tab_b.png'"></image>
				</view>
				<text class="nav_bar_title" :style=" currentIndex !== 1 ? { color : fontColor} : { color:fontColorActive}">分类</text>
			</view>
			<view class="nav_bar_item"  @tap='switchTab(2)'>
				<view class="nav_bar_image">
					<image v-if=" currentIndex !== 2" :src=" domain + '/uploads/image/tabbar/home_tab_c.png'"></image>
					<image v-else :src=" domain + '/uploads/image/tabbar/hone_tab_c.png'"></image>
				</view>
				<text class="nav_bar_title" :style=" currentIndex !== 2 ? { color : fontColor} : { color:fontColorActive}">购物车</text>
			</view>
			<view class="nav_bar_item"  @tap='switchTab(3)'>
				<view class="nav_bar_image">
					<image v-if=" currentIndex !== 3" :src=" domain + '/uploads/image/tabbar/home_tab_d.png'"></image>
					<image v-else :src=" domain + '/uploads/image/tabbar/hone_tab_d.png'"></image>
				</view>
				<text class="nav_bar_title" :style=" currentIndex !== 3 ? { color : fontColor} : { color:fontColorActive}">我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				domain: "",
				currentIndex: 0,
			};
		},
		props: {
			current: {
				type: Number,
				default: 0
			},
			fontColorActive: {
				type: String,
				default: '#E51001'
			},
			fontColor: {
				type: String,
				default: '#666666'
			}
		},	
		mounted() {
			this.currentIndex = this.current
			
			// 获取全局域名
			this.domain = uni.getStorageSync('domain')
		},
		methods: {
			switchTab( index ) {
				if( this.currentIndex !== index) {
					this.$emit('switchTab', index)
				}	
			},
 		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		width: 100%;
		height: 98rpx;
		position: fixed;
		bottom: 0;
		background-color: #fff;
	}
	.nav_bar_wrap {
		display: flex;
		width: 100%;
		height: 98rpx;
		background-color: #fff;
		.nav_bar_item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.nav_bar_image {
				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
			.nav_bar_title {
				height:22rpx;
				font-size:22rpx;
				color:rgba(102,102,102,1);
				line-height:22rpx;
			}
		}
		
	}
</style>

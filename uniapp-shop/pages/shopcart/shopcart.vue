<template>
	<view class="shopcart_container">
		
		<!-- 底部tabbar -->
		<tab-bar @switchTab="switchTab" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				current: 2
			}
		},
		methods: {
			switchTab (index) {
				switch (index) {
					case 0: uni.redirectTo({url: '../index/index'}); break;
					case 1: uni.redirectTo({url: '../category/category'}); break;
					case 2: break;
					case 3: uni.redirectTo({url: '../mine/mine'}); break;
					default: break;
				}
			}
		}
	}
</script>

<style>
</style>

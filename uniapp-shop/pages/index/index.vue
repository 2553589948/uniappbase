<template>
	<view class="home_container">
		
		<!-- 底部tabbar -->
		<tab-bar @switchTab="switchTab" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
			}
		},
		methods: {
			switchTab (index) {
				switch (index) {
					case 0: break;
					case 1: uni.redirectTo({url: '../category/category'}); break;
					case 2: uni.redirectTo({url: '../shopcart/shopcart'}); break;
					case 3: uni.redirectTo({url: '../mine/mine'}); break;
					default: break;
				}
			}
		}
	}
</script>

<style>

</style>

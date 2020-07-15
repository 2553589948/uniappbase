<template>
  <div class="tab">
    <router-link to="/" class="tab-item-link" tag="div">
        <div class="tab-item" @click="selectOption(0)">
            <img v-if="activeIndex != 0" src="/static/tabbar/home_tab_a.png" alt="">
            <img v-else src="/static/tabbar/hone_tab_a.png" alt="">
            <div class="tab-link" :class="[activeIndex == 0 ? 'active' : '']">首页</div>
        </div>
    </router-link>
    <router-link to="/category" class="tab-item-link" tag="div">
        <div class="tab-item" @click="selectOption(1)">
            <img v-if="activeIndex != 1" src="/static/tabbar/home_tab_b.png" alt="">
            <img v-else src="/static/tabbar/hone_tab_b.png" alt="">
            <div class="tab-link" :class="[activeIndex == 1 ? 'active' : '']">分类</div>
        </div>
    </router-link>
    <router-link to="/shopcart" class="tab-item-link" tag="div">
        <div class="tab-item" @click="selectOption(2)">
            <img v-if="activeIndex != 2" src="/static/tabbar/home_tab_c.png" alt="">
            <img v-else src="/static/tabbar/hone_tab_c.png" alt="">
            <div class="tab-link" :class="[activeIndex == 2 ? 'active' : '']">购物车</div>
        </div>
    </router-link>
    <router-link to="/mine" class="tab-item-link" tag="div">
        <div class="tab-item" @click="selectOption(3)">
            <img v-if="activeIndex != 3" src="/static/tabbar/home_tab_d.png" alt="">
            <img v-else src="/static/tabbar/hone_tab_d.png" alt="">
            <div class="tab-link" :class="[activeIndex == 3 ? 'active' : '']">我的</div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: 0
        }
    },
    mounted () {
        // console.log(this.$refs.getclass._vnode.data.class)
    },
    methods: {
        selectOption (index) {
            console.log(index)
            
            this.activeIndex = index
        }
    }
}
</script>

<style lang="css">

.tab {
    position: fixed;
    z-index: 9;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #e3e3e3;
    background: #fff;
    color: #000;
    font-size: 14px;
    display: flex;
}
.tab-item-link, .tab-item {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.tab-item img {
    width: 24px;
    height: 24px;
    display: inline-block;
}
.tab-link {
    display: inline-block;
    line-height: 14px;
    margin-top: 5px;
}

.tab-link.active {
    color: red;
}
</style>

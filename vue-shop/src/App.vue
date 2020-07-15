<template>
  <div id="app">
    <v-tab></v-tab>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'

export default {
  name: 'App',
  components: {
    'v-tab': tab
  }
}
</script>

<style lang="css">
/* 重置样式 */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
i {
  font-style: normal;
}
a, div {
  -webkit-tap-highlight-color: transparent;
}
ul, li {
  list-style: none;
}
</style>

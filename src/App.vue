<template>
  <div id="app">
    <h1>仿制水平横向瀑布流展示</h1>
    <horizontal-water-pull
      :img-shade="'#f40'"
      :src-key="'imgUrl'"
      :img-fit-way="'cover'"
      :img-list="urls"/>
  </div>
</template>

<script>
import HorizontalWaterPull from "./assets/plugins/horizontalWaterPull";
import imgList from "./assets/imgList";
export default {
  name: 'app',
  components: {HorizontalWaterPull},
  data () {
    return {
      urls: []
    }
  },
  created() {
    this.urls = imgList.sort((a, b) => 0.5 - Math.random())
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

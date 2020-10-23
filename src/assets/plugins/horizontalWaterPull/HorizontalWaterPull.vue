<template>
  <div class="picture-pull">
    <div class="picture-pull_div">
      <div class="img-box"
           :style="imgShadeStyle"
           v-for="(item,index) in imgList"
           :key="Date.now() + Math.random().toString(16).substring(2,9)" >
         <img  :src="item[srcKey]"
               :style="imgStyle"
               alt="水平瀑布流的图片"
               @click.stop="showImgInfo(item)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalWaterPull',
  props: {
    // 图片列表
    imgList: {
      type: Array,
      default: () => []
    },
    // 图片地址的key
    srcKey:{
      type: String,
      default: 'url'
    },
    // 瀑布流图片的高度
    height: {
      type: [String, Number],
      default: '200'
    },
    // 图片遮罩
    imgShade: {
      type: String,
      default: 'violet'
    },
    // 图片之间的间距
    imgMargin: {
      type: String,
      default: '5px',
    },
    // 图片适应的方式
    imgFitWay: {
      type: String,
      default: 'cover',
      validator: (val) => ['fill', 'contain', 'cover', 'none', 'scale-down'].indexOf(val) > 0
    }
  },
  data(){
    return{
      // 图片列表
      srcList: []
    }
  },
  computed:{
    /**
     * 获取图片闯过来的高度
     */
    imgStyle () {
      const obj = {};
      obj['object-fit'] = this.imgFitWay ;
      if (String(this.height).indexOf('px') > 0){
        obj.height = this.height + '!important';
      }else {
        obj.height = this.height + 'px !important';
      }
      console.log(obj)
      return obj;
    },
    /**
     * 图片的背景遮罩
     */
    imgShadeStyle () {
      const obj = {};
      obj.backgroundColor = this.imgShade + '!important';
      obj.margin = this.imgMargin + '!important';
      return obj;
    }
  },
  methods: {
    /**
     * 查看图片信息
     * @param obj
     */
    showImgInfo(obj){
      this.$emit('showImgInfo', obj)
    },
  }
}
</script>

<style lang="scss" scoped>
.picture-pull{
  width: 100%;
  height: 100%;

  &_div{
    display: flex;
    flex-wrap: wrap;
    &::after {//处理最后一行
      content: '';
      flex-grow: 999999999;
    }

    .img-box{
      margin: 5px;
      position: relative;
      min-height: 200px;
      min-width: 200px;
      flex-grow: 1;
      background-color: violet;
      cursor: pointer;
      img{
        max-width: 100%;
        min-width: 100%;
        height: 200px;
        object-fit: cover;
        vertical-align: bottom;
      }
    }
  }



}
</style>

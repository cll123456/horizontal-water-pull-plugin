import HorizontalWaterPull from "./HorizontalWaterPull";

// 对外提供一个install 方法
HorizontalWaterPull.install = function (vue){
  vue.component(HorizontalWaterPull.name, HorizontalWaterPull);
}
// 这个导出时给外部直接使用Vue.use(xxxx)
export {
  HorizontalWaterPull
}
// 这个时给外部直接导入组件使用的
export default HorizontalWaterPull;

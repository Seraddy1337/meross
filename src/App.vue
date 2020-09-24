<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
(function () {
    function setRootFontSize() {
        let rem, rootWidth;
        let rootHtml = document.documentElement;
        //限制展现页面的最小宽度
        rootWidth = rootHtml.clientWidth < 768 ? 768 : rootHtml.clientWidth;
        // 19.2 = 设计图尺寸宽 / 100（ 设计图的rem = 100 ）
        rem = rootWidth / 1366 * 16;
        // 动态写入样式
        rootHtml.style.fontSize = `${rem}px`;
    }
    setRootFontSize();
    window.addEventListener("resize", setRootFontSize, false);
})();
</script>

<style lang="scss">
  // html {
  //   font-size:10px;
  // }
  body {
    margin: 0 !important;
  }
</style>


<template>
  <div class="list">
    <div class="banner">
        <img src="https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1559195061618/9794107.jpg" alt="">
    </div>
    <div class="section-2">
        <div class="list-wrap" >
            <div class="item" v-for="item in listCompute" :key="item.title" @click="routerPush(item.title)">
                <img :src="item.imgSrc" alt=""/>
                <div class="item-title">
                    {{item.title}}
                </div>
                <div class="item-subtitle">
                    {{item.subtitle}}
                </div>
            </div>
        </div>
    </div>
    <div v-if="this.list.length > 4" :class="[fold ? 'fold' : 'unfold']" @click="foldToggle">
        <span>展开</span>
        <span>关闭</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
        fold: false,
        list: [
            { title:'Smart WiFi Plug Mini1', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini2', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini3', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini4', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini5', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini6', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini7', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini8', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini9', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini10', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini11', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini12', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini13', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini14', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
            { title:'Smart WiFi Plug Mini15', subtitle: 'MSS110HK / MSS110 US/JP', imgSrc: "https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1596264058218/4931749.jpg"},
        ]
    }
  },
  props: {

  },
  methods: {
    foldToggle: function () {
        this.fold=!this.fold
    },
    routerPush: function(i) {
      this.$router.push('/detail/'+ i)
    }
  },
  computed: {
      listCompute: function() {
          if(this.fold) {
              return this.list
          } else {
              return this.list.slice(0, 4)
          }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list{
    position: relative;
    .banner {
      position: relative;
      height: 8rem;
      .info-wrap{
        position: absolute;
        text-align: center;
        .title {
            font-size: 2rem;
            font-weight: bold;
        }
      }
      img {
        width: 100%;
      }
  }
  .section-2 {
    background: rgb(242, 242, 242);
    .list-wrap {
      display: flex;
      flex-wrap: wrap;
      padding: 6rem;
      .item {
        width: 16rem;
        text-align: center;
        margin: 1rem;
        background: #fff;
        cursor: pointer;
        transition: 0.6s;
        &:hover {
          transform: translateY(-4px);
          animation-fill-mode: forwards;
          box-shadow: 0 4px 50px rgba(0,0,0,.25);
        }
        img {
          width: 100%;
        }
        .item-subtitle {
          margin: 1rem 0 1rem 0;
          font-size: 0.8rem;
        }
      }
    }
  }
  .fold, .unfold {
      text-align: center;
  }
}
  
</style>
<template>
  <div class="product">
    <ToggleList />
    <ToggleList />
  </div>
</template>

<script>
import ToggleList from './ToggleList.vue';

export default {
  name: 'Product',
  components: {
    ToggleList,
  },
  data() {
    return {
      product: [
          {title: 'Single-hole plug1', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
          {title: 'Single-hole plug2', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
          {title: 'Single-hole plug3', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
          {title: 'Single-hole plug4', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
      ],
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
    slideToggle: function() {
      
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.product{
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
}
  
</style>
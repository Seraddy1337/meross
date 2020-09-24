<template>
  <div class="product">
    <div class="banner">
        <div class="info-wrap">
            <div class="title">Smart Plug</div>
            <div class="line">------</div>
            <div class="info">Expand Your Capabilities</div>
        </div>
        <img src="https://d2211byn0pk9fi.cloudfront.net/spree/taxons/82125/normal/A8338_banner.jpg?1585549640" alt="">
    </div>
    <div v-for="(item, index) in product" :key="item.title" >
        <div  v-if="index%2 == 0" class="section-2">
            <img v-bind:src="item.imgSrc" alt=""/>
            <div class="section-info">
                <div class="subtitle">{{item.subtitle}}</div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="btn-wrap">
                <router-link to='/product/list'>
                    <div class="buy-now">
                        LEARN MORE
                    </div>
                </router-link>
                </div>
            </div>
        </div>
        <div  v-else class="section-3">
            <div class="section-info">
                <div class="subtitle">{{item.subtitle}}</div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="btn-wrap">
                <router-link to='/product/list'>
                    <div class="buy-now">
                        LEARN MORE
                    </div>
                </router-link>
                </div>
            </div>
            <img v-bind:src="item.imgSrc" alt=""/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
        product: [
            {title: 'Single-hole plug1', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
            {title: 'Single-hole plug2', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
            {title: 'Single-hole plug3', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
            {title: 'Single-hole plug4', subtitle: 'Single-hole plug', desc: "From indoors to the outdoors, Kasa Smart security cameras have your home covered. Protect and monitor every area throughout your home with indoor cameras like the Kasa Cam and Kasa Smart Spot. Even keep an eye on what's going on around the exterior of your home with the Kasa Cam Outdoor or Kasa Smart Wire-Free Camera, which can be placed anywhere you want.", imgSrc: "https://images.prismic.io/kasasmart/ce1c60206c562f0ff2b637a729f8713da5616351_kc200-gallery-image-1.jpg?auto=compress,format"},
        ]
    }
  },
  props: {

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.product{
    .banner {
      position: relative;
      .info-wrap{
          position: absolute;
          left: 18%;
          top: 40%;
          .title {
              font-size: 2rem;
              font-weight: bold;
          }
          .line {
              text-align: center;
          }
      }
      img {
          width: 100%;
      }
  }
  .section-2, .section-3 {
    position: relative;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 30rem;
      margin: 0 1rem;
    }
    .section-info {
      width: 28rem;
      margin: 0 1rem;
      .subtitle {
        font-size: 1rem;
        font-weight: bold;
      }
      .title {
        font-size: 3rem;
        padding-top: 0.5rem;
        padding-bottom: 1.5rem;
      }
      .btn-wrap {
        text-align: center;
        width: 10rem;
        padding-top: 1rem;
        a {
            text-decoration: none;
        }
        .buy-now {
            height: 3rem;
            box-sizing: border-box;
            border-radius: 0.5rem;
            border: .01rem solid #000;
            background: #fff;
            color: #000;
            line-height: 2.8rem;
            font-size: 1rem;;
            cursor: pointer;
            transition: 0.5s;
            text-decoration: none;
            &:hover {
                color: #fff;
                background: #000;
            }
        }
      }
    }
  }
}
  
</style>
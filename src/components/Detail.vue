<template>
  <div class="detail">
    <div class="overview">

    </div>
    <div class="features">
        <div class="features-item" v-for="item in features" :key="item.title">
            <div class="features-item-info">
                <h1>
                    {{item.title}}
                </h1>
                <div>
                    {{item.content}}
                </div>
            </div>
            <img :src="item.imgSrc"/>
        </div>
    </div>
    <div class="specs">
        <div class="title">SPECS</div>
        <div class="specs-item" v-for="item in specs" :key="item.title">
            <div class="specs-item-title">{{item.title}}</div>
            <div class="specs-item-content">{{item.content}}</div>
        </div>
    </div>
    <div class="downloads">
        <div class="title">DOWNLOADS</div>
        <div class="downloads-item" v-for="item in downloads" :key="item.title">
            <div class="downloads-item-title">{{item.title}}</div>
            <div class="downloads-item-content">{{item.content}}</div>
            <div class="downloads-item-time">{{item.content}}</div>
        </div>
    </div>
     <div class="faqs">
        <div class="title">FAQ</div>
        <div class="faqs-item" v-for="item in faqs" :key="item.title">
            <div class="faqs-item-title">{{item.title}}</div>
            <div class="faqs-item-content">{{item.content}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
        fold: false,
        features: [
            { title:'Redefine Screen Size', content: " With the XGIMI MoGo, you can enjoy your own private cinema with great sound and an amazing 30'' - 100+'' Big Screen. Just put your feet up, sit back and enjoy the perfect movie-going experience.", imgSrc: "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"},
            { title:'Redefine Screen Size', content: " With the XGIMI MoGo, you can enjoy your own private cinema with great sound and an amazing 30'' - 100+'' Big Screen. Just put your feet up, sit back and enjoy the perfect movie-going experience.", imgSrc: "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"},
            { title:'Redefine Screen Size', content: " With the XGIMI MoGo, you can enjoy your own private cinema with great sound and an amazing 30'' - 100+'' Big Screen. Just put your feet up, sit back and enjoy the perfect movie-going experience.", imgSrc: "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"},
            { title:'Redefine Screen Size', content: " With the XGIMI MoGo, you can enjoy your own private cinema with great sound and an amazing 30'' - 100+'' Big Screen. Just put your feet up, sit back and enjoy the perfect movie-going experience.", imgSrc: "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"},
            { title:'Redefine Screen Size', content: " With the XGIMI MoGo, you can enjoy your own private cinema with great sound and an amazing 30'' - 100+'' Big Screen. Just put your feet up, sit back and enjoy the perfect movie-going experience.", imgSrc: "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"},
        ],
        specs: [
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
        ],
        downloads: [
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
        ],
        faqs: [
              { title:'What voltage is RoboVac rated for? Does RoboVac come with a charger that is compatible with my region?', content: "RoboVac works with voltages from 100 - 240V; a charger for the region is included. If you want to use your RoboVac in other countries, you will need to use a plug adapter."},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
              { title:'Product Name', content: "RoboVac 15C"},
        ],
    }
  },
  props: {

  },
  methods: {

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .detail {
      .features {
        //   background-image: url('https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423');
        //   background-size: 100%;
        .features-item {
            text-align: center;
            position: relative;
            img {
                width: 100%;
                display: block;
            }
            .features-item-info {
                position: absolute;
                width: 60%;
                left: 0;
                right: 0;
                margin: auto;
                top: 10%;
                color: #fff;
            }
        }
      }
    .specs {
        padding: 2rem 10%;
        background: #f9f9f9;
        .title {
            font-size: 2rem;
            text-align: center;
            line-height: 6rem;
        }
        .specs-item {
            line-height: 3rem;
            display: flex;
            border-bottom: 1px solid #000;
            .specs-item-title {
                width: 12rem;
                font-weight: bold;
            }
        }
    }
    .downloads {
        padding: 2rem 10%;
        background: #f9f9f9;
        .title {
            font-size: 2rem;
            text-align: center;
            line-height: 6rem;
        }
        .downloads-item {
            line-height: 3rem;
            display: flex;
            // border-bottom: 1px solid #000;
            .downloads-item-title {
                width: 12rem;
                font-weight: bold;
            }
        }
    }
    .faqs {
        padding: 2rem 10%;
        background: #f9f9f9;
        .title {
            font-size: 2rem;
            text-align: center;
            line-height: 6rem;
        }
        .faqs-item {
            // line-height: 3rem;
            // display: flex;
            // border-bottom: 1px solid #000;
            padding: 1rem 0;
            font-size: 0.8rem;
            .faqs-item-title {
                // width: 12rem;
                font-weight: bold;
                &::before {
                    // content: "";

                    // width: 0.2rem;
                    // height: 0.2rem;
                    // border-radius: 0.2rem;
                }
            }
        }
    }
  }
</style>
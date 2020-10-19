<template>
  <div class="detail">
    <ul class="navs" :class="{ display: navDisplay }">
      <li :class="{active: activeNav===0}" @click="scrollTo(3)">
        OVERVIEW
      </li>
      <li :class="{active: activeNav===1}" @click="scrollTo(4)">
        FEATURES
      </li>
      <li :class="{active: activeNav===2}" @click="scrollTo(5)">
        SPECS
      </li>
      <li :class="{active: activeNav===3}" @click="scrollTo(6)">
        DOWNLOADS
      </li>
      <li :class="{active: activeNav===4}" @click="scrollTo(7)">
        FAQS
      </li>
    </ul>
    <div class="overview">
            <div class="thumbs">
                <img src="https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423"  v-for="(item, index) in overview.overviewImg" :key="item" alt="" @click="imgClick(index)" :class="{ active: index == activeImg }">
            </div>
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop" @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart">
               <swiper-slide class="slide" v-for="item in overview.overviewImg" :key="item">
                    <img :src="item" alt="" :preview="overview.title">
                </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
        <div class="overview-info">
            <h1 class="title">{{overview.title}}</h1>
            <div class="subtitle">{{overview.subtitle}}</div>
            <ul>
                <li>
                    Turn appliances on/off from anywhere anytime with your Meross app.
                </li>
                <li>
                    Turn appliances on/off from anywhere anytime with your Meross app.
                </li>
                <li>
                    Turn appliances on/off from anywhere anytime with your Meross app.
                </li>
                <li>
                    Turn appliances on/off from anywhere anytime with your Meross app.
                </li>
            </ul>
            <div class="label">
                <img v-for="item in overview.label" :key="item" :src="item" alt />
            </div>
            <div class="buyNow">
                <img v-for="item in overview.buyNow" :key="item.imgSrc" :src="item.imgSrc" @click="hrefTo(item.href)" alt="">
            </div>
        </div>
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
        <div class="title">FAQS</div>
        <div class="faqs-item" v-for="item in faqs" :key="item.title">
            <div class="faqs-item-title">{{item.title}}</div>
            <div class="faqs-item-content">{{item.content}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'List',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            navDisplay: false,
            activeImg: 0,
            activeNav: 1,
            fold: false,
            overview: 
                {
                    overviewImg: [
                    "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423",
                    "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423",
                    "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423",
                    "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423",
                    "https://global.static.xgimi.com/d19b330cb4a53404143d0731bcc0b423",
                    ],
                    title: 'Smart Wi-Fi Plug',
                    subtitle: 'MSS210HK IT',
                    overviewInfo: [ 
                        'Turn appliances on/off from anywhere anytime with your Meross app.',
                        'Turn appliances on/off from anywhere anytime with your Meross app.',
                        'Turn appliances on/off from anywhere anytime with your Meross app.',
                        'Turn appliances on/off from anywhere anytime with your Meross app.',
                        'Turn appliances on/off from anywhere anytime with your Meross app.',
                    ],
                    label: [
                        'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592538584783/5915227.png',
                        'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592538584783/5915227.png',
                        'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592538584783/5915227.png',
                    ],
                    buyNow: [
                        { imgSrc: 'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592533868255/8239126.png',href: 'https://amzn.to/2EK4JUu' },
                        { imgSrc: 'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592533868255/8239126.png',href: 'https://amzn.to/2EK4JUu' },
                        { imgSrc: 'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592533868255/8239126.png',href: 'https://amzn.to/2EK4JUu' },
                        { imgSrc: 'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592533868255/8239126.png',href: 'https://amzn.to/2EK4JUu' },
                        { imgSrc: 'https://d2utgrzbxqaq8t.cloudfront.net/public/staticfile/1592533868255/8239126.png',href: 'https://amzn.to/2EK4JUu' },
                    ]
                },
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
                { title:'What voltage is RoboVac rated for? Does RoboVac come with a charger that is compatible with my region?', content: "RoboVac works with voltages from 100 - 240V; a charger for the region is included. If you want to use your RoboVac in other countries, you will need to use a plug adapter."},
                { title:'What voltage is RoboVac rated for? Does RoboVac come with a charger that is compatible with my region?', content: "RoboVac works with voltages from 100 - 240V; a charger for the region is included. If you want to use your RoboVac in other countries, you will need to use a plug adapter."},
                { title:'What voltage is RoboVac rated for? Does RoboVac come with a charger that is compatible with my region?', content: "RoboVac works with voltages from 100 - 240V; a charger for the region is included. If you want to use your RoboVac in other countries, you will need to use a plug adapter."},
                { title:'What voltage is RoboVac rated for? Does RoboVac come with a charger that is compatible with my region?', content: "RoboVac works with voltages from 100 - 240V; a charger for the region is included. If you want to use your RoboVac in other countries, you will need to use a plug adapter."},
            ],
            swiperOptionTop: {    
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            },
        }
    },
    props: {

    },
    methods: {
        imgClick(index) {
            this.swiper.slideTo(index)
        },
        onSwiperSlideChangeTransitionStart() {
            this.activeImg = this.swiper.activeIndex
        },
        onScroll() {
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.detail>div')
            // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop-80)
            })
            // 获取当前文档流的 scrollTop
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义当前点亮的导航下标
            if (scrollTop > 100) {
                this.navDisplay = true;
            } else {
                this.navDisplay = false;
            }
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是n了
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.activeNav = navIndex
            },
            // 跳转到指定索引的元素
            scrollTo(index) {
            // 获取目标的 offsetTop
            // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
            const targetOffsetTop = document.querySelector(`.detail>div:nth-child(${index - 1})`).offsetTop-80
            // 获取当前 offsetTop
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
            const STEP = 120
            // 判断是往下滑还是往上滑
            if (scrollTop > targetOffsetTop) {
                // 往上滑
                smoothUp()
            } else {
                // 往下滑
                smoothDown()
            }
            // 定义往下滑函数
            function smoothDown() {
                // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                if (scrollTop < targetOffsetTop) {
                // 如果和目标相差距离大于等于 STEP 就跳 STEP
                // 否则直接跳到目标点，目标是为了防止跳过了。
                if (targetOffsetTop - scrollTop >= STEP) {
                    scrollTop += STEP
                } else {
                    scrollTop = targetOffsetTop
                }
                document.body.scrollTop = scrollTop
                document.documentElement.scrollTop = scrollTop
                // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
                requestAnimationFrame(smoothDown)
                }
            }
            // 定义往上滑函数
            function smoothUp() {
                if (scrollTop > targetOffsetTop) {
                if (scrollTop - targetOffsetTop >= STEP) {
                    scrollTop -= STEP
                } else {
                    scrollTop = targetOffsetTop
                }
                document.body.scrollTop = scrollTop
                document.documentElement.scrollTop = scrollTop
                requestAnimationFrame(smoothUp)
                }
            }
        },
        hrefTo(url) {
            window.open(url);
        }
    },
    computed: {
      swiper() {
        return this.$refs.swiperTop.$swiper
      }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, false)
    },
    destroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .detail {
        .navs {
            position: sticky;
            top: 0;
            left: 0;
            background-color: #efefef;
            width: 100%;
            transition: all 0.4s;
            z-index: 101;
            display: none;
            background: #000;
            height: 4rem;
            line-height: 4rem;
            padding-left: 20%;
            color: #fff;
            &.display {
                display: flex;
            }
            li {
                margin: 0 2rem;
                line-height: 4rem;
                list-style: none;
                cursor: pointer;
                &.active {
                    color: #21ccbf;
                    border-bottom: 0.2rem solid #21ccbf;
                }
            }
        }
      .overview {
        padding: 4rem 6rem;
        height: 30rem;
        background: #f9f9f9;
        .overview-info {
            float: left;
            width: 45%;
            padding-left: 5%;
            .label {
                text-align: center;
                img {
                    margin: 0 0.5rem;
                }
            }
            .buyNow {
                margin-top: 1rem;
                padding-left: 2rem;
                img {
                    margin: 0.2rem 1rem;
                    cursor: pointer;
                }
            }
        }
        .thumbs {
            float: left;
            margin-right: 1rem;
            img {
                width: 4rem;
                height: 4rem;
                display: block;
                margin-bottom: 0.5rem;
                border: 2px solid transparent;
                cursor: pointer;
                &.active {
                    border: 2px solid #21ccbf;
                }
            }
        }
        .swiper {
        .swiper-slide {
            background-size: cover;
            background-position: center;
            img {
                height: 100%;
                width: 100%;
            }
        }

        &.gallery-top {
            height: 100%;
            width: 40%;
            float: left;
        }
    }
      }
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
            line-height: 5rem;
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
        background: #fff;
        .title {
            font-size: 2rem;
            text-align: center;
            line-height: 6rem;
        }
        .downloads-item {
            line-height: 3rem;
            display: flex;
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
            padding-left: 1.5rem;
            margin: 0.5rem 0;
            font-size: 0.8rem;
            &:hover {
                background: #f2f2f2;
            }
            .faqs-item-title {
                padding-top: 0.5rem;
                position: relative;
                font-weight: bold;
                &::before {
                    content: "";
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    left: -1rem;
                    top: 54%;
                    background-color: #000;
                }
            }
            .faqs-item-content {
                color: #7f7f7f;
                padding: 0.5rem 0;
            }
        }
    }
  }
</style>
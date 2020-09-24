<template>
  <div class="home">
    <Swipe class="section-1 swipe" auto=5000>
        <SwipeItem class="slide1">
          <img class="section-image section-loop-node" src="https://img.technology.aukey.com/Aukey/1599479623318.jpg">
          <div class="swipeInfo">
            <div class="btn-wrap">
              <div class="buy-now">
                Buy Now
              </div>
            </div>
          </div>
        </SwipeItem>
        <SwipeItem class="slide2">
          <video autoplay loop src="https://img.technology.aukey.com/Aukey/1584692188877.mp4"></video>
        </SwipeItem>
        <SwipeItem class="slide3">
          <video autoplay loop src="https://img.technology.aukey.com/Aukey/1584692188877.mp4"></video>
        </SwipeItem>
    </Swipe>
    <div class="section-2">
      <video autoplay loop src="https://img.technology.aukey.com/Aukey/1584335141312.mp4"></video>
      <div class="section-info">
        <div class="subtitle">MSG100</div>
        <div class="title">FULL SPEED. HALF SIZE.</div>
        <div class="btn-wrap">
          <div class="buy-now">
            Buy Now
          </div>
          <div>
            Learn More
          </div>
        </div>
      </div>
    </div>
    <div class="section-3">
      <video autoplay loop src="https://img.technology.aukey.com/Aukey/1584335381830.mp4"></video>
      <div class="section-info">
        <div class="subtitle">MSS110</div>
        <div class="title">FULL SPEED. HALF SIZE.</div>
        <div class="btn-wrap">
          <div class="buy-now">
            Buy Now
          </div>
          <div>
            Learn More
          </div>
        </div>
      </div>
    </div>
    <div class="section-2">
      <video autoplay loop src="https://img.technology.aukey.com/Aukey/1584335141312.mp4"></video>
      <div class="section-info">
        <div class="subtitle">MSS510</div>
        <div class="title">FULL SPEED. HALF SIZE.</div>
        <div class="btn-wrap">
          <div class="buy-now">
            Buy Now
          </div>
          <div>
            Learn More
          </div>
        </div>
      </div>
    </div>
    <div class="section-4 wall-wrap">
      <div class="wall-wrap-innner">
        <div class="wall-item">
          <div class="wall-item-title">20+</div>
          <div class="wall-item-info">Meross products are sold in more than 20 countries and regions around the world</div>
           <div class="wall-item-img-wrap">
              <img class="section-image section-loop-node" src="https://img.technology.aukey.com/wall_map.png">
           </div>
        </div>
        <div class="wall-item">
          <div class="wall-item-title">30+</div>
          <div class="wall-item-info">There is a wide and various range of product lineup, with more than 30 product categories</div>
           <div class="wall-item-img-wrap">
              <img class="section-image section-loop-node" src="https://img.technology.aukey.com/wall_map.png">
           </div>
        </div>
        <div class="wall-item">
          <div class="wall-item-title">50+</div>
          <div class="wall-item-info">One million people use Meross products to make their lives smarter and simpler</div>
          <div class="wall-item-img-wrap">
            <img class="section-image section-loop-node" src="https://img.technology.aukey.com/wall_map.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  name: 'Home',
  components: {
    Swipe,
    SwipeItem,
  },
  data() {
    return {
    }
  },
  props: {
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
  .swipe {
    height: 40rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    .mint-swipe-indicator{
      width: 14px;
      height: 14px;
      display: inline-block;
      border-radius: 100%;
      background: #333;
      opacity: 0.8;
      margin: 0 6px;
      &.is-active {
        background: #fff;
      }
    }
    .swipeInfo {
      .btn-wrap{
        height: 3rem;
        box-sizing: border-box;
        border-radius: 1.5rem;
        border: .01rem solid #fff;
        line-height: 2.8rem;
        font-size: 1rem;;
        cursor: pointer;
        position: absolute;
        top: 64%;
        left: 8%;
        width: 10rem;
      }
    }
    .slide1 {
      img, video {
        width: 100%;
        }
        position: absolute;
      }
    .slide2 {
      img, video {
        width: 100%;
      }
    }
    .slide3 {
      img, video {
        width: 100%;
      }
    }
  }
  .section-2 {
    position: relative;
    height: 44rem;
    video {
      width: 100%;
    }
    .section-info {
      position: absolute;
      right: 8%;
      top: 38%;
      text-align: right;
      .subtitle {
        font-size: 1.5rem;
      }
      .title {
        font-size: 3rem;
        padding-top: 1rem;
        padding-bottom: 4rem;
      }
      .btn-wrap {
        position: absolute;
        right: 0;
        text-align: center;
        width: 10rem;
        .buy-now {
          height: 3rem;
          box-sizing: border-box;
          border-radius: 1.5rem;
          border: .01rem solid #000;
          line-height: 2.8rem;
          font-size: 1rem;;
          cursor: pointer;
        }
      }
    }
  }
  .section-3 {
    position: relative;  
    height: 44rem;
    video {
      width: 100%;
    }
    .section-info {
      position: absolute;
      left: 8%;
      top: 38%;
      text-align: left;
      .subtitle {
        font-size: 1.5rem;
      }
      .title {
        font-size: 3rem;
        padding-top: 1rem;
        padding-bottom: 5rem;
      }
      .btn-wrap {
        position: absolute;
        left: 0;
        text-align: center;
        width: 10rem;
        .buy-now {
          height: 3rem;
          box-sizing: border-box;
          border-radius: 1.5rem;
          border: .01rem solid #000;
          line-height: 2.8rem;
          font-size: 1rem;;
          cursor: pointer;
        }
      }
    }
  }
  .section-4 {
      padding: 6rem 7rem 4rem 7rem;
      background: #e1e1e1;
      position: relative;
      .wall-wrap-innner {
        display: flex;
        justify-content: space-between;
        .wall-item {
          width: 24rem;
          .wall-item-title {
            color: #00b399;
            font-size: 2.4rem;
            font-weight: bold;
            padding: 0 1.5rem;
          }
          .wall-item-info {
            font-size: 0.8rem;
            margin: 0.1rem 0 2rem 0;
            padding: 0 1.5rem;
          }
          img {
            width: 100%;
          }
        }
      }
  }
}
</style>

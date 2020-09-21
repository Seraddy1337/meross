<template>
  <div class="header">
    <div class="header-menu" @mouseleave="setActiveMenu('')">
      <img class="logo" alt="logo" src="../assets/logo.png">
      <div class="menu-item" v-for="item in menus" :key="item.title" @mouseover="setActiveMenu(item.title)"> 
        {{item.title}}
        <div class="submenu" :key="item.title" v-bind:class="{ active: activeMenu === item.title}">
          <div class="submenu-item" v-for="i in item.menu" :key="i.title" > 
            <span>{{i.title}}</span>
            <div class="thirdmenu">
              <div class="third-item" v-for="n in i.thirdMenu" :key="n" > 
                <span>{{n}}</span>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hader',
  props: {
  },
  data() {
    return {
      activeMenu: '',
      menus: [
            { title: 'SMART' , menu: [
            { title:  'Smart Plug', thirdMenu: ['Single-hole plug', 'Dual-hole plug', 'Surge protector', 'Outdoor plug'] },
            { title:  'Smart Lighting', thirdMenu: ['Light bulb', 'Light strip', 'Ambient light'] },
            { title:  'Smart Switch', thirdMenu: ['Wall switch', 'Dimmer switch']},
            { title:  'Garage Door Opener', thirdMenu: ['Smart opener', 'Physical remote'] },
            { title:  'Smart Home', thirdMenu: ['Thermostat valve and sensor', 'Baby machine', 'Humidifier', 'Remotes'] },
            ],
          },
          { title: 'GADGETS' , menu: [
            {title: 'Alarm Clock'},
            {title: 'Travel Plug Adapter'},
            {title: 'Socket Thermostat'},
            {title: 'WiFi Accessories'},
          ]},
          { title: 'FREE PRODUCTS' , menu: [
            {title: 'Free products'},
            {title: 'M influencer'},
          ]},
          { title: 'SUPPORT' , menu: [
            {title: 'FAQs'},
            {title: 'Contact us'},
            {title: 'Warranty'},
            {title: 'Cloud service'},
            {title: 'Product registration'},
          ]},
          { title: 'COMMUNITY' , menu: [
            {title: 'Blog'},
            {title: 'Forum '},
          ]},
          { title: 'ABOUT US' , menu: [
            {title: 'Our company'},
            {title: 'With your life'},
          ]},
      ],
    }
  },
  methods: {
    setActiveMenu: function(item) {
      this.activeMenu = item
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    .header-menu {
      display: flex;
      width: 100%;
      background: #000;
      height: 4rem;
      line-height: 4rem;
      padding-left: 10%;
      color: #fff;
      .logo {
        height: 1.6rem;
        display: inline-block;
        margin: 1.2rem 0;
        cursor: pointer;
        margin-right: 4rem;
      }
      .menu-item {
        display: flex;
        margin: 0 1.5rem;
        position: relative;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          z-index: 2;
          left: 50%;
          transform: translateX(-50%);
          bottom: -1px;
          height: 3px;
          width: 0;
          background: #21ccbf;
          transition: .4s;
        }
        &:hover {
          color: #21ccbf;
          &::before {
            width: 100%;
          }
        }
        .submenu {
          display: none;
          position: fixed;
          top: 4rem;
          left: 0;
          transition: all 0.1s;
          flex-wrap: wrap;
          justify-content: left;
          padding: 0 12rem;
          width: 100%;
          box-sizing: border-box;
          color: #fff;
          background-color: #000;
          // border-top: 1px solid #ccc;
          &.active {
            display: flex;
          }
          .submenu-item {
            width: 12rem;
            font-size: 0.8rem;
            >span {
                display: inline-block;
                cursor: pointer;
                transition: .4s;
                font-weight: bold;
                &:hover {
                  color: #21ccbf;
                  transform: translatey(-0.3rem)
                } 
            }
            .thirdmenu {
              display: flex;
              flex-direction: column;
              .third-item{
                line-height: 1rem;
                margin: 0.2rem 0;
                &:last-child {
                  margin-bottom: 1rem;
                }
                span {
                  display: inline-block;
                  cursor: pointer;
                  font-size: 0.5rem;
                  color: #eee;
                  position: relative;
                  &::before {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -1px;
                    height: 1px;
                    width: 0;
                    background: #21ccbf;
                    transition: .4s;
                  }
                  &:hover {
                    color: #21ccbf;
                    &::before {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

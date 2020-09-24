<template>
    <div class="footer">
        <div class="footer-wrap">
        <div class="footer-item" v-for="item in footer" :key="item.title">
            <div class="footer-title">
            {{item.title}}
            </div>
            <div class="footer-list">
            <div class="footer-list-item" v-for="i in item.list" :key="i">
                {{i}}
            </div>
            </div>
        </div>
        </div>
        <div>Copyright © 2017-2020 Meross Technology Limited. All Rights Reserved.</div>
        <div>Privacy Policy Terms of Use</div>
        <div>蜀ICP备19003165号</div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
       footer: [
        {title: 'Follw us', list: ['Facebook', 'Twitter', 'Instagram', 'Youtube']},
        {title: 'Community ', list: ['Blog', 'Forum']},
        {title: 'Support', list: ['FAQs', 'Contact us', 'Warranty', 'Cloud Service']},
        {title: 'About us', list: ['Our company', 'With your life']},
      ]
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .footer {
    .footer-wrap {
      display: flex;
      justify-content: space-between;
      padding: 0 22rem;
      .footer-item {
        text-align: left;
        .footer-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
        }
        .footer-list {
          padding-top: 0.6rem;
          .footer-list-item {
            line-height: 1.2rem;
            color: #ccc;
            cursor: pointer;
          }
        }
      }
      margin-bottom: 2rem;
    }
    padding: 2rem 0;
    text-align: center;
    background-color: #000;
    color: #ccc;
    font-size: 0.8rem;
  }
</style>
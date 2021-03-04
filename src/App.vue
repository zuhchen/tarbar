<template>
  <div>
    <router-view></router-view>
    <tarbar>
      <tarbar-item path="/home" activeColor="red">
        <!-- vue3使用template标签来使用slot -->

        <template v-slot:active-item-icon>
          <div>
            <img src="./assets/img/tarbar/activedhome.png" alt="" />
          </div>
        </template>
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tarbar/home.png" alt="" />
          </div>
        </template>

        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tarbar-item>

      <tarbar-item path="/item" activeColor="yellow">
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tarbar/item.png" alt="" />
          </div>
        </template>
        <template v-slot:active-item-icon>
          <div>
            <img src="./assets/img/tarbar/activedcategory.png" alt="" />
          </div> 
        </template>

        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tarbar-item>

      <tarbar-item path="/cart" activeColor="pink">
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tarbar/shopingcart.png" alt="" />
          </div>
        </template>

        <template v-slot:active-item-icon>
          <div>
            <img src="./assets/img/tarbar/activedshoping.png" alt="" />
          </div>
        </template>

        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tarbar-item>

      <tarbar-item path="/profile" activeColor="green">
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tarbar/mine.png" alt="" />
          </div>
        </template>
        <template v-slot:active-item-icon>
          <div>
            <img src="./assets/img/tarbar/activedmine.png" alt="" />
          </div>
        </template>

        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tarbar-item>
    </tarbar>
  </div>
</template>

<script>
import tarbar from "./components/tarbar/tarvar";
import tarbarItem from "./components/tarbar/tarbaritem";
export default {
  name: "App",
  components: {
    tarbar,
    tarbarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>

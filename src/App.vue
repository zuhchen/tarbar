<template>
  <div>
    <router-view></router-view>
    <tarbar>

      <tarbar-item path="/home" activeColor="black">
        <!-- <div slot="item-icon"> -->
          <img src="./assets/img/tarbar/home.png" alt="" />
        <!-- </div> -->
        <div>首页</div>
      </tarbar-item>

      <tarbar-item path="/item" activeColor="yellow">
        <!-- <div slot="item-icon"> -->
          <img src="./assets/img/tarbar/item.png" alt="" />
        <!-- </div> -->
        <div>分类</div>
      </tarbar-item>

      <tarbar-item path="/cart">
        <!-- <div slot="item-icon"> -->
          <img src="./assets/img/tarbar/shopingcart.png" alt="" />
        <!-- </div> -->
        <div>购物车</div>
      </tarbar-item>

      <tarbar-item path="/profile">
        <!-- <div slot="item-icon"> -->
          <img src="./assets/img/tarbar/mine.png" alt="" />
        <!-- </div> -->
        <div>我的</div>
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

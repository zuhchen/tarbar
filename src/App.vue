<template>
  <div id="tarbar">
    <div class="tarbarItem">首页</div>
    <div class="tarbarItem">分类</div>
    <div class="tarbarItem">购物车</div>
    <div class="tarbarItem">我的</div>
  </div>
</template>

<style>
@import "./assets/css/base.css";
#tarbar {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  flex-flow: row nowrap;
  background-color: rgb(245, 242, 237);
  justify-content: space-around;
  box-shadow: 0 -3px 5px rgb(10, 10, 10);
}

.tarbarItem {
  height: 49px;
  text-align: center;
}
</style>

<template>
  <div>
    <router-view></router-view>
    <main-tarbar/>
  </div>
</template>

<script>
import MainTarbar from 'components/tarbar/maintarbar'
export default {
  name: "App",
  components: {
    MainTarbar
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>

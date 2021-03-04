<template>
  <div class="tarbaritem" @click="itemClick">
    <!-- <slot></slot> -->
    <div><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: "tarbarItem",
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "black",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>
<style>
.tarbaritem {
  margin: 2px 0;
  height: 49px;
  font-size: 14px;
  text-align: center;
}

.tarbaritem img{
  width: 20px;
  height: 20px;
 
}
</style>
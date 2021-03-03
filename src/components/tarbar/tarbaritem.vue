<template>
  <div class="tarbaritem" @click="itemClick">
    
    <slot></slot>
    <!-- <slot name="item-icon"></slot>
    <slot name="item-text"></slot> -->
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
      default: "red",
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
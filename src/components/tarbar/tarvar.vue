<template>
  <div id="tarbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tarbar',
};
</script>

<style scoped>
#tarbar {
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(245, 242, 237);
  box-shadow: 0 -3px 5px rgb(10, 10, 10);

}


</style>
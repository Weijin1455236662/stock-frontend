<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view/>
  </div>
</template>

<script>
    import TopBar from "./components/TopBar";
    export default {
        components: {TopBar}
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
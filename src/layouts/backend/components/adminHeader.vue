<template>
  <el-header class="header--wrap">
    <router-link to="/">
      <img
        src="../../../assets/meight-logo-red.png"
        alt="logo"
        class="navg--logo"
      />
    </router-link>
  </el-header>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.header--wrap {
  display: block;
  width: 100%;
  margin-bottom: 50px;
  background-color: #dd0e34;
  position: fixed;
  z-index: 10;
}
.navg--logo {
  width: auto;
  height: 60px;
  align-content: right;
  float: left;
}
</style>

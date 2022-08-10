<template>
  <adminHeader></adminHeader>
  <el-container class="admin-customers--wrap">
    <asideMenu></asideMenu>
    <el-container>
      <el-main>
        <CustomersList></CustomersList>
      </el-main>
    </el-container>
    <adminFooter></adminFooter>
  </el-container>
</template>

<script lang="ts" setup>
import asideMenu from "./components/asideMenu.vue";
import adminHeader from "./components/adminHeader.vue";
import adminFooter from "./components/adminFooter.vue";

import CustomersList from "./components/customersList.vue";
</script>
<style scoped>
.admin-customers--wrap {
  display: block;
  width: 100%;
  margin-top: 60px;
  z-index: 0;
}
.el-tabs {
  z-index: 0;
}
</style>
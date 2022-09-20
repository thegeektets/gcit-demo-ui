<template>
  <Header></Header>
  <el-container class="customers--wrap">
    <el-container>
      <el-main>
        <el-tabs type="card" tabPosition="left">
          <el-tab-pane label="Add User">
            <AddCustomer></AddCustomer>
          </el-tab-pane>
          <el-tab-pane label="List Users">
            <Customers></Customers>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <adminFooter></adminFooter>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "./components/header.vue";
import adminFooter from "./components/footer.vue";

import Customers from "./components/customersList.vue";
import AddCustomer from "./components/addCustomer.vue";
</script>
<style scoped>
.customers--wrap {
  display: block;
  width: 100%;
  margin-top: 60px;
  z-index: 0;
}
.el-tabs {
  z-index: 0;
}
</style>
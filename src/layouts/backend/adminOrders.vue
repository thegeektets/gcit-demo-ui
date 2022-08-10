<template>
  <adminHeader></adminHeader>
  <el-container class="admin-orders--wrap">
    <asideMenu></asideMenu>
    <el-container>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="Pending Orders">
            <PendingOrders></PendingOrders>
          </el-tab-pane>
          <el-tab-pane label="Ongoing Orders">
            <OngoingOrders></OngoingOrders>
          </el-tab-pane>
          <el-tab-pane label="Completed Orders">
            <CompletedOrders></CompletedOrders>
          </el-tab-pane>
          <el-tab-pane label="Cancelled Orders">
            <CancelledOrders></CancelledOrders>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <adminFooter></adminFooter>
  </el-container>
</template>

<script lang="ts" setup>
import asideMenu from "./components/asideMenu.vue";
import adminHeader from "./components/adminHeader.vue";
import adminFooter from "./components/adminFooter.vue";

import PendingOrders from "./components/pendingOrders.vue";
import OngoingOrders from "./components/ongoingOrders.vue";
import CompletedOrders from "./components/completedOrders.vue";
import CancelledOrders from "./components/cancelledOrders.vue";
</script>
<style scoped>
.admin-orders--wrap {
  display: block;
  width: 100%;
  margin-top: 60px;
  z-index: 0;
}
.el-tabs {
  z-index: 0;
}
</style>
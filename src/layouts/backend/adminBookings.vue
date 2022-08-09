<template>
  <adminHeader></adminHeader>
  <el-container class="admin-bookings--wrap">
    <asideMenu></asideMenu>
    <el-container>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="Pending Bookings">
            <ActiveBookings></ActiveBookings>
          </el-tab-pane>
          <el-tab-pane label="Accepted Bookings">
            <AcceptedBookings></AcceptedBookings>
          </el-tab-pane>
          <el-tab-pane label="Rejected Bookings">
            <RejectedBookings></RejectedBookings>
          </el-tab-pane>
          <el-tab-pane label="Cancelled Bookings">
            <CancelledBookings></CancelledBookings>
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

import ActiveBookings from "./components/activeBookings.vue";
import AcceptedBookings from "./components/acceptedBookings.vue";
import RejectedBookings from "./components/rejectedBookings.vue";
import CancelledBookings from "./components/cancelledBookings.vue";
</script>
<style scoped>
.admin-bookings--wrap {
  display: block;
  width: 100%;
  margin-top: 60px;
  z-index: 0;
}
.el-tabs {
  z-index: 0;
}
</style>
<template>
<Navg/>
  <el-tabs type="border-card">
    <el-tab-pane label="Bookings">
      <AllBookings/>
    </el-tab-pane>
    <el-tab-pane label="Active">
      <ActiveBookings/>
    </el-tab-pane>
    <el-tab-pane label="Accepted">
      <AcceptedBookings/>
    </el-tab-pane>
    <el-tab-pane label="Rejected">
      <RejectedBookings/>
    </el-tab-pane>
    <el-tab-pane label="Cancelled">
      <CancelledBookings/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import Navg from "./components/navg.vue";
import AllBookings from "./components/allBookings.vue";
import ActiveBookings from "./components/activeBookings.vue";
import AcceptedBookings from "./components/activeBookings.vue";
import RejectedBookings from "./components/rejectedBookings.vue";
import CancelledBookings from "./components/rejectedBookings.vue";
</script>
<style scoped>
.el-tabs {
  margin-top: 70px;
}
</style>
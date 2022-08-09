<template>
<Navg/>
  <el-tabs type="border-card">
    <el-tab-pane label="Active Bookings">
      <ActiveBookings/>
    </el-tab-pane>
    <el-tab-pane label="Accepted Bookings">
      <AcceptedBookings/>
    </el-tab-pane>
    <el-tab-pane label="Rejected Bookings">
      <RejectedBookings/>
    </el-tab-pane>
    <el-tab-pane label="Cancelled Bookings">
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
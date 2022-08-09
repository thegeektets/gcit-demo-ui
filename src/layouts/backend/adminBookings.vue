<template>
  <Navg />
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
</template>
<script lang="ts" setup>
import Navg from "./components/navg.vue";
import ActiveBookings from "./components/activeBookings.vue";
import AcceptedBookings from "./components/acceptedBookings.vue";
import RejectedBookings from "./components/rejectedBookings.vue";
import CancelledBookings from "./components/cancelledBookings.vue";
</script>
<style scoped>
.el-tabs {
  margin-top: 70px;
}
</style>
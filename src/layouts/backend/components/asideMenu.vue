<template>
  <el-aside class="admin-side--menu" width="200px">
    <el-menu class="menu" :underline="false">
      <el-menu-item style="font-size: 15px">
        <Icon name="fa fa-shopping-cart" size="16" /><router-link
          to="/admin/bookings"
          >Bookings</router-link
        >
      </el-menu-item>

      <el-menu-item style="font-size: 15px">
        <Icon name="fa fa-cart-plus" size="16" /><router-link to="/admin/orders"
          >Orders</router-link
        >
      </el-menu-item>
      <el-menu-item style="font-size: 15px">
        <Icon name="fa fa-users" size="16" /><router-link to="/admin/customers"
          >Customers</router-link
        >
      </el-menu-item>

      <el-menu-item style="font-size: 15px">
        <Icon name="fa fa-users" size="16" /><router-link to="/admin/owners"
          >Owners</router-link
        >
      </el-menu-item>
      <el-menu-item style="font-size: 15px">
        <Icon name="fa fa-car" size="16" /><router-link to="/admin/vehicles"
          >Vehicles</router-link
        >
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const drawer = ref(true);
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2856b8;
}
.icon {
  padding-right: 10px;
}
.admin-side--menu {
  display: block;
  float: left;
  width: 200px;
  height: 100vh;
}
</style>
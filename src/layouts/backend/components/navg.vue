<template>
  <div class="navg">
    <el-col :span="12">
      <el-drawer size="auto" v-model="drawer" direction="ltr">
        <template #header>
          <img src="~assets/logo.png" alt="logo" class="navg--logo" />
        </template>
        <template #default>
          <el-menu class="menu" :underline="false">
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-home" size="16" /><router-link to="/"
                >Home</router-link
              >
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-cart-plus" size="16" /><router-link
                to="/admin/orders"
                >Orders</router-link
              >
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-shopping-cart" size="16" /><router-link
                to="/admin/bookings"
                >Bookings</router-link
              >
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-car" size="16" /><router-link
                to="/admin/vehicles"
                >Vehicles</router-link
              >
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-users" size="16" /><router-link
                to="/admin/owners"
                >Owners</router-link
              >
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <Icon name="fa fa-users" size="16" /><router-link
                to="/admin/owners"
                >Customers</router-link
              >
            </el-menu-item>
          </el-menu>
        </template>
        <template #footer>
          <p>@2022 Meight Mission Control</p>
        </template>
      </el-drawer>
    </el-col>
    <el-menu mode="horizontal">
      <el-menu-item>
        <div style="width: 45px; height: 61px">
          <Icon
            type="app"
            name="fa fa-bars"
            size="25"
            style="margin: 10px"
            @click="drawer = true"
          />
        </div>
      </el-menu-item>

      <el-menu-item index="2">
        <img
          style="width: 130px; height: 61px"
          src="~assets/logo.png"
          alt="logo"
        />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped>
.icon {
  padding-right: 10px;
}
.navg {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}
.menu {
  margin-top: -25px;
}
.navg--logo {
  width: auto;
  height: 60px;
  align-content: right;
}
</style>
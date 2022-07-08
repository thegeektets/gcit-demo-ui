<template>
  <div class="navg">
    <el-col :span="12">
      <el-drawer size="20%" v-model="drawer" direction="ltr">
        <template #header>
          <img  style="width: 100px; height: 60px" src="~assets/logo.png" alt="logo" />
        </template>
        <template #default>
          <el-menu>
            <el-menu-item style="font-size: 15px"
              ><router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <router-link to="/admin/orders">Orders</router-link>
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <router-link to="/admin/vehicles">Vehicles</router-link>
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <router-link to="/admin/owners">Owners</router-link>
            </el-menu-item>
            <el-menu-item style="font-size: 15px">
              <router-link to="/admin/bookings">Bookings</router-link>
            </el-menu-item >
          </el-menu>
        </template>
        <template #footer>
          <p>@2022 Meight Mission Control</p>
        </template>
      </el-drawer>
    </el-col>
    <el-menu mode="horizontal">
      <el-menu-item>
        <div>
          <el-icon type="app" style="margin-left: 10px; height: 60px" @click="drawer = true">
            <Expand /></el-icon>
        </div>
      </el-menu-item>

      <el-menu-item index="2">
        <img style="width: 150px; height: 60px" src="~assets/logo.png" alt="logo"/>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped>
.el-drawer {
  background-color: #409eff;
}
</style>
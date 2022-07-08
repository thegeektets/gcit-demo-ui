<template>
  <el-footer class="footer">
    <div>
      Copyright @2022
      <a href="http://meight.co.ke" target="_blank">
        {{ siteConfig.site_name }}
      </a>
    </div>
  </el-footer>
</template>

<script setup lang="ts">
import { useSiteConfig } from "/@/stores/siteConfig";

const siteConfig = useSiteConfig();
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-1);
  a {
    color: var(--color-secondary);
  }
}
</style>

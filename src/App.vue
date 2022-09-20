<template>
    <el-config-provider>
        <router-view></router-view>
    </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import iconfontInit from '/@/utils/iconfont'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
    iconfontInit()
})

</script>
<style>
@import url('./styles/app.scss');
</style>
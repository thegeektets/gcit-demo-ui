<template>
    <el-config-provider>
        <router-view></router-view>
    </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import iconfontInit from '/@/utils/iconfont'
import { useRoute } from 'vue-router'
import { setTitleFromRoute } from '/@/utils/common'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const route = useRoute()

onMounted(() => {
    iconfontInit()
})

</script>
<style>
@import url('./styles/app.scss');
</style>
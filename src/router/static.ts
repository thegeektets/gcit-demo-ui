import { RouteRecordRaw } from 'vue-router'

const pageTitle = (name: string): string => {
    return `pagesTitle.${name}`
}

/*
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: '/',
        component: () => import('/@/views/frontend/index.vue'),
        meta: {
            title: pageTitle('home'),
        },
    },
    {
        // 管理员登录页
        path: '/admin/login',
        name: 'adminLogin',
        component: () => import('/@/views/backend/login.vue'),
        meta: {
            title: pageTitle('adminLogin'),
        },
    },
    {
        path: '/admin/vehicles',
        name: 'adminvehicles',
        component: () => import('/@/layouts/backend/adminVehicles.vue'),
        meta: {
            title: ('Vehicles'),
        },
    },
    {
        path: '/admin/owners',
        name: 'adminowners',
        component: () => import('/@/layouts/backend/adminOwners.vue'),
        meta: {
            title: ('Owners'),
        },
    },
    {
        path: '/admin/orders',
        name: 'adminorders',
        component: () => import('/@/layouts/backend/adminOrders.vue'),
        meta: {
            title: ('Orders'),
        },
    },
    {
        path: '/admin/bookings',
        name: 'adminbookings',
        component: () => import('/@/layouts/backend/adminBookings.vue'),
        meta: {
            title: ('Bookings'),
        },
    },
    {
        path: '/:path(.*)*',
        redirect: '/404',
    },
    {
        // 404
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/common/error/404.vue'),
        meta: {
            title: pageTitle('notFound'), // 页面不存在
        },
    },
    {
        // 后台找不到页面了-可能是路由未加载上
        path: '/admin:path(.*)*',
        redirect: (to) => {
            return { name: 'adminMainLoading', query: { url: to.path, query: JSON.stringify(to.query) } }
        },
    },
    {
        // 无权限访问
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/common/error/401.vue'),
        meta: {
            title: pageTitle('noPower'),
        },
    },
]


export { staticRoutes }

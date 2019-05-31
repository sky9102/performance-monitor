import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Index',
        component: () => import( /* webpackChunkName:'index' */ '../views/index.vue')
    }]
})
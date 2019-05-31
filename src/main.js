// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PerformanceMonitor from './plugins/performanceMonitor';

Vue.config.productionTip = false

Vue.use(PerformanceMonitor, {
    reportUrl: "http://localhost:10300/performanceMonitor",
    appId: "performanceMonitor-1559318109525",
    appName: "performanceMonitor"
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router
})

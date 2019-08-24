import PerformanceMonitor from './performanceMonitor';

export default {
    install(Vue, options) {
        /* eslint-disable no-new */
        new PerformanceMonitor(options);
    }
};

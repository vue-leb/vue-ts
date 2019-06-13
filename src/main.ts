import Vue from 'vue';
import VueRx from 'vue-rx';
import BaseLayout from './layouts/BaseLayout';
import {router} from './router';

Vue.config.productionTip = false;
Vue.use(VueRx);

new Vue({
    router,
    render: (h) => h(BaseLayout)
}).$mount('#app');

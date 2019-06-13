import Vue from 'vue';
import Router from 'vue-router';
import {routes} from './base/index';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        ...routes
    ]
});

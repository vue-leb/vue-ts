import {RouteConfig} from 'vue-router';

const App = () => import(/* webpackChunkName: "App" */'../../App.vue');

// Components
const DesignPattern = () => import(/* webpackChunkName: "DesignPattern" */'../../design-pattern/DesignPattern.vue');
const RxjsLayout = () => import(/* webpackChunkName: "RxjsLayout" */'../../rxjs/RxjsLayout.vue');
const Rxjs = () => import(/* webpackChunkName: "Rxjs" */'../../rxjs/Rxjs.vue');
const Rolling = () => import(/* webpackChunkName: "Rolling" */'../../rxjs/rolling/Rolling.vue');
const InfinityScroll = () => import(/* webpackChunkName: "InfinityScroll" */'../../rxjs/infinity-scroll/InfinityScroll.vue');
const Timer = () => import(/* webpackChunkName: "Timer" */'../../rxjs/timer/Timer.vue');
const Ch2Example1 = () => import(/* webpackChunkName: "Example1" */'../../rxjs/ch2/Example1.vue');
const Empty = () => import(/* webpackChunkName: "Empty" */'../../rxjs/ch2/Empty.vue');


export const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/intro'
    },
    {
        path: '/intro',
        name: 'intro',
        component: App
    },
    {
        path: '/design-pattern',
        name: 'DesignPattern',
        component: DesignPattern
    },
    {
        path: '/rxjs',
        component: RxjsLayout,
        children: [
            {
                path: '',
                name: 'rxjs',
                component: Rxjs
            },
            {
                path: '/rxjs/rolling',
                name: 'rolling',
                component: Rolling
            },
            {
                path: '/rxjs/infinity-scroll',
                name: 'infinity-scroll',
                component: InfinityScroll
            },
            {
                path: '/rxjs/timer',
                name: 'timer',
                component: Timer
            },
            {
                path: '/rxjs/ch2-example1',
                name: 'ch2-example1',
                component: Ch2Example1
            },
            {
                path: '/rxjs/empty',
                name: 'empty',
                component: Empty
            }
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'intro'
        }
    }
];

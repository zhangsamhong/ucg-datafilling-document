import Vue from 'vue';
import Router from 'vue-router';

// import Index from '@pages/index';
// 框架配置
import Frame from '@routes/frame.config';
// 组件
import Components from '@routes/components.config';

Vue.use(Router);

const routes = [
    /* {
        name: 'Index',
        path: '/index',
        component: Index
    }, */
    ...Frame,
    ...Components,
    {
        path: '',
        redirect: Frame[0].path
    }
];

export default new Router({
    routes
});